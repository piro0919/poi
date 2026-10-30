# GitHub — company-wide rules

Read this first for any GitHub-ish request.

## Products

| Product | File | Use for |
| --- | --- | --- |
| github.com | `github.md` | Everything: app shell, lists of records (issues, pull requests), filter bars, tabs with counters, settings pages, forms |

GitHub is close to a single product, so most rules live here and `github.md` adds screen shapes.

## Feel in one paragraph

Dense, precise and engineered. Small type (lots of 12px metadata), thin gray borders around boxes, 6px corners everywhere, a light gray header strip over a white page, with bordered white boxes, and one green button for "create". Information is shown as compact rows with counts, small colored labels and octicon-style line icons. It feels like a tool, not a brochure.

## Type

- Family: **Mona Sans** (variable; on Google Fonts). Fallback: `"Mona Sans", -apple-system, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`. Monospace for identifiers: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace`.
- Body 14px / 21px weight 400. Metadata 12px / 18px — used a lot.
- Row titles 16px / 24px weight 500. Page title 20px / 30px weight 600.
- Weight 600 for the selected state of a filter ("**Open** 1,119" vs "Closed 24,551").
- Code-ish values (IDs, refs like `#1042`) can use monospace inline with a light gray background.

## Color

| Role | Value |
| --- | --- |
| Page background | `#ffffff`. The header strip (global header plus tabs) is `#f6f8fa` with a 1px `#d1d9e0` bottom border; box headers are `#f6f8fa` too |
| Box / main surface | `#ffffff` |
| Primary text | `#1f2328` |
| Muted text (metadata, secondary tabs) | `#59636e` |
| Links | `#0969da` |
| Borders | `#d1d9e0` 1px |
| Hover / selected fill | `rgba(129,139,152,.15)` |
| Primary ("create") button | `#1f883d` background, white text, border `rgba(31,35,40,.15)` |
| Default button | `#f6f8fa` background, `#25292e` text, `#d1d9e0` border |
| Success / open state | `#1a7f37` |
| Danger | `#d1242f`, light fill `#ffebe9` |
| Accent fill (info, focus) | `#ddf4ff` |
| Active tab underline | `#fd8c73` (coral) |
| Counter pill | `rgba(129,139,152,.12)` fill, primary text |

## Shape and controls

- Radius **6px** on buttons, inputs, boxes and menus. Pills (counters, labels) are fully rounded.
- Buttons are 32px tall, padding 0 12px, 14px weight 500, with a 1px border even on the filled green one. Small buttons 28px. A button may carry a leading icon and a trailing counter.
- Inputs 32px (28px small, 40px on sign-in style pages), 1px `#d1d9e0` border, 6px radius, padding 5px 12px. Background `#f6f8fa` on settings and profile forms, white inside create forms. Focus: 2px blue ring.
- Errors on a field: the field border turns danger red and a line appears under it — a small warning-triangle icon and the message in 12px weight 600 `#d1242f`: "poi already exists in this account". No "Error:" prefix, no final period.
- Required fields: a red asterisk after the label, and one sentence at the top of the form: "Required fields are marked with an asterisk (*)."
- Boxes ("Box" pattern): white, 1px border, 6px radius, a header row in `#f6f8fa`, rows separated by 1px borders.
- Shadows are almost absent: at most `0 1px 0 rgba(31,35,40,.04)` under buttons.
- Icons: thin 16px line icons in muted color next to labels.

## Wording and tone

Measured from issue and pull request lists.

- **Sentence case**: "New issue", "New pull request", "Assigned to me", "Created by me", "Recent activity", "Collapse sidebar", "Security and quality".
- "New …" for create actions, not "Add" or "Create": "New issue".
- Counts sit next to labels as pills, abbreviated when large: "Issues 1.1k", "Pull requests 2.7k", "Open 1,119".
- Metadata is a run-on line separated by "·" or plain words: "#100938 · EPurwanto opened 5h ago". Use relative time ("5h ago", "1d ago").
- Filters are named by the field: "Author", "Labels", "Projects", "Milestones", "Assignees", "Types", each a menu button with a caret. Sort reads "Newest".
- Search placeholders describe the query language: "Search or jump to…", with a "/" key hint; list filters show the current query as text, e.g. `is:issue state:open`.
- Plain, direct and slightly technical. No exclamation marks, no "successfully".
- Empty states: a heading without a period, then one sentence with the next step and a "Learn more about …" link: "No results matched your search" / "Try a different search query. Learn more about searching and filtering issues and pull requests."
- Create forms are titled "Create new …" and finish with "Create" (green) and "Cancel" (default), right-aligned, Cancel first. When the form has no such title (a small dialog), name the object: "Create customer", as in "Create repository".

### Rewrites for common AI-default copy

| Default | GitHub-ish |
| --- | --- |
| + Add Customer | New customer |
| Submit | Create (under a "Create new customer" title), otherwise Create customer |
| Save Changes | Save changes |
| Settings saved successfully! | Settings saved. |
| Error: Invalid email. | Email is invalid |
| No data found. | No results matched your search |
| Manage your customers here. | (drop it) |
| Danger Zone | Danger Zone (GitHub keeps this title; see `github.md`) |
| Delete Workspace | Delete this workspace |
| This action cannot be undone. | Once you delete a workspace, there is no going back. Please be certain. |
| Are you sure? | (a dialog titled with the target, "Delete Acme Inc.", and one full-width button stating intent: "I want to delete this workspace") |
| Status: | (a "Status" menu button with a caret) |

## Not captured yet

No reference screen showed these, so there are no measured values. Keep them in the same quiet system; do not invent loud styles:

- Errors that belong to the whole form rather than one field
- The banner shown after saving settings
- Hover and pressed fills of buttons
- The dialog backdrop
- How older dates are written next to relative times

## Sources

Captured 2026-10-30 in a 1280×900 window, light theme: vercel/next.js Issues and Pull requests lists, and signed in, a repository's Issues (empty), New issue form, General settings with its Danger Zone and delete dialog, Branches settings, profile settings, and the New repository form with a name error. The signed-in account is set to the dark theme, so the light values were taken by loading GitHub's own light theme stylesheet in that tab; the account setting was not changed. Screenshots of this look slightly desaturated; the hex values above are computed styles, not pixel reads.
