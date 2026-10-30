# Amazon — company-wide rules

Read this first for any Amazon-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| Shopping site | `shopping.md` | Everything: the dark top bar, search results and item grids, item detail pages, account hubs of cards, order-style lists of boxed records, address-style forms, empty states |

Only the shopping site was captured. Amazon is close to a single product here, so most rules live in this file and `shopping.md` adds screen shapes.

## Feel in one paragraph

Dense, practical and plain. A near-black top bar with a second dark strip under it frames a white page packed with small 14px text, blue links everywhere and very little decoration. Actions are fully rounded pill buttons: yellow for the main one, orange for the most urgent, white with a grey border for the rest. Records sit in boxes with an 8px radius and a light grey header strip. Headings are large and regular weight rather than bold.

## Type

- Family: the system Japanese gothic. Use `"Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. Latin text in the logo area uses Amazon's own font; do not copy it.
- Body 14px / 20px weight 400. Small print 12px / 16px.
- Page title (h1) 28px / 36px weight **400**, e.g. 「注文履歴」「住所」. An account hub title is the exception at 28px weight 700.
- Section headings 20px–24px weight 700 (「この商品について」 20px / 24px, 「新しい住所を追加する」 24px / 32px). Group headings 18px weight 700.
- Item titles 16px weight 400 in lists, 24px / 32px weight 400 on a detail page.
- Form labels 14px weight 700, directly above the field, no colon.

## Color

| Role | Value |
| --- | --- |
| Page | `#ffffff`; a cart-style page uses `#eaeded` behind white panels |
| Top bar | `#131921`, 60px tall |
| Second strip (category links) | `#232f3e`, 39px tall, white 14px links |
| Search button in the top bar | `#febd69`, radius 0 4px 4px 0 |
| Primary text | `#0f1111` |
| Secondary text | `#565959` |
| Links | `#2162a1`, used freely for item titles, counts and secondary actions |
| Current page in a breadcrumb | `#c45500` text |
| Tabs | inactive tabs are `#2162a1` links; the active tab is bold `#0f1111` with a 2px orange underline (about `#d67f32`, read from a screenshot) over a 1px `#dddddd` line |
| Main button | `#ffd814` fill and border, `#0f1111` text |
| Urgent button (buy now) | `#ffa41c` fill and border, `#0f1111` text |
| Default button | white, 1px `#888c8c` border, `#0f1111` text |
| Box border | 1px `#d5d9d9` |
| Box header strip | `#f0f2f2` |
| Input border | 1px `#888c8c` |
| Input focus | border `#667e93` and a 1px `#373a3a` outline with 1px offset |
| Error | `#c10015`: input border plus a 1px inset ring in the same red, message text and icon |
| Price and point highlights | `#c10015` for points and deal prices; prices themselves stay `#0f1111` |
| Success / in stock | `#0b7b3c` |
| Suggestion chips | `#e0f3ff` fill, `#2162a1` text, radius 20px |

## Shape and controls

- Buttons are pills: 32px tall, radius **100px**, 14px weight 400 (not bold), centered label. Width often fills the column (229px in a buy box).
- Text inputs 32px tall, radius **8px**, padding 5px 11px, 14px text. Selects are drawn the same way, with a caret on the right.
- Boxes radius 8px with a 1px `#d5d9d9` border and no shadow. A boxed record has a `#f0f2f2` header strip (radius 8px 8px 0 0) above a white body.
- Home-page style cards: white, radius 8px–12px, shadow `0 2px 5px rgba(15,17,17,.15)`.
- Checkboxes are the plain 13px browser checkbox.
- Inline errors sit under the field: a red circled `!` icon and one 12px / 15px red sentence.

## Wording and tone

Measured from the Japanese site. The English site was not captured.

- Polite and instructional; requests end in 「〜してください。」 Errors name the missing thing and say what to do: 「名前を入力してください。」「都道府県を選択してください。」 When it helps, the reason comes first: 「配送に問題がある場合にこちらからお電話できるよう、電話番号を入力してください。」
- Buttons are short plain verb phrases, no 「する」 ending unless the verb needs it: 「カートに入れる」「今すぐ買う」「住所を追加」「もう一度買う」「商品レビューを書く」「注文を検索」.
- Empty states state the fact, then point the way with links: 「Amazonカートは空です」「ショッピングを続けるにはAmazon.co.jp トップへどうぞ。」; no results: 「検索クエリに一致する結果はありません。」「キーワードが正しく入力されていても一致する商品がない場合は、別の言葉をお試しください。」
- Placeholders are examples prefixed with 「例：」: 「例：00-0000-0000」「例：〇〇市〇〇町」.
- Counts are numbers with 件 and the noun: 「142件の注文」 (the number in bold), 「検索結果 50,000 以上 のうち 1-48件」.
- Card descriptions join short items with 「・」: 「配送状況の確認・返品手続き」「登録住所の追加・変更」.
- Optional fields say so in the label: 「配達手順を追加（オプション）」. Format hints live in the label: 「郵便番号（半角数字）」.
- Breadcrumbs use 「›」: 「アカウントサービス › お客様のご住所 › 新しい住所」.

## Not captured yet

- The English site wording and its Latin font
- Hover colors for buttons and links
- Modal dialogs
- Summary number tiles
- Destructive confirmations (delete an address)
- Success messages after saving
- Data tables (the shopping site has none)

## Sources

Captured 2026-10-30 in a 1280×900 window, signed in, on amazon.co.jp with a Japanese UI: home, search results, no results, an item detail page, the account hub, order history, addresses, the add-address form empty and after submitting it empty, and an empty cart. The login-and-security page asked for the password again and was not opened. Narrow layouts were captured the same day at 768×1024 in a desktop browser and at 375×812 with an iPhone user agent: search results, an item page, the account hub, order history, the add-address form and the cart. Nothing was bought, saved or deleted. Only interface labels were copied; no names, addresses, order numbers or item titles from the account.
