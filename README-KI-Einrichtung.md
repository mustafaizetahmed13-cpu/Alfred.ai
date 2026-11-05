# A.L.F.R.E.D. 5.1 – KI-Anbindung vorbereiten

Dieses Paket ergänzt A.L.F.R.E.D. 5.0 um eine echte Gemini-KI-Anbindung über einen sicheren Cloudflare-Worker.

## Dateien
- `index.html`, `sw.js`, `manifest.webmanifest`, Icons: PWA
- `worker.js`: Backend-Code für Cloudflare Workers (nicht in GitHub Pages als Webseite veröffentlichen; dort wird er nicht ausgeführt)

## Wichtig
Der Gemini-API-Schlüssel gehört ausschließlich als Cloudflare Secret `GEMINI_API_KEY` in den Worker. Niemals in `index.html`, GitHub oder in den Chat kopieren. Zusätzlich wird `ALFRED_ACCESS_PASSWORD` als zweites Cloudflare Secret benötigt. Das ist ein selbst gewähltes starkes Passwort, das du später in A.L.F.R.E.D.s Systemzentrale einträgst.

## Einrichtung (Cloudflare Dashboard)
1. Erstelle in Google AI Studio einen Gemini-API-Schlüssel: https://aistudio.google.com/app/apikey
2. Öffne https://dash.cloudflare.com/ und gehe zu **Workers & Pages**. Erstelle einen Worker (z. B. `alfred-ai`).
3. Öffne **Edit code** und ersetze den Beispielcode durch den vollständigen Inhalt aus `worker.js`. Speichere und deploye.
4. Öffne den Worker unter **Settings → Variables and Secrets**. Füge zwei Werte vom Typ **Secret** hinzu:
   - Name `GEMINI_API_KEY` → dein Schlüssel aus Google AI Studio
   - Name `ALFRED_ACCESS_PASSWORD` → ein eigenes starkes Passwort, das du nur für A.L.F.R.E.D. verwendest
5. Deploye den Worker erneut. Kopiere seine HTTPS-Adresse (endet normalerweise auf `.workers.dev`).
6. Öffne A.L.F.R.E.D. → **Systemzentrale**. Trage die Worker-Adresse und dasselbe `ALFRED_ACCESS_PASSWORD` ein. Drücke **KI-Verbindung speichern** und danach **Verbindung testen**.

## Hinweise
- Die Gemini API hat je nach Modell und Konto kostenlose Nutzungslimits; kostenlos ist nicht unbegrenzt garantiert. Prüfe die aktuellen Bedingungen in AI Studio.
- Das Zugangspasswort wird lokal in diesem Browser gespeichert. Nutze ein einzigartiges Passwort und gib es nicht weiter.
- Die Worker-CORS-Konfiguration erlaubt die GitHub-Pages-Origin `https://mustafaizetahmed13-cpu.github.io`. Wenn du die App unter einer anderen Domain hostest, muss `worker.js` entsprechend angepasst werden.
- Chat, Bildanalyse und Autopilot-Planung nutzen das Backend. Der Autopilot erstellt Pläne; er führt keine beliebigen externen Aktionen aus.
- Kamera-Bilder werden nur beim Start einer Analyse an Gemini gesendet.
