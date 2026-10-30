# sample-admin

A small B2B SaaS admin app ("Acme CRM") used to check how well Poi's styles work.
It is deliberately left in the plain look and wording an AI agent produces when given no direction.

Screens: customer list with search, customer detail, invoice table, settings.
The screens work at 1280px, 768px and 375px wide, and switch to dark colors when the OS is set to dark mode.

```sh
pnpm install
pnpm dev
```

To check a style, run Poi on this app (for example "make it Google-ish") and compare the result side by side with the real product's screens.
