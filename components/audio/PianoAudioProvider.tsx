"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { pianoAudio, sectionSounds } from "@/data/audio";
import { useReducedMotion } from "@/hooks/useMedia";

type Cue =
  | "note1"
  | "note2"
  | "chord1"
  | "chord2"
  | "resolve"
  | "key-c"
  | "key-d"
  | "key-e"
  | "key-f"
  | "key-g";

type PianoAudioContextValue = {
  enabled: boolean;
  ready: boolean;
  pulse: number;
  toggle: () => void;
  playCue: (cue: Cue) => void;
  playSection: (sectionId: string) => void;
  resetSessionSections: () => void;
};

const PianoAudioContext = createContext<PianoAudioContextValue | null>(null);

const SESSION_KEY = "arakoh-sound-enabled";
const MASTER_VOLUME = 0.32;

function resolveSrc(cue: Cue): string | null {
  switch (cue) {
    case "note1":
      return pianoAudio.note1;
    case "note2":
      return pianoAudio.note2;
    case "chord1":
      return pianoAudio.chord1;
    case "chord2":
      return pianoAudio.chord2;
    case "resolve":
      return pianoAudio.resolve;
    case "key-c":
      return pianoAudio.keys.c;
    case "key-d":
      return pianoAudio.keys.d;
    case "key-e":
      return pianoAudio.keys.e;
    case "key-f":
      return pianoAudio.keys.f;
    case "key-g":
      return pianoAudio.keys.g;
    default:
      return null;
  }
}

export function PianoAudioProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [pulse, setPulse] = useState(0);
  const ctxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Map<string, AudioBuffer>>(new Map());
  const playedRef = useRef<Set<string>>(new Set());
  const lastPlayRef = useRef(0);
  const gainRef = useRef<GainNode | null>(null);

  const ensureContext = useCallback(async () => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctxRef.current = new AC();
      gainRef.current = ctxRef.current.createGain();
      gainRef.current.gain.value = MASTER_VOLUME;
      gainRef.current.connect(ctxRef.current.destination);
    }
    if (ctxRef.current.state === "suspended") {
      await ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const loadBuffer = useCallback(
    async (src: string) => {
      const existing = buffersRef.current.get(src);
      if (existing) return existing;
      const ctx = await ensureContext();
      if (!ctx) return null;
      try {
        const res = await fetch(src);
        if (!res.ok) return null;
        const arr = await res.arrayBuffer();
        const buffer = await ctx.decodeAudioData(arr.slice(0));
        buffersRef.current.set(src, buffer);
        return buffer;
      } catch {
        return null;
      }
    },
    [ensureContext],
  );

  const preloadAll = useCallback(async () => {
    const sources = [
      pianoAudio.note1,
      pianoAudio.note2,
      pianoAudio.chord1,
      pianoAudio.chord2,
      pianoAudio.resolve,
      ...Object.values(pianoAudio.keys),
    ];
    await Promise.all(sources.map((s) => loadBuffer(s)));
    setReady(true);
  }, [loadBuffer]);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved === "1") setEnabled(true);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    void preloadAll();
  }, [enabled, preloadAll]);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden && ctxRef.current?.state === "running") {
        void ctxRef.current.suspend();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const playSrc = useCallback(
    async (src: string) => {
      if (reduced) return;
      const now = Date.now();
      if (now - lastPlayRef.current < 450) return;
      lastPlayRef.current = now;

      const ctx = await ensureContext();
      if (!ctx || !gainRef.current) return;
      const buffer = await loadBuffer(src);
      if (!buffer) return;

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const g = ctx.createGain();
      g.gain.value = 1;
      source.connect(g);
      g.connect(gainRef.current);
      source.start(0);
      setPulse((p) => p + 1);
    },
    [ensureContext, loadBuffer, reduced],
  );

  const playCue = useCallback(
    async (cue: Cue) => {
      if (!enabled || reduced) return;
      const src = resolveSrc(cue);
      if (!src) return;
      await playSrc(src);
    },
    [enabled, playSrc, reduced],
  );

  const playSection = useCallback(
    (sectionId: string) => {
      if (!enabled || reduced) return;
      if (playedRef.current.has(sectionId)) return;
      const key = sectionId as keyof typeof sectionSounds;
      const cue = sectionSounds[key];
      if (!cue) return;
      playedRef.current.add(sectionId);
      void playCue(cue as Cue);
    },
    [enabled, playCue, reduced],
  );

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        sessionStorage.setItem(SESSION_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      if (next) {
        void (async () => {
          await ensureContext();
          await preloadAll();
          await playSrc(pianoAudio.note1);
        })();
      } else if (ctxRef.current?.state === "running") {
        void ctxRef.current.suspend();
      }
      return next;
    });
  }, [ensureContext, playSrc, preloadAll]);

  const resetSessionSections = useCallback(() => {
    playedRef.current.clear();
  }, []);

  const value = useMemo(
    () => ({
      enabled,
      ready,
      pulse,
      toggle,
      playCue,
      playSection,
      resetSessionSections,
    }),
    [enabled, ready, pulse, toggle, playCue, playSection, resetSessionSections],
  );

  return (
    <PianoAudioContext.Provider value={value}>
      {children}
    </PianoAudioContext.Provider>
  );
}

export function usePianoAudio() {
  const ctx = useContext(PianoAudioContext);
  if (!ctx) {
    throw new Error("usePianoAudio must be used within PianoAudioProvider");
  }
  return ctx;
}
