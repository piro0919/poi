# Notion — company-wide rules

Read this first for any Notion-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| Notion app | `notion.md` | Everything: the light sidebar shell, document-like pages with a big title, database tables of records with colored tag pills, view tabs and toolbars, the search dialog, the two-pane settings dialog, menus and toasts |

Notion is a single product, so most rules live here and `notion.md` adds screen shapes.

## Feel in one paragraph

Quiet, warm and paper-like. The page is white with a soft warm-grey sidebar, and the greys lean slightly brown rather than blue (`#2c2c2b` text, `#7d7a75` secondary). There is almost no chrome: no cards, no visible borders around controls, just hairline grid lines in tables and a light grey fill that appears on hover. Text is small and regular (14px in the interface, 16px in page text) while page titles are large and bold (32–40px, weight 700). Color is kept for content: tag pills in ten muted tints, and one blue for the single main button. Corners are small (4–6px) on controls and larger on floating surfaces (10–20px).

## Type

- Family: the system UI font. Notion does not ship a typeface of its own for the app; every interface and page element computes to `ui-sans-serif, -apple-system, "system-ui", "Segoe UI Variable Display", "Segoe UI", Helvetica, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Hiragino Sans GB", メイリオ, Meiryo, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"` (computed, 2026-11-01). Use that stack, writing `system-ui` unquoted. Nothing needs to be loaded, and Japanese falls through to Hiragino or Meiryo.
- Interface text 14px, line height 16.8px in one-line controls and 20–21px in lists. Page text 16px / 24px.
- Weights stay low: 400 for most text, **500** for button labels, active tabs, record titles in a table, section labels and setting labels. 600 only for the settings dialog title and the search preview's title, 700 only for page titles.
- Page title (h1): 40px / 48px weight 700 on a page, 32px / 38.4px weight 700 on a full-page database. 28px / 33.6px on a phone.
- Settings dialog title 26px / 32px weight 600; its section headings 16px / 24px weight 500.
- Sidebar items 14px / 21px weight 400; the top tab (「ホーム」) 14px weight 500. Sidebar section labels 12px / 16px weight 500 (「最近」「今後のイベント」).
- Table header cells 14px weight 400 in secondary text; cells 14px / 21px; the title column weight 500.
- Menus: items 14px weight 400, keyboard shortcuts 12px in tertiary text on the right, small group labels 12px weight 500.
- Setting descriptions and other helper text 13px / 18px in secondary text. Badges 11px weight 500 (「ベータ版」).
- Search dialog: the query 16px / 24px, result titles 14px weight 500, result paths and group labels 12px.

## Color

Values are computed styles in the light theme. Notion's own stylesheet names these as variables; the role names below follow it.

| Role | Value |
| --- | --- |
| Page | `#ffffff` |
| Sidebar and the settings dialog's left pane | `#f9f8f7`, with a 1px `#f0efed` line on its right edge (an inset shadow) |
| Primary text | `#2c2c2b` |
| Sidebar item text | `#5f5e59`; the current or hovered item stays this color, the top tab is `#2c2c2b` |
| Secondary text (table headers, descriptions, inactive tabs, empty-state titles) | `#7d7a75` |
| Tertiary text (placeholders, section labels, shortcuts, 「新規ページ」, result paths) | `#a19e99` |
| Icons | `#8e8b86` for toolbar and sidebar icons; `#ada9a3` for faint ones (the ⋯ before 「すべて表示」, row handles) |
| Grid lines and dividers | 1px `rgba(42,28,0,.07)` |
| Control borders (secondary buttons, selects, the sidebar search field) | 1px `rgba(28,19,1,.11)` |
| Breadcrumb separator 「/」 | `#e6e5e3` |
| Hover fill, also the current sidebar item and the active view tab | `rgba(33,27,23,.05)`. Fills change without a shadow |
| Main button | `#2783de` fill, `#f3f9fd` text, weight 500. Hover `#1f76cc` (computed as a color mix; converted) |
| Links and blue text buttons | `#2783de`; underlined links inside helper text keep the text color and add an underline |
| Tinted blue button (「コピー」) | `rgba(0,124,215,.094)` fill, `#2783de` text |
| Active toolbar state (a sort or filter in use) | the icon turns `#2783de` |
| Focus ring on buttons | `0 0 0 2px #f8f8f7, 0 0 0 4px #2383e2, 0 0 0 6px rgba(255,255,255,.25)` |
| Text input at rest | `rgba(66,35,3,.03)` fill and a 1px inset `rgba(28,19,1,.11)` ring |
| Text input focused | `0 0 0 1px #2383e2 inset, 0 0 0 1px #2383e2` |
| Text input error | `0 0 0 1px #cd3c3a inset, 0 0 0 1px #cd3c3a` (read from the stylesheet's variables, not seen on screen) |
| Error and destructive red text | `#cd3c3a` (stylesheet variable, not seen on screen) |
| Checkbox | 16px, radius 3px; off: 1px `rgba(27,21,0,.19)` border; on: `#2783de` fill, white check |
| Toggle | 30×18px, radius 44px, 14px white knob 2px from the edge; off `rgba(135,131,120,.3)`, on `#2783de` |
| Toast | `#2c2c2b` fill, `#f0efed` text, in both themes |
| Overlay behind a modal dialog | `rgba(15,15,15,.6)` |

### Tag colors

Select and status pills: 20px tall, radius 4px, padding 0 6px, 14px / 20px text, weight 400 (500 in a group header). Notion offers ten colors; all of them were read from an option's color menu in both themes, and the fill and text pairs from pills in use. Pick by meaning (green for done, red for a problem) or keep the order the app's options already have.

| Color (Japanese label) | Light fill | Light text | Dark fill | Dark text |
| --- | --- | --- | --- | --- |
| Default (デフォルト) | `rgba(42,28,0,.07)` | `#494846` (not seen on a pill) | `rgba(255,255,243,.082)` | `#f0efed` (not seen on a pill) |
| Gray (グレー) | `rgba(28,19,1,.11)` | `#494846` (not seen on a pill) | `rgba(255,252,235,.306)` | `#f0efed` (not seen on a pill) |
| Brown (ブラウン) | `rgba(127,51,0,.157)` | `#584437` | `rgba(255,184,132,.365)` | `#f5ede9` |
| Orange (オレンジ) | `rgba(196,88,0,.204)` | `#6a4222` | `rgba(255,143,71,.482)` | `#fbebde` |
| Yellow (黄) | `rgba(209,156,0,.282)` | `#655121` | `rgba(255,188,53,.46)` | `#f9f3dc` |
| Green (緑) | `rgba(0,96,38,.157)` | `#2a533c` | `rgba(113,255,175,.337)` | `#e8f1ec` |
| Blue (青) | `rgba(0,118,217,.204)` | `#264a72` | `rgba(81,166,255,.494)` | `#e5f2fc` |
| Purple (紫) | `rgba(92,0,163,.14)` | `#553b69` | `rgba(208,147,255,.427)` | `#f3ebf9` |
| Pink (ピンク) | `rgba(183,0,78,.153)` | `#68354e` | `rgba(255,133,192,.427)` | `#fae9f1` |
| Red (赤) | `rgba(206,24,0,.165)` | `#6d3531` | `rgba(255,116,105,.525)` | `#fce9e7` |

The text colors of Default and Gray come from the stylesheet's grey text variable, which the other eight follow; no Default or Gray pill was on screen.

### Dark theme

Use only when the app already has a dark mode. Notion's dark theme follows the OS when its appearance setting is 「システム設定を使用する」, as on this account. Values are computed styles.

| Role | Value |
| --- | --- |
| Page | `#191919` |
| Sidebar and the settings dialog's left pane | `#202020`, with a 1px `#2c2c2b` line on its right edge |
| Primary text | `#f0efed` |
| Sidebar item text | `#bcbab6` |
| Secondary text (table headers, descriptions, inactive tabs) | `#ada9a3` |
| Tertiary text (placeholders, section labels, 「新規ページ」) | `#7d7a75` |
| Grid lines and dividers | 1px `rgba(255,255,243,.082)` |
| Control borders | 1px `rgba(255,255,235,.1)` |
| Breadcrumb separator | `#383836` |
| Hover fill, current sidebar item, active view tab | `rgba(255,255,255,.055)` |
| Main button | `#2783de` fill, `#f3f9fd` text, unchanged. Hover `#3d90e1` (converted from a color mix) |
| Text input at rest | `rgba(252,252,252,.03)` fill and a 1px inset `rgba(255,255,235,.1)` ring; focused, the same blue ring as light |
| Icons | `#ada9a3` for toolbar, sidebar and property icons (`#8e8b86` in light); `#7d7a75` for faint ones (`#ada9a3` in light). Do not keep the light values in dark |
| Error red | `#de5550` (stylesheet variable, not seen on screen) |
| Menus and popovers | `#252525`, ring `0 0 0 1px #383836`, shadow `0 14px 28px -6px rgba(25,25,25,.2), 0 2px 4px -1px rgba(25,25,25,.118)` |
| Settings dialog | frame `#202020`, content pane `#191919`, shadow `0 0 0 1px #383836, 0 24px 48px rgba(25,25,25,.64), 0 4px 12px rgba(25,25,25,.56)` |
| Overlay behind a modal dialog | `rgba(15,15,15,.8)` |
| Toast | `#2c2c2b` fill as in light, plus a `0 0 0 1px #383836` ring |

## Shape and controls

- Corner radii: 3px checkboxes, 4px tag pills and the dashed empty box, 6px buttons, inputs, menu items and sidebar items, 8px the sidebar search field and toasts, 10px menus, 12px dialogs and cards, 20px the search dialog and view-tab pills, fully round for small icon-only pills and avatars.
- Buttons are 28px tall, padding 0 8px, 14px weight 500, radius 6px. 32px in dialogs and empty states (padding 0 12px).
  - Main: the blue fill. A create button on a list is a split button: 「新規」 (44px) and a 24px ▾ part joined, with a 1px inset divider between them (`rgba(28,19,1,.11)`).
  - Secondary: transparent with the 1px control border and primary text; hover adds the hover fill.
  - Quiet: no border and no fill until hover, used for most toolbar and top bar actions (「共有」).
- Icon buttons: 28px squares, radius 6px, a 16px icon in `#8e8b86`; 20px icons in the top bar and the sidebar's top row.
- Text inputs: 28px tall, radius 6px, padding 3px 6px, 14px, with the faint fill and inset ring above. Selects in settings are 28px, radius 6px, the 1px control border, 14px weight 500 and a small ▾.
- Menus and popovers: white, radius 10px, shadow `0 20px 24px rgba(25,25,25,.05), 0 5px 8px rgba(25,25,25,.027), 0 0 0 1px rgba(42,28,0,.07)`, padding 4px. Items 28px tall, radius 6px, padding 0 8px, a 20px icon before the label, a › or a value in tertiary text at the right end. Groups are split by 1px dividers inset 12px. A filter field (「アクションを検索...」) often sits first, focused.
- Destructive menu items (「ゴミ箱に移動」「プロパティを削除」) look like every other item: primary text with a trash icon, no red. This is for menu items only: a destructive button the app already colored keeps the error red, as Poi keeps every warning.
- Summary number tiles do not exist in Notion. When the app has them and they cannot go, show them as plain label and value pairs with no card and no border: the label 14px secondary text, the value 20px weight 600 (Poi's choice, not seen in Notion).
- Toasts: centered at the bottom, about 28px above the window's edge, 43px tall, padding 11px 16px, radius 8px, 14px text, shadow as menus. They go away on their own after a few seconds (seen, not timed).
- Hover never shows a shadow or a border; it only adds the hover fill. Table rows do not fill on hover.
- No cards around content. Records live in tables with hairline grid lines; settings sit in plain rows split by 1px lines.

## Icons

Notion publishes no icon set. Nothing official is on npm (`@notionhq/*` holds only API clients and SDKs) or elsewhere, checked 2026-11-01; the Notion-styled packs that turn up are third-party. Its icons are its own SVGs, filled shapes that read as thin outlines: about 1.25px lines with round ends (read from the path data of the 16px magnifier), even weight, no inner fills. Pick an outlined set with thin rounded strokes, or draw icons that match. Sizes and colors are computed styles; shapes were read from a screenshot. Never draw the Notion mark or its AI face.

- Two grids: 20×20 for regular icons (sidebar, top bar, menus) and 16×16 for the small set (view toolbar, row actions, carets).
- Sidebar: 20–22px icons in `#8e8b86` before each label; the current top tab's icon is filled (a house). Page rows show the page's own emoji or a plain page outline at 18px.
- Top bar: a sidebar-toggle panel icon, an inbox tray and a pencil-in-square on the sidebar's top row; a lock before 「共有」, a link, a star and ⋯ at the right.
- View toolbar: 16px filter (stacked lines), up/down arrows for sort, a magnifier, sliders for view settings.
- Table header: a 16px property-type icon before each column name (「Aa」 for the title, lines for text, a circled caret for a select, a link for a URL, a checked box for a checkbox).

## Wording and tone

Measured from the Japanese UI. The English UI was not captured.

- Neutral, short and matter-of-fact. Menu items and buttons are nouns or 「〜を…」 in the plain dictionary form, without ます: 「リンクをコピー」「複製」「別ページへ移動」「バージョン履歴」「ゴミ箱に移動」「プロパティを編集」「種類を変更する」「左に挿入」「プロパティを削除」「メンバーを追加」「連絡先をインポート」.
- The create button is one word: 「新規」. The add row under a table is 「新規ページ」; put the app's own noun there (「新規顧客」).
- Page leads under a settings title are a plain-form phrase with no period, often followed by a blue 「詳しくはこちら」 link: 「Notionのデザインと動作を選択する」「ワークスペース内のユーザーとその役割を管理する」. Put the app's own name in place of Notion. Leave out the link when there is nothing to point to.
- Setting descriptions are one polite sentence in ます form with no final period: 「このデバイスでNotionのテーマを選択します」「コントラストを上げて見やすくします」. When a description runs to two sentences, both end with 「。」.
- Default choices say what they follow: 「システム設定を使用する」「デフォルト」.
- Placeholders are short instructions ending in an ellipsis: 「入力して検索…」「アクションを検索...」「フィルター対象…」; the sidebar field says 「検索または質問」.
- Empty states are one short line, with no apology: 「該当なし」「ゲストはまだいません」. A second line may give the likely reason in tertiary text: 「結果の一部が削除されたページに含まれている可能性があります。」, and a blue link or an outlined button offers the next step: 「削除されたページを検索」「連絡先をインポート」「検索をクリア」.
- Toasts state what happened in the passive, with no period when it is one sentence: 「ブロックへのリンクがクリップボードにコピーされました」. A follow-up sentence explains a catch: 「リンクをコピーしましたが、あなたのみが開くことができます。共有する前に他のユーザーにアクセス権を付与してください。」
- Counts are a bare number after the label, in tertiary text, with no 件 or 名: 「メンバー 1」; in a menu row the count sits at the right end: 「プロパティの表示/非表示 11」.
- Paging: 「さらに読み込む」; overflow in the sidebar: 「すべて表示」.
- Group labels and section headings are plain nouns: 「アカウント」「ワークスペース」「機能」「今日」「過去1週間」「過去30日間」「古い」.

## Not captured yet

- The English UI wording (the account language was not changed)
- Form errors after saving and their wording; only the stylesheet's error ring and red were read
- Destructive confirmations (moving a page to the trash, deleting a property): Notion acts on these at once, so they were not pressed
- Success toasts after saving settings
- Board, list, gallery and calendar views: the databases allowed for this capture have table views only
- Summary number tiles (Notion's own screens have none)
- The dark theme at 375px
- Headings inside a page body (the pages allowed for this capture have none)

## Sources

Captured 2026-11-01 in a 1280×900 window, signed in to the owner's private workspace with a Japanese UI, in both themes: the account's appearance setting is 「システム設定を使用する」, and the light theme was shown by emulating the light color scheme in that tab only. Opened: one database (its two table views, with a row hovered, the table's 「開く」 chip, a column header menu, the filter menu, the view settings panel and its layout list, the in-view search with a nonsense query and 「検索をクリア」, and one select cell's option list and an option's color menu), its parent page, the page's ⋯ menu (「リンクをコピー」 pressed to see the toast, and the link icon in the top bar in dark), the search dialog with an empty and a nonsense query, and the settings dialog (「設定」 and 「ユーザー」 with its 「ゲスト」 and 「メンバー」 tabs). Every menu and dialog was closed with Escape or its own clear button; the select cell and the column header kept their values. Nothing was written to the workspace: no page, row, property, view or setting was created, edited, moved or deleted. Only interface labels were copied; no page titles, rows, property names, people's or company names, event titles, the workspace name, URLs or other content. Values are computed styles and the stylesheet's color variables in both themes; the color menu's swatches gave the ten tag colors. Narrow layouts were captured the same day at 768×1024 in a desktop browser and at 375×812 with an iPhone user agent, in light; the agent and size were set back to the desktop's 1280×900 afterwards. The npm registry and the web were searched for an official icon package the same day. Later that day one row of the same database was opened as a full page to measure its property rows (measured in light, looked at in dark), with nothing edited; its parent page was opened to look for headings and had none. The dark icon colors come from the stylesheet variables captured in the first session.
