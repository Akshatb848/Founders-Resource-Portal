# Founder Resource Portal — Complete Project Context

## 1. Product purpose

The Founder Resource Portal is an invitation-only YourNest workspace for portfolio founders. It provides curated knowledge, practical templates, sector intelligence, warm introductions, structured support requests, events and guided playbooks.

The intended product is more than a document repository. Its operating journey is:

`Understand → Assess → Use a resource → Complete an action → Ask for help → Track resolution`

## 2. Primary product entity

The portfolio company is the provisioning root.

Each company can have:

- multiple founders and authorised company users;
- users invited later or removed when access is no longer required;
- an assigned YourNest partner;
- a current portfolio manager/analyst;
- associates and specialist teams;
- assignment history and effective dates;
- company-, stage- and sector-specific content visibility.

Founder access is invitation-based and requires YourNest approval. Public self-registration is outside scope. YourNest staff may use Workspace SSO; the final founder identity method remains a production decision.

## 3. Phase 1 functional scope

### Dashboard

- personalised founder and company identity;
- assigned YourNest team;
- clickable sector news flashes at the top;
- recommended resources and industry reports;
- active playbook and progress;
- open requests and latest status;
- upcoming events and notifications.

### Sector intelligence

- recent, time-sensitive news or policy updates;
- sector and company relevance;
- source, publication date and expiry date;
- clickable detail view and external reference where approved;
- manual/low-cost curation in Phase 1;
- stale updates archived rather than shown indefinitely.

News is distinct from Industry Reports. Reports are longer-lived resources in the Resource Library.

### Resource Library

Primary categories currently include Legal, Finance, Hiring, Operations, Compliance, Fundraising and Industry.

Industry subsections include:

- Market Research;
- Regulatory & Policy;
- Competitive Landscape;
- Industry Benchmarks;
- Ecosystem & Partnerships.

Every resource should eventually carry:

- title, description and resource type;
- source and author;
- internal content owner;
- redistribution status: hostable, link-only or restricted;
- sector, company stage, function and keywords;
- audience/visibility rules;
- reviewer and approval status;
- version, publication date, review date and expiry date;
- preview/download link and activity tracking.

Allowed types include Template, Checklist, Guide, Sample, Policy, Playbook, Report and External Link. A sample must never be represented as a final legally approved document.

### Connect

Four network groups are required:

1. **Operational Support Network** — legal partners, CA/tax, finance/MIS, hiring/HR, technology/security and compliance.
2. **Peer Founder Network** — opt-in portfolio founders.
3. **Investor & Fundraising Ecosystem** — relevant VC, CVC, investment-banking and fundraising relationships.
4. **YourNest Network** — partners, portfolio managers, advisors/mentors and internal specialist teams.

Direct contact details remain private. Founders request an introduction; YourNest verifies relevance and consent. Every introduction becomes a trackable request.

### Requests

Requests are deliberately simple and unified. Each request records:

- portfolio company and requesting user;
- category and priority;
- subject and description;
- originating resource or network connection, where applicable;
- assigned partner/team and current owner;
- status, founder-visible updates and internal notes;
- reassignment history;
- created, updated and resolved timestamps.

Routing should use the company relationship map, category, specialist team, stage and current assignments. The founder should not have to select an individual employee.

### Playbooks

The 100-Day Founder Playbook is the active Phase 1 example. Playbooks require a lifecycle:

`Draft → Partner review → Approved → Published → Withdrawn/Superseded`

Only approved playbooks are founder-visible. An active playbook should support phases, tasks, owner, due date, progress, evidence/attachments, founder notes, YourNest comments and contextual support requests.

Where appropriate, a playbook begins with a baseline assessment and converts identified gaps into actions.

### Events

Phase 1 requires a simple event experience: title, date/time, description, intended audience, venue/meeting link and RSVP. A complex event-management platform is outside scope.

### Administration

Production administration must cover:

- companies and multiple users;
- invitations, approval, suspension and revocation;
- relationship-team assignment and history;
- resource upload/linking, review, approval and visibility;
- request routing, assignment and reassignment;
- playbook publishing;
- event and notification management;
- audit logs.

## 4. Meeting 3 requirements

### Content rights and governance

Do not upload proprietary or third-party research simply because a copy is available. Confirm redistribution rights, preserve attribution and use external links or internally written summaries when hosting is not permitted.

### Analyst-owned curation

Analysts or authorised staff should own collection, tagging and founder-facing summaries. Content follows:

`Collected → Rights checked → Tagged → Reviewed → Partner approved → Published → Reviewed/Expired`

### India-relevant Hiring content

Expand Hiring with:

- organisation-design guidance;
- Series A/stage-specific hiring checklists;
- workforce-planning templates;
- editable job descriptions;
- interview scorecards;
- onboarding guidance;
- specialist-support request.

Representative roles discussed: HR/People, Operations, Sales & BD, Enterprise Sales, Technical Sales, GTM, Corporate Communications, Chief of Staff, Finance, Accounts, Financial Controller and Customer Success/Client Engagement.

Each template must state its intended stage, indicative seniority and customisation requirements. Avoid outdated US-context material.

### Resource-to-request hand-off

Applicable resources need an **Ask YourNest for help** action. It should prefill the resource, company, category and context in the unified request form. Market sizing was the principal example.

### Readiness diagnostic

Introduce one bounded, stakeholder-approved assessment—such as hiring, governance, compliance or fundraising readiness. It should:

- ask a short company/stage-relevant question set;
- use transparent scoring;
- identify gaps rather than claim certification;
- recommend resources and playbook actions;
- enable a support request;
- preserve prior results for milestone or quarterly comparison.

Do not create a long generic weekly questionnaire or turn this into live MIS collection.

### Fundraising and valuation

Automated authoritative valuation is not approved. A safe Phase 1 approach is a fundraising-readiness assessment, sourced educational benchmarks and a YourNest review request. Any future calculator requires approved methodology, current source data, assumptions, disclaimers, auditability and named ownership.

## 5. Existing implementation status

Already demonstrated:

- personalised Exponent Energy founder account;
- dashboard news flashes and Sector Updates;
- Resource Library and Industry subsections;
- representative templates/reports;
- the four Connect networks;
- private, request-based introductions;
- one unified Requests section;
- 100-Day Playbook progress;
- events and notifications;
- administration concept;
- responsive YourNest visual treatment;
- resource-to-request hand-off (frontend only): every resource detail view has an **Ask YourNest for help** action that prefills company, resource, category and context, and the resulting request shows its originating resource.

Partially implemented:

- resource relevance is simulated rather than driven by persistent mappings;
- administration is a frontend simulation;
- hiring content is representative but not comprehensive;
- playbook tasks lack full evidence, ownership and history;
- requests are not persisted or routed by a backend;
- content governance metadata and rights checks are incomplete.

Not yet implemented:

- production authentication and invitations;
- PostgreSQL persistence and APIs;
- secure document storage;
- actual company/content visibility rules;
- relationship-team history;
- approval and audit engines;
- persisted resource-to-request hand-off (the frontend demonstration does not save or route requests);
- readiness assessment and result history;
- production notifications;
- OCI deployment, monitoring and backups.

## 6. Explicit exclusions

Do not implement without separate approval:

- DealScreener integration or shared infrastructure;
- live company MIS collection or portfolio-performance metrics;
- public registration;
- automated legal-document generation or execution;
- direct publication of private contact details;
- unrestricted third-party report hosting;
- unsupervised AI advice;
- authoritative automated company valuation;
- complex project or event management.

## 7. Production architecture direction

Use an independent OCI environment:

- separate low-cost alpha VM and URL, followed by approved production environment;
- independent application service and PostgreSQL database;
- secure object/document storage;
- HTTPS and managed secrets;
- role- and company-based access control;
- backups, monitoring, logging and audit history;
- no network or data dependency on DealScreener.

Suggested logical layers:

1. responsive web frontend;
2. authenticated API/backend;
3. PostgreSQL relational data;
4. secure document storage;
5. notification and background-job service;
6. operational logging, monitoring and backups.

## 8. Recommended execution order

1. Approve category and governance metadata.
2. Model companies, memberships and relationship-team assignments.
3. Implement invitations, approval and role-based access.
4. Build resource publishing, rights and visibility controls.
5. Deepen India-relevant Hiring content.
6. Implement unified requests and routing.
7. Add resource-to-request hand-off.
8. Add one approved readiness assessment.
9. Extend playbooks with tasks, evidence and request links.
10. Validate one complete founder journey.
11. Deploy the controlled alpha to separate OCI infrastructure.
12. Obtain stakeholder approval before portfolio-wide rollout.

## 9. Open stakeholder decisions

- final founder authentication method;
- final request categories and priority meanings (Industry resources currently prefill "Other" because no matching category exists; the hand-off is also offered on every resource until "applicable resources" is defined);
- routing responsibility matrix;
- final Legal/Finance/Compliance/People taxonomy;
- redistributable versus link-only sources;
- approved India compliance catalogue;
- first diagnostic and scoring method;
- founder visibility of diagnostic scores;
- notification channels;
- retention and audit policy;
- any future valuation/benchmark methodology.

