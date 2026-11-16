# ENGINEER OS

A local-first learning dashboard for the 17-week engineering roadmap.

## Run it

Open `index.html` in a modern browser. To use it from a local web server, open PowerShell in this folder and run:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

No package installation or API keys are required. The Google Fonts link is optional; the app falls back to system fonts when offline.

## Progress and backups

Roadmap tasks, deliverable signoffs, study hours, weekly notes, project workstreams, AI topic notes, journal entries, decisions, and manually adjusted skills are saved in browser local storage. Use **Export / restore** in the sidebar to download a JSON backup or restore one. Browser local storage is specific to the browser profile and origin, so keep a backup when moving browsers or clearing site data.

Roadmap and skill progress start at zero. Weekly progress combines the seven daily checkboxes and the weekly deliverable signoff. Skill estimates derive from the related week progress until manually adjusted in Analytics. Project statuses and AI topic statuses begin as editable, unstarted values.
