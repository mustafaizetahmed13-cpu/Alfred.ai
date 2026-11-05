# A.L.F.R.E.D. 6.0 — Beyond Intelligence

## Installation
1. Entpacke das ZIP.
2. Ersetze die Dateien im GitHub-Pages-Repository durch alle Dateien aus diesem Ordner.
3. Committe die Änderungen auf dem Branch und im Ordner, die du bisher für GitHub Pages verwendest.
4. Öffne die installierte PWA vollständig neu. Falls alte Inhalte angezeigt werden, schließe sie komplett und öffne die URL in Chrome erneut.

## Enthalten
- Futuristisches HUD-Design und Startsequenz.
- Bestehende Funktionen aus dem vorherigen Paket einschließlich Scanner, Aufgaben, Notizen, Tools und sicherer Zerstörungssimulation.
- CORE-Gedächtnis (lokale manuelle Einträge).
- Spezialisten-Profile als Rollen-/Aufgaben-Presets.
- Live-Sprachmodus auf Basis der Browser-Spracherkennung und Sprachausgabe.
- Kartenansicht mit Standortfreigabe; keine garantierte Satellitenbild-Abdeckung.
- Netzwerkdiagnose mit browserseitig verfügbaren Informationen.
- Wetterlabor mit Open-Meteo.
- Tagesbriefing aus lokal gespeicherten Aufgaben und Terminen.
- Stealth-Modus, lokale App-PIN-Sperre und visueller App-Neustart.
- Ökosystem-Übersicht mit zwölf Abteilungen.

## Wichtige Grenzen
Diese Version ist ein funktionsfähiger PWA-Ausbau, aber noch kein vollautonomes KI-Betriebssystem. Das Langzeitgedächtnis speichert Einträge lokal, die Spezialisten sind Profile und keine parallel laufenden Agenten. Live-Sprache hängt von Android/Chrome-Unterstützung ab. Der Kartenbereich verwendet eine Kartenansicht und ist nicht automatisch eine hochauflösende Satellitenansicht. Browser können keine vollständige Routerdiagnose oder geräteweite Sicherheitsscans durchführen.

Für echte KI-Antworten, Agenten-Orchestrierung und das Einbeziehen des Gedächtnisses in KI-Antworten muss das sichere Backend aus dem separaten KI-Setup eingerichtet und serverseitig erweitert werden. Gemini-API-Schlüssel niemals in `index.html` oder anderen öffentlichen Dateien speichern.

Die Lockdown-PIN ist nur eine lokale Komfortsperre innerhalb der App, kein Ersatz für Android-Bildschirmsperre. Die Emergency-/Zerstörungsfunktion bleibt eine reine visuelle Simulation und löscht oder verändert keine Daten.
