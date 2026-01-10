# VIAFRAME Framework Implementations

VIAFRAME is a framework-agnostic chassis.

Frameworks are implemented as contained subfolders so they can be
introduced, replaced, or removed without affecting the core structure.

## Astro Implementation

The current reference implementation uses Astro and lives in:

/astro-base

Responsibilities of astro-base:
- Routing
- Layout rendering
- Static build output
- Framework-specific configuration

Responsibilities NOT handled by astro-base:
- Business logic
- App-specific content
- Payments, auth, or production integrations

Future implementations may include:
- /next-base
- /solid-base
- /svelte-base

Only one framework is expected to be active at a time.
