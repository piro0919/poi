import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const alt = "Poi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* ビルド時に焼く。動的なままだと assets/ が関数側に含まれず、本番で 500 になる */
export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale) => ({ locale }));
}

/* 出るのは kk-web の一覧で176px、X のカードで500px 前後。
   その大きさで残るのは名前と1行だけ。サイトと同じく白に近い地に黒い字 */
const BG = "#fafafa";
const INK = "#171717";
const MUTED = "#666666";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<ImageResponse> {
  const { locale } = await params;
  const isJa = locale === "ja";
  /* 使う文字だけに絞った書体を同梱している。文言を変えたら assets/README.md の手順で作り直す */
  const [geist, noto, righteous] = await Promise.all([
    readFile(join(process.cwd(), "assets/Geist-SemiBold-subset.woff")),
    readFile(join(process.cwd(), "assets/NotoSansJP-SemiBold-subset.woff")),
    readFile(join(process.cwd(), "assets/Righteous-subset.woff")),
  ]);

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: BG,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ color: INK, fontFamily: "Righteous", fontSize: 160 }}>Poi</div>
      <div style={{ color: MUTED, display: "flex", fontSize: 44, marginTop: 8 }}>
        {isJa ? "「Google っぽくして」と言うだけ。" : "Say “make it Google-ish.”"}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { data: geist, name: "Geist", style: "normal", weight: 600 },
        { data: noto, name: "Noto Sans JP", style: "normal", weight: 600 },
        { data: righteous, name: "Righteous", style: "normal", weight: 400 },
      ],
    },
  );
}
