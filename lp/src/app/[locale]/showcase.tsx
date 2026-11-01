"use client";

import Image from "next/image";
import { useState } from "react";

/// 見本の管理画面の、書き換える前と各社の後。画像は明暗の2枚ずつで、OS の設定に合わせて出し分ける
const SHOTS = ["before", "google", "slack", "github", "x", "amazon", "notion"] as const;

const LABELS: Record<(typeof SHOTS)[number], string> = {
  before: "",
  google: "Google",
  slack: "Slack",
  github: "GitHub",
  x: "X",
  amazon: "Amazon",
  notion: "Notion",
};

export function Showcase({ beforeLabel, caption }: { beforeLabel: string; caption: string }) {
  const [shot, setShot] = useState<(typeof SHOTS)[number]>("before");

  return (
    <figure className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-1.5" role="tablist">
        {SHOTS.map((one) => (
          <button
            aria-selected={shot === one}
            className={
              shot === one
                ? "h-8 rounded-full bg-ink px-3.5 font-medium text-bg text-sm"
                : "h-8 rounded-full border border-line bg-card px-3.5 font-medium text-muted text-sm transition hover:text-ink"
            }
            key={one}
            onClick={() => setShot(one)}
            role="tab"
            type="button"
          >
            {one === "before" ? beforeLabel : LABELS[one]}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl border border-line shadow-shot">
        <Image
          alt=""
          className="w-full dark:hidden"
          height={800}
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          src={`/shots/${shot}-light.png`}
          width={1280}
        />
        <Image
          alt=""
          className="hidden w-full dark:block"
          height={800}
          sizes="(min-width: 1024px) 55vw, 100vw"
          src={`/shots/${shot}-dark.png`}
          width={1280}
        />
      </div>
      <figcaption className="text-muted text-sm">{caption}</figcaption>
    </figure>
  );
}
