# A.L.F.R.E.D. 2.0 — Ultimate Edition

## Installation / GitHub Pages
Upload the seven files in this folder to the root of the existing GitHub repository, replacing files with the same names. Keep the repository and GitHub Pages settings unchanged.

## Included now
- Responsive futuristic multi-page interface
- Dashboard, Chat, Tasks, Notes, Tools, System, Settings
- Local task and note storage in browser localStorage
- German browser text-to-speech with selectable installed German voices
- Browser speech recognition where supported
- Clock, battery/network indicators where browser exposes them
- Geolocation-based current weather through Open-Meteo
- Calculator, basic offline word examples, stopwatch
- PWA manifest and service worker with versioned cache

## Important limitations
The chat is currently a local demo, not a connected AI model. For a real AI assistant, add a secure backend/serverless function and keep API keys on the server only. Never place provider API keys in this public repository or frontend JavaScript. Background wake-word listening and arbitrary Android device control are not available to an ordinary web app/PWA; those require native Android development and explicit permissions. Voice selection depends on voices installed on the device/browser.
