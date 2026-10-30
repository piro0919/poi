# X app

Use for the app shell, feeds, lists of people or records, search results, settings, create dialogs and empty states.

## App shell

- Three columns centered in the window, all white, split by 1px `#eff3f4` vertical hairlines: left navigation (about 275px), main column (600px), right column (350px plus gutters).
- **Left navigation**: a small icon mark at the top only if the app has its own, then items 58px tall: a line icon and a 20px label, the current page bold with a filled icon. Under the items, the full-width black 「ポストする」 style pill for the app's single main action, if there is one. The signed-in account sits at the bottom: avatar, name in bold, handle in secondary text, and a 「…」 icon.
- **Main column header**: sticky, white at 85% opacity. Either tabs only (home), or a back arrow icon button with the title (20px weight 700) and a 13px count under it (「4,381 件のポスト」), or a search pill with a 「…」 icon on the right.
- **Right column**: a search pill at the top, then side cards (white, 1px `#eff3f4` border, radius 16px, padding 16px 20px) titled in 20px weight 800, with 「さらに表示」 links in `#1d9bf0` at the bottom.
- Use the right column only for real secondary content such as filters; leave it out rather than fill it with promotions.

## Feeds and lists

- Rows run the full width of the main column with padding 12px 16px and a 1px `#eff3f4` line between them. No cards, no zebra stripes.
- A record row: 40px round avatar on the left; to its right the name (15px weight 700) and handle or meta (15px `#536471`) on one line joined with 「·」 (「@handle · 5時間」), then the body in 15px / 20px. A 「…」 icon button at the top right.
- A person row adds a black 「フォロー」 pill (32px) at the right of the name line, and a short bio under it.
- Action counters under a post are icon + number in 13px `#536471`, spread across the row.

## Tabs and search results

- Tabs right under the header split the width equally: 53px tall, 15px, the active one bold with a 4px blue indicator under its label only.
- Search results: the search pill in the header, tabs under it (「話題のポスト」「最新」「アカウント」「メディア」「リスト」), then rows.
- Filters live in a right-column card: group headings 15px weight 700 (「アカウント」「場所」), each option a 15px label with a blue checked circle or an empty circle at the far right.

## Settings

- Two panes replace the main and right columns. The middle pane (about 390px) has the title 「設定」 (20px weight 700), a search pill, then menu rows 48px tall (15px label, a chevron at the right). The selected row is `#f7f9f9` with a 2px `#1d9bf0` bar on its right edge.
- When the app has only one settings section, skip the menu pane: keep the usual main column and the right column, and put the detail pane's content in the main column.
- The detail pane: title 20px weight 700, a 13px `#536471` lead sentence, group headings 20px weight 800, then rows about 72px tall: a small line icon on the left, a 15px title and a 13px `#536471` description under it, a chevron at the right. Groups are separated by a 1px `#eff3f4` line.

## Create dialog

- 600px wide, radius 16px, centered over the page dimmed with `rgba(180, 180, 182, 0.5)`.
- Header: close (×) icon button at the left, title 20px weight 700, the black 「次へ」 pill at the right. It is faded while the form is invalid; keep it enabled when the app only validates on submit, or its errors would never show.
- Fields are stacked floating-label boxes (58px; a multi-line one about 98px) with 16px side margins and 28px between them. A field with a maximum length shows a 「0 / 25」 counter at the top right of the box; leave the counter out when there is no maximum.
- A setting row with a checkbox at the far right: a 15px label and a 13px explanation below.

## Narrow widths

Measured at 768px in a desktop browser and at 375px in an iPhone browser.

- **Tablet (768px)**: the right column is gone. The left navigation collapses to icons only: a column about 115px wide, items 72×58px with a 26px icon centered and no label, the current page's icon filled. The main action becomes a 52px black circle with an icon instead of the wide pill, and the account shows as the avatar alone at the bottom. The main column keeps its 600px width and sits right after the navigation.
- **Tablet settings**: only the menu pane shows, in the main column. Picking a row opens the detail as its own page with a back arrow.
- **Phone (375px)**: there is no left navigation.
  - Top bar at the top level: a 50px row with the avatar on the left, the app's own mark in the middle (never X's) and a secondary pill on the right, then a 50px tab row, white at 85% opacity, 101px in all.
  - Top bar on deeper pages: one 50px row with a back arrow, the title in bold and a 13px secondary line under it (「4,381 件のポスト」「@handle」).
  - Bottom tab bar: 50px tall, white, a 1px `#eff3f4` line on top, icon-only items of equal width (75px each for five), the current one filled. Put each top-level page of the app in it, up to five.
  - The main action floats as a 53px `#1d9bf0` circle with a white icon (color read from a screenshot), about 19px from the right edge and 19px above the tab bar.
  - Lists, search results and settings run edge to edge with the same 16px row padding as on desktop. Settings shows the menu with its search pill as one page and each detail as another, with a back arrow.

## Empty states

- Inside the main column, about 400px wide and centered with generous top space: a 31px weight 800 headline, then one 15px `#536471` sentence with an inline `#1d9bf0` link.
