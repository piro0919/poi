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
| Destructive red | `#f4212e`: text on the account deletion link, the fill of the 「削除」 button in a delete confirmation, and the error color in forms |
| Backdrop behind a confirmation | `rgba(0, 0, 0, 0.4)`, darker than the create dialog's |
| Secondary (outlined) pill | transparent, 1px `#cfd9de` border, primary text |
| Toast | `#1d9bf0` fill, white 15px text, radius 4px, padding 12px, 44px tall, centered at the bottom 32px above the window's edge. The same in dark |

### Dark theme

Use only when the app already has a dark mode. X's darkest background, "Lights out", as this account showed it with the browser set to dark. X also has a dark blue-grey "Dim" background, which was not captured. Pure black, with the main button inverted to near white.

| Role | Value |
| --- | --- |
| Page, columns and side cards | `#000000` |
| Primary text | `#e7e9ea` |
| Secondary text | `#71767b` |
| Accent (links, tab indicator, selected marks, blue buttons) | `#1d9bf0`, unchanged; white text on blue buttons |
| Main button | `#eff3f4` fill, `#0f1419` bold text. Disabled, the same button faded (read from a screenshot) |
| Hairlines between rows and columns, side card borders | 1px `#2f3336` |
| Input border | 1px `#333639` |
| Selected row in a settings menu | `#16181c` fill and a 2px `#1d9bf0` bar on the right edge |
| Dialog surface | `#000000`, like the page |
| Create dialog backdrop | `rgba(0, 0, 0, 0.5)` |
| Backdrop behind a confirmation | `rgba(91, 112, 131, 0.4)`, a blue grey |
| Secondary (outlined) pill | transparent, 1px `#536471` border, primary text |
| Destructive red and form errors | `#f4212e`, unchanged |

Hover in dark (measured on home, 2026-10-31):

| Role | Value |
| --- | --- |
| Hover on rows (posts) | `rgba(255, 255, 255, 0.03)` |
| Hover on left navigation items | `rgba(231, 233, 234, 0.1)` behind the icon and label, as a pill |
| Hover on the near-white main button | `#d7dbdc` |

## Shape and controls

- All buttons are pills (radius 9999px). Main: 52px tall and full width in the left nav (「ポストする」, bold); in rows and dialogs 32px tall, padding 0 16px, 14px weight 700 (「フォロー」「次へ」).
- Icon buttons are 36px circles with no border.
- Search fields are 40px pills, white, 1px `#cfd9de` border, a 16px magnifier inside on the left, 14px text.
- Text inputs use a floating label inside a 58px box, radius 4px, 1px border; the label sits at the top in 13px when filled or focused, and a character counter 「0 / 25」 in 13px secondary text sits at the top right.
- Checkboxes are 20px squares with a 2px `#536471` border, filled `#1d9bf0` when checked; radio-like marks are 20px circles.
- Tabs fill the column width equally; the active one has a 4px `#1d9bf0` indicator, rounded, only as wide as its label.
- Dialogs: white, radius 16px, 600px wide, no visible border. Header row about 53px: a close (×) icon button on the left, the title 20px weight 700 next to it, and the main pill on the right.
- Confirmations (delete a post, keep or discard a draft): a small centered box, 320px wide, radius 16px, padding 32px. A 20px weight 700 question as the title, one 15px secondary sentence, then the choices as full-width 44px pills stacked 12px apart, 15px weight 700. The confirming choice comes first: a delete fills it `#f4212e` with white text (「削除」), any other choice uses the main button. The second is an outlined pill (「キャンセル」). Wording: 「ポストを削除しますか？」「この操作は取り消せません。…」.
- Form errors: the field's 1px border and its floating label turn `#f4212e`, and the message sits under the field in 13px `#f4212e`: 「このユーザー名は使われています。他のものを選んでください。」

## Icons

X has no public icon set. Its icons are its own SVGs on a 24×24 grid, drawn as filled shapes that read as outlines: rounded, even, medium-weight lines. Pick an outlined set with rounded strokes of the same weight, or draw icons that match. Sizes and colors are computed styles; shapes were read from a screenshot. Never draw the X mark or Grok's mark.

- Left navigation: 26px, primary text color, before 20px labels: home, magnifier, bell, person with +, speech bubble, phone. The current page's icon is filled.
- Settings rows: a 19px icon in secondary text color at the left of each row (person, key, download arrow, broken heart); a chevron `>` at the right end of menu rows.
- Search fields: a 16px magnifier inside, on the left.

## Wording and tone

Measured from the Japanese UI, and from the English UI (below).

- Short, plain and direct. Row titles are nouns or verb phrases: 「アカウント情報」「パスワードを変更する」「データのアーカイブをダウンロード」「アカウント削除」.
- Every settings row has a one-sentence description ending in a period: 「パスワードはいつでも変更できます。」「電話番号やメールアドレスなどのアカウント情報を確認できます。」
- Section leads say what the page is for: 「Xで表示および共有する情報を管理します。」
- Buttons are one or two words: 「フォロー」「次へ」「ポストする」「購入する」「さらに表示」.
- Empty search: the headline quotes the query, 「「(query)」の検索結果はありません」, then one sentence suggesting what to try, with a link: 「別のキーワードを検索するか、検索設定がセンシティブな内容から保護する設定になっていないかどうかを確認してください。」
- Toggles and checkboxes have a label and a 13px explanation under it: 「非公開にする」「リストを非公開にすると、他のアカウントが表示できなくなります。」 When the app has no explanation, a short sentence that only restates what the control does is fine; do not describe anything the app does not do.
- Counts are numbers with 件: 「4,381 件のポスト」「171件のポスト」; follower counts put the number in bold before the word: 「**770** フォロー中」.
- Placeholders are a question or a single word: 「いまどうしてる？」「検索」「検索設定」.

### English

Seen on 2026-10-31 with the account's display language switched to English for the visit and back to Japanese afterwards.

- Sentence case everywhere, including settings rows: "Account information", "Change your password", "Download an archive of your data", "Deactivate your account", "Security and account access", "Privacy and safety". Section titles of a pane are title case: "Your Account".
- Settings rows speak to the user as "your", and each description is one sentence ending in a period: "Change your password at any time.", "See your account information like your phone number and email address.", "Manage what information you allow other people on X to see." Some descriptions on the same page have no period ("Manage who can see your Spaces listening activity"); end with a period when the app's own text has none.
- Section leads say what the page is for: "Manage what information you see and share on X." Put the app's own name in place of X.
- Buttons are one word where possible: "Post", "Follow", "Save", "Discard", "Delete", "Cancel", "Show more".
- Confirmations ask a short question, then explain the consequence in one sentence, then the action and Cancel: "Delete post?" / "This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results." / "Delete" / "Cancel". Leaving the composer: "Save post?" / "You can save this to send later from your drafts." / "Save" / "Discard".
- Toast: "Copied to clipboard", no period.
- Empty search: "No results for "query"", then "Try searching for something else, or check your Search settings to see if they’re protecting you from potentially sensitive content." with "Search settings" as the link.
- Counts: abbreviated with K ("N.NK posts") and a lowercase noun; profile counts put the number in bold before a capitalized word: "**N** Following", "**N** Followers".
- Placeholders: "What’s happening?", "Search Settings". Curly apostrophes throughout (’).

## Not captured yet

- The toast after saving settings. Only the one after copying a link was seen
- Colored status labels (X has none)
- Data tables and summary number tiles (X has none)
- Placeholder avatars for records without a photo

## Sources

Captured 2026-10-30 in a 1280×900 window, signed in, in the light theme with a Japanese UI: home, explore, people search, an empty search, a public profile, notifications, settings (account, privacy and safety), and the create-list dialog with the name field focused and filled to its limit. The dialog was closed without saving; nothing was posted or followed. Hover colors and the dialog backdrop were read as computed styles later the same day, with the page forced to the light color scheme in that tab only. Narrow layouts were captured the same day at 768×1024 in a desktop browser and at 375×812 with an iPhone user agent: home, people search, a public profile, settings and account settings. Only interface labels were copied; no post text, names or handles. The dark values were measured the same day as computed styles, with the page forced to the dark color scheme in that tab: home and account settings. On 2026-10-31, in both color schemes, as computed styles: the post composer was opened, 「poi」 typed and the dialog closed, and the draft discarded at the 「ポストを保存しますか？」 prompt; the delete confirmation of one of the account's own posts was opened and closed with 「キャンセル」 (the post was not deleted); a two-letter name was typed into the username settings to show its error, and the page was left without saving; a post's link was copied to show the toast. The same day, hover colors in dark were read on home by hovering a navigation item, a post and the post button. Later that day, with the owner's permission, the display language was switched to English, the same composer, delete confirmation and copy-link steps were repeated (nothing was posted or deleted), settings, an empty search and the profile were read, and the language was switched back to Japanese.
Icons were read the same day at 1280×900 on home navigation and account settings: SVG sizes, viewBox and colors as computed styles, shapes from a screenshot.
