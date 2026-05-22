import type { WorkflowSuggestions } from "../types";

export const MOCK_SUGGESTIONS: WorkflowSuggestions = {
  midiRouting: [
    "Set your Yamaha MODX6 as the master clock source (MIDI Clock: Internal) and route clock output to your KeyLab via MIDI DIN — this keeps DAW and controller in sync without USB jitter.",
    "Use MODX Zone settings to split the keyboard: lower zone (C1–B2) outputs on MIDI CH 1 for bass patches, upper zone (C3–C7) on CH 2 for pads and leads — lets MainStage receive each zone on its own channel strip.",
    "In MainStage, set the MODX6 as a multi-channel external instrument. Assign CH 1 to your bass patch channel strip and CH 2 to your keys/pads strip so volume, EFX, and sends are independently automated.",
    "Route MODX6 audio via USB (MODX as audio interface) directly into MainStage — this eliminates a stage-box input and gives you latency-free monitoring with MainStage FX on top of the MODX sounds.",
    'Create a dedicated "router" Concert in MainStage that passes MIDI through to all patches — use this as your live safety net if a patch fails to load.',
  ],
  controllerMapping: [
    "Map KeyLab Fader 1 → MainStage channel strip volume (CC 7 on CH 1) and Fader 2 → pad layer volume (CC 7 on CH 2) for hands-free mix adjustments mid-song.",
    "Assign KeyLab Pad Row 1 to program change messages (PC 1–8) to recall MainStage patches in set-list order — tap a pad to jump songs without touching the laptop.",
    "Map the KeyLab mod wheel to CC 1 to control MainStage vibrato/filter cutoff on strings and synth pads — gives expressive real-time control without extra gear.",
    "Use KeyLab User presets to store per-song controller maps — label them by song name so you can recall the exact knob/fader assignments for each worship song in seconds.",
    "Assign KeyLab Transport buttons to MainStage Record/Play for click track or loop triggering — useful for sections where you need a backing loop hands-free.",
  ],
  patchOrganization: [
    'Structure MainStage Concerts per service type: "Sunday AM", "Wednesday Night", "Special Event" — each Concert pre-loads only the patches needed, keeping CPU and load time minimal.',
    'Within each Concert, name patches using a numbered prefix matching the set list: "01 – Open Hymn Pad", "02 – Verse Keys", "03 – Chorus Piano" — one glance tells you exactly where you are.',
    'Create a "UTILITY" patch at the bottom of every Concert with a simple piano + click through headphones — your recovery patch if anything goes wrong mid-service.',
    "Group sounds by role using MainStage Folders: Pads, Leads, Pianos, Organs — use folder navigation to audition sounds during soundcheck without disrupting the set list order.",
    'Save a "Template Concert" with your core MODX6 routing, KeyLab mappings, and audio settings pre-configured — duplicate it for every new service instead of rebuilding from scratch.',
  ],
  layerSuggestions: [
    "Layer a warm string pad (MODX6 internal) under a bright EP (MainStage) on CH 2 — blend with the mod wheel so you can push the pad in during long holds and pull it back for busy sections.",
    "For worship builds: start a song with solo piano (MainStage), then at the chorus layer in a soft synth pad from the MODX6 Zone B — the split gives you independent volume control of each layer.",
    'Create a "shimmer" layer by running a MainStage Retro Synth pad pitched up an octave under your main keys sound — keep it at –12 dB and automate a swell CC for transitions.',
    "Layer organ (MODX6) + piano (MainStage) for gospel-feel sections — assign KeyLab Fader 3 to the organ level so you can ride the organ drawbar feel without leaving the keys.",
  ],
  transitionRecommendations: [
    "Use MainStage's \"Next Patch\" assignment on a KeyLab pad so you can advance to the next song's patch with a single tap at the end of a vamp — zero gap between songs.",
    "Program MODX6 Performance Scenes to store multiple sounds per song — use the Scene buttons on the MODX front panel to flip between verse/chorus sounds without touching a laptop.",
    'For key-change transitions: prepare alternate-key versions of core patches in the set list (e.g., "Oceans – Bb" and "Oceans – C") and use the program-change pad to jump between them.',
    "Use MainStage's Playback plugin on a dedicated channel strip to trigger a tempo-synced pad swell during song intros — gives the band a smooth cue while you set your hands on the keys.",
  ],
  performanceTips: [
    "Run a monitor mix with your click and a guide-vocal track in your in-ears — keep the click at the same volume as your most recent rehearsal to avoid rushing or dragging live.",
    "Arrive 30 minutes before soundcheck to run a full patch-load test: cycle through every patch in the set list and verify MIDI routing — a 3-minute check prevents a 3-minute freeze on stage.",
    "Keep a printed set list on the keys stand with patch names annotated — even if MainStage shows you the names, a paper backup is your zero-latency safety net if the screen dims.",
    "Use the MODX6 Master EQ to cut 300 Hz on your pads to prevent muddiness in a live mix — pads sit behind the vocal and guitars without needing an FOH engineer adjustment.",
    "Assign a KeyLab button to toggle MainStage's tuner — check pitch silently between songs without unplugging or using a separate pedal.",
  ],
};
