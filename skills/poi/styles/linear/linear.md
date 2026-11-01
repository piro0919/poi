# Linear app

Use for the app shell, grouped lists of records, record pages with a properties column, the create dialog, the command menu, filter and status menus, settings and empty states. Values are from `company.md` unless given here; positions and sizes are measured at 1280×800.

## App shell

- **Frame**: the whole window is the frame grey (`#efeff0`, dark `#09090a`). The sidebar sits on it with no fill of its own and no line on its edge.
- **Main panel**: everything right of the sidebar is one panel (`#f9f9fa`, dark `#121213`), starting right at the sidebar's edge and inset 8px from the top, right and bottom of the window, radius 12px, a 1px `#f1f1f1` border (dark `#1a1b1d`) and the panel shadow. Linear keeps a 28px strip under the panel for its agent bar; leave the strip out and keep the 8px inset.
- **Sidebar** (244px). From the top:
  - A row at 16px: the workspace button (28px, radius 10px: a 20px rounded-square avatar with initials, the name in 13px weight 550, a small ▾). At the right two 28px round buttons: a quiet magnifier for search, and a create button (pen in a square) filled white with the ring (dark `#1b1c1d`). Use the app's own name and mark; leave out the switcher's ▾ when there is nothing to switch.
  - Items 28px tall, 220px wide, inset 12px, 1px apart, radius 8px, padding 0 9px 0 8px: a 14px icon, 6px gap, 13px weight 500 label in `#59595b`. The current item has `#e1e1e2` fill and `#1a1a1a` text and icon; hover gives a lighter fill. An unread item has an 8px `#969799` dot at the right end.
  - Groups below the top items start with a 28px section button: 12px weight 500 `#59595b` label and a small ▾ that folds the group (「Workspace ▾」「Your teams ▾」), about 18px above the group's first item. A group's own sub-items are indented 19px further (team › 「Home」「Issues」「Projects」「Views」).
  - Leave out the 「What’s new」 card, 「Try」 and 「Invite people」.
- **Header** at the top of the panel: 44px, no fill of its own, a 1px `#f1f1f1` line under it (dark `#1a1b1d`), padding 0 8px.
  - Left: a breadcrumb — a 16px icon and the parent in 13px weight 500 `#2f2f31`, a 「›」 in `#5c5c5e`, the current page in 13px weight 500 — then a quiet 28px star. Keep the breadcrumb only when the app has the parent screen to go back to; otherwise show the page name alone in the same style.
  - Right: quiet 28px icon buttons (a bell) and the screen's create button as a quiet pill: + icon, 「New issue」 in 12px weight 500 `#5c5c5e`, 28px, padding 0 10px 0 8px. In Linear's shape this is where a screen's own create button goes (「+ New customer」), not as a filled button by the title; the accent fill is kept for the create dialog's submit.
- **View bar** under the header: 44px, padding 0 8px. On the left, pill tabs 28px tall, 4px apart, padding 0 10px, 12px weight 500: inactive white with the 1px ring and `#5c5c5e` text, active `#ececed` with `#1b1b1b` text (dark `#1c1c1d` / `#29292b`). A 28px layers icon to add a view may follow; only when the app can save views. On the right, three 28px round icon buttons, white with the ring, 6px apart: filter, display options, side panel. Keep only the ones the app backs.
- A status filter the app already has (all / active / closed) becomes these tabs (「Active」「Backlog」「All issues」 in Linear), since Linear filters a list by switching views.

## Grouped list

The list is not a table: no column headers, no grid lines, no outer border. Rows sit directly on the panel.

- **Group header rows**: 36px tall, inset 8px from the panel's sides (1010px wide at 1280), radius 8px, the frame grey (`#efeff0`, dark `#1a1a1b`) with a faint wash of the group's status color (on screen `#edf0ef` for In Review, `#f0efee` for In Progress, `#eeeff5` for Done; dark `#1a1d1c`, `#1d1c1b`, `#1b1c22`; read from screenshots). Left: a pale 16px ▾ that folds the group (10px in), the 14px status icon (35px in), the name 13px weight 500 `#2e2e30` (58px in), then the count 8px later in 13px weight 450, a grey tinted toward the status (`#465e53` In Review, `#655647` In Progress, `#56586c` Todo; dark `#8e9d96`, `#a0988d`, `#9599a6`). Right: a 24px round + (tinted the same way) that creates a record in that group; keep it only when the app's create can take that value.
- Groups are 2px apart from the row above them. Group by status when the records have one, in the order Linear uses: In Review, In Progress, Todo, Backlog, Done, Canceled (active work first, closed last). A warning or failure group goes first. Within a group, rows keep the app's order. Fold state is UI-only and allowed.
- **Rows**: 44px tall, the full width of the panel, radius 8px, no lines between them. From the left (positions at 1280):
  - x 19 from the panel: a 14px checkbox slot, empty until the row is hovered or selected. Add it only when the app has bulk actions.
  - x 42: the 16px priority icon.
  - x 66: the ID in 13px weight 450 `#5c5c5e`, `letter-spacing: -0.26px`, in a column about 50px wide (「ENG-123」). Use the app's own short ID when it has one; otherwise leave the column out.
  - x 117: the 14px status icon.
  - x 140: the title in 13px weight 500 primary text, one line, cut with an ellipsis.
  - Right side, right-aligned: label pills (8px apart), the assignee as an 18px avatar or the dashed-person icon, and the date in 12px weight 450 `#5c5c5e`, its right edge 26px from the panel's edge. Leave out what the app has no data for.
- **Row hover**: the row fills with the frame grey (`#efeff0`, dark `#1a1a1b`), keeps its 8px radius, and the checkbox appears. No shadow, no hover actions at the right end.
- A row opens the record's page on click, as a link.

## Status menu

Linear changes a value through a large menu in the command menu's shape, opened from a status icon or the 「S」 key.

- 718px wide, 105px from the top of the window, centered over the list, radius 12px, white with the menu border and shadow (dark `#212122`). No overlay behind it.
- At the top, a context chip for the record: 22px, `#f1f1f1` fill (dark `#313234`, computed in the command menu), radius 10px, 12px text: the ID in weight 500, a 「•」, the title. Under it the field 「Change status...」 in 13px placeholder grey, no border.
- One 42px row per option, 46px apart, radius 8px, inset 6px: the 14px status icon, the name in 13px, and at the right end a ✓ on the current value and a key cap with the option's number (「1」…「7」). The highlighted row has the menu fill.
- Use the same menu for other single-choice fields (priority, assignee) when the app lets the user change them. The number keys are UI-only and may be added with the caps.

## Filter menu

- A dropdown anchored under the filter button, aligned to the window's right edge, 208px wide, 10px from the edge, white, 1px `#e4e4e4` border, radius about 12px (read from a screenshot), the menu shadow (dark `#212122`, border `#323336`).
- First a field 「Add Filter…」 (13px placeholder `#646466`, dark `#97989a`) with an 「F」 key cap at its right.
- Then 32px items: a 14px icon in `#6b6b6d`, a 13px label in primary text, a small ▸ at the right for a submenu. The highlighted item has the `#f1f1f1` fill, radius 8px, inset 6px. Groups are split by 1px `#f7f7f7` lines (dark `#292a2c`).
- List the app's own filterable fields, in Linear's order where they match: 「Status」「Assignee」「Creator」「Priority」「Labels」「Dates」「Project」. Leave out 「AI filter」「Agent」「Agent Session」 and anything the app cannot filter by.

## Record page

- **Header**: 44px, the line under it. Left: the record's ID and title as one 13px weight 500 breadcrumb (「ENG-123 Fix login redirect after password reset」), a quiet star and a quiet ⋯. No parent crumb in this shape; at 768px and below a panel icon for the hidden sidebar comes first.
- Under the header at the right, a row of 28px round icon buttons, white with the ring, 6px apart (copy link, copy ID, copy branch name, and a split pill). Keep only copy actions the app can do; drop the row when none.
- **Main column**: 577px wide, starting 48px inside the panel (x 293 at 1280), top 60px under the header.
  - Title 24px / 32px weight 600, `letter-spacing: -0.16px`, primary text.
  - The description 15px weight 450, line height 1.6; empty, the placeholder 「Add description...」 in about `#9d9d9f`.
  - A row of quiet 28px icon buttons (add reaction, attach), then 「+ Add sub-issues」 as a 24px quiet pill in 12px `#5c5c5e`. Keep only what the app backs.
  - A 1px `#dedede` divider (dark `#232426`), 20px below it 「Activity」 in 15px / 23px weight 600, with 「Unsubscribe」 (quiet 32px pill) and the subscribers' avatars at the right.
  - Activity lines 12px / 16.8px in `#5c5c5e`: a 14px avatar, the person's name in weight 500, the event, 「·」, relative time.
  - The comment box: 593px wide (it bleeds 8px past the column on both sides), white (dark `#1a1a1b` with a 1px `#222325` border and shadow `0 .5px 1px 1px rgba(0,0,0,.3)`), radius 8px, 1px `#f7f7f7` border, the small shadow, padding 12px 16px, 84px tall, placeholder 「Leave a comment...」 in 15px; at the bottom right a quiet attach icon and a 24px round submit with an ↑ (white; dark `#232325`).
- **Properties column**: right of the main column, starting at x 907 (about 37px after the main column), with no line between them and no fill.
  - Small headings in 13px weight 500 `#5c5c5e`, padding 0 8px: 「Properties」, 「Labels」, 「Project」, with about 34px above each after the first.
  - Each property is a quiet 28px pill (padding 0 10px 0 6px, radius full) with a 14–16px icon and a 13px weight 500 value in `#2f2f31`, 4px apart, one per line: status (its status icon and name), priority (its icon and name), assignee. An empty value shows its action in `#5c5c5e`: 「Assign」「Add to project」. Each opens the status-style menu when the app lets the value change; otherwise it is plain text in the same place.
  - Labels are the 25px label pills, followed by a 25px round 「+」 when labels can be added.
- A field the app shows that has no property-shaped value (a long note) goes in the main column as the description.

## Create dialog

- 750×263 at 1280, centered horizontally, 104px from the top, radius 21px, white (dark `#1a1a1b`), 1px `#e4e4e4` border (dark `#2b2c2e`), the dialog shadow, over the `rgba(0,0,0,.25)` overlay (dark `rgba(0,0,0,.4)`). Chips and round buttons inside are white with the ring in light and `#2a2b2d` in dark, with unset names in `#9c9da0` and set values in `#e5e6e9`.
- Top row (inset 13px): a 24px chip for where the record goes (a 14px icon and a short name, white with the ring), 「›」, then 「New issue」 in 13px weight 450 `#303032`; put the app's own noun (「New customer」). At the right, 32px round quiet buttons: expand (⤢) and close (×). Keep expand only when the app has a full-page form.
- The title field: no border, placeholder 「Issue title」 about 18px weight 600 in `#a0a0a2` (size read from a screenshot). Under it 「Add description...」 in 15px placeholder grey. Every other field the app's form has becomes a property chip in one row 24px tall, 6px apart, 36px above the footer (「Backlog」 with the status icon, 「Priority」, 「Assignee」, 「Project」, 「Labels」, then a round ⋯). A field that is not a choice (an email, a number) stays a text field under the description, borderless, in the same 15px with its placeholder; keep its input type.
- Footer under a 16px gap: a 28px round attach button at the left only if the app takes files; at the right 「Create more」 (a 22×14 toggle and its 12px / 18px label, only when the app can keep the dialog open after saving) and the main button 「Create issue」 (28px, accent, padding 0 10px, 12px weight 500). Put the app's noun: 「Create customer」.
- Escape and the × close it.

## Command menu

- 720px wide, centered on the window, 104px from the top, radius 12px, white (dark `#212122`), the menu border and shadow, no overlay.
- The query field is 40px: 13px text, placeholder 「Type a command or search…」 in `#a0a0a2`, no border, padding 11px 12px. Leave out 「Ask Linear」 and its 「Tab」 cap unless the app has an assistant.
- Results are grouped under 12px labels in `#5e5e60`, 18px from the left (「Issues」「Projects」「Documents」「Views」). Rows are 42px, radius 8px, inset 6px, 46px apart: a 14px icon, the label 13px weight 450 `#303032` (commands end in 「…」: 「Create new issue…」「Create view…」), key caps at the right. The first row is highlighted (`#f1f1f1`, dark `#323234` read from a screenshot); in dark the highlighted label is `#ffffff`, others `#e5e6e8`; arrow keys move the highlight.
- With a query and no match: a group label 「Quick results for "(query)"」 and one highlighted row with a magnifier, 「No results found」 in primary text and 「Go to advanced search」 after it in placeholder grey; keep that second part only when the app has a search page. The menu shrinks to its content (133px tall).
- Opened with ⌘K and closed with Escape. When the app's search only sends a query to a results page, keep the field and one row saying what Enter does.

## Settings

- The sidebar is replaced by the settings navigation on the same frame: 「‹ Back to app」 as a 28px quiet pill (13px weight 500 `#59595b`), then a 28px search field 「Search…」 (white, radius 8px, 1px `#f1f1f1` border and the small shadow; dark `#161617` with a `#232426` border), then groups. Group labels 13px weight 500 `#59595b`, 10px from the item's edge, 22px above their first item (「Personal」「Issues」「Projects」「Features」「Administration」). Items as in the app sidebar, padding-left 10px, a 16px icon at 32px from the frame's edge; the current one `#e1e1e2` (dark `#232325`).
- The panel holds a centered column 640px wide (x 438 at 1280), title 73px from the panel's top: the page title 24px / 32px weight 500, `letter-spacing: -0.16px`.
- Sections: a 15px / 23px weight 500 heading, 16px in from the card's edge, 16px above its card. The card is white (dark `#1a1a1b`), radius 10px, shadow `0 0 0 1px rgba(0,0,0,.03), 0 3px 6px -2px rgba(0,0,0,.02), 0 1px 1px rgba(0,0,0,.04)`. Sections are 48px apart.
- Rows inside a card: 66px apart, padding 12px 16px, split by 1px lines about `#f8f8f8` (dark `#252526`, read from screenshots). The label 13px weight 500 primary, the description under it 12px weight 450 `#5e5e60`, the control at the right edge: a select, a 30×20 toggle, or a quiet 「Customize」-style pill.
- A list of people or records in settings (members): a toolbar under the title with a 32px search field 「Search by name or email」 (about 300px), a 32px 「All ⌄」 select, and at the right a secondary 「Export CSV」 and the main 「Invite」 (32px pills). Below, column labels in 12px secondary text with a ↓ on the sorted one, then groups as bands (about 30px, the frame grey `#e9e9ea` on screen, dark `#161617`, read from screenshots) titled 「Active 1」, and rows about 56px apart: a 24px round avatar, the name in 13px over a second line in 12px secondary, plain cells in 12px, a role as a small accent-tinted chip (「Admin」), presence as a green 6px dot (`#67ba64`) and 「Online」.

## Empty states

- The empty list view: a block about 340px wide, centered in the panel horizontally and placed a little above the middle, left-aligned inside. From the top: an optional illustration (Linear draws four of its status icons on stacked discs, about 86px square; draw it from the app's own status icons in the same style, or leave it out), the title in about 15px weight 600 `#2f2f31` (dark `#e3e4e6`, read from a screenshot), 2–3 lines of 13px / 18px `#5c5c5e` (dark `#959597`) explaining what the view will hold, then 12px below it the main button with its key cap (「Create new issue C」) and a secondary button beside it (「Documentation」; keep it only when there is a page to point to).
- A short empty (a filtered list, my items) is one line in the same title style plus the main button: 「No issues assigned to you」 「Create new issue」.
- The command menu's empty result is described under Command menu.

## Narrow widths

Captured at 768×800 and 375×800 in both themes, in a desktop browser (no phone user agent).

- **Sidebar drawer (768px and 375px)**: the sidebar is hidden, and the 28px panel icon at the top left of the header opens it as a drawer from the left edge, the same at both widths (read from screenshots):
  - 330px wide, full height, in the panel's color (`#f9f9fa`, dark `#121213`) rather than the frame grey, with a 1px `#dedede` line on its right edge (dark `#232426`) and its right corners rounded (about 12px).
  - Its contents are the desktop sidebar's, at the same sizes; the items stretch to the drawer's width (inset 12px). The current item is `#ebebec` (dark `#29292b`).
  - The page behind it stays in place and is dimmed, about as much as behind a dialog (`#f9f9fa` shows as `#bbbbbb`; dark nearly black). Tapping the dimmed page or choosing an item closes it. Open/closed is UI-only state.
- **Tablet (768px)**:
  - The sidebar is hidden and the frame goes with it: the panel fills the window edge to edge with no radius, inset or border. The panel icon at the left of the header opens the drawer above.
  - The header keeps the breadcrumb and star; 「New issue」 becomes a 28px round quiet + .
  - The list keeps everything except the date, which is dropped; label pills stay (cut with an ellipsis), then the assignee.
  - The record page puts the properties column under the title as one row of property chips (24px pills with a 1px ring, 6px apart: status, priority, assignee, project, labels), and the main column takes the full width with 14px side padding. The comment box is inset 7px.
  - The bottom strip of the frame stays at 36px under the panel in Linear; Poi leaves it out as at 1280.
- **Phone (375px)**:
  - The same header, drawer and view bar as at 768px; the tabs and the three icon buttons still fit on one line.
  - List rows drop the ID, labels and date: priority, status icon, title (ellipsis), assignee. Row and group heights stay 44px and 36px; content starts 19px from the left edge.
  - What Linear drops at 768px and 375px is its own metadata, which can be read on the record's page. Poi must not lose the app's fields: a field the app shows in the list and nowhere else moves to a second 12px secondary line under the title at these widths, and the row grows to fit. This is Poi's rule, not something captured.
  - The record page: the header breadcrumb is cut with an ellipsis; the title wraps (24px / 32px); the property chips shrink to icons where they must (priority and assignee become 24px icon-only chips, the status name is cut: 「In Pro...」). The copy buttons stay at the top right.
  - Dark at 375px uses the same dark values as the desktop.
