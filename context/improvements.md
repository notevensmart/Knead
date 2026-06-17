# Knead Premium Design Pass Agent Ticket

## Position

I agree with the direction of this improvement pass: the site should stay recognisably Knead while becoming tighter, calmer, and more premium through spacing, composition, responsive layout, and interaction polish.

The important correction is scope discipline. This is not a redesign, copywriting pass, content expansion, framework migration, or architecture change. It is a focused polish pass on the active root static site.

## Architecture Source Of Truth

Before implementation, read:

- `context/agent-instructions.md`
- `context/extracted-requirements.md`
- `context/design-reference.md`
- `context/calm-hero-experience-ticket.md`
- `context/multi-page-navigation-ticket.md`
- `context/our-team.md`

Current architecture:

- The production site is the static multi-page site in the repository root.
- Active pages are:
  - `index.html`
  - `about.html`
  - `services.html`
  - `contact.html`
  - `privacy-policy.html`
  - `terms-of-use.html`
  - `disclaimer.html`
- Shared styling lives in `styles.css`.
- The selected prototype is preserved in `p1/` and must not be modified.
- Shared assets live in `assets/` and should be reused as-is unless a documented display-only derivative is already part of the current site.

## Hard Constraints

Do not:

- Modify anything in `p1/`.
- Add a JavaScript framework, build system, package manager, or dependency.
- Change page URLs or convert the site away from static HTML and CSS.
- Rewrite brand, service, team, contact, or legal copy.
- Invent service descriptions, pricing, phone numbers, credentials, claims, or legal terms.
- Change the logo files, team portraits, social post artwork, or legal meaning of the pages.
- Add new sections, modals, carousels, forms, chat widgets, analytics, cookies, or tracking.
- Make service rows interactive unless the HTML is explicitly changed to real links or controls with accessible names and targets.
- Use viewport-width font scaling for text. Prefer explicit sizes in shared rules and breakpoints.

Allowed files:

- `index.html`
- `about.html`
- `services.html`
- `contact.html`
- `privacy-policy.html`
- `terms-of-use.html`
- `disclaimer.html`
- `styles.css`
- This file, if documenting implementation notes

Only edit HTML when needed for semantics, accessibility, or correcting an architecture mismatch. Most work should be in `styles.css`.

## Existing Structure To Preserve

Preserve these shared patterns:

- Header: `.site-header`, `.brand`, `.brand-tagline`, `.nav-links`
- Footer: `.site-footer`, `.footer-links`
- Page spacing: `.section`, `.page-section`
- Homepage hero: `.hero`, `.calm-hero`, `.hero-intro`, `.hero-composition`, `.hero-video-wrap`, `.hero-video`, `.reflection-card`
- About: `.about-section`, `.section-grid`, `.professionals`, `.team-grid`, `.team-card`, `.qualification-details`
- Services: `.services-section`, `.service-list`, `.service-item`
- Contact: `.contact-section`, `.contact-copy`, `.contact-actions`, `.icon-action`
- Legal: `.legal-section`, `.legal-copy`, `.legal-group`

Preserve navigation architecture:

- The logo links to `index.html`.
- Text navigation contains `About`, `Services`, and `Contact`.
- Navigation links point to root HTML pages, not in-page anchors.
- Use `aria-current="page"` only on the active page link.

Preserve contact rules:

- Email remains `kneadspace@gmail.com`.
- Instagram remains `https://www.instagram.com/kneadsocial`.
- Do not invent a phone number.
- If a phone icon remains visible, it must remain inert and clearly disabled with accessible labelling.

Preserve hero media rules:

- The homepage video uses `assets/video/calm-hero.mp4` and `assets/video/calm-hero-poster.png`.
- The hero video must remain decorative and calm.
- The video should be `muted`, `autoplay`, `loop`, and `playsinline`.
- Do not introduce sound-on behavior.
- Respect `prefers-reduced-motion`.

## Objective

Raise the deployed site from strong to premium by improving:

- Vertical rhythm
- First-viewport composition
- Responsive layout craft
- Typography scale control
- Footer and navigation polish
- Mobile scanability
- Accessible focus and hover states

The finished site should feel more intentional, not more crowded.

## Implementation Order

1. Inspect the active root pages and `styles.css`.
2. Confirm current class names and avoid creating duplicate page-specific patterns.
3. Tighten global spacing variables and shared layout rhythm.
4. Refine header and navigation spacing.
5. Refine homepage hero composition on desktop.
6. Add a mobile-specific homepage hero composition.
7. Refine About page spacing and mobile team cards.
8. Refine Services page row scale and wrapping.
9. Refine Contact panel alignment and mobile icon grouping.
10. Refine Legal page measure, title sizing, and subsection rhythm.
11. Verify all active pages at required viewport widths.

## Global CSS Tasks

Work primarily in `styles.css`.

Add or refine reusable spacing through existing variables/selectors rather than hardcoding one-off margins everywhere.

Target adjustments:

- `.site-header`
  - Keep centered logo and tagline.
  - Reduce excess vertical space without making the logo feel cramped.
  - Keep the header transparent and calm.
  - Do not reintroduce a header CTA button.

- `.nav-links`
  - Keep three text links.
  - Replace overly wide equal-column behavior if it creates stretched navigation on desktop.
  - A flex layout with deliberate gaps is acceptable if it remains centered and stable.
  - Preserve visible focus states.

- `.section` and `.page-section`
  - Use consistent page-entry spacing.
  - Desktop page content should begin soon after the nav, roughly `80px-120px` from the nav area.
  - Mobile page content should begin roughly `48px-72px` from the nav area.
  - Avoid large dead zones above About, Services, Contact, and Legal pages.

- `.site-footer`
  - Keep footer aligned to the same max width as the main content.
  - Desktop: copyright left, legal links right.
  - Mobile: stack into a deliberate compact layout with readable/tappable links.
  - Preserve the top border and calm muted styling.

## Homepage Tasks: `index.html`

Primary selectors:

- `.hero`
- `.calm-hero`
- `.hero-intro`
- `h1`
- `.hero-composition`
- `.hero-composition::before`
- `.hero-video-wrap`
- `.hero-video`
- `.reflection-card`
- `.reflection-card-one` through `.reflection-card-five`

Required changes:

1. Make the H1 and collage read as one composed hero.
   - Reduce the gap between `Care that makes room.` and the collage.
   - Keep the headline concise and secondary to the visual composition.
   - Do not add extra hero copy unless explicitly requested later.

2. Rebalance the collage on desktop.
   - Keep the video as the central anchor.
   - Slightly reduce central dominance if surrounding cards are hidden.
   - Reveal meaningful portions of all five reflection cards.
   - Avoid overlaps that look accidental or crop important card text/artwork.
   - Keep the soft depth and premium shadow treatment.

3. Create a deliberate mobile composition.
   - Do not rely only on scaled-down desktop offsets.
   - At `390px` and `360px`, the video should not swallow the entire composition.
   - Cards should remain visibly intentional and not feel squeezed against viewport edges.

4. Keep motion respectful.
   - Ambient card motion may remain slow and transform-based.
   - The reduced-motion media query must produce a stable static layout.

Acceptance criteria:

- Desktop first viewport shows logo/nav, headline, and a meaningful portion of the collage.
- Mobile first viewport shows a composed hero, not a crowded pile of overlapping images.
- All five reflection cards are visible enough to feel intentional.
- The hero video remains muted and does not request or trigger sound.

## About Page Tasks: `about.html`

Primary selectors:

- `.about-section`
- `.section-grid`
- `.section-copy`
- `.professionals`
- `.subsection-heading`
- `.team-grid`
- `.team-card`
- `.team-card img`
- `.team-card-content`
- `.qualification-details`

Required changes:

1. Reduce the top gap before the About intro.
   - Preserve the split editorial layout on desktop.
   - Do not rewrite the About copy.

2. Refine team cards.
   - Desktop: preserve two cards side by side.
   - Keep portrait and content proportions balanced.
   - Mobile: reduce portrait dominance and overall card height.
   - Names, pronouns, language rows, and qualification controls should align consistently between both cards.

3. Polish qualification controls.
   - Keep native `<details>` behavior.
   - Keep plus/minus state clear.
   - Add restrained hover/focus treatment if needed.
   - Avoid layout shifts caused by inconsistent padding or icon placement.

Acceptance criteria:

- About page starts at a premium, deliberate distance below nav.
- Desktop keeps the elegant split intro and two-card team layout.
- Mobile team cards scan quickly and are not overly tall.
- Qualification controls are keyboard accessible and visually stable.

## Services Page Tasks: `services.html`

Primary selectors:

- `.services-section`
- `.service-list`
- `.service-item`
- `.service-item span`
- `.service-item h3`

Required changes:

1. Reduce row scale slightly.
   - Keep the editorial numbered-row style.
   - Desktop service headings may stay large but should not overpower the page.
   - Mobile headings should use controlled breakpoint sizes, not viewport-width scaling.

2. Improve wrapping and scanability.
   - Long items such as `Training for mental health professionals` and `Training for parents and carers` should wrap elegantly.
   - Keep dividers thin and calm.
   - Do not add descriptions, pricing, or explanatory copy.

3. Interaction rule.
   - Current service rows are static articles.
   - Do not add hover states that imply clickability unless converting rows into real accessible links, which is out of scope for this pass.
   - Static polish may use spacing, typography, dividers, and subtle background rhythm only.

Acceptance criteria:

- Desktop services feel premium and editorial, not oversized.
- Mobile rows are quick to scan.
- No service row suggests an unavailable action.
- No new service details are invented.

## Contact Page Tasks: `contact.html`

Primary selectors:

- `.contact-section`
- `.page-contact`
- `.contact-copy`
- `.contact-actions`
- `.icon-action`
- `.primary-contact`
- `.icon-action.is-disabled`

Required changes:

1. Preserve the dark panel.
   - Keep it as the strongest contrast moment on the site.
   - Do not replace it with cards or a form.

2. Refine alignment.
   - Desktop: heading, body copy, and icon group should feel balanced inside the panel.
   - Mobile: icon group should feel intentionally grouped and aligned with the content.

3. Preserve contact semantics.
   - Email icon links to `mailto:kneadspace@gmail.com`.
   - Instagram icon links to the existing Instagram URL.
   - Disabled phone icon remains non-actionable while no phone number exists.

4. Polish states.
   - Hover/focus states should remain visible and calm.
   - Tap targets must remain at least `44px`.

Acceptance criteria:

- Contact page remains distinct and premium.
- Mobile icons read as one intentional contact group.
- Disabled phone action cannot be clicked, submitted, dialed, or focused as a link.

## Legal Page Tasks

Pages:

- `privacy-policy.html`
- `terms-of-use.html`
- `disclaimer.html`

Primary selectors:

- `.legal-section`
- `.legal-copy`
- `.legal-copy h1`
- `.legal-group`
- `.legal-copy h2`
- `.legal-group p`

Required changes:

1. Refine reading measure.
   - Keep `.legal-copy` around `680px-760px` on desktop.
   - Avoid legal text stretching across the full `1160px` container.

2. Refine title sizing.
   - Desktop H1 can remain expressive.
   - Mobile H1 should be calmer, padded, and not flush to the viewport.
   - Prevent oversized wrapping on `Professional Disclaimer`.

3. Improve Terms rhythm.
   - Keep existing legal groups and dividers.
   - Make H2/body spacing consistent.
   - Do not change legal wording or meaning.

Acceptance criteria:

- Legal pages feel intentionally designed, not like unstyled text pages.
- Mobile legal headings do not dominate the viewport.
- Desktop reading width is comfortable.
- Legal copy is unchanged except for formatting-preserving whitespace if required.

## Typography Rules

Use the existing typography direction:

- Serif display headings for major titles.
- Sans-serif body copy.
- Existing small-caps eyebrow style where already used.

Implementation rules:

- Do not scale text directly with `vw`.
- Prefer `rem` sizes adjusted in the existing `920px` and `620px` breakpoints, or add one narrow breakpoint only if necessary.
- Keep `letter-spacing: 0` for body and display text.
- Preserve small-caps letter spacing only for existing eyebrow/metadata styles.
- Keep line-height controlled but readable.
- Avoid headings that force awkward one-word lines on mobile.

## Interaction And Accessibility Rules

Required:

- Keep `.skip-link`.
- Preserve semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Preserve `aria-labelledby` relationships.
- Preserve `alt` text on team portraits.
- Keep decorative hero cards empty-alt and inside `aria-hidden` composition.
- Keep visible keyboard focus on nav links, buttons/icons, and `<summary>` controls.
- Respect `prefers-reduced-motion`.

Allowed polish:

- Nav hover/focus: restrained color or underline treatment.
- Contact icons: restrained background/border shift.
- Qualification summaries: clear hover/focus/open state.
- Footer links: consistent underline and focus treatment.

Avoid:

- Flashy animation.
- Hover states on static content that imply clickability.
- New JS for layout.
- Hidden focus outlines.

## Responsive Verification

Verify all seven active pages at:

- `1440px` desktop
- `1024px` laptop
- `768px` tablet
- `390px` mobile
- `360px` small mobile

For each viewport, check:

- No horizontal scrolling.
- No text overlap.
- No image overlap that appears accidental.
- Header/nav remains balanced.
- Footer links remain readable and tappable.
- Legal links do not crowd.
- Homepage collage is composed.
- About cards are not overly tall on mobile.
- Services rows wrap cleanly.
- Contact icons are grouped cleanly.
- Focus states are visible.

## Suggested Manual QA Flow

From the repository root, serve the static site:

```powershell
python -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

Visit:

- `/`
- `/about.html`
- `/services.html`
- `/contact.html`
- `/privacy-policy.html`
- `/terms-of-use.html`
- `/disclaimer.html`

Use browser responsive tools or Playwright screenshots to confirm the viewport list above.

## Final QA Checklist

- [ ] Root multi-page architecture is unchanged.
- [ ] `p1/` is untouched.
- [ ] No content, pricing, phone number, or legal meaning is invented.
- [ ] Homepage hero feels connected and premium on desktop.
- [ ] Homepage hero has a deliberate mobile composition.
- [ ] Hero video remains muted and respects reduced motion.
- [ ] About page starts sooner after the nav.
- [ ] About mobile team cards are less image-heavy.
- [ ] Services rows are calmer and easier to scan.
- [ ] Services rows do not imply unavailable interactivity.
- [ ] Contact panel remains dark, distinct, and balanced.
- [ ] Contact mobile icons are grouped intentionally.
- [ ] Legal pages have comfortable measure and calmer mobile headings.
- [ ] Header spacing is consistent across pages.
- [ ] Footer feels designed on desktop and mobile.
- [ ] No page has horizontal overflow.
- [ ] Keyboard focus states remain visible.

## Definition Of Done

The site still looks and feels like the selected Knead direction, but the layout has stronger discipline: tighter first impressions, calmer responsive behavior, more intentional spacing, and no architectural drift.
