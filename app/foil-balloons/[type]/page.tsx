import type { Metadata } from "next";
import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoilBalloonsDisplay from "@/components/FoilBalloonsDisplay";
import { isValidFoilBalloonType, foilBalloonTypeNames } from "@/utils/foilBalloonCategories";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    type: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;

  if (!isValidFoilBalloonType(type)) {
    return {
      title: "Not Found | Balloon Bar Bangkok",
    };
  }

  const typeName = foilBalloonTypeNames[type];
  return {
    title: `${typeName} | Balloon Bar Bangkok`,
    description: `${typeName} เกรดสูง หลากสี ลอยได้นาน สั่งออนไลน์ได้`,
  };
}

export function generateStaticParams() {
  return [
    { type: "heart" },
    { type: "star" },
    { type: "round" },
    { type: "orbz" },
    { type: "cartoon" },
    { type: "number" },
  ];
}

export default function FoilBalloonTypePage({ params }: Props) {
  const { type } = use(params);

  if (!isValidFoilBalloonType(type)) {
    notFound();
  }

  const typeName = foilBalloonTypeNames[type];

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-navy py-14 sm:py-20 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            {typeName}
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white text-balance">
            {typeName}
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            ลูกโป่งฟลอยเกรดสูงจาก Balloon Bar Bangkok หลากสี ทรง และขนาด ลอยได้นานถึง 14 วัน
          </p>
        </div>
        <FoilBalloonsDisplay type={type} />
      </main>
      <Footer />
    </>
  );
}
