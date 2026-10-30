# Poi

A skill for Claude Code and Cursor that restyles the UI of the repository you are working in to feel like a well-known product.
You say "make it Google-ish" or "make it Slack-ish", and Poi rewrites the screens in that product's style.

The name comes from the Japanese "っぽい" (-ppoi), meaning "-ish" or "looks like", as in "Google-ppoi".

This file records what was agreed in a brainstorming session on 2026-10-30. The skill lives in `skills/poi`, and the sample admin app used for trials in `examples/sample-admin`. The landing page is in `lp/` (Next.js + next-intl, English and Japanese, copied from Owler's LP). Its hero switches between shots of the sample app before and after a trial for each company, in `lp/public/shots/`; retake them after a style document changes noticeably.

## Why

Current AI coding agents only have a rough idea of what "Google-like" means: a white background and a blue button.
Once you include the wording on buttons, error messages and the tone of the copy, what they produce is clearly off.
Poi exists to close that gap.

## Agreed

- Input: the local repository and an instruction such as "make it Google-ish"
- Output: the screens of that repository rebuilt in that style. Poi rewrites the code directly; it does not stop at proposing changes
- The "style" of a company is extracted from its real screens, as rules that cover color and spacing **and** wording and tone
- The extraction mechanism itself is not the point of the project. The quality of the extracted style should keep improving over time
- What success looks like:
  - People who use it are surprised that it really does feel like Google
  - The number of supported companies keeps growing
- First version: company names only. Start with Google, Slack and GitHub, then keep adding large tech companies, consumer services included. Amazon, X and Instagram were named as next candidates (2026-10-30)
- Target users: not limited to admin screens or B2B SaaS. Any team that wants its screens to feel like a well-known product, especially one without (or with few) designers
- Which product to imitate is decided by the AI from what the service in the repository does. It may differ per screen or per component, e.g. a list that looks like Gmail and a search box that looks like Google Search
- The goal is to resemble the company, not to become it
- Distributed as a skill for Claude Code / Cursor
- Do not copy logos or company names; transfer only color, spacing and wording. This keeps the tool from being used to build phishing look-alikes, and fits the goal of resembling the company rather than becoming it
- Typefaces follow the same line as icons (decided 2026-10-31): Poi loads the company's own typeface only when the company distributes it for free (Google Sans / Google Sans Flex, Mona Sans and Lato are on Google Fonts, checked the same day). Typefaces that are not distributed (X's Chirp, Amazon Ember) are never copied; their documents give a system stack instead. The cost is that X and Amazon resemble the original less than the others, since the typeface carries much of the feel
  - A Japanese web font in a stack (Slack's Noto Sans JP) is loaded only when the app shows Japanese text. When a stack names no Japanese font, Japanese falls back to the OS's sans-serif, as Gmail and the Cloud console do (measured the same day)
- Never change existing behavior: data fetching, saving and navigation stay as they are. Adding UI-only state that lives entirely inside a screen (open/closed, selected row, hover actions) is allowed, because without it a list cannot really feel like Gmail. This is a first attempt and may be tightened after trying it
- Poi may add the company's own icon package to the user's repository, so icons match the real product down to stroke and corners (decided 2026-10-30). Icons that are logos or product marks are never used (in Octicons: `mark-github`, `logo-github`, `logo-gist`, `copilot*`). Packages checked the same day:
  - Google: Material Symbols, Apache-2.0 (`material-symbols` / `@material-symbols/svg-400` on npm, or the Google Fonts icon font)
  - GitHub: Octicons, MIT (`@primer/octicons-react`, `@primer/octicons`)
  - Slack, X and Amazon: no published icon set is known. Their documents describe the icon style instead (stroke width, filled or outlined, size)
- Styles are extracted ahead of time by the maintainer and shipped inside the skill as one set of rule documents per company. They are not extracted on the user's machine at run time: many reference screens (Gmail, Google Cloud console) require a login, and run-time extraction would make the result vary from run to run. The cost is that a document has to be re-extracted when the company redesigns its screens
- Each company's rules come in two layers:
  - Company-wide rules: tone, how buttons are worded, how errors are written; things that hold across all of that company's products. Always read
  - Per-product rules: the shapes of screens and components, e.g. the Gmail list, the Search box, tables in the Google Cloud console. Read only for the products the AI matches to the screen at hand
  - The cost is that adding a company means extracting one document per product, not just one per company
- Products covered first. These three companies were chosen for the lists, search, tables and settings screens of admin UIs; companies added later need not be:
  - Google: Gmail, Google Search, Google Cloud console. Editing tools such as Docs and Sheets are left out because their shape is far from a SaaS screen. Google Workspace admin console is a candidate to swap in for the Cloud console
  - Slack: the Slack app only. It is close to a single product, so its product rules overlap heavily with the company-wide ones
  - GitHub: github.com only. Issue and pull request lists and repository settings serve as admin-screen references
  - Amazon: the shopping site only (amazon.co.jp): search results, item pages, the account hub, order history, address forms, cart. AWS console is left out (decided 2026-10-30)
  - X: x.com only, as a single product like Slack
- Scope of one run: with no scope given, Poi rewrites every screen in the repository, so it can look across all of them when assigning products (the list to Gmail, the search box to Search). When the user names a scope, such as "make only the settings screen Slack-ish", it rewrites only that
- Any stack is supported. Rule documents are written independently of tools: color values, spacing sizes, corner radii, example copy. Fitting them to the repository's own stack (React or Vue, Tailwind or plain CSS) is left to Claude Code / Cursor, so adding a company or product does not mean writing one document per stack. The cost is that how closely the result resembles the original may vary by stack
- Quality is checked against a small sample B2B SaaS admin app kept in this repository, with list, search, table and settings screens. Poi is run on it per company, and the result is compared side by side with the reference product's screens. After a rule document changes, it is run again on the same sample to see whether it improved. The side-by-side images can also go in the README. Start with one sample; the risk is overfitting to it, which can later be addressed with samples on other stacks or real open-source admin apps
- How the maintainer extracts a style: capture the real screens in two forms, have Claude write the rules from them, then review and fix them by hand. Screens that need a login are opened in a logged-in browser
  - Screenshots: for the overall impression, layout and density
  - Page contents: the actual color values, spacing and font sizes in use, and the visible copy verbatim. Screenshots alone would leave these values as guesses
  - The cost is more material to sift through when choosing which values actually define the company's feel
- Responsive support: the result must hold at desktop (1280px), tablet (768px) and mobile (375px), and look like the company at each width, not just stay unbroken (decided 2026-10-30). This takes three things:
  - The sample admin app is made responsive first, so a trial can tell whether Poi kept or broke it
  - SKILL.md tells Poi not to break the widths the app already supports, and to check the result at all three widths
  - Every product's reference screens are captured at 768px and 375px too, and the narrow layouts go into its rule document (e.g. X's icon-only navigation and bottom tab bar). This covers all products, Google Cloud console and github.com included, since they are the first picks for admin screens. The cost is about three times the capture work per product
  - Exception: Gmail and Slack at 375px. Their browser versions send phones to the app (Gmail falls back to an old basic interface, Slack shows only an app page), so there is no phone layout to capture. Their app screens are not captured either. At that width Poi only guarantees nothing breaks: the app keeps its own narrow layout, with the company's colors, type and wording (decided 2026-10-30)
- Dark mode: when the app already has a dark mode, Poi keeps it and makes it look like the company's dark theme. It does not add a dark mode to an app that has none (decided 2026-10-30). This takes three things, as with the widths:
  - The sample admin app gets a dark mode that follows the OS setting, so a trial can tell whether Poi kept or broke it
  - SKILL.md tells Poi not to drop the app's dark mode, to use the product's dark values where its document has them, and to check the result in both modes
  - Every product's reference screens are captured in its dark theme too, and the dark values go into its rule document. A product with no dark theme in the browser is written down as such
- After rewriting, Poi does not report which product it used for each screen or component. The result is visible by opening the screens, and a long explanation tends to go unread. For now; may be revisited

## Postponed

- Adjectives such as "make it cool". The idea is that the AI both finds reference sites and judges whether they fit the adjective. Not in the first version

## Not decided

- Package name on npm: `poi` is taken by an unrelated bundler (last updated 2022-06). Not needed as long as Poi ships only as a skill
