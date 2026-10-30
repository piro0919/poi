# Shopping site

Use for the app shell, search results and item grids, item detail pages, account hubs, lists of boxed records such as orders, and forms.

## App shell

- **Top bar** (60px, `#131921`): on the left the app's own name, then a delivery-place style line (two lines, 12px light grey over 14px bold white) only if the app has such a setting. In the middle a wide search group 40px tall with 8px outer corners: a grey category dropdown on the left (`#e6e6e6`, 12px, caret), the white field, and a square `#febd69` button with a magnifier on the right. Inside the group only the outer corners are rounded. On the right, two-line links: a 12px greeting over a 14px bold label with a small caret (「アカウント＆リスト」), and 「返品もこちら / 注文履歴」.
- **Second strip** (39px, `#232f3e`): a 「≡ すべて」 menu button in bold, then the app's main sections as white 14px links with padding 8px 5px. Use it for the app's top-level navigation instead of a sidebar. Amazon marks no current item in this strip; none was seen in any capture.
- There is no left sidebar on most pages. Content sits in a centered column (about 920px for account pages) or, for search results, full width with a filter column on the left.
- Breadcrumbs above the title: 14px `#565959` links separated by 「›」, the current page in `#c45500`.

## Search results and item grids

- A thin bar under the shell: 「検索結果 50,000 以上 のうち 1-48件 "query"」 in 14px, with the query in bold orange-brown (value not measured); a small 「並べ替え：おすすめ」 dropdown at the right (white, radius 8px).
- **Filter column** (about 240px) on the left: group headings 14px weight 700 (「配送」「価格」「ブランド名」), then checkbox rows or plain 14px links, one per line. Price ranges are links such as 「2,400～3,300￥」.
- A row of rounded suggestion chips (44px tall, `#f0f2f2`-ish fill, a small image and a label) under 「検索を絞り込む」.
- **Result grid** under a 20px weight 700 heading 「結果」: four columns of tiles. Each tile: the image on a very light grey `#f7f7f7` panel, then a 16px regular title clamped to a few lines, a star rating with a count link (12px), the price large (about 21px) with a small 「￥」, and a delivery line in 14px.

## Item detail page

- Three columns: images on the left with thumbnails in a column, the title block in the middle, a buy box on the right (about 229px wide).
- Title 24px / 32px regular; a brand link 14px `#2162a1` above it; rating 「4.3 ★★★★☆ (758)」 at the right of the brand line.
- Price 28px regular with a small 「￥」 and 「税込」; points under it in `#c10015`.
- Buy box: a 「数量：1」 select (32px, radius 8px), then the yellow 「カートに入れる」 and the orange 「今すぐ買う」, both full width, stacked with 8px between.
- 「在庫あり。」 in 18px `#0b7b3c`. Small fact tables (「出荷元」「販売元」) as two columns of 12px–14px text without borders.

## Account hub

- Title 「アカウントサービス」 28px weight 700.
- A three-column grid of cards (about 320×96px), white, 1px `#d5d9d9` border, radius 8px. Each card: a 64px round icon on the left on a pale blue-grey circle, then a 17px regular title and a 14px `#565959` description joined with 「・」.
- Below, a 1px divider and more cards headed in 17px weight 700 (「お買い物設定」), each holding a list of 14px links.

## Lists of boxed records (orders)

- Title 28px regular at the top left, a search field (346px, magnifier inside on the left) and a dark `#303333` pill 「注文を検索」 in white bold on the right of the same row.
- Tabs under the title: 14px, active tab bold with a 2px orange underline (see `company.md`).
- A filter row: a small select (「過去3か月」) followed by 「に確定された**142件**の注文」, and a right-aligned bold link.
- Each record is a box, radius 8px, 1px `#d5d9d9` border: a `#f0f2f2` header strip about 65px tall with small label-over-value pairs (12px label, 14px value: 「注文日」「合計」) on the left and the record number plus links (「注文内容を表示」|「領収書等」) on the right; then a white body. When the record has a state, it opens the body as an 18px weight 700 line in primary text, not in color (「10月26日にお届け済み」). Then the item image, a `#2162a1` title link, 12px bold format line, and default pill buttons stacked on the right (220px wide).
- Records are stacked with about 14px between boxes.

## Forms

- A single column 500px wide under a 24px weight 700 heading (「新しい住所を追加する」).
- Each field: label 14px weight 700, then the 32px input, then an optional 12px hint under it (「配送時にご連絡させていただく事があります」).
- Paired fields sit side by side with a 「-」 between (postal code).
- The submit button is the yellow pill sized to its label (「住所を追加」), left aligned at the end.
- On submit, every invalid field gets the red border and inset ring, and its message appears under it with the red icon. No banner at the top.

## Addresses and similar card lists

- Cards about 320×265px with a 1px border, radius 8px. The first card is an add tile with a dashed 2px `#c7c7c7` border, a large grey 「+」 and 「新しい住所を追加」 in large bold grey text.
- A default card has a small header strip (「既定の住所：」) with a divider, then the record in 14px, and 「変更 | 削除」 links at the bottom.

## Narrow widths

Measured at 768px in a desktop browser and at 375px in an iPhone browser, which gets the mobile site.

- **Tablet (768px)**: the desktop site does not adapt. The page keeps a 1000px minimum width and scrolls sideways. Poi must not scroll sideways, so below 1000px use the phone layout below with the content stretched to the width. This is a rule for Poi, not something Amazon does.
- **Phone header** (142px in all, 98px without the delivery row):
  - A 50px top row in dark slate (read from a screenshot as about `#252f3d`): a 「≡」 menu button, the app's own name, then on the right a two-line greeting over a small value and the account and cart icons.
  - The search group on its own row, full width with 8px side margins, 44px tall: a white field with 15px text and radius 8px, and a 50×44px `#febd69` magnifier button inside its right end. There is no category dropdown.
  - A 44px delivery row, `#37475a`, 12px text with a pin icon, padding 12px 10px. Only when the app has such a setting.
  - There is no second strip of section links. The app's top-level pages move into the 「≡」 menu.
- **Page**: white, 12–14px side padding. Titles are bold here, unlike desktop: 22–24px weight 700 (「アカウントサービス」「注文履歴」), group headings 18px weight 700 (「注文」「支払い＆住所」).
- **Account hub**: the tiles become grouped lists. Under each group heading, a white box with radius 8px and a 1px `#d5d9d9` border holds rows 51px tall, 16px text, a chevron at the right, and a 1px `#e7e7e7` line between rows.
- **Orders**: a full-width search field (「すべての注文を検索」) with 「絞り込み ›」 at its right, then one box per record with the thumbnail on the left and the title and date on the right.
- **Search results**: a row of filter chips under the header that scrolls sideways and stays stuck: 32px tall, radius 16px, white with a 1px `#888c8c` border. Then one result per row, with the image on the left (about 40% of the width) and the details on the right, ending with a `#ffd814` 「カートに入れる」 pill 32px tall, as wide as the details column.
- **Forms**: a 「‹ お客様のご住所」 back row above the title. Fields run full width and are 44px tall: text inputs with radius 3px and a 1px `#949494` border, selects with radius 12px and a 1px `#888c8c` border, under bold labels.

## Empty states

- Cart style: on the `#eaeded` page, a white panel with a 24px weight 700 heading 「Amazonカートは空です」 and one or two 14px sentences with inline links to where to go next.
- No results: a plain heading 「検索クエリに一致する結果はありません。」 and one 14px sentence suggesting another word, at the top of the results column.
