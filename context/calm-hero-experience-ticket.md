# Calm Hero Experience Ticket

The selected Knead homepage should open with a premium calm hero experience adapted to the P1 design system.

## Required Design Reference

Use the installed `ui-ux-pro-max` Codex UI/UX skill as the design reference before implementing or revising this hero.

Apply the skill for:
- Responsive layout quality
- Accessibility
- Reduced-motion behaviour
- Visual hierarchy
- Contrast
- Performance-minded animation

Do not blindly apply generic colours or styles from the skill output if they conflict with Knead's selected P1 direction. The P1/Knead palette and brand tone remain the source of truth.

## Scope Lock

Only modify the homepage hero experience.

Allowed areas:
- The root `index.html` hero section
- Hero-specific CSS in `styles.css`
- Hero media assets in `assets/posts/` and `assets/video/`
- This ticket or directly related documentation

Do not modify:
- Header/navigation structure unless required for hero spacing
- About section
- Our professionals section
- Services section
- Contact section
- Team copy
- Service copy
- Contact details
- Shared logo or team portrait assets
- Preserved `p1/` source unless explicitly asked

## Objective

Create a therapeutic, welcoming first impression using:
- A centered calming video
- Five supplied reflection card assets
- Gentle ambient card motion
- A concise value proposition

## Implementation Notes

- The video is the emotional anchor and is loaded from `assets/video/calm-hero.mp4`.
- The video does not need sound. Prefer a video-only file with no audio track.
- The hero video element must remain `muted`, `autoplay`, `loop`, and `playsinline`.
- The five card images are loaded from `assets/posts/`.
- Cards are decorative storytelling elements, not controls.
- Cards must not be clickable, draggable, carousel items, tabs, or UI controls.
- Motion must remain subtle, slow, and respectful of `prefers-reduced-motion`.
- The surrounding UI should stay aligned with the selected P1 palette: warm white, soft cream, muted sage, earth tones, and Knead gold.

## Card Image Treatment

Remove excess whitespace around the supplied card artwork before or during display.

Rules:
- The cards should visually fill their card frames.
- Trim or crop only the surrounding empty whitespace/padding.
- Preserve the artwork, text, logo, colours, and rounded card feel exactly.
- Do not redraw, redesign, recolour, upscale aggressively, or reinterpret the cards.
- Do not crop into the readable text, frog artwork, or Knead logo.
- If creating processed display files, keep filenames clear and update references consistently.

## Required Assets

- `assets/video/calm-hero.mp4`
- `assets/video/calm-hero-poster.png`
- `assets/posts/i-miss-my-old-problems.png`
- `assets/posts/some-days-surviving-is-enough.png`
- `assets/posts/its-okay-to-take-up-space.png`
- `assets/posts/healed-people-heal-people.png`
- `assets/posts/progress-not-perfection.png`

## Acceptance Criteria

- Video is centered and visually anchors the hero.
- All five reflection cards surround the video in an organic arrangement.
- Cards preserve the supplied artwork exactly.
- Excess whitespace around the card artwork is removed so cards feel intentional and premium.
- No unrelated sections are changed.
- The `ui-ux-pro-max` skill has been used as the design-quality reference.
- Motion is ambient, slow, non-distracting, and GPU transform based.
- Reduced-motion users receive a static layout.
- The value proposition is short, calm, and secondary to the visual composition.
- Layout works across desktop, tablet, and mobile.
