# Poi

A skill for Claude Code and Cursor that restyles the UI of the repository you are working in to feel like a well-known product.
You say "make it Google-ish" or "make it Slack-ish", and Poi rewrites the screens in that product's style.

The name comes from the Japanese "っぽい" (-ppoi), meaning "-ish" or "looks like", as in "Google-ppoi".

Nothing is built yet. This file records what was agreed in a brainstorming session on 2026-10-30.

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
- First version: company names only. Start with Google, Slack and GitHub; in general, large tech companies
- Target users: teams building B2B SaaS, especially those without (or with few) designers
- Which product to imitate is decided by the AI from what the service in the repository does. It may differ per screen or per component, e.g. a list that looks like Gmail and a search box that looks like Google Search
- The goal is to resemble the company, not to become it
- Distributed as a skill for Claude Code / Cursor

## Postponed

- Adjectives such as "make it cool". The idea is that the AI both finds reference sites and judges whether they fit the adjective. Not in the first version

## Not decided

- Do not copy logos or company names; transfer only color, spacing and wording. Proposed so the tool cannot be used to build phishing look-alikes
- Touch only appearance and copy; never change behavior or logic. Proposed so users can let it rewrite code with confidence
- Package name on npm: `poi` is taken by an unrelated bundler (last updated 2022-06). Not needed as long as Poi ships only as a skill
