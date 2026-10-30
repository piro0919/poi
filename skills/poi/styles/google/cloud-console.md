# Google Cloud console

Use for the app shell of an admin product and for its tables, forms and settings pages.

## Palette (light)

| Role | Value |
| --- | --- |
| App background (behind the panel, header, left nav) | `#f1f5fd` — a very light blue; nav and header sit directly on it |
| Page panel | `#ffffff` |
| Table header row, subtle fills | `#e9eef6` |
| Search field in header | `#dde3ea` |
| Selected nav item | `#dbedfc` fill |
| Primary text | `#1b2e5d` (deep navy, not black) |
| Secondary text, nav labels, icons-with-text | `#475569` |
| Icon buttons | `#545f72` |
| Links | `#3d60b8` |
| Text and outlined buttons | `#314f9b` text |
| Primary filled button | `#496cc3` background, `#ffffff` text |
| Outline border (buttons) | `#b7c3e0` |
| Input border | `#8496c1`; focused 2px `#496cc3` |
| Dividers | `#b7c3e0` at 1px, or the panel edge |
| Disabled | `#1b2e5d` at 38% |

Everything is tinted navy-blue. Avoid pure black text and neutral grays.

## Layout

- **Header**: 56–64px tall on the app background. Left: menu icon button, product name, a pill showing the current project/workspace (outlined, fully rounded). Center: a wide rounded search field (`#dde3ea`, 9999px radius, placeholder with shortcut). Right: 40px circular icon buttons and the avatar.
- **Breadcrumb** under the header in 14px secondary text: "IAM & Admin / IAM".
- **Left nav** (~256px) on the app background: section name with an icon at the top (22px, regular), then collapsible groups. Group headers are 14px weight 500 with a chevron on the right. Items are 36px tall, 14px weight 500, `#475569`, 12px radius; the selected item gets the `#dbedfc` fill and a 3–4px `#545f72` bar at the left edge of the nav. Each item may show a "more" (⋮) icon on the right.
- **Page panel**: white, top corners radius 20px, starts right of the nav with 16px gap and stops 16px short of the window's right edge (measured at 1280px wide: x 272–1264, top 81). It runs to the bottom of the window with no bottom margin. Content padding 24px.
- Selected nav items keep weight 500 like the rest; only the fill and the left bar change.
- **Panel header**: page title 18px weight 500, optional back arrow icon button on its left, one outlined helper button ("Learn") on the right.
- **Tabs** below the title: 14px weight 500, link blue text, the active tab has a 2–3px underline in the same blue; a 1px divider runs under the tab row.

## Tables

- Toolbar above the table: text buttons with a leading icon ("Grant access", "Remove access"), 28px tall, 14px weight 500, `#314f9b`. Disabled ones stay in place, greyed.
- Filter row: a filter icon + "Filter" label followed by an inline input "Enter property name or value". Help (?) and column-display icon buttons on the far right.
- Header row: `#e9eef6` fill, 14px weight 500 primary text, sort arrow next to the sorted column. Checkbox column first.
- Body rows: 36–40px, 14px regular, white, 1px divider between rows. No zebra striping, no hover shadows. Edit is a pencil icon at the end of the row.
- Names that open a detail page are links (`#3d60b8`).

## Forms

- Outlined text fields, 36px tall, radius 8px (top corners 4px when a floating label is used), border `#8496c1`. The label sits inside the field as placeholder and floats to the top border when focused, at about 11px in secondary text color.
- Helper text under the field: 12px, starts 12px from the field's left edge.
- Field width ~480px, not full width.
- Multi-step creation is a vertical stepper: numbered circles (filled navy for the current step, gray for later), step titles 22px regular with "(optional)" in secondary color.
- Actions at the bottom left: primary filled ("Create and close") then outlined ("Cancel"), 32px tall, radius 12px, 14px weight 500, padding 0 12px, 8px gap.
- Settings pages: sections with a 22px regular heading, a one-sentence description, and outlined buttons for each action ("Migrate", "Shut down"). Destructive actions are ordinary outlined buttons with a clear verb, not red blocks.

## Dashboards

- Charts sit in plain bordered cards (1px `#b7c3e0`, radius 12px) with a 16px regular title ("Traffic", "Errors", "Median latency") and icon buttons at the top right.
- Time range is a row of text options ("1 hour", "6 hours", "1 day" …) with the selected one in button blue.
- Numbers use regular weight; do not make big bold stat cards.

## Copy seen here

"Grant access", "Remove access", "View by principals", "View by roles", "Include Google-provided role grants", "Create and continue", "Create and close", "Cancel", "Enable APIs and services", "Learn", "Learn more", "Filter", "Enter property name or value", "Display name for this service account", "These permissions affect this project and all of its resources."
