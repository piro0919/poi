# Google — company-wide rules

Read this first for any Google-ish request. These rules hold across Google's products. Product files add the shapes of specific screens.

## Products

| Product | File | Use for |
| --- | --- | --- |
| Gmail | `gmail.md` | Lists of records people triage one by one: inboxes, tickets, leads, customers, notifications. Dense rows, bulk-select toolbar |
| Google Search | `search.md` | Search boxes, search results pages, global search in a header, filter chips on a results page (not above a table; see `cloud-console.md`) |
| Google Cloud console | `cloud-console.md` | Admin screens: data tables, settings pages, create/edit forms, left navigation with sections, dashboards |

When in doubt for a B2B admin app, the app shell (header, left nav, page panel) follows `cloud-console.md`, and individual lists or search boxes borrow from Gmail or Search.

When products are mixed, **the shell product's palette wins everywhere**. The other products lend shapes, layout and copy only. A Gmail-style list inside a Cloud console shell uses Cloud console colors (navy text, `#b7c3e0` dividers), not Gmail's neutral grays. The header search field likewise follows the shell product, not `search.md`. Behavior that is part of a shape goes with the shape: a Gmail-style list inside a Cloud console shell keeps Gmail's row hover (the row lifts with Gmail's shadow, with the shell's divider color for the 1px side lines), even though the console's own tables use a flat fill.

## Feel in one paragraph

Quiet, roomy and flat. White or very light tinted surfaces, almost no shadows, soft rounded corners, one calm blue for the primary action, and text that does the work instead of decoration. Nothing shouts: weight 500 is the loudest a label gets, headings are regular weight (400) and simply larger.

## Type

- Family: **Google Sans Flex** for app UI (Cloud console), **Google Sans** for consumer UI (Search, Gmail). Both are on Google Fonts. Fallback stack: `"Google Sans Flex", "Google Sans", Roboto, Arial, sans-serif`. The stacks name no Japanese font: Japanese text in Gmail and the Cloud console falls back to the OS's sans-serif (computed styles, 2026-10-31). Do the same rather than adding one. Loaded through Next.js's `next/font/google`, Google Sans Flex makes every build print "Failed to find font override values"; the font still loads, and the warning can be left.
- Base text: 14px / 20px, weight 400. Almost everything in an app is 14px.
- Small text (helper text, captions, metadata): 12px / 16px or 12px / 20px.
- Labels on buttons, tabs, nav items, column headers: 14px weight **500**.
- Headings use weight 400, not bold: page section heading 22px / 28px; card or group heading 18–20px. The one exception is the page title in the panel header (the screen's `h1`): 18px weight 500.
- Never use 700 for headings. 700 appears only for unread items in Gmail.

## Shape

- Buttons and nav items: radius **12px** (Cloud console) or fully rounded pills (Search, Gmail chips).
- Search fields: fully rounded (9999px).
- Icon buttons: 40×40 circles, no visible background until hover.
- Cards and panels: large radius (16–20px) on the outer page panel, flat inside it. Prefer dividers and whitespace over boxed cards.
- Icons: Material Symbols; see "Icons" below.
- Shadows: avoid. The only measured shadows are a faint lift under a floating search box (`0 3px 10px rgba(31,31,31,.08)`) and 1px hairline dividers.

## Icons

Use Material Symbols (Apache-2.0): the `material-symbols` or `@material-symbols/svg-400` package, or the Material Symbols font from Google Fonts. Add one if the app has none. Google Search draws its icons from Material Symbols (`viewBox="0 -960 960 960"`); the Cloud console loads Google's own symbol font and Gmail older 24px icons, but both look like Material Symbols at the sizes below. Never draw the multicolor product logos (the Gmail "M", the Cloud hexagon).

Whether icons are filled or outlined, and their size, depends on the product; each product file says which. Icons take the color of the text next to them: secondary text color in navigation and lists, button blue inside text buttons, 38% when disabled.

Icon names below were identified by eye from screenshots, not read from the page.

## Color roles

Product files give exact palettes, light and dark. Shared roles:

- Primary action: filled blue button, white text. One per view.
- Secondary actions: outlined (1px light border) or text-only buttons in the same blue.
- Links: blue, no underline until hover, except inline links inside explanatory sentences, which are underlined.
- Disabled: the normal text color at 38% opacity. Disabled actions stay visible in toolbars ("Remove access" greyed out next to "Grant access").
- Status uses small colored icons or text, not bright filled badges.

## Wording and tone

Measured from Cloud console, Search and Gmail screens.

- **Sentence case** for buttons, tabs, headings, column headers and menu items: "Create service account", "Grant access", "View by principals", "Recommendations history", "Show more". Only proper names of features keep capitals.
- **Verb + object** for actions: "Grant access", "Remove access", "Enable APIs and services", "Create and continue". Avoid bare "Submit", "OK", "Yes".
- When a form has two ways to finish, say what happens: "Create and continue" vs "Create and close". Cancel is just "Cancel".
- **Helper text** under a field is a short phrase without a final period: "Display name for this service account", "Describe what this service account will do".
- **Explanations** are one plain sentence with a period, followed by "Learn more": "These permissions affect this project and all of its resources. Learn more".
- Optional parts are marked "(optional)" in secondary text color, e.g. "Permissions (optional)". Required fields end the label with a space and an asterisk: `Service account ID *`.
- Page headings can name the scope in quotes: 'Permissions for project "shodolog"'.
- Shortcuts are shown in placeholders and tooltips in parentheses: "Search (/) for resources, docs, products, and more".
- No exclamation marks, no "Successfully", no "Error:" prefixes, no "Please". State the fact or the next step.
- Japanese UI follows the same restraint: 「作成」「もっと見る」「詳細を表示」, settings phrased as 「〜を有効にする」「〜を表示する」, labels ending in a colon 「表示件数:」.

### Rewrites for common AI-default copy

| Default | Google-ish |
| --- | --- |
| + Add Customer | Add customer |
| Submit | Add (or the specific verb: Create, Save, Send) |
| Save Changes | Save |
| Saving... | Saving… |
| Settings saved successfully! | Settings saved |
| Error: Invalid email. | Enter a valid email address |
| Error: All fields are required. | Fill in all required fields (still one message; give each empty field the error border) |
| No data found. | No customers match your search |
| Are you sure? / This action cannot be undone. | Delete workspace? / This permanently deletes the workspace and all of its data. You can't undo this. |
| Yes, Delete | Delete |
| Danger Zone | (no scary heading. In a Cloud console shell, a "Delete workspace" button in the panel header; see `cloud-console.md`. Elsewhere, a plain section title such as "Delete workspace") |
| Manage your customers here. | (drop it, or one useful sentence with "Learn more") |
| ← Back | (an arrow icon button left of the page title) |

## Not captured yet

No reference screen showed these, so there are no measured values. Keep them quiet and consistent with the rest; do not invent loud styles:

- Error text on a form field in Gmail and Search, and status colors in either; neither showed one. The Cloud console's are in `cloud-console.md`; in an app shaped like the console, use those
- Record detail pages (label and value lists)

## Sources

Icons were read the same day from the Cloud console IAM page, the Gmail inbox and a Search results page: SVG sizes, viewBox and colors as computed styles, names by eye from screenshots. Captured 2026-10-30 in a 1280×900 window: Google Search home (light, signed out), Google Search results (dark theme, signed in; layout and copy only), Gmail inbox and settings (dark theme, Japanese UI; layout and copy only), Google Cloud console IAM, APIs & Services, Create service account and IAM settings (light). Error message styling was not captured. Narrow layouts were captured the same day at 768×1024 in a desktop browser and at 375×812 with an iPhone user agent: Search results, Gmail inbox and settings, and the Cloud console IAM page and Create service account form. Dark palettes were measured the same day at 1280×900: Search home and results and the Cloud console IAM page and Create service account form with the browser set to dark, and the Gmail inbox in the account's own dark theme. Nothing was created. On 2026-10-31, the Cloud console's status colors, hover fills, destructive button, modal backdrop and dialog surface were read from the console's own design tokens on the IAM page (each token holds its light and dark value). The same day, a field error was triggered on Create service account by typing an invalid ID (nothing was submitted), and the column display popover on IAM was opened and closed; both were read as computed styles. Also on 2026-10-31, Gmail's create label dialog was opened, typed into and cancelled (nothing was created), and its row hover, selected row and toast were read from its stylesheet in the dark theme. Search's suggestions were opened by typing in the home search box, and a no-results page was produced with a quoted nonsense query; both in dark, signed in, English UI. The Cloud console's project picker was opened and cancelled on IAM, in light and dark. Later the same day, with the owner's permission, Gmail's theme was switched to the default and Search's dark theme turned off, the light inbox, toast rules, suggestions and no-results page were read, and both settings were switched back. Later still on 2026-10-31, the Cloud console was opened in English with `?hl=en` (the account's language was not changed): on IAM, the header search field's computed style before and after focus, its English labels, and the focus and disabled design tokens; on Create service account, the filled "Create and close" button's hover layer and the focused floating label's color, as computed styles. Nothing was created.
