# Google Search

Use for search boxes (global search in a header, a search page), results lists, and filter chips.

## Palette (light)

| Role | Value |
| --- | --- |
| Background | `#ffffff` |
| Primary text | `#16171a` |
| Result titles and links | `#1a0dab` |
| Chips and secondary buttons | `#f3f5f6` fill, primary text |
| Primary filled button | `#0b57d0` background, `#ffffff` text |
| Search box border | `#dadce0` 1px |
| Divider | `#dadce0` |

## Search box

- Fully rounded (radius 24–26px), 48–50px tall, white, 1px `#dadce0` border, and a soft shadow `0 3px 10px rgba(31,31,31,.08)` that grows slightly on hover and focus.
- Text 16px. A leading icon on the left; trailing icon buttons on the right (clear "×" when there is text, then other tools), separated by a thin vertical divider.
- No visible label and no "Search..." placeholder with an ellipsis; leave it empty or use "Search".
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

## Copy seen here

"Search", "Search by voice", "Search by image", "I'm Feeling Lucky", "AI Mode", "All", "Images", "Videos", "News", "More", "Tools", "Show more", "Read more", "About this result", "Translate this page", "People also ask", "Sign in". Tooltips name the action plainly.
