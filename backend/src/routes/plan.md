# Implementation plan for JTK website rework

## Purpose

This plan defines how the agent should implement the approved PRD without missing quality, design, UX, or test requirements.

## Always-read execution rules

- Read this file before implementation work starts.
- Keep all changes aligned to the PRD in this folder.
- Maintain a single-page scrolling website with anchored section navigation.
- Keep section order unchanged unless approved.
- Keep top nav as: About, Services, Certifications, Contacts.
- Do not include Former Partners in top nav; keep dedicated partners section in scroll flow.

## Skill checklist to apply during implementation

The following skills were explicitly requested and must be applied during implementation planning and delivery.

- vercel related skills
  - Use Vercel deployment best practices for build output, env vars, and preview/prod environments.
  - Validate static asset paths and route behavior for single-page anchor navigation.
- ui-ux-pro-max
  - Apply polished visual hierarchy, spacing rhythm, and intentional interaction states.
- frontend-design
  - Improve section flow, responsive layouts, typography scale, and visual consistency.
- ux-heuristics
  - Validate against visibility, consistency, user control, error prevention, and clarity.
- refactoring-ui
  - Simplify visual noise, strengthen type/spacing system, and tighten component consistency.
- test-driven-development
  - Write tests/checks first for nav anchor behavior and critical contact interactions where practical.
- humanizer
  - Keep all copy natural and practical; avoid robotic or over-marketing language.
- playwright mcp
  - Run end-to-end checks throughout implementation for desktop and mobile viewports.

## Implementation phases

### Phase 1: Content and IA alignment

- Finalize section IDs and nav-link mapping.
- Update section copy to include real service scope and international sourcing value.
- Prepare contact and credibility content blocks with validated details.

### Phase 2: Frontend structure and navigation

- Implement or update sticky header links to anchored sections.
- Add smooth scroll and reduced-motion fallback behavior.
- Ensure mobile navigation mirrors desktop links and behavior.

### Phase 3: Service and trust sections

- Ensure services section covers all required service categories.
- Add/adjust certifications content and compliance support messaging.
- Keep partner showcase in standalone section while scrolling.

### Phase 4: Contact and conversion flows

- Add call, email, WhatsApp CTAs.
- Implement contact form with validation and anti-spam controls.
- Integrate backend inquiry endpoint where available.

### Phase 5: QA and release readiness

- Execute Playwright regression checks for nav anchors and CTA actions.
- Validate accessibility and responsive behavior.
- Run performance checks and fix high-impact issues.

## Playwright MCP test matrix

- Desktop (1366x768):
  - Header links jump to correct sections.
  - Sticky header remains usable after scroll.
  - Contact CTAs are visible and actionable.
- Mobile (390x844):
  - Mobile menu exposes all required links.
  - Section scroll targets are correct and not hidden beneath sticky header.
  - CTA tap targets are large enough and functional.
- Content integrity:
  - Services list includes all required categories.
  - Coverage includes Western Cape, Johannesburg, and Durban.
  - Partner section visible in scroll flow.

## Architecture decision plan

- Track and compare Supabase vs MySQL using:
  - development speed
  - operational complexity
  - monthly cost at expected lead volume
  - migration and lock-in risk
  - integration fit with current backend
- Keep first release architecture minimal and reversible.
- Record final decision and rationale before launching dynamic form storage changes.

## Definition of done

- PRD requirements for nav labels, section behavior, and contact flows are fully implemented.
- Playwright checks pass on desktop and mobile.
- No broken section links.
- Contact actions and form flow work in deployed preview.
- Content reads naturally and reflects approved business facts.
