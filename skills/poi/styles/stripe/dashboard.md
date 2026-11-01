# Stripe Dashboard

Use for the app shell, list pages with tables, record detail pages, create dialogs, the settings index and summary screens.

Values are computed styles at 1280px unless marked "read from a screenshot". Colors, type and controls are in `company.md`.

## App shell

- **Test-mode banner**: in the sandbox the whole app sits under a 44px navy band (`#0e3359`, white 14px text, 「Sandbox」 and 「You are testing in a sandbox. No real transactions will be processed.」), and the white app below it has rounded top corners. It exists only in test mode. Do not copy it, and do not round the app's top corners for it.
- **Sidebar**: 240px, white, full height, a 1px light line on its right edge (read from a screenshot). From the top:
  - A 60px row, padding 0 20px, holding the account switcher: 212×44, radius 8px, padding 6px; a 24px tile (`#f4f7fa`, radius 4px) with the first letter in 12px weight 600 `#3c4f69`, then two 12px / 16px lines (the mode in weight 600, the account name in weight 400) and a small ▾. Use the app's own name here with its first letter in the tile; leave out the ▾ unless the app can switch accounts. An app with no mode to show has one line: its name in 12px weight 600.
  - Nav items from 20px down, padding 0 20px: each 200×30, radius 6px, no gap between items. A 16px icon 4px from the item's left edge, the label 14px weight 400 `#1a2c44` 32px from the left edge. The current item turns the label and icon `#533afd` and weight 600, with no fill. Hover adds a pale `#f4f7fa` fill on the rounded item (read from a screenshot).
  - Section labels (「Shortcuts」「Products」, 「ショートカット」「サービス」) 12px weight 400 `#3c4f69`, on a 26px row about 28px below the items above. Expandable groups end with a small ▾ at the right edge.
  - At the right edge, halfway down, a narrow grip (40×56) collapses the sidebar. Add it only if the app can collapse its navigation.
- **Bottom bar**: 48px, `#f4f7fa`, a 1px `#d4dee9` line on top, full width under both the sidebar and the page, with 「Developers」 and 32px round icon buttons in `#87909f`. It is developer tooling; do not copy it.
- **Top bar** over the page: 60px, white, no line under it. The content column's left edge (280px at 1280px) is where the search field starts.
  - Search field: 360×36, `#f4f7fa` fill, no border, radius 8px; a 16px magnifier 12px from the left, placeholder 「Search」 / 「検索」 14px `#3c4f69` starting 32px in; at the right end a 20×20 key hint (`#ecf1f6`, radius 4px, 「/」 in 13px weight 600 `#3c4f69`). 「/」 focuses it. Add it only if the app has a search across records.
  - Focused, the field widens to about 600px and a panel drops from it, the same width, white, radius about 8px, a soft shadow (read from a screenshot). With an empty query it shows 「Suggested filters」 rows: a small bordered key chip (「is:」「email:」「status:」), an example in secondary text, and a description right-aligned. With a query, results are grouped under 14px weight 600 headings (「Payments」「Customers」「Documents」), rows about 33px, the matched letters on a pale indigo fill; groups split by 1px lines. A `#f4f7fa` footer band holds an indigo link: 「See all results」 / 「すべての結果を表示する」. Show only groups the app can search.
  - On the right, 32px round icon buttons 8px apart, 16px icons in `#1a2c44`: apps, help, notifications (an unread dot: 10px `#533afd` with a 2px white ring), settings, then create: a 20px `#533afd` circle with a white 12px +. Keep only those the app can back; the create circle only when the app has a create action available from every screen.
- **Page**: padding 0 40px, so the content is 960px wide at 1280px. No cards around the page.

## List pages

### Header

- One row 16px under the top bar: the title on the left, 28px / 36px weight 700 `#30313d` (「Customers」「Transactions」「Product catalog」), and the actions on the right: 28×28 white icon buttons (export, analyze) 8px apart, then the white create button with a + (「+ Add customer」 with its 「N」 key hint). No description line under the title.
- Some pages put underline tabs right under the title (「Payments」「Payouts」「Top-ups」「All activity」; 「All products」「Features」「Coupons」): a 37px row with a 1px `#d4dee9` line under it; tabs 36px, padding 8px 12px, the first flush with the title's left edge, 14px / 20px weight 600; the current tab `#1a2c44` with a short dark underline on the line (read from a screenshot), the others `#3c4f69`.
- Promotional panels between the header and the list (a `#f4f7fa` box with a bulb icon, a sentence and an indigo link) are marketing. Do not add one.

### View tabs and status chips

- A row of pill tabs under the header (measured only with a promotional panel in between, which sat 16px under the header and 32px above the tabs; without one, use 16px): 38px tall, radius 8px, white, 14px / 20px weight 600 `#1a2c44`, 8px apart. The selected one has a 2px `#1a2c44` border (padding 7px 11px); the others a 1px `#ecf1f6` border (padding 8px 12px). A 38×38 「⋯」 pill at the end opens more views.
- They are saved views (「All」「Remaining balances」) or status filters (「All」「Succeeded」「Refunded」「Disputed」「Failed」「Uncaptured」「Blocked」). Use them for the app's own status or view filters.
- When status filters share the row with Filter, Filter and the table settings button sit at the right end of the same row, and the row has a 1px `#f4f7fa` line under it, 16px below the pills.
- While a search is typed, a 「+ Save as」 pill appears with indigo text and a 2px indigo border (read from a screenshot). Add it only if the app can save views.
- Invoices uses a different shape: five equal boxes across the page, about 45px tall, radius 8px, a 1px border, labels 14px in regular weight `#1a2c44`, 12px from the box's left edge, the selected one with a 2px indigo border and indigo text in weight 500 (「All invoices」「Draft」「Open」「Past due」「Paid」), and under them small fully rounded filter pills with a ⊕ (「Status」「Created」「Due date」「More filters」) (read from a screenshot).

### Search and Filter

- One row under the tabs: the list search field fills the width, 38px tall, radius 8px, a 1px `#ecf1f6` ring, a 16px magnifier at the left and the placeholder 「Search by name, email, etc.」 / 「名前、メールアドレスなどで検索」 in 14px; a round clear button appears at the right while it has text. Then, 8px apart, the 「Filter」 button (40px tall, radius 8px, 1px `#ecf1f6` border, padding 0 14px, a three-line filter icon and 14px weight 600 `#273951`) and a 40×40 table settings icon button with sliders.
- 「Filter」 opens a panel under it, right-aligned to it, about 318px wide, white, radius about 8px, a soft shadow: the heading 「Filter」 in 14px weight 600, a focused search field (「Search filters」) with the sky-blue halo, then the fields as plain 14px rows about 32px tall (「Email」「Name」「Created」「Type」「Last 4 digits」「Has subscription」) (read from a screenshot). List only the fields the app can filter by.

### Table

- No outer border, no fill, no zebra stripes. The table starts about 16px under the search row.
- Header row 40px, white: column labels 12px / 20px weight 600 `#3c4f69`, sentence case, with a light line under the row (read from a screenshot).
- Rows 44px, a 1px `#ecf1f6` line between them (read from a screenshot; the pagination line above the footer is `#ecf1f6`, computed). Cells 14px / 20px `#1a2c44`, text starting 16px into the cell. The first column is the record's name in weight 600 (300px wide on Customers). Amounts right-align, in weight 600 with the currency code after them in `#3c4f69`. Empty cells 「—」. Status cells hold one pill (`company.md`).
- A 40px checkbox column comes first, with 14px checkboxes and a select-all in the header. Add it only when the app has bulk actions.
- Hover: the whole row turns `#f4f7fa`, with 8px rounded ends (computed), and row actions appear at the right end: a 28×28 「⋯」 icon button with a 12px icon (Customers), or a joined group of 28px icon buttons inside a 30px white box with a 1px `#ecf1f6` border and radius 6px (refund, send receipt, more on Transactions). Add only actions the app has.
- A table wider than the page scrolls sideways inside the content column, and the last visible column fades out at the right edge (read from a screenshot).
- **Footer**: a 45px bar with a 1px `#ecf1f6` line on top and padding 8px 0, stuck to the bottom of the viewport while the rows scroll behind it (read from a screenshot): 28×28 「‹」「›」 icon buttons without a ring, then 12px / 16px `#3c4f69` text 「1–12 of 12 results」 / 「12 件中 1 ～ 12 件の結果」. Write the app's own numbers.
- No results: see `company.md`.

## Record detail page

- **Header** (112px tall at 1280px): a breadcrumb link to the list above the title, 14px / 20px weight 600 `#533afd` (「Customers」); the title 28px / 36px weight 700 `#1a2c44` (the record's name); under it a 16px / 24px `#3c4f69` line (the email) followed by a 12px copy icon, the whole line a copy button. Actions on the right, aligned with the title: white 28px buttons (「Create payment」「Create invoice」, disabled ones with grey text) and a 28×28 「⋯」.
- **Two columns** under the header: the main column 624px wide on the left and a details column 288px wide on the right, 48px apart (at 1280px).
- **Main column**: sections about 180px apart, each with a 20px / 28px weight 700 `#1a2c44` heading and a 28×28 white + icon button at its right end (the add action for that section; grey when not available). Content per section:
  - An empty section is the dashed box with one line (「No subscriptions」「No payment methods」).
  - A related list is a compact table: header 36px with 12px / 20px weight 700 labels in `#1a2c44` (not grey here), rows 37px, amount in weight 600 with the code in `#3c4f69`, the status pill, dates in `#3c4f69`; the row's 「⋯」 at the right, with its joined action buttons on hover. Under it an indigo count link: 「1 result」 / 「1 件」, leading to the full list.
- **Details column**: 20px weight 700 headings (「Insights」「Details」「Metadata」), with a 28×28 white pencil button at the right of the editable ones. Under each, label and value pairs about 60px apart: the label 14px / 20px weight 700 `#1a2c44`, the value 14px weight 400 under it (「Customer ID」「Customer since」「Billing emails」「Business name」). IDs and emails end with a 12px copy icon. A long list ends with 「Show more」 / 「さらに表示」 in 14px weight 500 `#625afa`.

## Create dialog

- Centered, 496px wide, up to about 640px tall at an 800px window with the body scrolling, white, radius 8px, the dialog shadow from `company.md`, over the `rgba(186,200,218,.7)` overlay.
- Header 60px, padding 16px: the title 16px / 24px weight 700 `#1a2c44` (「Create customer」 / 「顧客を作成する」) and a 28×28 × at the right.
- Body padding 0 16px. Sections start with a 16px / 24px weight 700 `#30313d` heading (「Account information」「Billing information」「Tax information」 / 「アカウント情報」「請求先情報」「税務情報」). Later sections collapse: the heading ends with a ▾ and opens on click. 「More options ▾」 in indigo reveals the less common fields of a section.
- Each field: the label (14px weight 500 `#1a1b25`), an optional 12px help line, then the 28px field. Labels have no colon and no required mark. Placeholders are examples (「Jenny Rosen」, `jenny.rosen@example.com`). A checkbox option reads as a sentence: 「Same as account email」.
- Footer 61px, a 1px `#d4dee9` line on top, padding 16px: 「Cancel」 then the indigo main button (「Add customer」), right-aligned, 8px apart.
- Closing a dialog with typed changes shows the 「Discard changes?」 prompt from `company.md` over the dialog, whose contents fade behind a white veil (read from a screenshot). Add it only if the app already asks before discarding.

## Settings index

- No page title on the index: the first thing under the top bar is a group heading.
- Groups (「Personal settings」「Account settings」「Product settings」 / 「個人設定」「アカウント設定」「サービス・プロダクト設定」), each a 16px / 24px weight 700 `#1a2c44` heading, 12px above its first row of entries and about 50px below the group before.
- Entries in a three-column grid (327px per column at 1280px), rows about 112px apart. Each entry is one link, radius 8px, padding 8px 24px 8px 8px: a 32px icon tile (`#f4f7fa`, radius 20%) holding a 16px icon in `#625afa`, then 12px to its right the title in 16px / 24px weight 700 `#533afd` and the description under it in 14px / 20px `#1a2c44` (「Team and security」 / 「Team members, roles, account security, authorized apps, and shared resources.」). Hover not measured.
- At 375px the grid becomes one column, the same entry shape.
- Settings pages below the index were not captured; follow `company.md` for their forms.

## Overview with numbers (Home)

Read from screenshots only.

- A 28px weight 700 title (「Today」) with a 1px light line under its row and a white button at the right.
- Figures: a 14px label with a ▾ when it is a choice (「Gross volume ▾」), the value about 20px under it in regular weight, a 12px secondary line under that (a time, 「Expected Nov 6」 style). A right column of figures with an indigo 「View」 link at the right of each label, split by 1px lines.
- A second 28px heading (「Your overview」) above a row of filter pills: fully rounded, 1px border, the field name in `#1a2c44` and its value in indigo after a thin divider (「Date range | Last 7 days ▾」「Daily ▾」), with white 「+ Add」「Edit」 buttons at the right.
- Chart cards: white, radius 8px, in a `#f4f7fa` tray with 8px padding and gaps; a 14px weight 600 title, the figure in about 20px weight 600, a 14px secondary comparison line; lines in `#533afd`, the comparison period dashed grey, axis labels 12px secondary.

## Narrow widths

Read from screenshots at 768×800 and 375×800.

- **Tablet (768px)**:
  - No sidebar. The top bar keeps 60px: a 20px 「≡」 20px from the left, the app's name in 14px weight 600, the search field centered (about 332px), and on the right 20px icons for apps, notifications and settings; help and the create circle drop out.
  - Content inset 20px on both sides. List headers, tabs, the search row and the table keep their desktop shapes; the table scrolls sideways with the fade.
  - The detail page becomes one column: the header with its actions still on the right, then the details column's sections (「Insights」「Details」), then the main sections.
- **Phone (375px)**:
  - Top bar: 「≡」, the app's name, then notifications and a magnifier icon at the right; the search field collapses into the magnifier.
  - The title stays 28px. Its actions collapse into two 40px square white buttons, radius 8px, 1px border: 「⋯」 holding the other actions, and 「+」 for create.
  - Underline tabs keep the first two and put the rest under 「More ▾」.
  - Pill tabs become one full-width 44px dropdown (「All ▾」, radius 8px, 1px border). The list search is 44px with a 44px filter icon button beside it; 「Filter」 loses its label.
  - Table rows become stacked rows with no header and no checkboxes, about 70px tall, a 1px line between them: line 1 the name in 16px weight 600 (or the amount in weight 600 with its code in regular weight), line 2 in 14px `#3c4f69` (the email; or the email and description joined by a thin 「|」, cut with an ellipsis); a status pill at the right, then 「⋯」 at the far right. The footer stays stuck to the bottom.
  - Detail page: the actions wrap under the email line as a row of white buttons with 「⋯」 last; then the details sections, then the main sections.
  - 「≡」 opens a full-screen white menu over the page: a 40px round × on a pale fill at the top left and the top bar's icon buttons on the right; the account tile, name and a switch control centered; a 1px divider; nav items about 36px tall with 16px labels and icons, the current one indigo; section labels in 14px `#3c4f69`. An 「Exit sandbox」 button there is test-mode only; leave it out.
