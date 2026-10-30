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

## Layout

- **Header** 64px: menu icon, product name, then a large search field (fully rounded, ~720px wide, 48px tall, filled background, search icon on the left, a filter/options icon on the right). Help, settings and app icons on the right, 40px circles.
- **Left nav** 256px: the main action button on top (radius 16px, 56px tall, icon + label, e.g. a pencil and "Compose"). Below it, nav items 32px tall, 14px, icon + label + count on the right. The selected item is a pill that is flat on the left and rounded on the right (`0 16px 16px 0`), bold label. A "More" item with a chevron collapses the rest. A second group ("Labels") has a 16px weight 500 heading and a + icon button.
- **List container**: one white surface with radius 16px, filling the rest of the window. No outline border around it.
- The header and left nav above apply only when Gmail is the shell. When the list sits inside another product's shell, use only "The list" below.

## The list

- **Toolbar** above the rows, 48px: a select-all checkbox with a small dropdown arrow, refresh icon, more (⋮) icon. On the right: "1–50 of 1,240" in 12px secondary text and previous/next chevron icon buttons. When rows are selected, the toolbar swaps to bulk actions as icon buttons.
- **Rows** are single lines, 40px at default density (28px compact):
  1. checkbox, 2. star icon, 3. the primary name (~200px column, truncated), 4. title and a snippet on one line — `Title - snippet text…` with the snippet in secondary color, 5. date or time right-aligned (`16:59` for today, `Oct 29` for older).
- **Unread / needs attention** rows: name, title and date in weight 700; everything else 400. This is the only place bold is used.
- **Hover**: the row lifts with a faint shadow and the date is replaced by icon buttons (archive, delete, mark as read, snooze). These are UI-only and can be added without changing behavior; wire them only to actions the app already has.
- **Selected** rows get a light blue fill.
- No status pills. Category or status goes in a small label chip before the title, or as an icon.

## Settings page

- Tabs across the top (14px weight 500, gray; active tab in accent with a 2px underline).
- A two-column form: setting name in bold on the left ("Maximum page size:"), controls and explanations on the right. Rows separated by 1px `#dadce0` dividers.
- Options are radio buttons with a bold label and a plain explanation after a dash: "**Enable hover actions** - Quickly gain access to archive, delete, mark as read, and snooze controls on hover."
- Save and Cancel buttons sit at the bottom of the page.

## Copy seen here

Japanese UI (measured): 「作成」「受信トレイ」「送信済み」「下書き」「もっと見る」「ラベル」「新しいラベルを作成」「メールを検索」「詳細検索オプション」「詳細を表示」「1–100 / 40,305 行」、settings such as 「表示件数:」「カーソルでの操作を有効にする」「返信時のデフォルトの動作:」.
Icon-only controls always have a tooltip naming the action ("Refresh", "More email options", "Show search options").

## Narrow widths

Measured at 768px in a desktop browser.

- **Tablet (768px)**: the desktop layout as is. The left nav stays at 256px, the list fills the rest, and each row wraps to two lines: the sender and time on top, then the subject and snippet. Settings tabs wrap onto several rows, and the setting labels in the left column wrap inside about 80px.
- **Phone**: no Gmail layout to follow. Gmail sends phone browsers to its app, and the browser version behind "I am not interested" is an old basic interface that does not represent Gmail today. At this width keep the app's own narrow layout and apply only the colors, type and wording above; make sure nothing breaks.
