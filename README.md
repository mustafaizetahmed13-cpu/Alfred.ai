# A.L.F.R.E.D. v4.0 – Ultimate Assistant

## Enthalten
- Futuristische Oberfläche, Reaktor, Hologramm-Scanner-Visualisierung und UI-Sounds
- Uhr mit Sekunden
- Wetter: nach einmaliger Standortfreigabe werden Koordinaten lokal gespeichert und bei späteren Starts erneut verwendet; Standort kann über Browser-Berechtigungen zurückgesetzt werden
- Übersetzer mit Sprachauswahl und Online-Anfrage an MyMemory (Internet und Dienstverfügbarkeit nötig; nicht jede Sprache/Kombination garantiert)
- Sprachsynthese: wählt bevorzugt verfügbare deutsche Stimmen; echte Stimme hängt von Android/Chrome und installierten Sprachpaketen ab
- Chat kann optional ein eigenes KI-Backend ansprechen
- Aufgaben, Notizen, Rechner, Stoppuhr und Systemstatus

## Wichtig zur KI
Diese ZIP enthält die Frontend-Unterstützung, aber noch kein tatsächlich gehostetes KI-Gehirn. In Einstellungen/System kann eine HTTPS-Backend-Adresse eingetragen werden. Das Backend muss POST-JSON `{"message":"..."}` akzeptieren und JSON mit `reply` (oder `message`/`content`) zurückgeben. Der API-Schlüssel muss ausschließlich auf dem Backend liegen – niemals in `index.html`, GitHub Pages oder einem öffentlichen Repository. Ohne eigenes Backend bleibt der Chat bei lokalen Demo-Antworten.

## Sicherheit und Grenzen
- MyMemory-Übersetzung ist ein externer kostenloser Dienst mit Nutzungs-/Verfügbarkeitsgrenzen; dies ist keine professionelle zertifizierte Übersetzung.
- Wetter nutzt Open-Meteo. Die Standortkoordinaten werden lokal in diesem Browser gespeichert.
- Browser-Stimmen sind keine frei austauschbare Studio-KI-Stimme. Eine hochwertige Cloud-Stimme braucht einen sicheren Sprachdienst/Backend.
- Scanner ist eine rein visuelle Animation und scannt nicht Kamera oder Umgebung.
- PWA kann keine uneingeschränkte Android-Systemsteuerung oder dauerhafte Wake-Word-Erkennung leisten.

## GitHub Pages aktualisieren
Alle Dateien im Paket in den Repository-Root hochladen/ersetzen. Besonders `index.html`, `sw.js`, `manifest.webmanifest` und Icons. Danach Commit Changes. Neue Cache-Version `alfred-v4-ultimate-brain` erzwingt den Wechsel auf den neuen App-Cache.
