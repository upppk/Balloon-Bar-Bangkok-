import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoilBalloonsDisplay from "@/components/FoilBalloonsDisplay";

export const metadata: Metadata = {
  title: "ลูกโป่งฟลอย | Balloon Bar Bangkok",
  description: "ลูกโป่งฟลอยเกรดสูง หลากสีและทรง ลอยได้นาน ราคาเริ่ม 20 บาท สั่งออนไลน์ได้",
};

export default function FoilBalloonsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-navy py-14 sm:py-20 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Foil Balloons Collection
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white text-balance">
            ลูกโป่งฟลอย
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            ลูกโป่งฟลอยเกรดสูงจาก Balloon Bar Bangkok หลากสี ทรง และขนาด ลอยได้นานถึง 14 วัน
          </p>
        </div>
        <FoilBalloonsDisplay />
      </main>
      <Footer />
    </>
  );
}
