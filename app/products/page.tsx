import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsDisplay from "@/components/ProductsDisplay";
import BalloonCareInfo from "@/components/BalloonCareInfo";

export const metadata: Metadata = {
  title: "เมนูลูกโป่ง | Balloon Bar Bangkok",
  description: "เมนูสินค้าลูกโป่งทั้งหมด ลูกโป่งยาง ลูกโป่งฟลอย ลูกโป่ง Cartoon และ Accessories ของ Balloon Bar Bangkok",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-navy py-14 sm:py-20 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Products
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white text-balance">
            เมนูและราคา
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            ราคาเริ่มต้นสำหรับลูกโป่งและของบริการต่างๆ สั่งวันนี้และเราจะจัดส่งให้คุณ
          </p>
        </div>
        <ProductsDisplay />
        <BalloonCareInfo />
      </main>
      <Footer />
    </>
  );
}
