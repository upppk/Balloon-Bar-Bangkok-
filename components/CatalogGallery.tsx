"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { catalogCategories, priceRanges, type CatalogImage } from "@/data/catalog";
import { site } from "@/data/site";

// ธีมและโทนสีทั้งหมดที่มีในข้อมูล (จะขยายอัตโนมัติเมื่อเพิ่มหมวดหมู่ใหม่)
const themes = Array.from(new Set(catalogCategories.map((c) => c.theme)));
const colorTones = Array.from(new Set(catalogCategories.map((c) => c.colorTone)));

export default function CatalogGallery() {
  const [activeId, setActiveId] = useState(catalogCategories[0].id);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<CatalogImage | null>(null);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const clearFilters = () => {
    setSelectedThemes([]);
    setSelectedColors([]);
    setSelectedPriceRanges([]);
  };

  const visibleCategories = useMemo(
    () =>
      catalogCategories.filter(
        (c) =>
          (selectedThemes.length === 0 || selectedThemes.includes(c.theme)) &&
          (selectedColors.length === 0 || selectedColors.includes(c.colorTone))
      ),
    [selectedThemes, selectedColors]
  );

  const active =
    visibleCategories.find((c) => c.id === activeId) ?? visibleCategories[0] ?? catalogCategories[0];

  const filteredImages = useMemo(() => {
    if (!active) return [];
    if (selectedPriceRanges.length === 0) return active.images;
    return active.images.filter((img) => {
      if (img.price === undefined) return false;
      return selectedPriceRanges.some((rangeId) => {
        const range = priceRanges.find((r) => r.id === rangeId);
        return range && img.price! >= range.min && img.price! < range.max;
      });
    });
  }, [active, selectedPriceRanges]);

  const activeFilterCount = selectedThemes.length + selectedColors.length + selectedPriceRanges.length;

  return (
    <section className="relative py-16 sm:py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-red font-semibold text-sm mb-3">
            Catalog
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy text-balance">
            แคตตาล็อกเซ็ตลูกโป่ง
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-4">
            ตัวอย่างเซ็ตลูกโป่งจริงที่เคยจัดให้ลูกค้า พร้อมราคาโดยประมาณในรูป
            ใช้ตัวกรองด้านล่างเพื่อค้นหาธีม โทนสี และช่วงราคาที่ถูกใจ แล้วทักไลน์สั่งได้เลย
          </p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar filters */}
          <aside className="lg:sticky lg:top-24 lg:self-start bg-white rounded-3xl border-2 border-navy/10 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-bold text-navy text-lg">ตัวกรอง</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-red hover:text-red-dark font-medium underline"
                >
                  ล้างทั้งหมด
                </button>
              )}
            </div>

            <div className="mb-6">
              <p className="font-heading font-semibold text-sm text-navy mb-3">ธีม</p>
              <div className="flex flex-col gap-2">
                {themes.map((theme) => (
                  <label key={theme} className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedThemes.includes(theme)}
                      onChange={() => toggle(selectedThemes, setSelectedThemes, theme)}
                      className="accent-navy w-4 h-4"
                    />
                    {theme}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="font-heading font-semibold text-sm text-navy mb-3">โทนสี</p>
              <div className="flex flex-col gap-2">
                {colorTones.map((tone) => (
                  <label key={tone} className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(tone)}
                      onChange={() => toggle(selectedColors, setSelectedColors, tone)}
                      className="accent-navy w-4 h-4"
                    />
                    {tone}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading font-semibold text-sm text-navy mb-3">ช่วงราคา</p>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range.id)}
                      onChange={() => toggle(selectedPriceRanges, setSelectedPriceRanges, range.id)}
                      className="accent-navy w-4 h-4"
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Gallery */}
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              {visibleCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`rounded-full px-5 py-2.5 font-heading font-semibold text-sm transition-colors border-2 ${
                    active?.id === cat.id
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-navy border-navy/15 hover:border-navy/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {!active ? (
              <p className="text-center text-foreground/60 py-16">
                ไม่พบหมวดหมู่ที่ตรงกับตัวกรอง ลองปรับตัวกรองใหม่
              </p>
            ) : (
              <>
                <p className="text-foreground/70 mb-6">{active.description}</p>

                {filteredImages.length === 0 ? (
                  <p className="text-center text-foreground/60 py-16">
                    ไม่พบเซ็ตที่ตรงกับช่วงราคาที่เลือกในหมวดนี้ ลองปรับช่วงราคาดูครับ
                  </p>
                ) : (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
                    {filteredImages.map((img) => (
                      <button
                        key={img.src}
                        onClick={() => setLightbox(img)}
                        className="relative block w-full overflow-hidden rounded-2xl shadow-md break-inside-avoid group bg-white"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1400}
                          height={916}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        {img.price !== undefined && (
                          <span className="absolute bottom-3 right-3 rounded-full bg-navy/90 text-white text-xs font-heading font-bold px-3 py-1.5 shadow">
                            {img.price.toLocaleString("th-TH")}.-
                          </span>
                        )}
                        <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            <div className="text-center mt-14">
              <a
                href={site.line.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-red hover:bg-red-dark text-white font-heading font-bold px-8 py-3.5 shadow-md transition-colors"
              >
                ทักไลน์สั่งเซ็ตที่ถูกใจ
              </a>
            </div>
          </div>
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
          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1400}
              height={916}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
