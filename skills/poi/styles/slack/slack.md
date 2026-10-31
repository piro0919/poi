# Slack app

Use for the app shell, feeds, directories, search results, create dialogs and preferences.

## App shell

- **Window frame**: the app sits on a themed background. A thin top bar (about 40px) holds back/forward/history icons and a wide rounded search field in the middle, filled with a translucent tint of the theme.
- **Rail** (70px) on the far left, on the theme background: workspace icon on top, then icon buttons with a small label under each (Home, DMs, Activity, Files …), and the avatar at the bottom. Use it only when the app has that many top-level areas.
- **Sidebar** (about 290px): workspace name 18px weight 900 with a caret, settings and compose icon buttons on the right, then a filter field (「会話を見つける…」). Items are 28px tall, 15px regular, radius 6px, padding 0 8px, a 16px icon before the label. The selected item is a filled pill; its colors are under "Sidebar theme". Section headers ("Channels") use the same size with a caret.
- **Workspace panel**: the sidebar and the main pane sit together on one panel laid over the theme background, inset 40px from the top (under the top bar), 70px from the left (the rail, or a narrow strip of theme background when there is no rail) and about 4px from the right, with about 6px corners. The sidebar part shows the theme through a translucent layer (see "Sidebar theme"), and a soft 1px shade separates it from the main pane.
- **Main pane**: white. On directory pages the pane is `#f8f8f8` and the records sit on it in a white card; on channels, search results and the empty search the pane is white. These two values were read from screenshots, not from computed styles.
- **Pane header**: 49px, padding 0 12px 0 18px. Title 18px weight 900 (a channel shows `#` and a star icon before the name). Right side: icon buttons with counts (members, apps), 28px, radius 8px.
- **Tabs** under the header: 13px weight 700, icon + label, 2px underline on the active tab.

### Sidebar theme

The sidebar and window background change with the user's theme. Use Slack's default theme, Aubergine: it is the purple people recognize as Slack (owner's decision, 2026-10-31; a user's own pale theme made a trial read as a different product). Values are computed styles of Aubergine, previewed in preferences without saving:

| | Light | Dark |
| --- | --- | --- |
| Window frame (behind the top bar, the rail and the panel) | `radial-gradient(circle, #4a154b 20%, transparent 80%), conic-gradient(from 45deg, #39063a 0%, #4a154b 25%, #39063a 50%, #4a154b 75%, #39063a 100%)` | the same with `#431349` and `#200221` |
| Search field in the top bar | `rgba(249,237,255,.25)` with `rgba(131,56,138,.08)` laid over it, radius 4px, white text | `rgba(239,225,245,.25)` with `rgba(239,225,245,.08)` over it, `#f8f8f8` text |
| Sidebar | a `rgba(249,237,255,.11)` layer over the frame, so it reads as a lighter purple | a `rgba(16,18,20,.6)` layer over the frame |
| Sidebar text | `rgba(246,228,255,.9)` | `rgba(227,206,235,.8)` |
| Workspace name | `#ffffff`, weight 900 | `#f8f8f8`, weight 900 |
| Selected item | `#f9edff` fill, `#39063a` text, radius 6px | `#7d3986` fill, `#efe1f5` text |
| Item hover | not captured | `rgba(239,225,245,.08)` fill; the text keeps its color |

The main pane stays white (light) or `#1a1d21` (dark) in every theme.

## Directory and lists

- Page title 18px weight 900 at the top left of the pane (「ディレクトリ」), tabs below it.
- A large search field (about 40px, radius 8px, magnifier icon) spans the width with a default button to its right (「チャンネルを作成する」「メンバーを招待する」).
- A row of filter buttons below it: white, 28px, 13px weight 700, radius 8px, light border, with a caret (「すべてのチャンネル」「タイトル」「場所」). A sort menu sits at the far right (「最もおすすめ」).
- Records sit in one white card with a 12px radius. Rows are about 77px: a 15px weight 700 title (`# name`), then a 13px `#454447` meta line joining facts with 「・」 (「13 名のメンバー ・ description…」), truncated with an ellipsis. Rows are separated by 1px dividers.
- Spacing, measured at 1280px on 2026-10-31: everything sits 16px in from both edges of the pane. The title row is 52px; the tabs row under it is 36px, with tabs padded 0 16px. In light there is no line under the tabs, only the change from the header to the gray `#f8f8f8` pane; in dark, where pane and header share one color, a line is drawn as an inset shadow `0 -1px 0 rgba(121,124,129,.3)`. Then 16px down to the search field, about 14px down to the filter row, and 8px down to the card. Rows have 16px padding on all sides. The dividers are each row's 1px top border in the card's border color, so the card border and the dividers are one line: `rgba(29,28,29,.1)` in light, `rgba(209,210,211,.1)` in dark. The first row carries the card's 12px top corners.
- People are shown as a grid of cards (about 210px wide): a square photo filling the top, name in weight 700 with a presence dot, title in 13px secondary text below.

## Feed (messages, activity)

- Each item: 36px rounded-square avatar, name 15px weight 900, timestamp 12px `#616061` next to it, body 15px / 22px below. Reactions are pills under the body (24px, 12px text, fully rounded, `rgba(29,28,29,.06)`).
- Thread replies are a small avatar plus a link in 13px weight 700 `#1264a3` (「1 件の返信」).
- Date dividers are centered white pills with a caret, over a 1px line (「今日」「10月28日 (水)」).

## Search results

- Title: 「次の内容に関する検索結果 :」 in 18px regular followed by the query in weight 900.
- Filter buttons under it (same as the directory), a vertical divider between groups.
- 「並べ替え基準」 with the current sort as a 13px weight 700 link, and the count 「252 件の結果」 in 13px muted text.
- Each result is its own white card (12px radius, light border), with a small gap between cards: avatar, name 15px weight 900, the source (lock icon + channel) in 13px secondary, time right-aligned in 12px muted. Matches are highlighted with a light yellow background. Counters (replies, reactions) are white outlined pills at the bottom.
- No results: centered, an 18px weight 900 heading and two lines of 15px text with a link.

## Create dialog

- 520px wide. Title 22px weight 900 at the top left, close button at the top right.
- Field label 15px weight 700 above a 44px input with 12px radius; a prefix (`#`) inside on the left and a remaining-character count on the right.
- Errors appear under the field: a warning icon and one sentence in red; the field gets the red ring.
- Footer: 「ステップ 1 / 2」 in 15px muted text on the left, the green 「次へ」 on the right. Slack greys it until the input is valid; keep it enabled when the app only validates on submit, or its errors would never show.

## Preferences

- A wide dialog (800px). Title 22px weight 900 with a divider below the header.
- Left nav (about 205px): 28px items, 15px regular, an icon before each label, radius 4px; the selected item is filled `#1264a3` with white text. A small 「新規」 pill can follow a label.
- Right column: section title 18px weight 700, then groups separated by 1px `#dddddd` lines. Each group: a 15px weight 700 heading, one or two sentences of 15px `#454447` explanation, a 15px weight 700 label ending in a colon, then controls.
- Selects are 36px white boxes with a 1px `#7c7a7f` border, radius 8px and a caret; time ranges read 「（開始） から （終了）」.
- Checkbox rows: the checkbox and a 15px sentence, with key words in bold.

## Narrow widths

Measured at 768px in a desktop browser.

- **Tablet (768px)**: the desktop layout, narrowed. The rail stays at 70px and the sidebar shrinks to 180px, truncating names with an ellipsis. The main pane takes the rest. The top bar keeps its back/forward icons and a shorter search field.
- **Phone**: no Slack layout to follow. Slack has no phone layout in the browser; it sends phones to a page that offers the app. At this width keep the app's own narrow layout and apply only the colors, type and wording above; make sure nothing breaks.
