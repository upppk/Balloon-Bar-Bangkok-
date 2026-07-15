import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LatexBalloonsDisplay from "@/components/LatexBalloonsDisplay";

export const metadata: Metadata = {
  title: "ลูกโป่งยาง | Balloon Bar Bangkok",
  description: "ลูกโป่งยางคุณภาพดี หลากสี ราคาประหยัด สั่งออนไลน์ได้",
};

export default function LatexBalloonsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-navy py-14 sm:py-20 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Latex Balloons Collection
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white text-balance">
            ลูกโป่งยาง
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            ลูกโป่งยางคุณภาพดีจาก Balloon Bar Bangkok หลากสีสัน ราคาประหยัดเหมาะสำหรับปาร์ตี้และงานเลี้ยง
          </p>
        </div>
        <LatexBalloonsDisplay />
      </main>
      <Footer />
    </>
  );
}
