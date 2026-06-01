# Multi-Page Homepage And Navigation Ticket

## Summary

The client wants Knead to move from the current one-page homepage structure to separate HTML page locations. The homepage should have its own HTML page, and the top menu should navigate to other HTML pages instead of in-page anchor sections.

The header should also be simplified by removing the top-right Connect button.

## Current State

- The root `index.html` currently acts as a single-page site.
- Header navigation points to in-page anchors:
  - `#about`
  - `#services`
  - `#contact`
- The header includes a separate `Connect` CTA button.
- About, Services, and Contact content currently live as sections inside the homepage.

## Objective

Create a cleaner multi-page site structure where:

- The homepage has its own HTML file.
- Top navigation links move users to separate HTML page locations.
- The header no longer includes a standalone Connect button.
- Contact actions use email and call icons instead of displaying contact text.
- The navigation remains simple, calm, and consistent with the selected Knead direction.

## Proposed Page Structure

Assumption for implementation unless the client specifies otherwise:

- `index.html` remains the homepage.
- `about.html` contains About and Our Professionals content.
- `services.html` contains Services content.
- `contact.html` contains Contact content.

## Scope

Allowed changes:

- Root HTML files needed for the multi-page structure.
- Shared navigation/header links across those HTML files.
- CSS needed to keep the header and page spacing consistent.
- Internal links between homepage, About, Services, and Contact.
- Documentation directly related to this navigation change.

Avoid changing unless specifically required:

- Logo assets.
- Team copy.
- Service names or descriptions.
- Contact email or Instagram URL.
- Hero media assets.
- Preserved `p1/` prototype source.

## Implementation Notes

- Remove the header `Connect` button from all active pages.
- Keep the colourful Knead logo in the menu bar.
- The menu should use page links rather than section anchors.
- Suggested header links:
  - Home: `index.html`
  - About: `about.html`
  - Services: `services.html`
  - Contact: `contact.html`
- Reuse shared CSS rather than creating separate page-specific styles unless necessary.
- Preserve the calm hero experience on the homepage.
- Keep page text minimal and avoid adding new service details not supplied by the client.
- Replace visible email/contact text actions with icons where contact actions appear.
- The email icon should link to `mailto:kneadspace@gmail.com`.
- The call icon should be visible only if useful for the design, but must not navigate, dial, submit, or trigger anything while no phone number is available.
- If the call icon is shown without a phone number, make it clearly non-interactive for accessibility, for example `aria-disabled="true"` on a non-link element or equivalent inert treatment.
- Use accessible labels for icon-only actions, such as `aria-label="Email Knead"` and `aria-label="Phone number not available yet"`.

## Open Clarification

Before implementation, confirm whether the client wants:

- A visible `Home` link in the menu, or only logo-click-to-home plus About, Services, and Contact links.

Recommended default:

- Keep the logo as the home link.
- Show only About, Services, and Contact in the text navigation.

## Acceptance Criteria

- Homepage remains available at `index.html`.
- About, Services, and Contact each have their own HTML page.
- Header navigation links to HTML pages, not `#` anchors.
- Header no longer includes the Connect button.
- Colourful Knead logo remains in the header.
- Email is represented by an icon-only action that opens a message to `kneadspace@gmail.com`.
- Call is represented by an icon-only non-action while no phone number exists.
- No phone number is invented.
- Content from the current sections is preserved on the correct pages.
- No invented copy, phone number, pricing, or service descriptions are added.
- Layout works on mobile, tablet, and desktop.
- Keyboard focus states remain visible.
- There is no horizontal overflow at common viewport widths.
- Preserved `p1/` source is not modified.
