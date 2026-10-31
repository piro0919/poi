# Google Cloud console

Use for the app shell of an admin product and for its tables, forms and settings pages.

## Palette (light)

| Role | Value |
| --- | --- |
| App background (behind the panel, header, left nav) | `#f1f5fd` — a very light blue; nav and header sit directly on it |
| Page panel | `#ffffff` |
| Table header row, subtle fills | `#e9eef6` |
| Search field in header | `#dde3ea`, 1px `#b7c3e0` border |
| Selected nav item | `#dbedfc` fill and a 3–4px `#545f72` bar at the left edge |
| Primary text | `#1b2e5d` (deep navy, not black) |
| Secondary text, nav labels, icons-with-text | `#475569` |
| Icon buttons | `#545f72` |
| Links | `#3d60b8` |
| Text and outlined buttons | `#314f9b` text |
| Primary filled button | `#496cc3` background, `#ffffff` text. Hover lays white at 8% over the fill (measured on "Create and close") |
| Outline border (buttons) | `#b7c3e0` |
| Input border | `#8496c1`; focused 2px `#496cc3`, and the floating label turns `#314f9b` |
| Dividers | `#b7c3e0` at 1px, or the panel edge |
| Disabled | `#1b2e5d` at 38%. Disabled filled buttons (design tokens): fill `rgba(60,64,67,.12)`, label `rgba(60,64,67,.38)` |
| Focus outline | `#4058b5` (design token) |
| Hover / pressed fill | Neutral surfaces `rgba(60,64,67,.04)` / `rgba(60,64,67,.1)`; blue (link-colored) controls `rgba(12,103,223,.04)` / `rgba(12,103,223,.1)` |
| Status: success | `#108463` text and icon; light fill `#e5f7f6` |
| Status: warning | `#c64415`; light fill `#fff6d6` |
| Status: error | `#c61f74` (a pink red, not Material red); light fill `#ffeff2` |
| Status: info, in progress | `#0082ed`; light fill `#e8f5fe` |
| Destructive filled button | `#d9257f` background, white text |
| Modal backdrop | `rgba(0,0,0,.32)` on the project picker; the design token says `rgba(0,0,0,.6)` |
| Dialog and popover surface | `#f5f8fc` for modal dialogs (token, and measured on the project picker); `#f0f5fe` measured on a popover, radius 12px, shadow `0 1px 2px rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)` |

Everything is tinted navy-blue. Avoid pure black text and neutral grays.

## Palette (dark)

Use only when the app already has a dark mode. The console's dark theme, which follows the browser's dark setting. Slate greys with a blue tint, never black; the panel is lighter than the app background around it.

| Role | Value |
| --- | --- |
| App background (behind the panel, header, left nav) | `#282c32` |
| Page panel | `#353b43` |
| Table header row | `#414d5e`, with a 1px `#50638b` line under it |
| Search field in header | `#4c4f5c`, 1px `#50638b` border |
| Selected nav item | `#2a3f5e` fill and a 4px `#9ca6b2` bar at the left edge |
| Primary text | `#f1f4f9` |
| Secondary text, nav labels, icons | `#b9c0cc` |
| Links | `#e5ebff`, underlined inside sentences |
| Text and outlined buttons | `#a8baff` text |
| Primary filled button | `#839cff` background, `#1b2e5d` text |
| Outline border (buttons) | `#50638b` |
| Input border | `#b7c2e8`; focused 2px `#839cff`, and the floating label turns `#a8baff` |
| Dividers | `#50638b` at 1px |
| Disabled | `#f1f4f9` at 38%. Disabled filled buttons (design tokens): fill `rgba(232,234,237,.12)`, label `rgba(232,234,237,.38)` |
| Focus outline | `#a9b8ff` (design token) |
| Hover / pressed fill | Neutral `rgba(232,234,237,.04)` / `rgba(232,234,237,.1)`; blue controls `rgba(138,180,248,.04)` / `rgba(138,180,248,.1)` |
| Status: success | `#6eebbf`; fill `#275f5c` |
| Status: warning | `#ffdf82`; fill `#736b3f` |
| Status: error | `#ffb8db`; fill `#7d4560` |
| Status: info, in progress | `#4da3ff`; fill `#344b63` |
| Destructive filled button | `#b6213c` background, `#f1f4f9` text |
| Modal backdrop | `rgba(0,0,0,.32)` on the project picker; the design token says `rgba(0,0,0,.75)` |
| Dialog surface | `#3c444e` (token, and measured on the project picker) |

## Layout

The project pill, breadcrumb, "Learn" button and table checkbox column below appear only when the app has something behind them: workspaces to switch, nested pages, help to link to, bulk actions.

- **Header**: 56–64px tall on the app background. Left: menu icon button, product name, a pill showing the current project/workspace (outlined, fully rounded). Center: a wide search field (`#dde3ea`, placeholder with shortcut, a magnifier and a "Search" label inside at the right, 「検索」 in the Japanese UI). The placeholder in English: "Search (/) for resources, docs, products, and more". At 1280px it is about 704px wide (x 340–1044), 36px tall, with 12px corners: a rounded rectangle, not a pill (computed style, light, 2026-10-31). Focused, it keeps its fill and gets no ring; the console widens it into a panel of suggestions with its bottom corners squared. An app without suggestions leaves the field as it is on focus. Right: 40px circular icon buttons and the avatar.
- **Breadcrumb** under the header in 14px secondary text: "IAM & Admin / IAM".
- **Left nav** (~256px) on the app background: section name with an icon at the top (22px, regular), then collapsible groups. Group headers are 14px weight 500 with a chevron on the right. Items are 36px tall, 14px weight 500, `#475569`, 12px radius; the selected item gets the `#dbedfc` fill and a 3–4px `#545f72` bar at the left edge of the nav. Each item may show a "more" (⋮) icon on the right.
- **Page panel**: white, top corners radius 20px, starts right of the nav with 16px gap and stops 16px short of the window's right edge (measured at 1280px wide: x 272–1264, top 81). It runs to the bottom of the window with no bottom margin. Content padding 24px.
  - Keep the 16px strip of app background between the nav and the panel even when the app has no breadcrumb and the panel moves up under the header. The light blue showing on both sides is what makes the panel read as a raised sheet; a trial that put the panel flush against the nav (x 256) lost it (2026-10-31).
- Selected nav items keep weight 500 like the rest; only the fill and the left bar change.
- **Panel header**: page title 18px weight 500, optional back arrow icon button on its left, one outlined helper button ("Learn") on the right.
- **Tabs** below the title: 14px weight 500, link blue text, the active tab has a 2–3px underline in the same blue; a 1px divider runs under the tab row.

## Tables

- Toolbar above the table: text buttons with a leading icon ("Grant access", "Remove access"), 28px tall, 14px weight 500, `#314f9b`. Disabled ones stay in place, greyed.
- Filter row: a filter icon + "Filter" label followed by an inline input "Enter property name or value". Help (?) and column-display icon buttons on the far right.
- Any filter the app already has (a status select, a search box) moves into this filter row. Do not turn it into a row of filter chips above the table: the console's tables do not use chips, and a trial that did (2026-10-30) looked like Material, not like the console.
- Header row: 29px tall (measured on IAM, 2026-10-30), `#e9eef6` fill, 14px weight 500 primary text, sort arrow next to the sorted column. Checkbox column first.
- Body rows: 29px tall (measured on IAM, 2026-10-30), 14px regular, white, 1px divider between rows. The table is dense; a 40px row already reads as a different product. No zebra striping, no hover shadows. Edit is a pencil icon at the end of the row.
- Names that open a detail page are links (`#3d60b8`).

## Forms

- Outlined text fields, 36px tall, radius 8px (top corners 4px when a floating label is used), border `#8496c1`. The label sits inside the field as placeholder and floats to the top border when focused, at about 11px in secondary text color.
- Helper text under the field: 12px, starts 12px from the field's left edge.
- Errors (measured on Create service account, 2026-10-31): the field's 1px border and its floating label turn the error color (`#c61f74`, dark `#ffb8db`). Under the field, each problem is its own line: a small filled circle with "!" in the error color, then the message in 12px / 16px regular, same color. Several errors stack, one per rule broken. Each states the rule as a full sentence; seen only in the Japanese UI: 「サービス アカウント ID は 6～30 文字で指定してください。」
- Dialogs: right-aligned actions at the bottom, Cancel (outlined) first and the confirming button (filled) last, 8px apart, 32px tall, radius 12px (measured on the column display popover). A destructive confirmation uses the destructive filled button.
- Modal dialogs (measured on 「プロジェクトを選択」, the project picker, opened and cancelled on 2026-10-31): radius 16px, no shadow, 800px wide in a 1280px window. Title 18px / 24px weight 500 in primary text, 24px from the left edge, with header actions (an outlined button) at the top right. Content runs to the dialog's edges (a search field, tabs, a table); Cancel is an outlined button 8px from the bottom right corner.
- Field width ~480px, not full width.
- Multi-step creation is a vertical stepper: numbered circles (filled navy for the current step, gray for later), step titles 22px regular with "(optional)" in secondary color.
- Actions at the bottom left: primary filled ("Create and close") then outlined ("Cancel"), 32px tall, radius 12px, 14px weight 500, padding 0 12px, 8px gap.
- Settings pages (measured on IAM & Admin > Settings, 2026-10-30):
  - The first group of fields sits right under the page title, with no heading of its own.
  - Actions on the whole object ("Migrate", "Shut down"; in an app, deleting the workspace) are outlined buttons with a leading icon in the panel header, right after the title: 32px tall, radius 12px, 14px weight 500. They are not a separate "danger" section at the bottom of the page. Destructive actions are ordinary outlined buttons with a clear verb, not red blocks; the confirmation dialog carries the warning.
  - Later sections have a 22px regular heading, a one-sentence description, and outlined buttons for their own actions. Sections are separated by space only, with no divider lines.

## Dashboards

- Charts sit in plain bordered cards (1px `#b7c3e0`, radius 12px) with a 16px regular title ("Traffic", "Errors", "Median latency") and icon buttons at the top right.
- Time range is a row of text options ("1 hour", "6 hours", "1 day" …) with the selected one in button blue.
- Numbers use regular weight; do not make big bold stat cards.
- Charts (measured on APIs & Services: the dashboard and an API's metrics page, 2026-10-31):
  - Lines only, about 2px, with no fill under them. Each series is one color, in this order:

    | Series | Light | Dark |
    | --- | --- | --- |
    | 1st | `#0c67df` | `#8ab4f8` |
    | 2nd | `#af5cf7` | `#c58af9` |
    | 3rd | `#689f38` | `#aed581` |

  - Horizontal grid lines only, 1px `#dadce0` (dark `#5f6368`). The x axis is a 1px `#80868b` line (dark `#e8eaed`). Axis labels are small text in `#475569` (dark `#b9c0cc`); the value labels sit on the right edge, the dates under the axis.
  - The legend sits under the chart, one series per line: a short line in the series color with a marker on it (circle, then square, then diamond), then the series name and its value ("200: 0.0007/s"). The last point of each line carries the same marker.
  - Only the first three series were seen; a fourth color was not captured.

## Icons

Material Symbols, **filled** in the navigation and on actions, outlined only for help and the header's notification bell. Sizes and colors are computed styles; names were identified by eye.

- Header: 24px, `#475569` (menu) and `#545f72` (search and the icon buttons on the right): `menu`, `search`, `terminal`, `notifications` (outlined), `more_vert`.
- Left nav: 18px, `#475569`, one icon before every item: `person_add` (IAM), `group`, `shield`, `list`. The section header has a 24px icon in primary text color and a `left_panel_close` toggle.
- Toolbar text buttons: 18px filled icon in button blue `#314f9b` before the label: `person_add` "Grant access", `person_remove` "Remove access" (38% when disabled). "Learn" carries `school`.
- Filter row and table: `filter_list` before "Filter"; `help` (outlined) and `view_column` on the right; `arrow_upward` next to the sorted column; `edit` at the end of a row; a 18px `person` as the type of a row.
- Back to the parent page: a 24px `arrow_back` in button blue.

## Copy seen here

"Grant access", "Remove access", "View by principals", "View by roles", "Include Google-provided role grants", "Create and continue", "Create and close", "Cancel", "Enable APIs and services", "Learn", "Learn more", "Filter", "Enter property name or value", "Display name for this service account", "These permissions affect this project and all of its resources."

## Narrow widths

Measured at 768px in a desktop browser and at 375px in an iPhone browser.

- **Tablet (768px)**:
  - The left nav is gone; the menu icon in the header opens it. The page panel spans the width with the same 16px side gaps.
  - The header keeps the product name and the project pill, and turns the search field into a search icon button.
  - The breadcrumb, panel header and tabs keep their desktop shape.
  - A table wider than the panel scrolls sideways inside the panel with its own scrollbar. The page itself does not scroll sideways.
- **Phone (375px)**:
  - Header 49px: the menu icon, the product name, then search, notification and ⋮ icon buttons. The project pill moves into the breadcrumb row as an icon with a caret.
  - The panel keeps its rounded top corners, with 16px side gaps and content inset to about 40px from the window edge.
  - Tabs that do not fit scroll sideways between ‹ and › arrow buttons.
  - Checkboxes and helper actions stack under the title, each on its own line.
  - Create forms keep the numbered steps down the left. Fields fill the panel width.
