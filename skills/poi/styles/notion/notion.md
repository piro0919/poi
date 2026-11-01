# Notion app

Use for the app shell, pages with a big title, database tables, view tabs and toolbars, search, settings, menus and toasts.

## App shell

- **Sidebar** (270px, `#f9f8f7`, dark `#202020`) on the left, full height, with a 1px line on its right edge (see Color). From the top:
  - A 44px row of 20px icon buttons: a panel icon on the left that collapses the sidebar, an inbox tray and a compose pencil on the right.
  - A search field 32px tall, inset 12px, radius 8px, transparent with the 1px control border, placeholder 「検索または質問」 in 14px tertiary text and the hint 「⌘K」 in 11px `#8e8b86` at the right. It opens the search dialog rather than taking text itself.
  - A row of top tabs: the current one is a 32px pill (radius 8px, the hover fill) with a filled icon and a 14px weight 500 label (「ホーム」); the others show only their icons.
  - Items 30px tall, inset 8px from both edges, radius 6px, padding 5px 8px, a 20–22px icon or emoji before a 14px / 21px label in `#5f5e59`. The current item and a hovered item get the hover fill; the text keeps its color. On hover a ⋯ and a + (16px) appear at the right end.
  - Section labels 12px weight 500 in tertiary text, 16px from the left, about 20px above their items (「最近」「今後のイベント」). Long lists end with a 「すべて表示」 item led by a ⋯ icon in tertiary text.
  - At the bottom: the workspace switcher, a letter avatar in a small rounded square and the name with a ▾, plus a help and an apps icon.
- **Top bar** over the main pane: 44px, no fill and no line under it. Breadcrumbs on the left, 14px weight 400 in primary text, each a quiet 24px button (radius 6px) with the page's emoji, split by a 13px 「/」 in `#e6e5e3`. On the right: 「共有」 as a quiet 28px text button with a lock icon, then 20px link, star and ⋯ icon buttons.
- **Main pane**: plain white (`#191919` in dark), no card. Page content is a centered column 720px wide; a full-page database starts 104px in from the sidebar and runs to the right edge so wide tables can scroll.

## Page header

- Above the title, hidden until the header is hovered: 「アイコンを追加」「カバー画像を追加」「説明を追加」 as 28px quiet buttons, 14px tertiary text with 14px icons. Show them only if the app can do those things.
- The title: 40px / 48px weight 700 on a page, 32px / 38.4px on a full-page database, primary text, no description line under it. A page's emoji icon sits above the title at about 78px (read from a screenshot).
- Page text 16px / 24px; a link to another page is weight 500 with a 1px `rgba(28,19,1,.11)` underline drawn as a bottom border, led by the page's icon.

## Database views

### View bar

- One row under the title, 40px. On the left, view tabs as pills: 32px, radius 20px, padding 6px 12px, a 20px view icon and a 14px weight 500 label. The active tab has the hover fill and primary text; the others are secondary text with no fill. A + to add a view appears at the end on hover.
- On the right, 28px icon buttons with 16px icons, labelled 「フィルター」「並べ替え」「検索」「設定」, then the blue split 「新規」 button. An icon turns blue while its sort or filter is in use. Keep only the ones the app can back.
- In Notion's shape this bar is the heading row's action row: the screen's own create button goes at its right end as 「新規」 ("New"), not beside the title. Drop the ▾ half when nothing would be behind it.
- A status filter the app already has may become view tabs, one per value (「すべて」 first), since a database is filtered by switching views in Notion. Below 1024px they fold into the single view pill with a ▾ described under Narrow widths.
- 「検索」 expands in place into a field (placeholder 「入力して検索…」, 14px) with a round clear button; nothing else on the bar moves except the icons sliding left.
- 「設定」 opens a side panel over the right of the table (about 290px, a 1px divider on its left, read from a screenshot): the small heading 「ビューの設定」, the view's name in an input, then 28px rows with an icon, a label and the current value in tertiary text with a › (「レイアウト　テーブル ›」「グループ　種類 ›」), and a 20px round close button.

### Table

- No outer border and no fill. Grid lines are 1px `rgba(42,28,0,.07)` (dark `rgba(255,255,243,.082)`): every cell has a right and a bottom line; the header row has only a line under it.
- Header row 36px. Each header cell: a 16px property-type icon, 6px gap, the name in 14px weight 400 secondary text, padding 0 8px. Clicking a header opens the column menu: a name input, then 「プロパティを編集」「種類を変更する」「フィルター」「並べ替え」「計算」「固定表示」「非表示」「コンテンツを折り返す」「左に挿入」「右に挿入」「プロパティを複製」「プロパティを削除」, grouped by dividers. Show only what the app can do.
- Rows 37px (36px plus the 1px line), cell padding 7.5px 8px, 14px / 21px primary text. The title column is the widest (280px; others 200px) and leads with an 18px page icon and the title in weight 500. Text is cut with an ellipsis rather than wrapped. When these widths would make the table scroll sideways at 1280px, narrow the other columns first (to about 110px for a pill column) and keep the title column the widest.
- Row hover: no fill. In the gutter to the left of the table a + and a ⋮⋮ drag handle (20px, tertiary) appear, with a 16px row checkbox; and at the right end of the title cell a small 「開く」 chip (24px, white, radius 6px, the menu shadow, 12px weight 500 secondary text, a side-panel icon). Add only the chip when the app has a detail view for a row; a checkbox only when there are bulk actions.
- Select cells hold one tag pill, 20px, radius 4px (colors under "Tag colors" in `company.md`). Checkbox cells hold a 16px checkbox, padding 10px 8px. URLs and emails are primary text with a 1px underline in the control border color, not blue.
- Grouped tables: each group starts with a ▼ caret (11px) and the group's tag pill on a 40px row, followed by the group's own header row; on hover a ⋯ and a + follow the pill.
- Below the rows: 「さらに読み込む」 with a down arrow when the list is paged (Notion loads 25 rows at first), then 「＋ 新規ページ」 in 14px tertiary text as its own 33px row with a line under it. The add row creates a record only if the app's own create action does.
- When a search or filter leaves no rows, the header row disappears and two outlined 28px buttons sit centered: 「検索をクリア」「＋ 新規ページ」 (14px weight 500, `#8e8b86` text). Keep only the ones the app can back.

### Board, list and gallery

Not captured; the databases allowed for this capture have table views only. Notion's layout list names them 「ボード」「リスト」「ギャラリー」 alongside 「テーブル」「タイムライン」「カレンダー」「チャート」「フィード」「地図」.

## Search

- A large floating dialog, not a page: 1006×700 at a 1280×900 window, 81px from the top, centered. Translucent: `rgba(255,255,255,.9)` with `backdrop-filter: blur(40px)` (dark `rgba(32,32,32,.9)`), radius 20px, shadow `0 24px 48px rgba(25,25,25,.24), 0 4px 12px rgba(25,25,25,.14), 0 0 0 1px rgba(42,28,0,.07)` (dark: a `0 0 0 1px #383836` ring and the same shadow at .64 and .56). There is no dimmed overlay behind it.
- The query row is 48px: a 20px magnifier and a 16px input with no border, placeholder 「（ワークスペース名）を検索、または質問 …」; put the app's own name there or use 「検索」. Two 20px icon buttons sit at the right.
- Under it, a row of filter buttons with no border: 24px, fully rounded, an icon, a 14px secondary label and a ▾: 「タイトルのみ検索」「作成者」「ページ内」, then 「＋ フィルター」 in tertiary text.
- Results are grouped by date with 12px weight 500 secondary labels (「今日」「過去1週間」「過去30日間」「古い」). Each result is a 36px row, radius 12px, padding 4px 8px: the page icon, the title in 14px weight 500 `#5f5e59`, then 「—」 and the path in 12px tertiary text. The selected row has the hover fill. A preview card fills the right half (white, radius 12px, the menu shadow): a 48px icon, the title 20px weight 600, the description 13px secondary text.
- A 41px footer under a 1px line: 「⌘↵ 新しいタブで開く」 in 12px tertiary text.
- No results: centered in the dialog, 「該当なし」 in 14px weight 500 secondary text, the reason in 14px tertiary text and a blue text link under it.
- Escape closes it.
- When the app's search only sends a query somewhere (no live results), keep the dialog to the query row and a 41px footer saying what Enter does (「↵ 顧客を検索」, "↵ Search customers"); leave out the filter buttons, date groups and preview, and let the dialog take its content's height. Drop 「、または質問」 from the placeholder when there is nothing to ask.

## Page properties

A record opened as a page (a customer's detail) shows its fields as property rows between the title and the body. Measured on a database row opened as a full page, 2026-11-01.

- The title is the page title (40px / 48px weight 700) in the same 720px column.
- Each property is a 34px row, 38px apart. On the left a 160px label cell (padding 0 6px, radius 6px, hover fill on hover): a 16px property-type icon in `#8e8b86`, 8px gap, the name in 14px / 20px secondary text. On the right the value cell takes the rest of the column (padding 6–7px 6px, radius 4px), 14px / 21px primary text.
- Values look as they do in a table cell: a select is one tag pill, a URL or email is primary text with the 1px underline, a checkbox is the 16px checkbox. An empty value is 「未入力」 ("Empty") in tertiary text.
- No lines between rows and no box around them. A status the app showed beside the title moves into these rows as a pill.
- Headings inside a page body were not captured. Until they are, use the settings section heading (16px / 24px weight 500) for a heading inside a page or a dialog.

## Settings

- A modal dialog 1152×800 at a 1280×900 window (inset 64px and 50px), radius 12px, shadow `0 24px 48px rgba(25,25,25,.24), 0 4px 12px rgba(25,25,25,.14), 0 0 0 1px rgba(42,28,0,.07)`, over a `rgba(15,15,15,.6)` overlay. A 22px round × at the top right.
- Left pane 240px in the sidebar color, padding 8px: a focused search field first (「検索設定」), then group labels in 12px weight 500 tertiary text (「アカウント」「ワークスペース」「機能」) and 28px items (radius 6px, padding 4px 6px, an icon, 14px / 20px weight 500 in `#5f5e59`). The selected item has the hover fill and primary text.
- Right pane white, padding 36px 60px 44px. The title 26px / 32px weight 600, a 16px lead under it, then sections: a 16px weight 500 heading with a 1px divider under it (12px below the text), then rows.
- Each row: the label 14px weight 500 on the left with a 13px / 18px secondary description under it, the control at the right edge (a 28px select with a ▾, a toggle, or a secondary button). No lines between rows inside a section. A disabled control is drawn at 40% opacity.
- A list of records inside settings (members) is a plain table: 14px secondary header cells with a ↑ on the sorted one, 42px rows with a 1px `#e6e5e3` line under each, a 28px round avatar, the name in 14px weight 500 and a 12px secondary second line. Filter tabs above it are 28px pills (radius 9999px, padding 0 10px, 14px weight 500; inactive ones tertiary text with no fill), each followed by its count in the same tertiary text.
- An empty list is a box with a 1px dashed `rgba(70,68,64,.45)` border, radius 4px, holding a centered 20px icon, one 14px weight 500 line (「ゲストはまだいません」) and a 32px secondary button.

## Dialogs and menus

- Menus and popovers follow `company.md`: white, radius 10px, padding 4px, 28px items. The page ⋯ menu is 256px wide; a select's option list is 300px.
- A select's option list: the current value as a pill with a × in a field at the top, then 「オプションを選択するか作成します」 in 12px weight 500 secondary text, then one 28px row per option with a ⋮⋮ handle and the option's pill. Hovering a row shows a ⋯ at its right end, which opens 「削除」 and the 「カラー」 list (an 18px swatch, radius 4px, before each color name).
- The page ⋯ menu ends with a small footer in 12px tertiary text (「最終更新」 and who and when) and a 「…について詳しくはこちら」 item with a help icon. Leave the footer out unless the app keeps that information.
- Toasts: see `company.md`. Notion shows one after copying a link.

## Narrow widths

- **Tablet (768px, desktop browser)**: the desktop layout, narrowed. The sidebar stays open at 270px and the main pane gets the rest (498px). The view tabs collapse into one pill with a ▾ (「（ビュー名） ▾」, 32px, radius 9999px, padding 6px 10px), and the toolbar shrinks to the 「設定」 icon alone; 「新規」 is hidden. Poi keeps every action reachable, so keep the create button at this width as the 32px blue + button used on phones, and keep the icons the app backs. The title stays 32px with the same left inset, and the table scrolls sideways inside the pane.
- **Phone (375px, iPhone user agent)**: Notion serves its own mobile web layout rather than sending phones to the app.
  - Top bar 44px, white, a 1px `rgba(42,28,0,.07)` line under it (as a shadow): ≡ on the left, the page title in 16px weight 400, then a share icon and ⋯ on the right. When the app's way back from a detail page is a breadcrumb (or a back link it replaced), keep the breadcrumb here in place of the bare title.
  - No sidebar; ≡ slides in a drawer 326px wide in the sidebar color, pushing the page aside. Drawer items are 40px with 16px / 24px labels in `#7d7a75`, padding 8px 10px; section labels 13px weight 600 in tertiary text.
  - Content is inset 24px; the title is 28px / 33.6px. The add-icon and add-description buttons wrap onto two lines above it.
  - The view bar: the view pill with a ▾ (36px), then 32px icon buttons (magnifier, filter, settings) and a 32px blue split button with a + instead of 「新規」.
  - The table keeps its grid and scrolls sideways; its first cell's text starts 32px from the left edge, which is the 24px inset plus the cell's 8px padding. Rows grow to 45px and the title cells to 16px / 20px weight 500. The 「開く」 chip is always visible, since there is no hover.
