import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { LanguageSwitch } from "./language-switch";
import { Showcase } from "./showcase";

const REPO = "https://github.com/piro0919/poi";
const COMMANDS = ["claude plugin marketplace add piro0919/poi", "claude plugin install poi@poi"];

type PageProps = {
  params: Promise<{ locale: string }>;
};

/// 手本は Vercel のボタン。黒い塗りと、細い線の2種類だけ
function PrimaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      className="inline-flex h-11 items-center rounded-full bg-ink px-5 font-medium text-button text-bg transition hover:opacity-85"
      href={href}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      className="inline-flex h-11 items-center rounded-full border border-line bg-card px-5 font-medium text-button transition hover:border-muted"
      href={href}
    >
      {children}
    </a>
  );
}

/// 改行の位置を文言の側で決めた見出し。ブラウザ任せにすると語の途中で割れる。
/// 狭い画面では1行に収まらないので、固定せずに流す
/// 行のあいだの空白は英語だけ
function Lines({ lines, spaced }: { lines: string[]; spaced: boolean }) {
  return lines.map((line, index) => (
    <span className="sm:block" key={line}>
      {spaced && index > 0 && <span className="sm:hidden"> </span>}
      {line}
    </span>
  ));
}

/// ターミナルに貼る行。横に長いので、狭い画面では中で横に流す
function Command({ lines }: { lines: string[] }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-line bg-card px-4 py-3 text-left font-mono text-code leading-relaxed">
      <code>
        {lines.map((line) => (
          <span className="block" key={line}>
            <span className="select-none text-muted">$ </span>
            {line}
          </span>
        ))}
      </code>
    </pre>
  );
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const tagline = t.raw("hero.tagline") as string[];
  const lead = t.raw("hero.lead") as string[];
  const points = t.raw("hero.points") as string[];
  const features = t.raw("features") as { title: string; body: string }[];

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* 上の帯 */}
      <header className="flex h-16 items-center justify-between">
        <span className="font-logo text-logo">Poi</span>
        <div className="flex items-center gap-5">
          <LanguageSwitch />
          <a className="hidden text-muted text-sm transition hover:text-ink sm:inline" href={REPO}>
            GitHub
          </a>
        </div>
      </header>

      {/* 見出し。左に見出しと1行とボタン、右に書き換える前と後を切り替える絵 */}
      <section className="grid items-center gap-12 py-16 lg:grid-cols-hero lg:py-24">
        <div className="flex flex-col gap-7">
          {/* 日本語は「」で1行が長いので一回り小さく。6xl だと「Google」のあとで割れる */}
          <h1
            className={
              locale === "ja"
                ? "display text-4xl sm:text-5xl lg:text-display-ja"
                : "display text-5xl sm:text-6xl"
            }
          >
            <Lines lines={tagline} spaced={locale !== "ja"} />
          </h1>
          <p className="text-lead text-muted leading-relaxed">
            <Lines lines={lead} spaced={locale !== "ja"} />
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="#install">{t("hero.start")}</PrimaryButton>
            <SecondaryButton href={REPO}>GitHub</SecondaryButton>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-muted text-sm">
            {points.map((point) => (
              <li className="flex items-center gap-2" key={point}>
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <Showcase beforeLabel={t("showcase.before")} caption={t("showcase.caption")} />
      </section>

      {/* 何をするか。見出しは立てず、項目名と1行を3つ並べるだけ */}
      <section className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {features.map((feature) => (
          <div className="flex flex-col gap-2 bg-card p-6" key={feature.title}>
            <h2 className="font-medium text-feature">{feature.title}</h2>
            <p className="text-muted text-sm leading-relaxed">{feature.body}</p>
          </div>
        ))}
      </section>

      {/* 入れ方 */}
      <section
        className="flex scroll-mt-8 flex-col items-center gap-8 py-24 text-center"
        id="install"
      >
        <h2 className="display max-w-3xl text-balance text-4xl sm:text-5xl">
          {t("install.title")}
        </h2>
        <p className="max-w-xl text-lead text-muted leading-relaxed">{t("install.body")}</p>
        <div className="w-full max-w-xl">
          <Command lines={COMMANDS} />
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 border-line border-t py-10 text-muted text-sm sm:flex-row">
        <span className="font-logo">Poi</span>
        <div className="flex gap-6">
          <a className="transition hover:text-ink" href={REPO}>
            {t("footer.source")}
          </a>
          <a className="transition hover:text-ink" href="https://buymeacoffee.com/piro0919">
            Buy Me a Coffee
          </a>
        </div>
      </footer>
    </div>
  );
}
