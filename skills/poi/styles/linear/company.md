# Linear — company-wide rules

Read this first for any Linear-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| Linear app | `linear.md` | Everything: the inset main panel on a tinted frame with a slim sidebar, the header with a breadcrumb and pill view tabs, grouped lists of records with status and priority icons, the record page with a right properties column, the create dialog, the command menu, filter and status menus, settings pages and empty states |

Linear is a single product, so most rules live here and `linear.md` adds screen shapes.

## Feel in one paragraph

Dense, quiet and keyboard-first. The window is a pale grey frame (`#efeff0`) holding the sidebar, and the content sits on a slightly lighter panel (`#f9f9fa`) inset 8px from the window's edges with a 12px radius and a hairline border, so the screen reads as one floating sheet. Text is small (13px for nearly everything, 12px for toolbar buttons and metadata) in Inter, with weights in between the usual steps (450 and 550 as well as 400, 500 and 600). Greys are neutral with a faint cool cast. Color lives in small icons: a set of round status icons (dashed, empty, half, three-quarter, checked, crossed) and bar-chart priority icons, plus one muted indigo (`#6d78d5`) for the main button and toggles. Every button, tab and chip is a full pill; rows, menu items and fields are 8px rounded rectangles. Hover fills a row in the frame grey; nothing grows a shadow on hover. Keyboard shortcuts are shown everywhere, in small bordered key caps.

## Type

- Family: Inter. Every element computes to `"Inter Variable", "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif` (computed, 2026-11-01), and the page loads Inter Variable (weights 100–900). Inter is distributed for free under the SIL OFL on Google Fonts as "Inter", so Poi loads it, as the variable font (the `wght` axis), the way the repository loads fonts: the in-between weights 450 and 550 below need the variable axis. Use `Inter, "SF Pro Display", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`, writing `system-ui` unquoted. Leave out "Linear Thai", the company's own Thai font, which is not distributed. The stack names no Japanese font, so Japanese text falls back to the OS's sans-serif; do not add one.
- Interface text 13px, line height `normal` (about 16px) in one-line controls. Most labels are weight **500**: sidebar items, row titles, group names, breadcrumb, property values, setting labels.
- Weight 450 for secondary and metadata text: record IDs, dates, group counts, label pill text, setting descriptions, menu items in the command menu.
- Small text 12px: toolbar and header buttons (「New issue」), view tabs, label pills, dates, sidebar section labels, key caps, activity lines (12px / 16.8px).
- Record IDs 13px weight 450 with `letter-spacing: -0.26px`, in secondary text.
- Page titles 24px / 32px: weight **600** with `letter-spacing: -0.16px` on a record page; weight 500 on a settings page.
- Section headings 15px / 23px: weight 600 for 「Activity」 on a record page, weight 500 for settings sections (「General」).
- The workspace name in the sidebar 13px weight 550, `letter-spacing: -0.1px`.
- Long text (a record's description) 15px, weight 450, line height 1.6 (the editor's own variables).
- Sentence case everywhere; nothing is uppercase.

## Color

Values are computed styles in the light theme, given by the browser as `lch()` and converted to hex for this document. Where a value is marked "read from a screenshot", it was sampled from the captured image, not computed. Linear's stylesheet names most of these with hashed variables, so the role names below are Poi's.

| Role | Value |
| --- | --- |
| Frame: behind the sidebar, around the main panel, and the bottom strip | `#efeff0` |
| Main panel | `#f9f9fa`, 1px `#f1f1f1` border, radius 12px, shadow `0 3px 6px -2px rgba(0,0,0,.02), 0 1px 1px rgba(0,0,0,.04)` |
| Surfaces raised above the panel (menus, dialogs, settings cards, comment box, inactive tabs, icon buttons) | `#ffffff` |
| Primary text (row titles, page titles) | `#1b1b1b` |
| Header and control text (breadcrumb, icon buttons, group names) | `#2f2f31`; group names `#2e2e30`; text inside dialogs and menus `#303032` |
| Secondary text (IDs, dates, label pill text, header buttons, inactive tabs, section labels in a record's right column) | `#5c5c5e`; in dialogs, menus and settings descriptions `#5e5e60` |
| Sidebar item text and icons | `#59595b` |
| Placeholders | `#a0a0a2` (read from a screenshot); the record page's 「Add description...」 about `#9d9d9f` (read from a screenshot) |
| Current sidebar item | `#e1e1e2` fill, `#1a1a1a` text |
| Row hover, group header rows | `#efeff0` (the frame grey), radius 8px |
| Active view tab | `#ececed` fill, `#1b1b1b` text |
| Hairlines (under the header, the main panel's border) | 1px `#f1f1f1` |
| Ring on white pills (inactive tabs, round icon buttons, the secondary button) | 1px about `#dfdfe0` (read from a screenshot; the computed border is transparent, so it is drawn by a shadow) |
| Divider above a record's activity | 1px `#dedede` (read from a screenshot) |
| Accent (main button, toggle on, checked state) | `#6d78d5`, converted from `lch(53 52.26 286.91)`; the screenshot shows about `#6f78cf`. Text on it `#fffeff` |
| Focus ring | 1px solid `#5e69d1` (stylesheet variable) |
| Checkbox | 14px, radius 3px, 1px `#7c7c7c` border, `#fffeff` fill |
| Toggle | 30×20px in settings, 22×14px in a dialog footer, fully round; on: the accent; off: `#cdcdcd` |
| Overlay behind a modal dialog | `rgba(0,0,0,.25)` |
| Menus, command menu and dialogs | `#ffffff`, 1px `#e4e4e4` border, shadow `0 9px 48px rgba(0,0,0,.08), 0 6px 24px rgba(0,0,0,.10), 0 1px 1px rgba(0,0,0,.04)` |
| Highlighted menu item | `#f1f1f1` (read from a screenshot) |
| Key caps | no fill of its own, 1px `#f7f7f7` border, `#5e5e60` text |
| Chip for a role (「Admin」) | `#ededf6` fill, about `#6a7ef2` text (read from a screenshot) |
| Error red | not captured. Use the label red `#eb5757` for error text and an error border until it is measured (Poi's choice) |

### Status icons

Every record state has a 14px round icon, drawn on a 14px box and colored by state. Shapes and colors were read from screenshots (the icons are SVGs and their colors were not in the computed styles); the colors are the same in both themes except where a dark value is given.

| State | Shape | Light | Dark |
| --- | --- | --- | --- |
| Backlog | A dashed ring: about ten short dashes on a 1.5px circle | about `#a3a6ab` | about `#bfc2c7` |
| Todo | An empty 1.5px ring | `#a6a6a6` | `#e2e2e2` |
| In Progress | The ring with a gap inside, and the right half of the inner disc filled | `#e8c130` | `#e8c130` |
| In Review | The ring with the inner disc filled except the top-left quarter | `#67ba64` | `#52a450` |
| Done | A filled disc with a white check | `#616acc` | `#616acc` |
| Canceled | A filled disc with a white × | `#97a2b1` | `#97a2b1` |
| Duplicate | A filled disc with white slanted strokes | `#97a2b1` | `#97a2b1` |

The partly filled icons say how far along a record is. Map the app's own states onto them by meaning: not started yet → Backlog or Todo, under way → In Progress, waiting on someone → In Review, finished or in good standing (an active customer, a paid invoice) → Done, stopped → Canceled. A warning or failure state the app colored keeps the error red, as Poi keeps every warning: it takes the shape of the nearest state by meaning, drawn in red, and its group row gets a faint red wash in the same strength as the other groups.

### Priority icons

16px icons before the record ID. Shapes were read from a screenshot.

| Priority | Shape | Light | Dark |
| --- | --- | --- | --- |
| Urgent | A 14px rounded square, radius about 3px, with a white 「!」 | `#f17b47` | `#f17b47` |
| High | Three rising bars, all filled | `#5c5c5e` | `#959597` |
| Medium | The same bars, the first two filled, the third pale | filled `#5c5c5e`, pale about `#d9d9db` | filled `#959597`, pale about `#464747` |
| Low | The first bar filled, the other two pale | as Medium | as Medium |
| No priority | Three short dashes in a row | `#8f8f90` | `#6a6b6c` |

### Label pills

- 24px tall, fully round (radius 48px), padding 0 8px, a 1px `#d3d3d3` border, the panel's own fill (`#f9f9fa`), so the pill is an outline rather than a colored tag.
- A 9px colored dot, then the name in 12px weight 450 secondary text. On a record page the pill is 25px with a 1px `#dedede` border and the name 13px weight 500 in `#2f2f31`.
- The color is only in the dot. The default label colors: Bug `#eb5757`, Feature `#bb87fc`, Improvement `#4ea7fc` (computed as rgb). Pick by meaning or keep the colors the app already has.
- A long name is cut with an ellipsis (「Improvem...」) rather than wrapped.

### Dark theme

Use only when the app already has a dark mode. Linear follows the OS on this account (`prefers-color-scheme`). Values are computed styles converted from `lch()`, except where marked.

| Role | Value |
| --- | --- |
| Frame, sidebar and bottom strip | `#09090a` |
| Main panel | `#121213`, 1px `#1a1b1d` border, shadow `0 .5px 1px 1px rgba(0,0,0,.3)` |
| Raised surfaces: menus, command menu | `#212122`, 1px `#323336` border |
| Shadow on the command menu and dialogs | `0 4px 40px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.12), 0 3px 12px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.12), 0 1px 1px rgba(0,0,0,.12)` |
| Dialogs and the comment box | `#1a1a1b`; dialog border 1px `#2b2c2e`; comment box border 1px `#222325` with the panel's shadow |
| Settings cards | about `#1a1a1b` (read from a screenshot) |
| Chips and round buttons inside a dialog | `#2a2b2d` fill; unset names `#9c9da0`, set values and dialog text `#e5e6e9` |
| Round icon buttons on the record page | `#1b1c1d` fill, `#e3e4e6` icon |
| Primary text | `#ffffff` |
| Header and control text | `#e3e4e6`; group names `#e4e5e7` |
| Secondary text | `#959597` |
| Sidebar item text and icons | `#919294` |
| Placeholders | about `#5c5d5f` in dialogs, `#626365` in the command menu, `#565759` on the record page (read from screenshots) |
| Current sidebar item | `#232325` fill, `#ffffff` text |
| Row hover and group header rows | `#1a1a1b` (about `#1c1c1d` on screen) |
| Inactive view tab and round icon buttons | `#1c1c1d` / `#1b1c1d` fill, a 1px ring about `#252526`, `#959597` text |
| Active view tab | `#29292b` fill, `#ffffff` text |
| Hairline under the header | 1px `#1a1b1d` |
| Divider above activity | 1px about `#232426` (read from a screenshot) |
| Label pill | `#121213` fill, 1px `#28282b` border, `#959597` text; on the record page a 1px `#232426` border and `#e3e4e6` text |
| Checkbox border | `#737476` |
| Accent | `#5e6ad2` (the main button, computed; the screenshot shows about `#606acb`), with the shadow `0 .5px 1px 1px rgba(0,0,0,.3)`. Use it for toggles too |
| Toggle off | `#727375` |
| Highlighted menu item | `#323234` (read from a screenshot) |
| Context chip in the command menu | `#313234` |
| Key caps | 1px `#292a2d` border, `#9c9d9f` text, no fill of its own |
| Chip for a role | about `#212338` fill, `#9ba4ff` text (read from a screenshot) |
| Overlay behind a modal dialog | `rgba(0,0,0,.4)` |

## Shape and controls

- Corner radii: 3px checkboxes and key caps, 8px rows, menu items, sidebar items, selects and inputs, 10px settings cards, 12px the main panel, menus and the command menu, 21px the create dialog. Buttons, tabs, chips, icon buttons and label pills are fully round (`9999px`).
- Buttons are pills 28px tall, 12px weight 500, padding 0 10px (0 10px 0 8px with a leading 14px icon).
  - Main: the accent fill, `#fffeff` text, shadow `0 3px 6px -2px rgba(0,0,0,.02), 0 1px 1px rgba(0,0,0,.04)` (「Create issue」「Invite」). It may carry its shortcut as a key cap inside, in a lighter tint of the accent (「Create new issue C」).
  - Secondary: white with the 1px ring and `#2f2f31` text (「Documentation」「Export CSV」).
  - Quiet: no fill and no ring until hover, `#5c5c5e` text, often with a + icon (「+ New issue」 in the header, 「+ Add sub-issues」, 「Unsubscribe」, 「Customize」).
- Icon buttons: 28px circles with a 14px icon; on a toolbar they are white with the ring (filter, display options, side panel), in the header they are quiet (star, bell). 24px in tighter spots (the + in a group header).
- Selects (settings): 30px, radius 8px, white with a 1px about `#e3e3e3` ring, padding 1px 28px 1px 10px, 13px weight 400 `#303032`, a small ⌄ at the right. A default value is followed by 「(default)」 in secondary text.
- Text inputs: 28px, radius 8px, white, 1px `#f1f1f1` border plus the small shadow above, 13px weight 500, a 14px magnifier inside on the left for search fields (padding 6px 25px 6px 32px).
- Property chips (in the create dialog and on a narrow record page): pills 24px tall, padding 0 8px 0 6px, a 14px icon then 12px weight 450 text, white with the ring; an unset property shows its name in secondary text (「Priority」「Assignee」), a set one shows the value in `#303032`.
- Menus and popovers: white, radius 12px, 1px `#e4e4e4` border, the menu shadow, padding about 6px. Items are 32px tall (rows in the command menu 42px), radius 8px, a 14–16px icon, 13px label; the highlighted item gets the menu fill; a ▸ at the right opens a submenu. Groups are split by a 1px `#f7f7f7` line (dark `#292a2c`) or by a small 12px group label in `#5e5e60`.
- Key caps: 12px weight 450 in `#5e5e60`, about 20×23px, padding 4px, radius 3px, a 1px `#f7f7f7` border. Chords are separate caps (「⌘」「⇧」「,」); a sequence puts 「then」 between two caps (「N then P」). Show only shortcuts the app really has.
- Hover never adds a shadow or a border; rows, items and quiet buttons get a fill.
- No cards around lists: rows sit directly on the panel. Cards appear only around groups of settings and the comment box.

## Icons

Linear publishes no icon set. On npm the `@linear` scope holds only `@linear/sdk`, `@linear/cli` and `@linear/import`, and nothing else named for Linear icons is published by the company (checked 2026-11-01); icon packs that turn up for "linear icons" are unrelated outline sets. Its icons are its own SVGs. Read from screenshots:

- 14px in the sidebar, menus, toolbars and on buttons; 16px for priority and team icons; 18px for the assignee slot.
- Outlined, about 1.25–1.5px strokes with rounded ends and corners, compact and geometric; no inner fills except where meaning needs it (the status icons, the Urgent square, Canceled and Done).
- Pick an outlined set with thin rounded strokes at 14px, or draw icons that match. Draw the status and priority icons yourself as described above; they carry the feel.
- Roles: a tray for an inbox, a dashed circle around a dot for "my items", a cube for projects, stacked layers for views, a funnel of three lines for filter, two sliders for display options, a panel outline for the side panel, a pen-in-square for create, a bell for notifications, a star for favorites, a person in a dashed circle for an empty assignee (`#9d9d9f`, dark `#565759`).
- Never draw the Linear mark, the app's agent cursor icon, or the 「Ask Linear」 sparkle.

## Wording and tone

Measured from the English UI. Linear's UI was English only.

- Plain, short and functional. Sentence case for every label and button: 「New issue」「Create issue」「Add sub-issues」「Add to project」「Back to app」「Export CSV」.
- Commands in menus are an imperative verb and object; ones that open a further step end in an ellipsis: 「Assign to…」「Change status…」「Change priority…」「Add to project…」「Set due date…」「Copy issue ID」「Create new issue…」.
- Empty properties say the action, not 「None」: 「Assign」「Add to project」; unset chips show the property name: 「Priority」「Assignee」「Labels」.
- Placeholders are short, ending in an ellipsis when they invite writing or searching: 「Issue title」「Add description...」「Leave a comment...」「Type a command or search…」「Change status...」「Search…」「Add Filter…」; a plain description when the field is specific: 「Search by name or email」.
- Setting labels are a noun phrase (「Default home view」「First day of the week」「Font size」); their descriptions are one sentence with no final period: 「Select which view to display when launching Linear」「Used for date pickers」「Adjust the size of text across the app」. Put the app's own name where Linear is named.
- Section headings are plain nouns: 「General」「Interface and theme」「Properties」「Labels」「Activity」.
- Counts are a bare number after the group's name: 「In Progress 2」, 「Active 1」.
- Dates are short: 「Nov 1」 in a list, with the year added where the app's dates span more than one year, so no date becomes ambiguous; activity uses relative time without a space: 「4min ago」. An activity line reads 「(name) created the issue · 4min ago」.
- Empty states: a title that names the view and a two-sentence explanation of what will appear there: 「All issues is the place where you can see all your team’s work in one view. Once you have created issues for this team, they will show up here.」 Short ones are one line: 「No issues assigned to you」, 「No results found」 followed by a next step in placeholder grey: 「Go to advanced search」. No apology, no exclamation.
- Toggles name the outcome: 「Create more」.
- The overall voice speaks about the work, not the user: no 「Oops」, no 「Please」.

Leave out what is marketing or AI: the 「What’s new」 card, 「Try」 with 「Invite people」, 「Ask Linear」, AI filter, Agent and Agent Session filters, the bottom 「Agent」 bar and chat history. Keep an AI feature's place only when the app itself has one.

## Not captured yet

- Error states: field errors, form errors and their wording, the error red's computed value
- Toasts and success messages after saving
- Destructive confirmations (deleting or archiving a record)
- Board view and other layouts besides the grouped list
- Japanese text: the UI is English only
- Computed dark values for the settings pages (their dark values were sampled from screenshots)

## Sources

Captured 2026-11-01 in a 1280×800 window, signed in to the owner's own workspace (one team), with an English UI, in both themes: the account follows the OS appearance. The workspace had no issues, so with the owner's permission 8 sample issues with made-up titles were created for the capture and deleted afterwards; nothing else was changed. Opened: the team's grouped issue list (with a row hovered, the status menu and the filter menu), one issue page, the create dialog over the empty team view, the command menu with an empty and a nonsense query, and the preferences and members settings pages. Narrow layouts of the list, the issue page and the sidebar drawer were captured at 768px and 375px wide in both themes, in a desktop browser with its own user agent (no phone agent). Computed styles were dumped for the issue list, the issue page, the create dialog and the command menu in both themes, and for the preferences page in light; colors came as `lch()` and were converted to hex. Icon colors and the colors marked above were sampled from the screenshots. Only interface labels were copied: no workspace, team or person names, emails, or issue IDs. The npm registry was searched for an official icon package the same day.
