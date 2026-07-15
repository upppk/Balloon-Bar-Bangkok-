"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioCategories } from "@/data/portfolio";

export default function Portfolio() {
  const [activeId, setActiveId] = useState(portfolioCategories[0].id);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const active = portfolioCategories.find((c) => c.id === activeId) ?? portfolioCategories[0];

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-red font-semibold text-sm mb-3">
            Our Work
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy text-balance">
            ผลงานที่ผ่านมาของเรา
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`rounded-full px-5 py-2.5 font-heading font-semibold text-sm transition-colors border-2 ${
                activeId === cat.id
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy border-navy/15 hover:border-navy/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          {active.description}
        </p>

        <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
          {active.images.map((img) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img)}
              className="relative block w-full overflow-hidden rounded-2xl shadow-md break-inside-avoid group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-navy-dark/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="ปิด"
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative max-w-3xl max-h-[85vh] w-full aspect-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1000}
              height={1200}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
