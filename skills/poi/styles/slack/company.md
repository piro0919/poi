# Slack — company-wide rules

Read this first for any Slack-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| Slack app | `slack.md` | Everything: app shell with a themed sidebar, conversation and activity feeds, directories of people or records, search results, create dialogs, preferences |

Slack is close to a single product, so most rules live here and `slack.md` adds screen shapes.

## Feel in one paragraph

Friendly, bold and roomy. Text is a size larger than most apps (15px body), headings and names are heavy (weight 900), and corners are soft (8px on buttons and inputs, 12px on cards). The main pane is plain white with near-black text; color lives in the left sidebar, which follows a theme. One green button moves things forward; everything else is a white outlined button.

## Type

- Family: Slack's own Lato for Latin text and Noto Sans JP for Japanese. Use `Lato, "Noto Sans JP", sans-serif` (both on Google Fonts). Load Noto Sans JP only when the app shows Japanese text.
- Body 15px / 22px weight 400. Metadata 13px / 18px; timestamps 12px / 18px.
- Names, channel titles and dialog titles are weight **900**: page title 18px / 24px, dialog title 22px / 30px.
- Labels on buttons, tabs, filter buttons and form labels are weight 700.
- Section headings inside preferences are 18px weight 700; group headings 15px weight 700.

## Color

Main pane values were measured in the light theme. The sidebar is themed per user and workspace; see `slack.md`.

| Role | Value |
| --- | --- |
| Main pane | `#ffffff` |
| Primary text | `#1d1c1d` |
| Secondary text (descriptions, channel names in meta) | `#454447` |
| Muted text (timestamps, counts) | `#616061`, `#5e5d60` |
| Links and text buttons | `#1264a3` |
| Primary button | `#007a5a` background, white text |
| Disabled primary button | `#eaeaea` background, `#454447` text |
| Default button | white background, `#1d1c1d` text, 1px `rgba(94,93,96,.45)` border |
| Card and chip borders | 1px `rgba(94,93,96,.13)` |
| Dividers | 1px `#dddddd` |
| Input focus | 1px `#1264a3` ring plus a 5px `rgba(18,100,163,.3)` halo |
| Input error | 1px `#e01e5a` ring plus a 5px `rgba(224,30,90,.3)` halo; message in the same red |
| Selected item in a dialog's side nav | `#1264a3` fill, white text |
| Hover on buttons | Default and filter buttons fill `#f8f8f8`; the green primary keeps its fill. Both gain the shadow `0 1px 3px rgba(0,0,0,.098), 0 1px 2px -1px rgba(0,0,0,.098)`. Fills change over 80ms |
| Hover on a record row (channel directory) | The fill stays white and a `0 1px 1px rgba(0,0,0,.06)` shadow appears |
| Info banner | `#e3f8ff` fill, 8px radius |
| Reaction or counter pill | `rgba(29,28,29,.06)` fill, or white with the card border |

### Dark theme

Use only when the app already has a dark mode. Slack's own dark mode, measured as computed styles unless marked otherwise.

| Role | Value |
| --- | --- |
| Main pane, cards, dialogs, inputs | `#1a1d21`. Directory pages lose the light theme's gray pane: pane and card are the same color, and the card shows only by its border |
| Raised controls (sort menu, disabled button) | `#212428` |
| Primary text | `#d1d2d3` for body text, `#f8f8f8` for titles, active tabs and button labels |
| Secondary text | `#b9babd` |
| Muted text | `#9a9b9e`, `#ababad` on step counters |
| Links and text buttons | `#2ba5ce` |
| Primary button | `#177e56` background, white text |
| Disabled primary button | `#212428` background, `#b9babd` text |
| Default button | `#1a1d21` background, `#f8f8f8` text, 1px `rgba(121,124,129,.5)` border |
| Filter buttons and search field borders | 1px `rgba(121,124,129,.3)` |
| Card border | 1px `rgba(209,210,211,.1)` |
| Selected filter chip | `#2ba5ce` fill, `#1a1d21` text |
| Input focus | 1px ring plus a 5px halo in blue, read from a screenshot as about `#53a3ca` and `#2c4554` |
| Input error | 1px `#e01e5a` ring plus a 5px `rgba(224,30,90,.3)` halo, as in light; the message is `#de678a` |
| Hover fill | `rgba(248,248,248,.08)` |
| Hover on buttons and rows (measured on the directory, 2026-10-31) | Same shadows as light: buttons gain `0 1px 3px rgba(0,0,0,.098), 0 1px 2px -1px rgba(0,0,0,.098)`, record rows gain `0 1px 1px rgba(0,0,0,.06)`. Fills stay `#1a1d21` on default buttons, rows and small filter buttons; the larger filter menus (「すべてのチャンネル ▾」) fill `#212428`. Tabs do not change on hover |
| Sidebar | Aubergine's dark variant; see "Sidebar theme" in `slack.md` |

## Shape and controls

- Buttons 36px tall, padding 0 12px, 15px weight 700, radius **8px**. Small filter buttons 28px, 13px weight 700, radius 8px, with a caret.
- Text inputs: 44px in dialogs (18px text, radius 12px), 36px elsewhere (radius 8px, 1px `#7c7a7f` border on selects). A character counter can sit inside the right end of the field.
- Cards (search results, list containers): white, 1px light border, radius **12px**, no shadow.
- Date dividers and similar floating labels are white pills (radius 24px) with `0 0 0 1px rgba(29,28,29,.13), 0 1px 3px rgba(0,0,0,.08)`.
- Dialogs: white, radius 8px, shadow `0 0 0 1px rgba(29,28,29,.13), 0 18px 48px rgba(0,0,0,.35)`, close (×) icon button 36px at the top right.
  - Measured on the create-channel dialog in dark, 2026-10-31: 520px wide. The header is 70px with padding 20px 76px 20px 28px; the × (36px, radius 8px, 20px icon, labelled 「閉じる」) sits 20px from the top and right edges. The body is padded 0 28px. The footer is padded 24px 28px with its buttons on the right. No dividers in this small dialog; only the wide preferences dialog has one under its header.
  - The overlay behind it is `rgba(0,0,0,.6)`.
  - Dark: surface `#1a1d21`, shadow `0 0 0 1px rgba(232,232,232,.13), 0 18px 48px rgba(0,0,0,.35)`.
- Tabs: 13px weight 700, the active one with a 2px underline in the theme's accent color.

## Icons

Slack has no public icon set. Its icons are its own SVGs on a 20×20 grid (`viewBox="0 0 20 20"`), drawn as filled shapes that read as outlines: medium-weight lines with rounded ends and corners, no fills inside. Pick an outlined set with rounded strokes, or draw icons that match; avoid sharp, thin or two-tone icons. Sizes and colors are computed styles; shapes were read from a screenshot.

- Top bar: 20px, back and forward arrows, a history clock; a 15px magnifier inside the search field.
- Sidebar items: 15–16px, the sidebar text color, one icon before each label (unread, threads, drafts and sent, bookmarks, directory, star). A channel shows `#` instead of an icon.
- Workspace header: 18–20px icon buttons for settings (a gear) and compose (a pencil in a square).
- Channel header: a 20px star before the name; tabs carry 18px icons; a + to add a tab.
- The app's leftmost rail: 20px icons with a label under each; the current one sits in a rounded square fill.

## Wording and tone

Measured from a Japanese UI. The English UI was not captured.

- Warm and conversational, with full sentences and a period. Errors explain the cause in a whole sentence: 「その名前は（ワークスペース名）のチャンネル、ユーザー名、またはユーザーグループにすでに使用されています。」
- Empty states: a bold short heading, then a question inviting feedback with a link, then a concrete suggestion: 「何も見つかりませんでした」「期待していた結果と違っていますか？ フィードバックを送る.」「キーワードの変更、入力ミスのチェック、またはフィルターの調整を試してみることをおすすめします。」 Leave out the feedback question when the app has nowhere to send feedback.
- The create button on a list page is a white default button (「チャンネルを作成する」); green is kept for the button that moves the dialog forward, such as 「次へ」.
- Field labels in create dialogs have no colon (「名前」); the colon is for setting labels in preferences.
- Actions are verb phrases ending in する: 「チャンネルを作成する」「メンバーを招待する」「通知を有効にする」「もっと表示する」.
- Multi-step dialogs show progress in the footer, 「ステップ 1 / 2」, and the button says 「次へ」.
- Placeholders give an example: 「例 : 計画-予算」; search fields say what they search: 「チャンネルを検索する」「ユーザーを検索する」「会話を見つける…」.
- Counts are written in words with the unit: 「13 名のメンバー」「252 件の結果」「1 件の返信」.
- Labels for a group of settings end with a colon: 「通知を許可 :」「ステータスを設定 :」.
- Notices say what to do and give a link: 「通知を受け取りたい場合には、Slack に許可を与えてください。通知を有効にする」.
- No description line under a page title. The directory goes straight from 「ディレクトリ」 to its tabs and search field; drop sentences such as "Find and manage your customers here." (compared side by side with a trial, 2026-10-31).

## Not captured yet

- The English UI wording
- Destructive confirmations
- Toasts after saving
- Hover on sidebar items in the Aubergine theme in light
- Colored status labels (Slack's own screens seen here have none)
- Data tables and summary number tiles (Slack's own screens seen here have none)

## Sources

Captured 2026-10-30 in a 1280×900 window, signed in to a work workspace with a Japanese UI: a channel, the directory (members and channels tabs), the create-channel dialog with a valid name and with a name error, preferences, and search with results and with no results. The account's preference is the dark theme; the light theme was shown by removing the dark theme class from the page in that tab only. The account setting was not changed, and nothing was created or sent. Only interface labels were copied; no message text, names or channel names. A channel and the files page were also captured at 768×1024 the same day; at 375×812 with an iPhone user agent Slack only offered its app. The dark values were measured the same day in the account's own dark mode: the files page, the channel directory and the create-channel dialog with a name error. The dialog was closed without creating anything.
Icons were read the same day at 1280×900 in a channel of the workspace: SVG sizes, viewBox and colors as computed styles, shapes from a screenshot.
Later on 2026-10-31, in the account's own theme: the channels directory was read for spacing and dividers, in dark and with the dark class removed for light, and the create-channel dialog was opened in dark and closed with its × without typing anything. Its rows, buttons, filter menus and tabs were hovered in dark. Aubergine was previewed once more in preferences (not saved; 「変更をもとに戻す」, then Sea Glass confirmed in the theme setting) to resolve the variable Slack's stylesheet uses for sidebar item hover; only the dark value is recorded, because removing the dark class gave sidebar text colors that disagree with the light values measured earlier.
On 2026-10-31, with the owner's permission, the Aubergine theme was previewed in preferences (not saved; 「変更をもとに戻す」 restored the account's own theme, confirmed on screen and in the theme setting), and its frame, top bar search, sidebar and selected item were read as computed styles with the page in light and in dark. The same day, in light: the directory's 「メンバーを招待する」 and filter buttons and a row in its channels tab were hovered, and the create-channel dialog was opened, a name typed, its 「次へ」 hovered, and the dialog closed with Escape; all read as computed styles. Nothing was created.
