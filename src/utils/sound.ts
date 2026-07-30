"use client";

// Realistic Acoustic UI Sound Synthesizer using Web Audio API

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

if (typeof window !== "undefined") {
  const unlockAudio = () => {
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    } else if (!audioCtx) {
      getAudioContext();
    }
  };
  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("keydown", unlockAudio, { once: true });
  window.addEventListener("touchstart", unlockAudio, { once: true });
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playToggleSound(true);
  }
  return soundEnabled;
}

// 1. Realistic Organic UI Hover Tick (Acoustic Glass/Touch Snap)
export function playHoverSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Filtered noise snap for physical touch texture
    const bufferSize = ctx.sampleRate * 0.005; // 5ms burst
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 2200;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.005);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Subtle resonant tone body
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.008);

    oscGain.gain.setValueAtTime(0.02, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.008);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.008);
  } catch (e) {
    // Ignore autoplay restriction
  }
}

// 2. Realistic Mechanical Latch / Tactile Click Snap
export function playClickSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Latch click noise burst
    const bufferSize = ctx.sampleRate * 0.012; // 12ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1800;
    filter.Q.value = 3;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.012);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Tactile thud body
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.025);

    oscGain.gain.setValueAtTime(0.12, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.025);
  } catch (e) {
    // Ignore autoplay restriction
  }
}

// 3. Smooth Pitch Slide Toggle Sound
export function playToggleSound(isOpen: boolean) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const startFreq = isOpen ? 350 : 700;
    const endFreq = isOpen ? 700 : 350;

    osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {
    // Ignore
  }
}
