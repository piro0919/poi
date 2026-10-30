# Google Search

Use for search boxes (global search in a header, a search page), results lists, and filter chips.

## Palette (light)

| Role | Value |
| --- | --- |
| Background | `#ffffff` |
| Primary text | `#16171a` |
| Secondary text | `#4d5156` |
| Result titles and links | `#1a0dab` |
| Chips and secondary buttons | `#f3f5f6` fill, primary text |
| Primary filled button | `#0b57d0` background, `#ffffff` text |
| Search box border | `#dadce0` 1px |
| Divider | `#dadce0` |

## Palette (dark)

Use only when the app already has a dark mode. A dark blue-grey, not black.

| Role | Value |
| --- | --- |
| Background | `#22242a` |
| Primary text | `#e8eaf2` |
| Secondary text (snippets) | `#9e9e9e`; site URLs `#bdc1c6` |
| Result titles and links | `#99c3ff` |
| Search box | `#363840` fill, no border, no shadow, radius 26px |
| Divider (under the tab row, between related links) | `#444746` 1px |
| Active tab | `#e8eaf2` label with a 3px `#e8eaf2` underline |

Chips and the primary filled button were not seen in dark.

## Search box

- Fully rounded (radius 24–26px), 48–50px tall, white, 1px `#dadce0` border, and a soft shadow `0 3px 10px rgba(31,31,31,.08)` that grows slightly on hover and focus.
- Text 16px. A leading icon on the left; trailing icon buttons on the right (clear "×" when there is text, then other tools), separated by a thin vertical divider.
- No visible label and no "Search..." placeholder with an ellipsis; leave it empty or use "Search".
- Suggestions while typing: the field and the list join into one panel, radius 26px on the outer corners, with a 1px divider between the field and the list. Rows are 32px, a 20px gray `search` icon, then 16px text where the typed part is regular and the completion is bold. The row chosen with the arrow keys gets a fill with radius 4px; no fill appeared when the pointer was over a row.
  - Light: white panel, shadow `0 2px 8px 1px rgba(64,60,67,.24)` on the field and `0 4px 6px rgba(32,33,36,.28)` on the list, divider `#dadce0`, text `#212121`, chosen row `#f3f5f6`.
  - Dark: `#363840` panel, shadow `0 4px 12px rgba(23,23,23,.9)` on the field and `0 4px 6px #171717` on the list, divider `#4d5156`, text `#e8eaed`, chosen row `#42444d`. Under the rows sit a "Google Search" button and a 12px "Report inappropriate predictions" link.
- Under a big search box: suggestion chips, fully rounded, 42px tall, `#f3f5f6`, 14px, padding 10px 16px, optional leading icon.

## Results page

- Header row: the search box (left-aligned, ~690px) on a white bar.
- Below it, a row of text tabs, 14px, 48px tall: the active tab is primary text with a 3px underline; others are secondary. "More" and "Tools" have small down arrows. A 1px divider runs under the tab row.
- Each result:
  - A small source line: 26px round favicon, site name 14px primary, URL 12px secondary as a breadcrumb `example.com › docs › page`, and a ⋮ icon.
  - Title: 20–22px / 28px, weight 400, `#1a0dab`, the main click target.
  - Snippet: 14px / 22px, secondary text, matched words in bold.
  - Optional row of related-link chips: outlined, fully rounded, 12–14px, link color.
- 24–28px between results. No cards, no borders around results.
- "People also ask" style expandable rows: 16px text, 52px tall, chevron on the right, divider between rows.

### No results

Measured in light and dark with the Web results view, which shows no AI answer (2026-10-31). The All view with an AI answer showed only an illustration where the message would be; Poi does not copy illustrations, so use the text version.

- Plain text, no box, no icon, at the left edge of the results column:
  - "Your search - **query** - did not match any documents." in 14px primary text, the query in bold.
  - "Suggestions:", then a bulleted list: "Make sure that all words are spelled correctly." "Try different keywords." "Try more general keywords."
- When Search loosened the query, a 16px / 25px line above it in secondary text (`#4d5156` light, `#bdc1c6` dark): "No results found for "**query**"." and "Results for **query** (without quotes):" with the loosened query in link color.

## Icons

Material Symbols, outlined (their `viewBox="0 -960 960 960"` is in the page). Sizes are computed styles; names were identified by eye.

- In the search box: 24px `mic` and a camera icon for search by image; a 28px `close` to clear.
- Tab row: a 16px `arrow_drop_down` after "More" and "Tools".
- Results: an 18px `more_vert` for "About this result"; 20px `chevron_left` and `chevron_right` for paging.

## Copy seen here

"Search", "Search by voice", "Search by image", "I'm Feeling Lucky", "AI Mode", "All", "Images", "Videos", "News", "More", "Tools", "Show more", "Read more", "About this result", "Translate this page", "People also ask", "Sign in", "Google Search", "Report inappropriate predictions", "did not match any documents.", "Suggestions:", "Try different keywords.". Tooltips name the action plainly.

## Narrow widths

Measured at 768px in a desktop browser and at 375px in an iPhone browser. The signed-in account uses the dark theme, so only shape and size were taken from these captures, not color.

- **Tablet (768px)**: the same results page, narrowed. The search box keeps its height and spans the width except for the icons on the right. Tabs stay in one row; results keep their desktop type.
- **Phone (375px)**:
  - Header: the app's own mark centered on the top row, with the account avatar and an icon button at the right.
  - The search box on its own row, full width with 16px side margins, 44px tall, radius 25px.
  - The tab row under it scrolls sideways, 48px tall, 13px labels.
  - Results run full width with 16px margins. Titles are 22px. Related links become full-width rows 58px tall, 20px text, with a chevron at the right and a divider between rows, instead of chips.
  - 「People also ask」 rows keep their desktop shape.
