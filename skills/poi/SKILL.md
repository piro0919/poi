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

When the app is built on a component library (Element Plus, Ant Design, MUI, Vuetify), restyle it through the library's own theme: its CSS variables or theme object, with the whole scale it derives from a color (Element Plus's `--el-color-primary` along with its `-light-3` to `-light-9` and `-dark-2`), not by overriding each component's classes. Check that your overrides load after the library's stylesheet, since at equal specificity the later one wins, and that nothing in the app sets the same variables at run time (a theme picker writing them onto the root element) in a way that would undo them.

Keep each file's line endings. A file with CRLF line endings stays CRLF after you edit it.

Use the company's own icons. When its document names an icon package, add that package if the app does not have it, and replace the app's icons with it at the sizes, fill and colors the documents give. Where the documents name icons for a role (settings, people, edit, more), use those names. When no package is named, draw or pick icons that match the style the document describes. When the package ships SVGs (`@material-symbols/svg-400`, `@primer/octicons-react`), import only the icons you use as SVG components rather than loading an icon font; follow an icon font only when the app already uses one. A package of plain `.svg` files (`@material-symbols/svg-400`) needs a loader such as SVGR to import them as components; when the app has none, do not add a loader: copy the path data of each icon you use into small components of your own, and do not add the package, since nothing would import it. Add icons only where the product has them, such as before nav labels and on toolbar buttons; do not decorate every label.

An icon font glyph placed before text in an inline box (a status in a table cell, an icon before a link) takes over the box's baseline, and the whole box sits a couple of pixels off the line of plain text next to it. Make such a box block-level (`flex`, not `inline-flex`) or align it to the middle, and check that its text lines up with the cells beside it.

Use the company's own typeface only when it is distributed for free (the company documents say so and name where, such as Google Fonts); load it the way the repository loads fonts. When the company's typeface is not distributed, never copy its font files: use the stack its document gives instead. That stack may start with a free look-alike for Latin text, an independent typeface on Google Fonts that shares the original's proportions; load it the way the repository loads fonts, use it only for the text the document names (such as an English UI), and keep the rest of the stack after it as the fallback. Do not pick a look-alike of your own when the document names none, and never use a typeface made to clone the company's. Load a Japanese web font named in a stack only when the app shows Japanese text; otherwise leave it in the stack unloaded. When a stack names no Japanese font, Japanese text falls back to the OS's sans-serif, as on the real product; do not add one.

Rewrite the copy too: button labels, headings, empty states, errors, confirmations, helper text. Wording is half of the feel.

### Hard rules

- **No logos, no company or product names.** Do not add the company's logo, wordmark, product names, mascots, or trademarks. Transfer only color, spacing, shape and wording. Icons for ordinary things (a state circle, a magnifier, a gear) are fine; the marks an icon set lists as excluded in the company's document are not. The result must never pass as the real product. Example copy in the documents is quoted from the real product and sometimes contains its name (「Amazonカートは空です」); put the app's own name there or drop it.
- **Never change existing behavior.** Data fetching, saving, validation, routing and navigation stay exactly as they are. Do not remove features or fields. This wins over a product document: when a document says a button stays disabled until the input is valid (Slack, Gmail) and the app instead lets it be pressed and then shows an error, keep the button pressable.
- **UI-only state is allowed.** You may add state that lives entirely inside a screen and exists only for the look — open/closed, selected row, hover actions, a focused search box.
- A key that only moves focus to the search field ("/") is UI-only state too. When the product shows that hint in its search placeholder, add the key along with the hint; ignore it while the user is typing in a field.
- **Do not add controls that promise features the app lacks.** Skip parts of a product's layout that have no backing data or action in this app: a workspace switcher, breadcrumbs, a "Learn" button, stars, hover actions, bulk-select checkboxes with no bulk actions, a "Learn more" link with no page to point to. An inert control looks broken. The one exception is row selection where a product's document lists it as part of the product's look (the Gmail list): selecting rows is itself the UI-only state, so the checkboxes stay even with no bulk actions.
- A create button that belongs to one screen ("Add customer") goes at the right of that screen's heading row, styled the way the company's document styles a screen's create button (GitHub's green primary, Slack's white default button); when the document says nothing about it, use the primary button. A product's large button in the left navigation (Gmail's Compose, X's Post) is only for an action the whole app has, available from every screen.
- When the app shows one error for the whole form ("Error: All fields are required."), keep it one message: do not split it into per-field messages. Reword it in the company's tone, show it under the form in the company's error color and shape, and give the fields it refers to the error border.
- Mark required fields the way the company's document does (Google's trailing " *") even when the app did not mark them, but only on fields the app already requires: a `required` attribute, or a field whose emptiness the app reports as an error. This changes the label, not the validation.
- Swapping a control for another one that holds the same state and options is allowed (a status `<select>` becoming filter chips, when the product's document uses chips in that place). Do not change input types or validation attributes: `type="text"` to `type="email"` adds the browser's own validation and changes behavior.
- Keep the meaning of every piece of copy. Change how it is said, not what it says. The one exception is a description under a heading that the company's document says to drop ("Manage your customers here."), or that the product's heading has no room for (X's title and count): drop it. Keep any note that carries real information, such as a limit or a consequence.
- **Do not break the widths the app supports.** If a screen works at tablet (768px) or mobile (375px) width before the rewrite, it must still work there afterwards: no horizontal page scroll, no clipped or overlapping controls, every action still reachable. Where a product document describes its narrow layouts, use them at those widths. Where it has none for a width, keep the app's own layout there and apply only the company's colors, type and wording.
- **Keep the app's dark mode, and do not add one.** If the app switches to dark colors (a `prefers-color-scheme` query, a `dark` class, a theme toggle), every rewritten screen must still switch, in the same way and on the same trigger. Use the product's dark values where its document has them; where it has none, derive dark colors that keep the same contrast and accent. If the app has no dark mode, do not add one.
- Do not lose a warning. When a document says states are shown without color, a warning or failure state that the app already set apart by color (overdue, failed, error) keeps the company's error color. Other states follow the document.
- Keep the app's own language. Example copy in a rule document written in another language shows the tone; carry the tone over instead of switching languages.
- Wording rules about particular words are written for the languages the documents measured, English and Japanese. In any other language, follow how the company's own UI reads in that language rather than translating the rule: Google's English drops "Please", but its Chinese keeps 请 in errors, placeholders and notes (「请输入电子邮件地址或电话号码」「请描述您遇到的问题」). Keep the ordinary polite forms of the app's language.
- Keep the user's own product name and domain terms.

## 5. Finish

Check that the project still type-checks and builds if it has those commands. Then check every rewritten screen at 1280px, 768px and 375px wide, if you have a way to view them, and in dark mode as well if the app has one. Reply with one or two sentences saying it is done. Do not list which product was used for each screen.
