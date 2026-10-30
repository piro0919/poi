# github.com

Use for the app shell, record lists, filter bars and settings pages.

## App shell

- **Global header**: 64px, black `#000000` (signed-out) or `#f6f8fa` with a bottom border (signed-in style; prefer this for an app). Left: logo slot (use the app's own mark), then nav. Right: a search button styled as an input — 32–36px, 6px radius, 1px border, "Search or jump to…" with a "/" key hint at the right — then icon buttons and the avatar.
- **Context header**: a breadcrumb in 14px — owner in regular, current item in weight 600 (`vercel / next.js`) — on the `#f6f8fa` strip.
- **Underline tabs** under it: 14px, icon + label + counter pill, 32px items with 8px padding and 6px radius on hover. The active tab is weight 600 with a 2px coral `#fd8c73` underline sitting on the strip's bottom border.
- **Left sidebar** (~240px) inside the page: 32px items, 14px, 16px icon + label, 6px radius. The selected item has a gray fill and a 4px blue bar on its left edge. Groups are separated by a 1px divider. Utility items ("Feedback", "Collapse sidebar") sit at the bottom.
- **Main column**: 24px padding. Title row: 20px weight 600 title on the left, green primary button ("New issue") on the right.

## Record list (issues / pull requests pattern)

- A full-width search input above the list showing the active query as text.
- The list is one Box (white, 1px border, 6px radius).
- **Box header** (`#f6f8fa`, 48px): left — state toggles "**Open** 1,119" and "Closed 24,551" (selected one bold, each with a counter pill); right — filter menu buttons without borders: "Author ▾", "Labels ▾", "Projects ▾", … and a view toggle.
- **Rows**: white, separated by 1px borders, padding 8–12px 16px.
  - Left: a 16px state icon (green circle for open).
  - Title line: 16px weight 500 primary text, followed inline by small labels.
  - Meta line: 12px muted — "`#100938` · author opened 5h ago".
  - Right side: small icon + count for linked items or comments, muted.
- **Labels**: fully rounded, 12px weight 500, 0 7px padding, 20px tall, colored fill with matching dark text, or an outline variant (e.g. "Bug" with `#ffebe9` fill, `#d1242f` text, light red border).
- Hover: row background `#f6f8fa`. Selected rows get a checkbox column.

## Tables

GitHub rarely uses grid tables; turn tables into Box rows when possible. When a real table is needed: header row `#f6f8fa`, 12px weight 600 muted labels in sentence case (no uppercase), 14px cells, 1px row borders, numbers right-aligned.

## Empty state

Inside the list Box, centered, about 150px tall: a 24px muted line icon (a magnifier for searches), a 20px weight 600 heading, and one 16px muted sentence with an inline link. No illustration, no button unless creating is the obvious next step.

## Settings page

- Left sidebar of setting sections (~270px). Group headings are 12px weight 600 muted ("Access", "Code, planning, and automation"), with a 1px divider between groups. The selected item has a light gray fill (`rgba(129,139,152,.15)`) and a 4px blue bar on its left edge.
- Main column fills the rest (about 920px at 1280px wide).
- Sections start with a **24px weight 400** heading and a 1px `#d1d9e0` bottom border, then fields: label 14px weight 600 above, input below, 12px muted note under it.
- A single field is saved with a default button right next to it ("Rename" beside the name input). Otherwise one "Save changes"/"Update" default (gray) button under each form section; the green button is only for creating things.
- On/off options are checkboxes with a 14px weight 600 label and a 12px muted explanation below; related options are grouped in a bordered Box.
- **Danger Zone**: a 24px weight 400 heading "Danger Zone", then a Box with a light red border `rgba(255,129,130,.4)` and 6px radius. Each row: a 14px weight 600 action name and a 14px plain explanation on the left ("Archive this repository" / "Mark this repository as archived and read-only."), and on the right a default button (`#f6f8fa` fill, gray border) with **red text** `#d1242f`, worded the same as the action ("Archive this repository"). Rows are separated by 1px borders.

## Dialogs

- White, 480px wide, radius 12px, shadow `0 0 0 1px rgba(209,217,224,.25), 0 6px 12px -3px rgba(37,41,46,.04), 0 6px 18px 0 rgba(37,41,46,.12)`.
- Header: title 14px weight 600 naming the target ("Delete piro0919/poi"), a 32px close (×) icon button on the right.
- The first step of a destructive confirmation is one full-width default button stating intent ("I want to delete this repository"). Only that first step was captured.
