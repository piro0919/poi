# X — company-wide rules

Read this first for any X-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| X app | `x.md` | Everything: the three-column shell, feeds, lists of people or records with a pill action, tabbed search results, two-pane settings, create dialogs, empty states |

X is a single product, so most rules live here and `x.md` adds screen shapes.

## Feel in one paragraph

Flat, monochrome and airy. Everything is white with near-black text and one blue accent; there are no cards in the main column, only full-width rows split by hairlines. Every button is a fully rounded pill, and the main ones are black, not blue. Navigation text is large (20px) while content is 15px. Headings are heavy (700–800), body text is regular, and secondary text is a cool slate grey.

## Type

- Family: the system UI font. Use `system-ui, -apple-system, "Segoe UI", Meiryo, sans-serif`; X's own Latin font is not to be copied.
- Body and row titles 15px / 20px weight 400; names 15px weight 700.
- Secondary lines, descriptions and counters 13px / 16px.
- Left navigation labels 20px / 24px weight 400; the current page's label is 700.
- Column header titles 20px / 24px weight 700 (「設定」「アカウント」「新しいリストを作成」). Group headings inside settings 20px weight 800 (「Xアクティビティ」).
- Side-card titles 20px weight 800 (「本日のニュース」); small card headings 15px weight 700 (「検索フィルター」).
- Empty-state headline 31px / 36px weight 800.
- Tabs 15px / 20px: active 700 in primary text, inactive 500 in secondary text.

## Color

| Role | Value |
| --- | --- |
| Page and columns | `#ffffff` |
| Primary text | `#0f1419` |
| Secondary text (handles, descriptions, inactive tabs, counts) | `#536471` |
| Accent (links, tab indicator, selected marks, blue buttons) | `#1d9bf0` |
| Main button | `#0f1419` fill, white bold text |
| Secondary pill button | white, 1px `#cfd9de` border, `#0f1419` text |
| Hairlines between rows and columns | 1px `#eff3f4` |
| Input border | 1px `#cfd9de`; focused: 1px `#1d9bf0` plus a 1px `#1d9bf0` ring, and the floating label turns blue |
| Selected row in a settings menu | `#f7f9f9` fill and a 2px `#1d9bf0` bar on the right edge |
| Side cards | white, 1px `#eff3f4` border, radius 16px |
| Disabled main button | the main button faded to a light grey (read from a screenshot) |
| Hover on rows (posts, list rows, trends) | `rgba(0, 0, 0, 0.03)` |
| Hover on left navigation items | `rgba(15, 20, 25, 0.1)` behind the icon and label, as a pill |
| Hover on the black main button | `#272c30` |
| Dialog backdrop | `rgba(180, 180, 182, 0.5)`, a neutral grey with no blue in it |

## Shape and controls

- All buttons are pills (radius 9999px). Main: 52px tall and full width in the left nav (「ポストする」, bold); in rows and dialogs 32px tall, padding 0 16px, 14px weight 700 (「フォロー」「次へ」).
- Icon buttons are 36px circles with no border.
- Search fields are 40px pills, white, 1px `#cfd9de` border, a 16px magnifier inside on the left, 14px text.
- Text inputs use a floating label inside a 58px box, radius 4px, 1px border; the label sits at the top in 13px when filled or focused, and a character counter 「0 / 25」 in 13px secondary text sits at the top right.
- Checkboxes are 20px squares with a 2px `#536471` border, filled `#1d9bf0` when checked; radio-like marks are 20px circles.
- Tabs fill the column width equally; the active one has a 4px `#1d9bf0` indicator, rounded, only as wide as its label.
- Dialogs: white, radius 16px, 600px wide, no visible border. Header row about 53px: a close (×) icon button on the left, the title 20px weight 700 next to it, and the main pill on the right.

## Wording and tone

Measured from the Japanese UI. The English UI was not captured.

- Short, plain and direct. Row titles are nouns or verb phrases: 「アカウント情報」「パスワードを変更する」「データのアーカイブをダウンロード」「アカウント削除」.
- Every settings row has a one-sentence description ending in a period: 「パスワードはいつでも変更できます。」「電話番号やメールアドレスなどのアカウント情報を確認できます。」
- Section leads say what the page is for: 「Xで表示および共有する情報を管理します。」
- Buttons are one or two words: 「フォロー」「次へ」「ポストする」「購入する」「さらに表示」.
- Empty search: the headline quotes the query, 「「(query)」の検索結果はありません」, then one sentence suggesting what to try, with a link: 「別のキーワードを検索するか、検索設定がセンシティブな内容から保護する設定になっていないかどうかを確認してください。」
- Toggles and checkboxes have a label and a 13px explanation under it: 「非公開にする」「リストを非公開にすると、他のアカウントが表示できなくなります。」 When the app has no explanation, a short sentence that only restates what the control does is fine; do not describe anything the app does not do.
- Counts are numbers with 件: 「4,381 件のポスト」「171件のポスト」; follower counts put the number in bold before the word: 「**770** フォロー中」.
- Placeholders are a question or a single word: 「いまどうしてる？」「検索」「検索設定」.

## Not captured yet

- The English UI wording
- Form error messages (the name field stops at its maximum length instead of showing an error)
- Destructive confirmations
- Toasts after saving
- The error and destructive red
- Colored status labels (X has none)
- Data tables and summary number tiles (X has none)
- Placeholder avatars for records without a photo

## Sources

Captured 2026-10-30 in a 1280×900 window, signed in, in the light theme with a Japanese UI: home, explore, people search, an empty search, a public profile, notifications, settings (account, privacy and safety), and the create-list dialog with the name field focused and filled to its limit. The dialog was closed without saving; nothing was posted or followed. Hover colors and the dialog backdrop were read as computed styles later the same day, with the page forced to the light color scheme in that tab only. Narrow layouts were captured the same day at 768×1024 in a desktop browser and at 375×812 with an iPhone user agent: home, people search, a public profile, settings and account settings. Only interface labels were copied; no post text, names or handles.
