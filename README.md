# Drum Kit

A browser drum kit that maps keyboard and pointer input to percussion sounds, with visual feedback for each hit.

## Tech stack

JavaScript · HTML · CSS · Browser Audio API

## How to play

Open [index.html](index.html) in a browser. Press `w`, `a`, `s`, `d`, `j`, `k`, or `l`, or hover over the corresponding drum button.

## Implementation

[index.js](index.js) uses one key-to-sound mapping for both input paths. Audio files live in `sounds/`, and a temporary CSS class shows the active drum.

A focused project in DOM events, audio playback, and synchronising visual feedback with user input. No build tools or backend are required.
