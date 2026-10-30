import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acme CRM",
  description: "Sample admin app for checking Poi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full bg-gray-50 text-gray-900">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
