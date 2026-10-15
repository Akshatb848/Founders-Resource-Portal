# YourNest Founder Resource Portal

Phase 1 founder-facing prototype and production handoff for the YourNest Founder Resource Portal.

The portal is a standalone YourNest product. It must run on separate infrastructure and must not depend on DealScreener, its database, its metrics, or its deployment environment.

## Current demonstration

Public prototype: <https://akshatb848.github.io/Founders-Resource-Portal/>

Hosted on GitHub Pages and deployed automatically from `dist/` on every push to `main` by `.github/workflows/pages.yml`. This is the only maintained prototype link. The earlier ChatGPT-hosted copy (`yournest-founder-resource-portal-phase1.major-project848.chatgpt.site`) is retired and no longer updated.

The current frontend demonstrates:

- a personalised founder dashboard for Arun / Exponent Energy;
- company- and sector-aware news flashes;
- a searchable Resource Library with Industry subsections;
- approved resources, templates, reports and playbooks;
- four Connect networks with request-based introductions;
- one unified request-tracking system;
- a 100-Day Founder Playbook with progress;
- events, notifications and an internal administration concept;
- responsive YourNest-branded desktop and mobile layouts.

## Run locally

This is currently a dependency-free static frontend. Serve the repository root with any local HTTP server, for example:

```bash
python -m http.server 4173
```

Then open <http://127.0.0.1:4173>.

Do not open `index.html` directly from the filesystem when validating browser behaviour.

## Source layout

- `index.html` — application shell and login screen
- `app.js` — base screens, state and interactions
- `phase1-features.js` — personalised Phase 1 additions
- `styles.css` — base design system and responsive layout
- `phase1.css` — Phase 1 feature styling
- `design-system/` — design-language reference
- `docs/PROJECT_CONTEXT.md` — complete product and implementation handoff
- `CLAUDE.md` — operating instructions for Claude Code

The `dist/` directory is the published static build served by GitHub Pages. Keep source and distribution files synchronised until a formal build pipeline replaces this arrangement.

## Product boundary

Phase 1 is a secure, company-centred support portal. MIS may appear only as a downloadable template. Do not introduce live portfolio MIS, investment-performance dashboards, DealScreener integrations, automated legal-document execution, or authoritative automated valuation without separate stakeholder approval.

## Next development priority

The next production work is summarised in `docs/PROJECT_CONTEXT.md`. The highest priorities are content governance, India-relevant hiring resources, resource-to-request hand-off, one controlled readiness assessment, richer playbook actions, and a real backend deployed independently on OCI.

