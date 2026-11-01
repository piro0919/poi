# Stripe — company-wide rules

Read this first for any Stripe-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| Stripe Dashboard | `dashboard.md` | Everything: the white sidebar shell with a top search bar, list pages with a bold title, pill view tabs, a search-and-filter row and dense tables, record detail pages with a right-hand details column, create dialogs, the settings index |

The Dashboard is a single product, so most rules live here and `dashboard.md` adds screen shapes.

## Feel in one paragraph

Crisp, precise and calm, like a well-kept ledger. Everything sits on white, and the greys lean cool and blue (`#1a2c44` text, `#3c4f69` secondary) rather than neutral. One vivid indigo, `#533afd`, is used sparingly: the current navigation item, links, the main button in a dialog and the round create button in the top bar. Controls are small (28px buttons with a hairline ring, 14px text in weight 600), tables are dense (44px rows, 12px column labels) and titles are short and heavy (28px weight 700). Corners are 6px on buttons and inputs and 8px on pill tabs, list controls, panels and dialogs. Hover adds a pale blue-grey fill with rounded ends, never a shadow. Status is shown in small bordered pills, green for success.

## Type

- Family: the system UI font. No typeface of Stripe's own is loaded in the Dashboard; the body computes to `-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, "Hiragino Sans", "Yu Gothic UI", "Meiryo UI", "Hiragino Kaku Gothic ProN", sans-serif` (computed, 2026-11-01). Use that stack, writing `system-ui` unquoted. Nothing needs to be loaded, and Japanese falls through to Hiragino, Yu Gothic or Meiryo.
- Interface text 14px / 20px weight 400.
- Page title (h1): 28px / 36px weight **700**.
- Section headings on a detail page 20px / 28px weight 700; section headings in dialogs and on the settings index 16px / 24px weight 700; dialog title 16px / 24px weight 700.
- Labels on buttons, pill tabs, underline tabs and the first column of a table: weight **600**. Buttons inside dialogs are weight 500.
- Table column labels 12px / 20px weight 600 in secondary text, in sentence case (no uppercase).
- Field labels in dialogs 14px / 20px weight 500; the help line under a label 12px / 20px in secondary text.
- Small print (pagination text, key hints, status pills, account name in the sidebar) 12px / 16px.
- Field labels on a detail page's details column are 14px / 20px weight 700, the value under them 14px weight 400.
- Numbers keep the interface font; amounts are weight 600 with the currency code after them in weight 400 secondary text (「$12.00 USD」). Add the code only when the app knows the currency; do not guess one from a symbol.

## Color

Values are computed styles in the browser, 2026-11-01. The Dashboard's newer stylesheet names its colors with hashed variables, so the role names below are Poi's.

| Role | Value |
| --- | --- |
| Page, sidebar, top bar, dialogs | `#ffffff` |
| Primary text (body, table cells, nav items, detail titles) | `#1a2c44` |
| List page titles | `#30313d`, a shade warmer than the body text |
| Secondary text (column labels, placeholders, help lines, pagination, currency codes, sidebar section labels) | `#3c4f69` |
| Button text on white buttons in the page | `#273951` |
| Text inside dialog fields and dialog buttons | `#404452`; dialog field labels `#1a1b25` |
| Tertiary text (a tax help line) | `#667691` |
| Faint icons (the bottom developer bar) | `#87909f` |
| Accent (indigo): current nav item, links, breadcrumb, main button fill, top-bar create circle, unread dot | `#533afd` |
| Lighter accent for a few links and the settings icons ("Show more") | `#625afa` |
| Checked checkbox | `#675dff` fill and ring |
| Hover fill (table rows, sidebar items), search field fill, key-hint fill, account tile | `#f4f7fa` |
| Hairline borders on pill tabs, the list search field, the Filter button, row dividers and the pagination line | 1px `#ecf1f6` |
| Control ring on white buttons and checkboxes in the page | `0 0 0 1px #d4dee9` (a shadow, not a border) |
| Dividers under underline tabs, above a dialog footer, above the bottom bar | 1px `#d4dee9` |
| Active pill tab border | 2px `#1a2c44` |
| Overlay behind a dialog | `rgba(186,200,218,.7)`, a pale blue-grey wash rather than a dark dim |
| Field focus ring | `0 0 0 4px rgba(1,150,237,.36)` around the field's `0 0 0 1px rgba(64,68,82,.16)` ring: a soft sky-blue halo, not the indigo |
| Error red (field border, error text, destructive button) | `#df1b41` for the field ring and the error text (computed); `#e61947` for the destructive button's fill (computed) |

### Status pills

20px tall, padding 1px 6px, radius 4px, a 1px border, 12px / 16px weight 400. Only the green one was on screen; the others are inferred from the stylesheet's color ramps at the same steps as the measured green (fill = the first step after white, border = the fifth, text = the tenth), not seen on screen.

| Meaning | Fill | Border | Text | Seen |
| --- | --- | --- | --- | --- |
| Success (「Succeeded」「Paid」) | `#eafcdd` | `#a8f170` | `#217005` | yes, computed |
| Info, in progress (「Open」) | `#e2fbfe` | `#a7e7fc` | `#045ad0` | inferred |
| Attention (「Past due」, pending) | `#fdf8c9` | `#fbd992` | `#b13600` | inferred |
| Critical (「Failed」「Blocked」「Disputed」) | `#fef4f6` | `#fbd3dc` | `#c0123c` | inferred |
| Neutral (「Draft」「Refunded」「Uncaptured」) | `#f4f7fa` | `#d4dee9` | `#50617a` | inferred |

On a detail page the success pill ends with a 12px check icon in the text color (「Succeeded ✓」). Pick by meaning; keep the app's own status words.

### Dark theme

None. The Dashboard has no dark theme in the browser: the personal settings offer no appearance option, and forcing `prefers-color-scheme: dark` leaves the page white (checked 2026-11-01). When the app has a dark mode, keep it and derive dark colors that keep the same contrast, the cool blue-grey cast and the indigo accent (SKILL.md, "Keep the app's dark mode").

## Spacing and shape

- Corner radii: 2px the key hint on a button, 4px checkboxes, status pills and the key hint in the search field, 6px buttons, inputs, selects and icon buttons, 8px pill tabs, the list search field, the Filter button, info panels, hovered table rows, the empty-section box and dialogs. Top-bar icon buttons and the create circle are fully round.
- Page gutters: 40px between the sidebar and the content and at the right edge at 1280px; 20px at 768px and 375px (read from a screenshot).
- The page title sits 16px under the 60px top bar; about 16px separates the title row, the view tabs, the search row and the table.
- Shadows: almost none in the page. White buttons carry only their 1px ring. Dialogs: `0 5px 15px rgba(0,0,0,.12), 0 15px 35px rgba(48,49,61,.08)`. Dialog buttons and selects add `0 1px 1px rgba(0,0,0,.12)` under their ring.

## Buttons

- **White button** (the default in the page): 28px tall, padding 4px 8px, radius 6px, `#ffffff` fill, the `0 0 0 1px #d4dee9` ring, 14px / 20px weight 600 `#273951`. A leading 12px icon (「+ Add customer」). Icon-only versions are 28×28 with a 12px icon (export, analyze, more).
- A screen's own create button is this white button with a +, not the indigo one (「+ Add customer」「+ Create payment」「+ Create product」). It may end with a 16×16 key hint (`#f4f7fa`, radius 2px, 12px `#3c4f69`, 「N」); show the hint only when the app already has that shortcut. Invoices is the one list page measured with an indigo create button.
- **Main button** (indigo): `#533afd` fill and ring, white text, 28px, padding 4px 8px, radius 6px, 14px weight 500, `0 1px 1px rgba(0,0,0,.12)` under it. Used for the button that completes a dialog (「Add customer」). Hover not measured; the stylesheet's next indigo step is `#4e11e2`.
- **Dialog secondary** (「Cancel」): white, ring `0 0 0 1px rgba(64,68,82,.16)` plus `0 1px 1px rgba(0,0,0,.12)`, 14px weight 500 `#404452`.
- **Destructive** (「Discard changes」): `#e61947` fill with white text, same size (computed).
- **Disabled**: the white button with its label in a light grey (「Create payment」 on a detail page; read from a screenshot).
- **Text links and link buttons**: `#533afd`, 14px weight 400, no underline (「More options ▾」「1 result」「Show more」).
- Top-bar icon buttons: 32px round, a 16px icon in `#1a2c44`, no fill until hover.

## Inputs

- Dialog fields: 28px tall, radius 6px, padding 4px 8px, 14px `#404452`, white, a `0 0 0 1px rgba(64,68,82,.16)` ring. Selects add `0 1px 1px rgba(0,0,0,.12)` and an up-down chevron at the right. Placeholders are light grey (read from a screenshot).
- Focused: the sky-blue 4px halo above around the same ring.
- Invalid: the field's ring turns into a 1px `#df1b41` ring (`0 0 0 1px`, drawn on the field's wrapper), and a line appears under the field: a 14px warning triangle and the message, both `#df1b41`, 14px / 20px weight 400 (computed; the triangle read from a screenshot). The message is a full sentence with a period: 「The email address is invalid.」 「メールアドレスが無効です。」
- The label sits above the field with a 12px help line between them (「Customer display name; appears on invoices.」). Fields are about 26px apart.
- Checkbox 14×14, radius 4px, the `#d4dee9` ring; checked `#675dff` with a white check.
- Search fields: see `dashboard.md` (the top bar's grey field and the list's outlined field).

## Empty states and errors

- An empty section on a detail page is a box with a dashed light-grey border (drawn as an SVG; read from a screenshot), radius 8px, padding 32px 24px, holding one centered 14px secondary line: 「No subscriptions」「No payment methods」「サブスクリプションはありません」「決済手段がありません」. No icon, no illustration, no button inside; the section's own + button sits at the right of its heading.
- No search results in a list: a `#f4f7fa` panel, radius 8px, padding about 24px, with 「No results」 in 14px weight 600, a 14px hint under it (「Try searching by name, email, description, ID, or card last 4」), and a white 「Clear all」 button at the right. The table header disappears. Read from a screenshot. Japanese: 「結果がありません」「名前、メールアドレス、説明、ID、またはカード番号の下 4 桁で検索」「すべてクリア」.
- A destructive confirmation is a small centered prompt: a 16px weight 700 question (「Discard changes?」), one 14px sentence with the consequence (「Your customer details won't be saved.」), then a white 「Keep editing」 and a red 「Discard changes」, side by side, the safe one first (read from a screenshot).
- Errors that belong to a whole form were not seen; use the inline error line under the form with the same red triangle (SKILL.md keeps it one message).

## Icons

Stripe publishes no icon package for use outside its products. On npm, `@stripe/icons` and `@stripe/sail-icons` do not exist (checked 2026-11-01). `@stripe/ui-extension-sdk` (MIT) has an `Icon` component for Stripe Apps, but it is a remote component drawn by the Dashboard itself and ships no SVG files, so it cannot be used in another app. Draw or pick icons that match. Never draw the Stripe wordmark or the "S" mark.

- Style (read from screenshots): outlined, even medium-thin strokes about 1.5px at 16px, rounded ends and corners, no inner fills, compact and geometric. The current nav item's icon takes the indigo; others follow the text color.
- Sizes (computed): 16px in the sidebar and the top bar, 12px inside 28px buttons and icon buttons, 16px in the bottom bar in `#87909f`, 16px in an info panel.
- Names the Dashboard's own icon set gives for roles (from the SDK's `Icon` names), useful when choosing equivalents: `home`, `balance`, `transfer` (transactions), `customer`, `product`, `invoice`, `clock` (shortcuts), `payment`, `billing`, `reporting`, `apps`, `more`, `search`, `filter`, `settings`, `notifications`, `help`, `add`, `edit`, `export`, `barChart` (analyze), `clipboard` (copy), `chevronDown`, `cross` (close), `warning`, `check`, `lightBulb` (tips), `terminal` (developers).

## Wording and tone

Measured from the English (United States) and Japanese UIs.

- Plain, exact and businesslike. No exclamation marks, no "please", no jokes.
- **Sentence case** everywhere: 「Add customer」「Product catalog」「Billing overview」「Payment method」「Last 4 digits」「Has subscription」「Remaining balances」.
- Create actions start with a verb and name the object. The page's own button and the dialog's submit say 「Add customer」; the dialog is titled 「Create customer」. Elsewhere 「Create payment」「Create invoice」「Create product」. Japanese: 「顧客の追加」 on the page, title 「顧客を作成する」, submit 「顧客を追加」, 「決済を作成」「請求書を作成」.
- Dismissing a dialog is 「Cancel」 / 「キャンセル」.
- Field errors are full sentences with "The" and a period: 「The email address is invalid.」 / 「メールアドレスが無効です。」
- Help lines under labels are short, may join two clauses with a semicolon, and usually end with a period: 「Customer display name; appears on invoices.」; a fragment can stand without one: 「Used for invoice dates and times」.
- Empty and no-result lines are noun phrases with no period: 「No results」「No subscriptions」; the hint after them is an imperative with no period: 「Try searching by name, email, description, ID, or card last 4」.
- Oxford comma in lists: 「name, email, description, ID, or card last 4」. Settings descriptions list their contents and end with a period: 「Team members, roles, account security, authorized apps, and shared resources.」, or say what you can do: 「Manage who on your team receives emails.」
- Statuses are past participles or short adjectives: 「Succeeded」「Refunded」「Disputed」「Failed」「Uncaptured」「Blocked」; 「Draft」「Open」「Past due」「Paid」.
- Placeholders say what to type: 「Search by name, email, etc.」「Search filters」「Search products」; choice prompts end with an ellipsis character: 「Choose a country…」「Choose a currency…」. Example values are placeholders: 「Jenny Rosen」 and `jenny.rosen@example.com`.
- Empty cells show 「—」. Card numbers show 「•••• 4242」.
- Counts: pagination 「1–12 of 12 results」 (en dash) / 「12 件中 1 ～ 12 件の結果」; a short count link 「1 result」 / 「1 件」, 「1 item」.
- Dates: 「Mar 4, 2026, 9:05 AM」 in tables; date only where time does not matter: 「Mar 4, 2026」. Japanese uses 「2026/03/04 09:05」 and 「2026/03/04」.
- Japanese puts a half-width space between Japanese and Latin letters or digits: 「カード番号の下 4 桁」「API ポリシー」. Field labels are bare nouns with no colon (「名前」「メール」「言語」).
- Confirmations ask a question and say the consequence: 「Discard changes?」「Your customer details won't be saved.」, buttons 「Keep editing」「Discard changes」.

### Rewrites for common AI-default copy

| Default | Stripe-ish |
| --- | --- |
| + New Customer | + Add customer |
| Submit | Add customer (under a 「Create customer」 title) |
| Save Changes | Save |
| Error: Invalid email | The email address is invalid. |
| No data found. | No results |
| Manage your customers here. | (drop it; list pages have no line under the title) |
| Search... | Search by name, email, etc. |
| Status: Active | (a status pill: 「Active」 in the success colors) |
| Are you sure? | Discard changes? / Delete customer? with one sentence on the consequence |
| N/A | — |
| Showing 1 to 10 of 42 entries | 1–10 of 42 results |

「Save」 and 「Delete customer?」 were not seen on a captured screen; they follow the one-word dialog buttons (「Cancel」) and the question form of 「Discard changes?」.

## Not captured yet

- The shell in live mode, without the test-mode banner (its top edge and corners)
- Hover and pressed states of the main and white buttons, and the disabled colors as computed styles
- Status pill colors other than success (inferred from ramps above)
- Menus and popovers (the filter menu, the search dropdown, a row's ⋯ menu) as computed styles: radius, shadow, row height
- The sidebar hover fill as a computed style (the computed style showed none; a screenshot shows a pale fill)
- The underline tab's active indicator as a computed style
- Settings pages below the index (forms, save buttons, toasts after saving) and their wording
- The add-customer dialog at 768px and 375px
- Toasts, tooltips, and errors for a whole form

## Sources

Captured 2026-11-01 from the Stripe Dashboard in the sandbox (test mode) of the owner's account, at 1280×800, 768 and 375 wide, with the Japanese UI and again with the UI language temporarily set to English (United States). Opened: Home, Customers (with a row hovered, the Filter menu open, a nonsense search, and the add-customer dialog with an invalid email; closing the dialog brought up its discard prompt, and 「変更を破棄」 was pressed; the customer count was checked afterwards and no customer had been created), Transactions, Invoices, Product catalog, the settings index, one customer detail page (Stripe's own sample customer), the top-bar search focused and with a query, a hovered sidebar item and the phone menu. Values are computed styles of the visible elements and the `:root` variables on Customers (both languages), Transactions, the settings index, the customer detail page and the add-customer dialog, at 1280px; the narrow layouts and the states marked above were read from screenshots. Only interface labels and Stripe's own placeholders were copied; no customer names, emails, phone numbers, account names or IDs, amounts or record IDs. Promotional banners at the top of pages were treated as marketing and left out. The npm registry was searched for an official icon package the same day.
