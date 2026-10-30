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

- Family for Japanese UI: the system Japanese gothic. Use `"Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. Latin text in the logo area uses Amazon's own font; do not copy it.
- Family for English UI: amazon.com sets `"Amazon Ember", Arial, sans-serif` on every element (computed, 2026-10-31). Amazon Ember is not distributed, so use `Arial, sans-serif`, the stack's own fallback. Sizes and weights below hold on amazon.com too (empty cart heading 24px weight 700, error text 12px).
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
| Main button | `#ffd814` fill and border, `#0f1111` text. Hover `#ffce12` |
| Urgent button (buy now) | `#ffa41c` fill and border, `#0f1111` text |
| Default button | white, 1px `#888c8c` border, `#0f1111` text. Hover: `#edf8ff` fill and a `#0a7cd1` border |
| Link hover | Item titles and blue links both turn `#0c3353`, with no underline |
| Box border | 1px `#d5d9d9` |
| Box header strip | `#f0f2f2` |
| Input border | 1px `#888c8c` |
| Input focus | border `#667e93` and a 1px `#373a3a` outline with 1px offset |
| Error | `#c10015`: input border plus a 1px inset ring in the same red, message text and icon |
| Price and point highlights | `#c10015` for points and deal prices; prices themselves stay `#0f1111` |
| Success / in stock | `#0b7b3c` |
| Suggestion chips | `#e0f3ff` fill, `#2162a1` text, radius 20px |

### Dark theme

The shopping site has no dark theme in the browser, on desktop or phone: it stays white when the browser is set to dark, and its stylesheets have no dark rules. If the app already has a dark mode, keep it and derive the dark colors as SKILL.md says.

## Shape and controls

- Buttons are pills: 32px tall, radius **100px**, 14px weight 400 (not bold), centered label. Width often fills the column (229px in a buy box).
- Text inputs 32px tall, radius **8px**, padding 5px 11px, 14px text. Selects are drawn the same way, with a caret on the right.
- Boxes radius 8px with a 1px `#d5d9d9` border and no shadow. A boxed record has a `#f0f2f2` header strip (radius 8px 8px 0 0) above a white body.
- Home-page style cards: white, radius 8px–12px, shadow `0 2px 5px rgba(15,17,17,.15)`.
- Checkboxes are the plain 13px browser checkbox.
- Inline errors sit under the field: a red circled `!` icon and one 12px / 15px red sentence.
- Modal dialogs: centered over the page darkened to about 47% black (read from a screenshot: white became `#878787`). The box is 375px wide for a short task, radius 8px. Header strip `#f0f2f2`, 57px tall, padding 0 24px, a 1px `#d5d9d9` line under it, the title 16px weight 700 on the left and a 44px × close button on the right. White body, padding 16px 24px. Measured on the 「場所を選択」 dialog.

## Icons

Amazon has no public icon set and uses very few icons; its pages are text and links. Icons are images from a sprite, bold and solid, never thin line icons. Sizes and colors are computed styles; shapes were read from a screenshot.

- Header: a bold magnifier in the orange search button, a 17px white ≡ before "すべて", a cart outline with the count over it.
- Search fields on pages: an 18–20px dark magnifier inside, on the left.
- Small solid ▾ carets after dropdown labels.
- The second header row and the order history page show no icons before labels; do not add them there.

## Wording and tone

Measured from the Japanese site, and from amazon.com signed out for English (below).

- Polite and instructional; requests end in 「〜してください。」 Errors name the missing thing and say what to do: 「名前を入力してください。」「都道府県を選択してください。」 When it helps, the reason comes first: 「配送に問題がある場合にこちらからお電話できるよう、電話番号を入力してください。」
- Buttons are short plain verb phrases, no 「する」 ending unless the verb needs it: 「カートに入れる」「今すぐ買う」「住所を追加」「もう一度買う」「商品レビューを書く」「注文を検索」.
- Empty states state the fact, then point the way with links: 「Amazonカートは空です」「ショッピングを続けるにはAmazon.co.jp トップへどうぞ。」; no results: 「検索クエリに一致する結果はありません。」「キーワードが正しく入力されていても一致する商品がない場合は、別の言葉をお試しください。」
- Placeholders are examples prefixed with 「例：」: 「例：00-0000-0000」「例：〇〇市〇〇町」.
- Counts are numbers with 件 and the noun: 「142件の注文」 (the number in bold), 「検索結果 50,000 以上 のうち 1-48件」.
- Card descriptions join short items with 「・」: 「配送状況の確認・返品手続き」「登録住所の追加・変更」.
- Optional fields say so in the label: 「配達手順を追加（オプション）」. Format hints live in the label: 「郵便番号（半角数字）」.
- Breadcrumbs use 「›」: 「アカウントサービス › お客様のご住所 › 新しい住所」.

### English

Seen on amazon.com, signed out, on 2026-10-31: search results, a no-results search, the empty cart and the sign-in page (submitted empty to show the error; nothing was entered).

- Sentence case on buttons, except the header's two-line links, which are title case: "Add to cart", "See options", "Change Address" (title case in a popover), "Dismiss", "Continue", "Sign in", "Hello, sign in" over "Account & Lists", "Returns" over "& Orders".
- Errors are a bare imperative, no "Please" and no period, in 12px `#c10015` beside an 18px alert icon: "Enter your mobile number or email".
- Headings are plain nouns or a short statement: "Results", "More results", "Your Amazon Cart is empty" (24px weight 700; put the app's own noun in place of the company name), "Sign in or create account".
- Counts: "1-48 of over 50,000 results for" followed by the query in quotes. Ratings: "4.6 out of 5 stars", then the count in parentheses with K for thousands, "(15.8K)". Social proof: "9K+ bought in past month".
- Sort control: "Sort by:" then the current value, "Featured".
- Links that point the way after an empty state: "Shop today's deals", "Sign in to your account", "Sign up now". Two-part prompts: "New customer? Start here."
- The search placeholder names the site: "Search Amazon". Put the app's own name there.
- The no-results search showed no message at all, only "More results" and sponsored items. Keep the app's own message and word it in the plain tone above.

## Not captured yet

- English wording on signed-in pages (account hub, orders, address forms), which need an amazon.com account
- Hover on the urgent button
- Summary number tiles
- Destructive confirmations (delete an address). The address page now asks for the password again and was not opened
- Success messages after saving
- Data tables (the shopping site has none)

## Sources

Captured 2026-10-30 in a 1280×900 window, signed in, on amazon.co.jp with a Japanese UI: home, search results, no results, an item detail page, the account hub, order history, addresses, the add-address form empty and after submitting it empty, and an empty cart. The login-and-security page asked for the password again and was not opened. Narrow layouts were captured the same day at 768×1024 in a desktop browser and at 375×812 with an iPhone user agent: search results, an item page, the account hub, order history, the add-address form and the cart. Nothing was bought, saved or deleted. Only interface labels were copied; no names, addresses, order numbers or item titles from the account. Search results and the account hub were also opened the same day with the browser set to dark, at 1280px and at 375px with an iPhone user agent; all stayed light. On 2026-10-31, hover colors were read as computed styles on a search results page while hovering a 「カートに入れる」 button, a 「単品」 option button, an item title and a blue link, and the 「場所を選択」 dialog was opened from the delivery line and closed with Escape without choosing anything. The same day, the 「≡ すべて」 menu was opened from the home page and closed, and read as computed styles, with a row hovered. Also that day, amazon.com was opened signed out with `language=en_US`: search results, a no-results search, the empty cart, and the sign-in page submitted empty; computed fonts and visible copy were read. Later that day on amazon.co.jp, signed in: the top bar's search group was focused and blurred, 「すべて」 in the second strip hovered, both read as computed styles, and the account hub's markup checked for text under its title. Order history asked for the password again and was not opened.
Icons were read the same day at 1280×900 on the header and order history: sizes and colors as computed styles, shapes from a screenshot.
