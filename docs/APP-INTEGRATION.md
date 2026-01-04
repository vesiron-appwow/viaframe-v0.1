# VIAFRAME App Integration Model

VIAFRAME separates apps from frameworks.

Apps live in /apps and are framework-agnostic.
Frameworks (e.g. Astro) are responsible for mounting apps.

## Principles

- Apps do not import framework code directly
- Frameworks read app metadata and decide how to render
- VIAFRAME core defines structure, not behaviour

## Expected App Structure

Each app folder should contain:
- README.md (human description)
- app.json (machine-readable metadata)
- Optional future folders (ui, data, assets)

## Integration Flow (Conceptual)

1. Framework scans /apps
2. Framework reads app.json files
3. Framework decides:
   - Routes
   - Layout
   - Rendering strategy

At this stage, this model is declarative only.
No runtime integration is implemented yet.
