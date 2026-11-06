# A.L.F.R.E.D. 6.1 — Command HUD

## Installation
1. Entpacke das ZIP.
2. Lade alle Dateien aus diesem Ordner in das Stammverzeichnis deines GitHub-Pages-Repositories hoch und ersetze gleichnamige Dateien.
3. Committe die Änderungen auf `main`.
4. Öffne die Website in Chrome vollständig neu. Bei einer installierten App: App schließen und erneut starten.

## Enthalten
- Neu gestaltete mobile-first Command-HUD-Startseite mit animiertem Core und 12 Abteilungs-Kacheln.
- Lokale Aufgaben und Notizen.
- Chat-Oberfläche mit ehrlichem Hinweis, dass für echte KI ein Backend nötig ist.
- Browserbasierte Spracherkennung, Netzwerkstatus, externe Karten-/Websuche.
- lokale PIN-Komfortfunktion und harmlose Notfall-Simulation.
- PWA-Manifest, Icons und Service Worker.

## Hinweise
Dies ist ein sauberer, eigenständiger HUD-Neuaufbau. Er übernimmt **nicht automatisch sämtliche Spezialfunktionen** aus der vorherigen 6.0-Datei. Funktionen wie Gemini-Backend, komplexer Scanner, Wetterlabor, Finanzverwaltung und frühere Projektmodule sind in dieser Basisversion nicht vollständig enthalten und müssten anschließend gezielt wieder integriert werden.
Die PIN ist kein Ersatz für die Android-Bildschirmsperre. Die Notfallfunktion löscht keine Daten. API-Schlüssel niemals in öffentliche Frontend-Dateien schreiben.


## Version 6.1.1
- Stoppuhr mit Start/Pause, Runden und Zurücksetzen.
- Live-Wetter über Open-Meteo; benötigt Internet und Standortfreigabe.
