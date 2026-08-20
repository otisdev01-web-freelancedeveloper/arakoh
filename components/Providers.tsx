"use client";

import { PianoAudioProvider } from "@/components/audio/PianoAudioProvider";
import { ScrollSoundConductor } from "@/components/audio/ScrollSoundConductor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PianoAudioProvider>
      <ScrollSoundConductor />
      {children}
    </PianoAudioProvider>
  );
}
