# PRD: JTK Spares Website Rework

## 1. Product overview

### 1.1 Document title and version

- PRD: JTK Spares Website Rework
- Version: 1.0

### 1.2 Product summary

The project will rework the current JTK Spares website into a polished single-page scrolling experience with clear section anchors and improved information hierarchy. Navigation links in the sticky header will jump users to relevant sections on the same page, reducing friction and improving discoverability of services, certifications, coverage, and contact actions.

The rework will preserve the current core section flow while updating content to reflect JTK Spares' real-world offering: forklift parts and attachments, oil and consumables, LPE/container handling support, all-terrain wheels, aftermarket parts, battery supply, service kits, international sourcing for hard-to-find parts, compliance support, and installation services.

The project also defines technical decision points for data and infrastructure (Supabase vs MySQL and hosting options), so implementation can begin quickly while keeping architecture choices explicit, measurable, and reversible.

## 2. Goals

### 2.1 Business goals

- Increase qualified inbound inquiries from industrial buyers in Western Cape, Johannesburg, and Durban.
- Improve credibility by clearly presenting certifications, compliance support, and notable clients.
- Make contact actions immediate (call, email, WhatsApp, form) from multiple points in the page.
- Create a scalable web foundation for future lead capture, quote workflows, and CMS-backed updates.

### 2.2 User goals

- Understand what JTK Spares does within 10-20 seconds of landing on the site.
- Navigate quickly to About, Services, Certifications, and Contacts sections via header links.
- See service coverage and trust signals without leaving the page.
- Contact the business through their preferred channel with minimal clicks.

### 2.3 Non-goals

- Building a full e-commerce catalog in this phase.
- Rewriting all backend APIs unless required for contact or quote capture.
- Introducing a complex CMS before validating core content and conversion flow.

## 3. User personas

### 3.1 Key user types

- Operations manager at a warehouse, logistics, or manufacturing company.
- Procurement officer sourcing urgent or non-local machine parts.
- Workshop/service manager needing compliance upgrades or safety retrofits.
- Fleet owner/operator seeking maintenance kits and battery replacements.

### 3.2 Basic persona details

- **Operations manager**: Needs minimal downtime, trusted supplier, and fast turnaround.
- **Procurement officer**: Compares supplier reliability, part availability, and response speed.
- **Service manager**: Requires compliant machine certifications and safety-ready installs.
- **Fleet owner**: Wants practical support, predictable delivery, and clear communication.

### 3.3 Role-based access

- **Public visitor**: Can browse all marketing content and submit contact/quote requests.
- **Internal admin**: Can manage leads/inquiries, partner logos/testimonials, and published service content.

## 4. Functional requirements

- **Single-page scroll architecture** (Priority: High)
  - Convert homepage into a clear single-page flow with section anchors.
  - Ensure all major nav links target in-page section IDs and smooth-scroll behavior.
  - Keep current section order unless explicitly changed.

- **Header navigation updates** (Priority: High)
  - Update nav labels: Inventory -> About, Industries -> Services, Certifications remains, Contacts remains.
  - Exclude Former Partners from nav while retaining a dedicated scroll section for partners.
  - Keep sticky header behavior across desktop and mobile.

- **Services and capability content refresh** (Priority: High)
  - Present offerings: forklift parts and attachments, oil and consumables, LPE/container handling, all-terrain wheels, aftermarket parts, battery supply, service kits.
  - Highlight international sourcing for parts not typically available locally.
  - Include support for certification, safety light/part installations, and regulation upgrades.

- **Coverage and trust content** (Priority: Medium)
  - Clearly state coverage in Western Cape, Johannesburg, and Durban.
  - Showcase major clients in dedicated partners section (not in top nav).
  - Display BBBEE Level 1 accreditation and company registration details.

- **Contact and conversion actions** (Priority: High)
  - Provide click-to-call, mailto email, WhatsApp deep link, and contact form.
  - Reuse contact details consistently across header/footer/contact section.
  - Add validation and anti-spam protection on form submissions.

- **Technical strategy and architecture decisioning** (Priority: Medium)
  - Document Supabase vs MySQL options with decision criteria.
  - Define hosting/infrastructure recommendations for current and next phases.
  - Include observability, reliability, and cost considerations.

## 5. User experience

### 5.1 Entry points and first-time user flow

- User lands on homepage and immediately sees JTK value proposition.
- Sticky header offers About, Services, Certifications, Contacts.
- User scrolls through trust signals, services, coverage, partners, and contact CTA.
- User chooses direct channel (call, WhatsApp, email) or fills contact form.

### 5.2 Core experience

- **Fast orientation**: Hero and top summary explain what JTK does and where it operates.
  - This lowers bounce risk and gives users confidence quickly.
- **Guided section navigation**: Header anchor links jump to corresponding sections smoothly.
  - This reduces effort and makes content discovery predictable.
- **Conversion-ready contacts**: Persistent CTAs and dedicated contact block enable immediate action.
  - This increases qualified inquiries from mobile and desktop users.

### 5.3 Advanced features and edge cases

- Mobile menu must preserve same section links and behavior as desktop nav.
- Fallback behavior for users with reduced-motion settings (disable animated scroll effects if needed).
- All contact CTAs remain usable even if JavaScript partially fails.
- If partners list grows, section supports expandable grid or carousel without affecting page performance.

### 5.4 UI/UX highlights

- Maintain current strong industrial visual identity, while improving readability and hierarchy.
- Use clear section IDs, spacing rhythm, and visual wayfinding between blocks.
- Ensure high-contrast typography and accessible focus states for keyboard navigation.
- Preserve professional tone with natural, humanized copy throughout.

## 6. Narrative

A procurement or operations lead arrives with an urgent requirement and quickly understands that JTK Spares provides both common and hard-to-source industrial parts, plus compliance-ready service support. They scroll naturally through services, certifications, coverage, and partner credibility, then contact the team through their preferred channel without friction. The experience communicates confidence, speed, and practical expertise.

## 7. Success metrics

### 7.1 User-centric metrics

- At least 70% of visitors reach one or more anchored sections beyond hero.
- At least 30% of visitors interact with a contact CTA (call/email/WhatsApp/form).
- Median time-to-first-meaningful-action under 25 seconds.

### 7.2 Business metrics

- Increase qualified inbound leads by 25% within 60 days post-launch.
- Increase conversion rate from homepage visitor to inquiry by 15%.
- Increase share of leads outside Western Cape (Johannesburg/Durban) by 10%.

### 7.3 Technical metrics

- Core page load (LCP) below 2.5s on typical 4G mobile.
- Lighthouse accessibility score >= 90 on production build.
- Broken anchor-link rate = 0 in release validation checks.

## 8. Technical considerations

### 8.1 Integration points

- Current frontend is static page-first, with optional React components in project.
- Existing backend includes inquiry and quote routes that can back the contact form.
- CTA integrations: tel, mailto, WhatsApp deep link, and optional API form endpoint.

### 8.2 Data storage and privacy

- Contact submissions should store minimum required personal/company fields.
- Enforce consent language for storing inquiry data.
- Secure admin and API access with environment-managed secrets and role checks.

### 8.3 Scalability and performance

- Use a static-first page with selective dynamic features for lower cost and high speed.
- Optimize image sizes and compress hero/support visuals.
- Add form queue/retry strategy for transient API/database failures.

### 8.4 Potential challenges

- Balancing static marketing speed with future dynamic content requirements.
- Choosing between Supabase and MySQL before feature scope stabilizes.
- Keeping copy and partner claims accurate with legal/commercial approval.

### 8.5 architecture options and recommendation

- **Option A: Supabase (Postgres + Auth + Storage + Edge Functions)**
  - Pros: Faster setup, managed services, built-in auth/storage, simpler admin tooling.
  - Cons: Vendor coupling, potential cost growth with scale, migration complexity later.
- **Option B: Managed MySQL + Node API**
  - Pros: Familiar relational model, broader hosting flexibility, lower vendor lock-in.
  - Cons: More operational setup, more custom auth/storage work, slower initial delivery.
- **Recommendation for phase 1**
  - Use existing stack with minimal DB churn for launch speed.
  - Run a 2-week architecture spike comparing Supabase vs MySQL on cost, dev speed, and maintainability.
  - Finalize after defined decision gate in Phase 1.

## 9. Milestones and sequencing

### 9.1 Project estimate

- Medium: 4-6 weeks (including discovery, implementation, QA, and launch hardening)

### 9.2 Team size and composition

- 3-5 people: Product manager, frontend engineer, full-stack engineer, designer, QA (shared)

### 9.3 Suggested phases

- **Phase 1**: Discovery, content architecture, technical spike (1-2 weeks)
  - Key deliverables: Approved information architecture, finalized section mapping, DB/infrastructure recommendation.
- **Phase 2**: Frontend rework implementation (1-2 weeks)
  - Key deliverables: Single-page scroll build, updated nav anchors, revised sections, responsive behavior.
- **Phase 3**: Contact flows, testing, launch readiness (1-2 weeks)
  - Key deliverables: Contact CTA integration, form validation, Playwright QA suite, analytics, production launch checklist.

## 10. User stories

### 10.1 Navigate to about section

- **ID**: GH-001
- **Description**: As a first-time visitor, I want the About link in the header to scroll me to the About section so I can quickly understand the company.
- **Acceptance criteria**:
  - Header label displays About instead of Inventory.
  - Clicking About scrolls to an in-page section with a unique ID.
  - Section target works on desktop and mobile.

### 10.2 Navigate to services section

- **ID**: GH-002
- **Description**: As a buyer, I want Services in the header so I can view JTK offerings quickly.
- **Acceptance criteria**:
  - Header label displays Services instead of Industries.
  - Clicking Services scrolls to services section with clear offerings list.
  - Services section includes all specified capability categories.

### 10.3 Keep certifications discoverable

- **ID**: GH-003
- **Description**: As a compliance-focused customer, I want a Certifications link to jump to proof and compliance details.
- **Acceptance criteria**:
  - Certifications remains in top nav.
  - Certifications link scrolls to section containing BBBEE Level 1 and certification capability details.
  - Section content is readable and scannable on mobile.

### 10.4 Keep contacts as direct conversion route

- **ID**: GH-004
- **Description**: As a visitor ready to engage, I want a Contacts link and clear contact actions so I can reach JTK immediately.
- **Acceptance criteria**:
  - Contacts appears in top nav.
  - Contacts section includes phone, email, location, director details, and company registration.
  - At least one direct action exists for click-to-call and email.

### 10.5 Showcase partners in-page only

- **ID**: GH-005
- **Description**: As a prospect, I want to see major client proof while scrolling, without adding extra nav clutter.
- **Acceptance criteria**:
  - Former Partners is not shown in top nav.
  - Dedicated partners section appears in scroll flow.
  - Section includes named clients provided by the business.

### 10.6 Support urgent contact channels

- **ID**: GH-006
- **Description**: As an operations lead with urgent downtime, I want WhatsApp/call/email options so I can contact support instantly.
- **Acceptance criteria**:
  - WhatsApp deep-link opens with prefilled intent text.
  - Call CTA launches tel link on mobile-capable devices.
  - Email CTA opens mail client with correct recipient.

### 10.7 Submit inquiry form reliably

- **ID**: GH-007
- **Description**: As a customer, I want to submit a short inquiry form and receive confirmation.
- **Acceptance criteria**:
  - Form validates required fields and shows clear error states.
  - Successful submit returns visible success feedback.
  - Failed submit returns retry guidance without data loss.

### 10.8 View coverage information by region

- **ID**: GH-008
- **Description**: As a regional buyer, I want to confirm JTK serves my location.
- **Acceptance criteria**:
  - Coverage section explicitly mentions Western Cape, Johannesburg, and Durban.
  - Coverage messaging is visible without requiring external maps.
  - Section remains readable on smaller screens.

### 10.9 Access site with accessibility and performance quality

- **ID**: GH-009
- **Description**: As any visitor, I want the site to load fast and be easy to navigate with assistive tools.
- **Acceptance criteria**:
  - Anchor navigation is keyboard accessible.
  - Text and interactive controls meet contrast and focus requirements.
  - Performance and accessibility targets from section 7 are met in release checks.

### 10.10 Protect inquiry and admin access

- **ID**: GH-010
- **Description**: As the business owner, I want inquiry data and admin capabilities protected from unauthorized access.
- **Acceptance criteria**:
  - Admin endpoints require authenticated access.
  - Contact form includes anti-spam control (honeypot and/or rate limiting and validation).
  - Sensitive keys and secrets are environment-managed and not exposed client-side.

After generating the PRD, I will ask if you want to proceed with creating GitHub issues for the user stories. If you agree, I will create them and provide you with the links.
