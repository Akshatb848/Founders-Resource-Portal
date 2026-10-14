# Claude Code Handoff Instructions

Read `README.md` and `docs/PROJECT_CONTEXT.md` before modifying the portal.

## Non-negotiable product constraints

1. This is a completely separate project from DealScreener.
2. Do not import DealScreener metrics, schemas, services, UI concepts or infrastructure dependencies.
3. Production must use a separate OCI VM, database, secrets, domain/subdomain, backups and monitoring.
4. Treat the portfolio company—not one founder account—as the provisioning root.
5. Support multiple approved users per company and changeable YourNest relationship-team assignments.
6. Keep one Requests area and one clear New Request action.
7. Route introductions and support through the same trackable request system.
8. MIS is a template/resource only in Phase 1; do not build live MIS collection.
9. Do not publish third-party material without confirmed redistribution rights and attribution.
10. Do not present legal, tax, compliance, investment or valuation outputs as definitive professional advice.

## Frontend rules

- Preserve the current YourNest colour palette and supplied logo proportions.
- Use the system font stack already defined in the styles.
- Maintain responsive behaviour and accessible keyboard/focus states.
- Keep the founder experience simple, stakeholder-friendly and company-specific.
- Do not add duplicate navigation, duplicate calls to action, or speculative features.
- Use realistic but clearly demonstrative data until approved production content is supplied.
- Keep `dist/` synchronised with changed source files while the static publishing approach remains in use.

## Working method

- Inspect existing behaviour before changing it.
- Keep changes small and independently testable.
- Preserve the existing information architecture unless an approved requirement demands a change.
- Record unresolved policy questions instead of encoding assumptions as business rules.
- Verify desktop and mobile views and the complete founder demo journey after material UI changes.

## Required founder demo journey

1. Sign in as an invited founder.
2. See company-specific dashboard and sector news.
3. Open a relevant report or template.
4. Request contextual help if needed.
5. Track the routed request and its owner.
6. Review an upcoming event.
7. Continue the active 100-Day Playbook.
8. Return to the dashboard and see updated activity.

