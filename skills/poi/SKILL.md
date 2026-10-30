---
name: poi
description: Restyle the UI of the current repository so it feels like a well-known product — color, spacing, shape AND wording and tone. Use when the user says things like "make it Google-ish", "Slack-ppoi", "make the settings screen feel like GitHub", "Gmail みたいな一覧にして", "Google っぽくして". Supported companies are the folders under styles/.
---

# Poi

Rewrite the screens of the current repository so they feel like the named company's products.
The goal is to **resemble** the company, not to become it.

## 1. Read the request

- **Company**: the company the user named. It must have a folder under `styles/` (next to this file). If it does not, say which companies are supported and stop.
- **Scope**: if the user named screens or components ("only the settings screen"), rewrite only those. Otherwise rewrite every screen in the repository.

## 2. Read the company's rules

Read `styles/<company>/company.md` first, in full. It holds the rules that apply to every product of that company — tone, button wording, error style, base colors and type — and the list of products that have their own rules.

## 3. Match each screen to a product

Survey the screens in scope and decide, per screen and per component, which of the company's products it is closest to. Use the "Use for" line of each product in `company.md`.

- Mix products freely: a customer list can follow the Gmail list while the search box above it follows Google Search.
- Look across all screens in scope before deciding, so similar screens get the same product.

Then read `styles/<company>/<product>.md` for every product you picked.

## 4. Rewrite

Apply the rules to the repository's own stack. The rule documents give values (hex colors, px sizes, radii) and example copy, not code; translate them into whatever the repository uses — Tailwind, CSS modules, plain CSS, a component library's theme, and so on. Prefer changing shared tokens and shared components over patching each screen.

Use the company's own icons. When its document names an icon package, add that package if the app does not have it, and replace the app's icons with it at the sizes, fill and colors the documents give. Where the documents name icons for a role (settings, people, edit, more), use those names. When no package is named, draw or pick icons that match the style the document describes. Add icons only where the product has them, such as before nav labels and on toolbar buttons; do not decorate every label.

An icon font glyph placed before text in an inline box (a status in a table cell, an icon before a link) takes over the box's baseline, and the whole box sits a couple of pixels off the line of plain text next to it. Make such a box block-level (`flex`, not `inline-flex`) or align it to the middle, and check that its text lines up with the cells beside it.

Use the company's own typeface only when it is distributed for free (the company documents say so and name where, such as Google Fonts); load it the way the repository loads fonts. When the company's typeface is not distributed, do not copy or imitate it: use the stack its document gives instead. Load a Japanese web font named in a stack only when the app shows Japanese text; otherwise leave it in the stack unloaded. When a stack names no Japanese font, Japanese text falls back to the OS's sans-serif, as on the real product; do not add one.

Rewrite the copy too: button labels, headings, empty states, errors, confirmations, helper text. Wording is half of the feel.

### Hard rules

- **No logos, no company or product names.** Do not add the company's logo, wordmark, product names, mascots, or trademarks. Transfer only color, spacing, shape and wording. Icons for ordinary things (a state circle, a magnifier, a gear) are fine; the marks an icon set lists as excluded in the company's document are not. The result must never pass as the real product. Example copy in the documents is quoted from the real product and sometimes contains its name (「Amazonカートは空です」); put the app's own name there or drop it.
- **Never change existing behavior.** Data fetching, saving, validation, routing and navigation stay exactly as they are. Do not remove features or fields.
- **UI-only state is allowed.** You may add state that lives entirely inside a screen and exists only for the look — open/closed, selected row, hover actions, a focused search box.
- **Do not add controls that promise features the app lacks.** Skip parts of a product's layout that have no backing data or action in this app: a workspace switcher, breadcrumbs, a "Learn" button, stars, hover actions, bulk-select checkboxes with no bulk actions. An inert control looks broken. The one exception is row selection where a product's document lists it as part of the product's look (the Gmail list): selecting rows is itself the UI-only state, so the checkboxes stay even with no bulk actions.
- Swapping a control for another one that holds the same state and options is allowed (a status `<select>` becoming filter chips, when the product's document uses chips in that place). Do not change input types or validation attributes: `type="text"` to `type="email"` adds the browser's own validation and changes behavior.
- Keep the meaning of every piece of copy. Change how it is said, not what it says.
- **Do not break the widths the app supports.** If a screen works at tablet (768px) or mobile (375px) width before the rewrite, it must still work there afterwards: no horizontal page scroll, no clipped or overlapping controls, every action still reachable. Where a product document describes its narrow layouts, use them at those widths. Where it has none for a width, keep the app's own layout there and apply only the company's colors, type and wording.
- **Keep the app's dark mode, and do not add one.** If the app switches to dark colors (a `prefers-color-scheme` query, a `dark` class, a theme toggle), every rewritten screen must still switch, in the same way and on the same trigger. Use the product's dark values where its document has them; where it has none, derive dark colors that keep the same contrast and accent. If the app has no dark mode, do not add one.
- Keep the app's own language. Example copy in a rule document written in another language shows the tone; carry the tone over instead of switching languages.
- Keep the user's own product name and domain terms.

## 5. Finish

Check that the project still type-checks and builds if it has those commands. Then check every rewritten screen at 1280px, 768px and 375px wide, if you have a way to view them, and in dark mode as well if the app has one. Reply with one or two sentences saying it is done. Do not list which product was used for each screen.
