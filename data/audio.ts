/**
 * Central piano audio registry.
 * Soft felt-piano samples for optional scroll / interaction cues.
 * Site remains fully silent until the visitor enables SOUND ON.
 */
export const pianoAudio = {
  note1: "/audio/piano-note-01.wav",
  note2: "/audio/piano-note-02.wav",
  chord1: "/audio/piano-chord-01.wav",
  chord2: "/audio/piano-chord-02.wav",
  resolve: "/audio/piano-resolve.wav",
  keys: {
    c: "/audio/piano-key-c.wav",
    d: "/audio/piano-key-d.wav",
    e: "/audio/piano-key-e.wav",
    f: "/audio/piano-key-f.wav",
    g: "/audio/piano-key-g.wav",
  },
} as const;

/** Section → sound mapping (I → IV → V → I progression feel) */
export const sectionSounds = {
  hero: "note1",
  intro: "note2",
  about: "note2",
  performance: "chord1",
  performances: "chord1",
  watch: "chord1",
  studio: "chord2",
  philosophy: "chord2",
  tuition: "chord2",
  inquire: "resolve",
  contact: "resolve",
} as const;

export type PianoCue =
  | "note1"
  | "note2"
  | "chord1"
  | "chord2"
  | "resolve"
  | `key-${keyof typeof pianoAudio.keys}`;
