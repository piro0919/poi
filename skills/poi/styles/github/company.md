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
| Primary ("create") button | `#1f883d` background, white text, border `rgba(31,35,40,.15)`. Hover `#1c8139`, pressed `#197935` |
| Default button | `#f6f8fa` background, `#25292e` text, `#d1d9e0` border. Hover `#eff2f5`, pressed `#e6eaef` |
| Danger button (destructive confirm) | Default button with `#d1242f` text; on hover it fills `#cf222e` with white text |
| Success / open state | `#1a7f37` |
| Attention (pending, warning) | `#9a6700` |
| Danger | `#d1242f`, light fill `#ffebe9` |
| Accent fill (info, focus) | `#ddf4ff` |
| Focus ring | `#0969da`, a 2px solid outline drawn inside the control (`outline-offset: -2px`). A focused text input shows it as a 2px blue border |
| State labels | Outlined, no fill: text and 1px border in the state's color. Success `#1a7f37`, accent `#0969da`, attention `#9a6700`, danger `#d1242f` text with `#cf222e` border, done `#8250df`; neutral is `#59636e` text with a `#d1d9e0` border |
| Banners (flash) | 1px border, 6px radius, padding 20px 16px, primary text. Info: `#ddf4ff` fill, `rgba(84,174,255,.4)` border. Success: `#dafbe1`, `rgba(74,194,107,.4)`. Warning: `#fff8c5`, `rgba(212,167,44,.4)`. Error: `#ffebe9`, `rgba(255,129,130,.4)` |
| Active tab underline | `#fd8c73` (coral) |
| Counter pill | `rgba(129,139,152,.12)` fill, primary text |

### Dark theme

Use only when the app already has a dark mode. GitHub's default dark theme ("Dark"). The structure stays the same; the header strip turns darker than the page instead of lighter.

| Role | Value |
| --- | --- |
| Page background | `#0d1117` |
| Header strip (global header plus tabs) | `#010409`, the darkest surface, with a 1px `#3d444d` bottom border |
| Box headers, settings boxes, inputs on settings forms | `#151b23`. Rows inside a list box stay on the page background |
| Primary text | `#f0f6fc` |
| Muted text | `#9198a1` |
| Links and accent text | `#4493f8` |
| Borders | `#3d444d` 1px (`rgba(61,68,77,.7)` between rows) |
| Hover / selected fill, counter pill | `rgba(101,108,118,.2)` |
| Primary ("create") button | `#238636` background, white text, border `rgba(255,255,255,.15)`. Hover `#29903b`, pressed `#2e9a40` |
| Default button | `#212830` background, `#f0f6fc` text, `#3d444d` border. Hover `#262c36`, pressed `#2a313c` |
| Danger button (destructive confirm) | Default button with `#fa5e55` text; on hover it fills `#b62324` with white text |
| Success / open state | `#3fb950` |
| Attention (pending, warning) | `#d29922` |
| Danger | `#f85149` text; filled danger `#da3633`; light fill `rgba(248,81,73,.1)` (the error banner's fill). State labels stay outlined, see below |
| Accent fill (info) | `rgba(56,139,253,.1)` |
| State labels | Outlined, no fill. Text / border: success `#3fb950` / `#238636`, accent `#4493f8` / `#1f6feb`, attention `#d29922` / `#9e6a03`, danger `#f85149` / `#da3633`, done `#ab7df8` / `#8957e5`, neutral `#9198a1` / `#3d444d` |
| Banners (flash) | Same shape as light, primary text. Info: `rgba(56,139,253,.1)` fill, `rgba(56,139,253,.4)` border. Success: `rgba(46,160,67,.15)`, `rgba(46,160,67,.4)`. Warning: `rgba(187,128,9,.15)`, `rgba(187,128,9,.4)`. Error: `rgba(248,81,73,.1)`, `rgba(248,81,73,.4)` |
| Focus ring | `#1f6feb` |
| Active tab underline | `#f78166` |

## Shape and controls

- Radius **6px** on buttons, inputs, boxes and menus. Pills (counters, labels) are fully rounded.
- Buttons are 32px tall, padding 0 12px, 14px weight 500, with a 1px border even on the filled green one. Small buttons 28px. A button may carry a leading icon and a trailing counter.
- Inputs 32px (28px small, 40px on sign-in style pages), 1px `#d1d9e0` border, 6px radius, padding 5px 12px. Background `#f6f8fa` on settings and profile forms, white inside create forms. Focus: 2px blue ring.
- Errors on a field: the field border turns danger red and a line appears under it — a small warning-triangle icon and the message in 12px weight 600 `#d1242f`: "poi already exists in this account". No "Error:" prefix, no final period.
- Required fields: a red asterisk after the label, and one sentence at the top of the form: "Required fields are marked with an asterisk (*)."
- Boxes ("Box" pattern): white, 1px border, 6px radius, a header row in `#f6f8fa`, rows separated by 1px borders.
- Shadows are almost absent: at most `0 1px 0 rgba(31,35,40,.04)` under buttons.
- Icons: Octicons; see "Icons" below.

## Icons

Use Octicons, GitHub's own icon set (MIT): `@primer/octicons-react` for React, `@primer/octicons` for anything else. Add the package if the app has none. Never use the marks in it: `mark-github`, `logo-github`, `logo-gist`, `copilot`, `copilot-error`, `copilot-warning`.

- Size: 16px everywhere in the UI: header, tabs, sidebar, buttons, rows, toolbars. 24px only for the icon above an empty-state heading.
- Color: the muted text color (`#59636e` light, `#9198a1` dark). Inside a filled button the icon takes the button's text color.
- Only state icons are colored: open `issue-opened` and `git-pull-request` in success green, `check` in green and `x` in danger red for passing and failing checks, drafts in muted.
- Icons sit before the label. Dropdown carets are `triangle-down` after the label.

Names seen on the Issues and Pull requests lists, a repository's home, the New issue form and repository settings, with the role they play:

| Role in an app | Octicon |
| --- | --- |
| Menu, list density | `three-bars`, `rows` |
| Search, clear a field | `search`, `x-circle-fill` |
| New / create | `plus` |
| More actions | `kebab-horizontal` |
| Sort | `sort-desc` |
| Edit | `pencil` |
| Settings, general | `gear` |
| People, one person | `people`, `person` |
| Labels, tags | `tag` |
| Milestones, goals | `milestone` |
| Recent, history | `clock`, `history` |
| Inbox, notifications | `inbox` |
| Open record, linked record | `issue-opened` |
| Comments | `comment`, `comment-discussion` |
| Views, groups | `stack` |
| Tables, projects | `table` |
| Documents, wiki | `book`, `file`, `file-directory-fill` |
| Charts, insights, activity | `graph`, `pulse` |
| Security, keys | `shield`, `key`, `key-asterisk` |
| Webhooks, servers, apps | `webhook`, `server`, `apps` |
| Run, actions | `play` |
| Attach | `paperclip` |
| Collapse a sidebar | `sidebar-expand` |
| Watch, star, pin | `eye`, `star`, `pin` |

## Wording and tone

Measured from issue and pull request lists.

- **Sentence case**: "New issue", "New pull request", "Assigned to me", "Created by me", "Recent activity", "Collapse sidebar", "Security and quality".
- "New …" for create actions, not "Add" or "Create": "New issue".
- Counts sit next to labels as pills, abbreviated when large: "Issues 1.1k", "Pull requests 2.7k", "Open 1,119".
- Metadata is a run-on line separated by "·" or plain words: "#100938 · EPurwanto opened 5h ago". Use relative time ("5h ago", "1d ago", "1w ago"). Past a few weeks the date takes over, with "on": "on Sep 18" within the current year, "on Jun 6, 2016" for earlier years. When the page cannot know today's date, use the dated form with the year.
- Filters are named by the field: "Author", "Labels", "Projects", "Milestones", "Assignees", "Types", each a menu button with a caret. Sort reads "Newest".
- Search placeholders describe the query language: "Search or jump to…", with a "/" key hint; list filters show the current query as text, e.g. `is:issue state:open`.
- Plain, direct and slightly technical. No exclamation marks. Confirmations after saving do say "successfully" and name what changed: "Profile updated successfully — view your profile." (measured 2026-10-31).
- Empty states: a heading without a period, then one sentence with the next step and a "Learn more about …" link: "No results matched your search" / "Try a different search query. Learn more about searching and filtering issues and pull requests."
- Create forms are titled "Create new …" and finish with "Create" (green) and "Cancel" (default), right-aligned, Cancel first. When the form has no such title (a small dialog), name the object: "Create customer", as in "Create repository".

### Rewrites for common AI-default copy

| Default | GitHub-ish |
| --- | --- |
| + Add Customer | New customer |
| Submit | Create (under a "Create new customer" title), otherwise Create customer |
| Save Changes | Save changes |
| Settings saved successfully! | Settings updated successfully. (in a full-width info banner; see "After saving" in `github.md`) |
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

- The wording of errors that belong to the whole form rather than one field. Show them in the error banner
- Summary number tiles (GitHub has no screen with them)

## Sources

Captured 2026-10-30 in a 1280×900 window, light theme (narrow layouts at 768×1024 and 375×812 the same day: the Issues list, repository settings and the New issue form): vercel/next.js Issues and Pull requests lists, and signed in, a repository's Issues (empty), New issue form, General settings with its Danger Zone and delete dialog, Branches settings, profile settings, and the New repository form with a name error. The signed-in account is set to the dark theme, so the light values were taken by loading GitHub's own light theme stylesheet in that tab; the account setting was not changed. Screenshots of this look slightly desaturated; the hex values above are computed styles, not pixel reads. The dark values were measured the same day from the Issues list and General settings in the account's own dark theme, as computed styles. On 2026-10-31, button hover and pressed fills, state labels, banners, and the dialog's backdrop, padding and dark surface were read from GitHub's own stylesheet, signed out, on the vercel/next.js Releases and Issues pages: the design tokens on the page, and the computed styles of GitHub's `Label`, `flash`, `Overlay` and `btn` classes placed in the page, with the page switched between its light and dark themes. The attention label was also checked on a real "Pre-release" label on the Releases page. These are the values GitHub's stylesheet assigns; a live dialog or banner was not opened, because the browser's GitHub session had signed out. Octicon names, sizes and colors were read the same day from the icons' class names and computed styles, in the account's dark theme: the Issues and Pull requests lists, a repository's home, the New issue form and repository settings. Also on 2026-10-31, signed out on primer/octicons Issues in the light theme: the light focus ring (computed style of a keyboard-focused button), the dates shown by its `relative-time` elements, sorted both newest and oldest first, and the "Labels" filter menu. Later the same day, signed in, the archive dialog of piro0919/poi was opened live in the account's dark theme and closed with Escape without typing the name; its layout, wording and dark values were read as computed styles. Then the profile settings form was submitted with every value unchanged (checked before and after), and the banner that came back was read the same way.
