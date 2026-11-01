# Poi

A skill for Claude Code that restyles the screens of your repository to feel
like a product people know. Say "make it Google-ish" and Poi rewrites them in
that product's style: color, spacing, shape, and the wording on buttons, errors
and empty states.

AI coding agents have only a rough idea of what "Google-like" means: a white
background and a blue button. Once you look at how buttons are worded, how
errors are written and how dense a list is, the result is clearly off. Poi
ships rules measured from the real screens, so the agent has more to go on than
a guess.

The name comes from the Japanese "っぽい" (-ppoi), meaning "-ish" or "looks
like", as in "Google-ppoi".

## Installing

```bash
claude plugin marketplace add piro0919/poi
claude plugin install poi@poi
```

## Using it

In Claude Code, inside your repository:

```
Make it Google-ish.
Make only the settings screen Slack-ish.
Gmail みたいな一覧にして
```

With no scope, Poi rewrites every screen, so it can look across all of them
before deciding which product each one should follow. Name a screen or a
component to limit it.

Poi picks the product per screen, and even per component, from what your app
does. A customer list can follow the Gmail inbox while the search box above it
follows Google Search.

## Supported companies

| Company | Products the rules were measured from |
| --- | --- |
| Google | Gmail, Google Search, Google Cloud console |
| Slack | The Slack app |
| GitHub | github.com: issue and pull request lists, repository settings |
| X | x.com |
| Amazon | amazon.co.jp: search results, item pages, the account hub, order history, address forms, the cart |

## What Poi changes, and what it leaves alone

- **It rewrites the code directly.** It does not stop at suggestions.
- **Behavior stays as it is.** Data fetching, saving and navigation are not
  touched. Poi may add state that lives entirely inside a screen, such as which
  row is selected or whether a menu is open, because a list cannot feel like
  Gmail without it.
- **Logos and names are never copied.** Only color, spacing, shape and wording
  carry over. The goal is to resemble the company, not to pass as it.
- **Your stack stays.** The rules are written as values (hex colors, pixel
  sizes, radii, example copy), and Claude Code applies them to whatever you
  use: Tailwind, CSS modules, plain CSS, a component library's theme.
- **Every width you support.** The result is checked at 1280, 768 and 375px
  wide, and each product's narrow layouts are part of its rules. Gmail and
  Slack send phones to their apps, so at 375px those two only promise that
  nothing breaks.
- **Dark mode, if you have one.** Poi keeps it and uses the product's dark
  values. It does not add a dark mode to an app that has none.
- **Icons and typefaces only when they are free to use.** Poi may add Material
  Symbols (Apache-2.0) for Google and Octicons (MIT) for GitHub. It loads
  Google Sans Flex, Mona Sans or Lato from Google Fonts. X and Amazon do not
  distribute their typefaces, so for an English UI Poi loads a free look-alike
  from Google Fonts instead (Public Sans for X, Figtree for Amazon), and their
  font files are never copied.

## How the rules are made

Each company has one document of company-wide rules (tone, how buttons and
errors are worded, base colors and type) and one per product (the shapes of its
screens and components). They live in [`skills/poi/styles/`](skills/poi/styles).

The maintainer captures the real screens in two forms, screenshots for layout
and density, and the page's computed styles and visible copy for the actual
values, then writes the rules from them and checks them by hand. Each document
ends with a list of what was measured, when, and what has not been captured
yet.

To see whether a change helps, Poi is run on a small sample admin app in
[`examples/sample-admin`](examples/sample-admin) and the result is compared side
by side with the real product.
