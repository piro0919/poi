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

Rewrite the copy too: button labels, headings, empty states, errors, confirmations, helper text. Wording is half of the feel.

### Hard rules

- **No logos, no company or product names.** Do not add the company's logo, wordmark, product names, mascots, or trademarks. Transfer only color, spacing, shape and wording. Generic line icons drawn in the company's style (a state circle, a magnifier, a gear) are fine. The result must never pass as the real product.
- **Never change existing behavior.** Data fetching, saving, validation, routing and navigation stay exactly as they are. Do not remove features or fields.
- **UI-only state is allowed.** You may add state that lives entirely inside a screen and exists only for the look — open/closed, selected row, hover actions, a focused search box.
- **Do not add controls that promise features the app lacks.** Skip parts of a product's layout that have no backing data or action in this app: a workspace switcher, breadcrumbs, a "Learn" button, stars, hover actions, bulk-select checkboxes with no bulk actions. An inert control looks broken.
- Swapping a control for another one that holds the same state and options is allowed (a status `<select>` becoming filter chips). Do not change input types or validation attributes: `type="text"` to `type="email"` adds the browser's own validation and changes behavior.
- Keep the meaning of every piece of copy. Change how it is said, not what it says.
- Keep the app's own language. Example copy in a rule document written in another language shows the tone; carry the tone over instead of switching languages.
- Keep the user's own product name and domain terms.

## 5. Finish

Check that the project still type-checks and builds if it has those commands. Reply with one or two sentences saying it is done. Do not list which product was used for each screen.
