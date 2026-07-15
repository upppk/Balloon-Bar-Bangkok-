import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGallery from "@/components/CatalogGallery";

export const metadata: Metadata = {
  title: "แคตตาล็อกเซ็ตลูกโป่ง | Balloon Bar Bangkok",
  description: "แคตตาล็อกเซ็ตลูกโป่งจริงจาก Balloon Bar Bangkok เลือกดูตามหมวดหมู่และธีม ทักไลน์เพื่อสั่งได้เลย",
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-navy py-14 sm:py-20 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Full Catalog
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white text-balance">
            แคตตาล็อกสินค้าทั้งหมด
          </h1>
        </div>
        <CatalogGallery />
      </main>
      <Footer />
    </>
  );
}
