# Gmail

Use for lists of records that people go through one by one: customers, tickets, leads, messages, notifications.

## Palette (light)

Values marked * were measured on Gmail's light surfaces (settings page); the rest follow the same scheme and were not measured in a light inbox.

| Role | Value |
| --- | --- |
| App background | `#f6f8fc` |
| List surface | `#ffffff`, radius 16px on the outer container |
| Primary text | `#202124`* |
| Secondary text (snippets, dates on read rows) | `#5f6368`* |
| Links | `#1155cc`* |
| Accent (active tab underline, focus) | `#1a73e8`* |
| Borders | `#dadce0`* |
| Row divider | inset shadow `0 -1px 0 0 rgba(100,121,143,.12)`* instead of a border |
| Selected nav item | `#d3e3fd` fill |
| Compose / main action button | `#c2e7ff` fill, `#001d35` text |

## Palette (dark)

Use only when the app already has a dark mode. The dark theme this account uses: neutral greys with no blue tint, and white text at reduced opacity instead of grey colors. Values marked † were read from a screenshot; the rest are computed styles.

| Role | Value |
| --- | --- |
| App background (header, left nav) | `#111111` |
| List surface | `#161616`† (rows are `rgba(0,0,0,.5)` laid over a lighter panel) |
| List toolbar strip | `#2c2c2c`† |
| Search field | `#474747`†, fully rounded |
| Primary text | `rgba(255,255,255,.87)`; nav labels and headings white |
| Secondary text (senders and subjects on read rows, counts) | `rgba(255,255,255,.7)` |
| Muted text (dates) | `rgba(255,255,255,.5)` |
| Row divider | inset shadow `0 -1px 0 0 rgba(255,255,255,.12)` |
| Selected nav item | `rgba(255,255,255,.3)` fill, radius 0 12px 12px 0 |
| Compose / main action button | white fill, `#5f6368` text, shadow `0 1px 2px rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)`, radius 16px |
| Row hover | shadow `inset 1px 0 0 rgba(255,255,255,.2), inset -1px 0 0 rgba(255,255,255,.2), 0 0 4px 0 rgba(95,99,104,.6), 0 0 6px 2px rgba(95,99,104,.6)`, no fill change |
| Selected row | `#174ea6` fill, white text, dates `rgba(255,255,255,.5)` |

Error colors are declared as design tokens in the stylesheet but no error was seen on screen: `#b3261e` with a `#f9dedc` container in light, `#f2b8b5` with a `#8c1d18` container in dark.

## Layout

- **Header** 64px: menu icon, product name, then a large search field (fully rounded, ~720px wide, 48px tall, filled background, search icon on the left, a filter/options icon on the right). Help, settings and app icons on the right, 40px circles.
- **Left nav** 256px: the main action button on top (radius 16px, 56px tall, icon + label, e.g. a pencil and "Compose"). Below it, nav items 32px tall, 14px, icon + label + count on the right. The selected item is a pill that is flat on the left and rounded on the right (`0 16px 16px 0`), bold label. A "More" item with a chevron collapses the rest. A second group ("Labels") has a 16px weight 500 heading and a + icon button.
- **List container**: one white surface with radius 16px, filling the rest of the window. No outline border around it.
- The header and left nav above apply only when Gmail is the shell. When the list sits inside another product's shell, use only "The list" below.

## The list

- **Toolbar** above the rows, 48px: a select-all checkbox with a small dropdown arrow, refresh icon, more (⋮) icon. On the right: "1–50 of 1,240" in 12px secondary text and previous/next chevron icon buttons. When rows are selected, the toolbar swaps to bulk actions as icon buttons.
- **Rows** are single lines, 40px at default density (28px compact):
  1. checkbox, 2. star icon, 3. the primary name (~200px column, truncated), 4. title and a snippet on one line — `Title - snippet text…` with the snippet in secondary color, 5. date or time right-aligned (`16:59` for today, `Oct 29` for older).
- Show the date only when the record already has one. Never hard-code today's date or the current year to decide between `16:59`, `Oct 29` and `10/29/25`; compute it at run time, or, when the app cannot (a statically rendered page), show every date in the older format.
- **Unread / needs attention** rows: name, title and date in weight 700; everything else 400. This is the only place bold is used.
- **Hover**: the row lifts with a faint shadow and the date is replaced by icon buttons (archive, delete, mark as read, snooze). These are UI-only and can be added without changing behavior; wire them only to actions the app already has.
- **Selected** rows get a light blue fill.
- No status pills. Category or status goes in a small label chip before the title, or as an icon.

### What makes it read as Gmail at a glance

Compared side by side with a trial (2026-10-30), these were what the trial lacked and the real list had. Keep them even when the list sits inside another product's shell.

- **A checkbox at the start of every row**, before the name. Selecting rows is UI-only state, so add it even when the app has no bulk actions; the toolbar's select-all checkbox selects them all.
- **The toolbar strip above the rows**, not a page-level filter bar: select-all checkbox with `arrow_drop_down` (a small All / None menu) on the left, and `more_vert` only when there are list actions to put in it; the range ("1–8 of 8") and previous/next chevrons on the right. Leave the chevrons disabled when everything fits on one page. Add `refresh` only when the app already has a way to reload the list. A filter field, if the app has one, goes in the header search or in the toolbar between the icons and the range.
- **The star**, only when the app already has a field it can stand for (favorite, pinned, flagged). Without one, leave the star column out rather than show a star that does nothing.
- **Near-invisible row dividers.** The real divider is the inset shadow above at 12% opacity. Even when the shell's palette wins, keep the divider at that strength (e.g. the shell's border color at about 40% opacity), not a full-strength 1px line.
- **No heading or primary button between the toolbar and the rows.** Gmail's main action lives in the left nav. When the shell keeps a page heading and its button, they sit above the list surface, and the toolbar is the first thing inside it.

## Icons

Material Symbols, **outlined** everywhere, with thin strokes. The header icons are 24px SVGs (computed); the nav, toolbar and row icons look about 20px in a screenshot. Names were identified by eye.

- Header: `menu`, `search`, `help`, `settings`, `apps`.
- Main action button: `edit` (a pencil) before "Compose".
- Left nav: `inbox`, `send`, `draft`, `report`, `expand_more` for "More"; `label` before each label, `add` next to the "Labels" heading.
- List toolbar: a checkbox with `arrow_drop_down`, `refresh`, `more_vert`.
- Each row: an outlined checkbox, `star` (outlined until starred), `label_important` (outlined).

## Settings page

- Tabs across the top (14px weight 500, gray; active tab in accent with a 2px underline).
- A two-column form: setting name in bold on the left ("Maximum page size:"), controls and explanations on the right. Rows separated by 1px `#dadce0` dividers.
- Options are radio buttons with a bold label and a plain explanation after a dash: "**Enable hover actions** - Quickly gain access to archive, delete, mark as read, and snooze controls on hover."
- Save and Cancel buttons sit at the bottom of the page.

## Dialogs

Measured on 「新しいラベル」 (create label), opened and cancelled on 2026-10-31. The dialog stayed light while the account's dark theme was on.

- White surface, radius 28px, no shadow, about 500px wide, centered over a `rgba(0,0,0,.32)` scrim.
- Title 24px / 32px weight 400, `#1f1f1f`. Field labels above the fields, 14px / 20px, `#444746`, ending in a colon.
- Outlined text field 56px tall, radius 4px, 1px `#747775` outline, 16px text; focused, the outline turns `#0b57d0` at 3px.
- Actions at the bottom right, both 40px tall, radius 20px, 14px weight 500: a text button 「キャンセル」 in `#0b57d0` (padding 0 12px), then the filled confirming button 「作成」 (`#0b57d0`, white text, padding 0 24px).
- The confirming button stays disabled until the required field has text: `#f1f3f4` fill, text `rgba(31,31,31,.38)`.

## Toast

Read from Gmail's stylesheet, not seen on screen; no dark variant of the rule was found while the dark theme was on.

- Bottom left, 24px from the window edges, max 640px wide, min 52px tall, padding 8px 52px 8px 24px.
- White, radius 4px, shadow `0 1px 3px 0 rgba(60,64,67,.3), 0 4px 8px 3px rgba(60,64,67,.15)`. Message 14px, `#5f6368`.
- An action as a text button: `#1a73e8`, 14px weight 500, 36px tall, padding 0 8px, radius 4px; hover fill `rgba(66,133,244,.04)`, pressed `rgba(66,133,244,.15)`.
- A 20px close icon 16px from the right edge.

## Copy seen here

Japanese UI (measured): 「作成」「受信トレイ」「送信済み」「下書き」「もっと見る」「ラベル」「新しいラベルを作成」「メールを検索」「詳細検索オプション」「詳細を表示」「1–100 / 40,305 行」、settings such as 「表示件数:」「カーソルでの操作を有効にする」「返信時のデフォルトの動作:」, and in the create label dialog 「新しいラベル」「新しいラベル名を入力してください:」「次のラベルの下位にネスト:」「親を選択してください...」「キャンセル」「作成」.
Icon-only controls always have a tooltip naming the action ("Refresh", "More email options", "Show search options").

## Narrow widths

Measured at 768px in a desktop browser.

- **Tablet (768px)**: the desktop layout as is. The left nav stays at 256px, the list fills the rest, and each row wraps to two lines: the sender and time on top, then the subject and snippet. Settings tabs wrap onto several rows, and the setting labels in the left column wrap inside about 80px.
- **Phone**: no Gmail layout to follow. Gmail sends phone browsers to its app, and the browser version behind "I am not interested" is an old basic interface that does not represent Gmail today. At this width keep the app's own narrow layout and apply only the colors, type and wording above; make sure nothing breaks.
