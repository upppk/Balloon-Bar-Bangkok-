import type { Metadata } from "next";
import { Baloo_2, Prompt } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Balloon Bar Bangkok | ลูกโป่ง ตกแต่งงานอีเวนต์พรีเมียม",
  description:
    "Balloon Bar Bangkok แบรนด์ลูกโป่งพรีเมียมสไตล์ Bangkok รับตกแต่งวันเกิด งานแต่งงาน เปิดตัวแบรนด์ อีเวนต์โรงเรียน และงานเฉลิมฉลองพิเศษ พร้อมบริการช่อของขวัญ ดอกไม้ และจัดส่งทั่วกรุงเทพฯ",
  keywords: [
    "Balloon Bar Bangkok",
    "ลูกโป่งกรุงเทพ",
    "รับจัดลูกโป่ง",
    "balloon garland bangkok",
    "balloon styling",
    "จัดงานวันเกิด",
  ],
  openGraph: {
    title: "Balloon Bar Bangkok",
    description: "More Than Balloons Float Into Something Special",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${baloo.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">{children}</body>
    </html>
  );
}
