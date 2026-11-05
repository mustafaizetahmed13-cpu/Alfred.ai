# A.L.F.R.E.D. — Android PWA 0.2

## Installation on Android
1. Upload the contents of this folder to a GitHub repository.
2. In GitHub open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish. Open the shown `https://...github.io/...` address in Chrome on Android.
6. Chrome menu `⋮` → **Install app** or **Add to Home screen**.
7. Launch A.L.F.R.E.D. from the new home-screen icon.

## Features
- Animated cyan reactor HUD and startup sequence
- Local clock/date/timezone
- Online/offline status
- Battery indicator when supported by browser
- Location-based weather through Open-Meteo (permission + internet needed)
- Browser speech recognition where supported
- Speech synthesis and generated UI beeps
- Offline app shell and cached interface
- Demo chat with local commands (time/date/status/weather)

## Important limitations
- This is an installable web app (PWA), not an APK.
- Browser support for speech recognition and battery status varies by Android browser/device.
- Weather needs internet and location permission.
- Chat is not yet connected to an AI model. Real AI requires a backend service and API key stored server-side. Never put an API key into `index.html` or a public GitHub repository.
- The first page visit needs internet; after it is cached, the interface can open offline.
