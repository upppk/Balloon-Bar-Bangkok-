"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/catalog", label: "Catalog" },
  { href: "/foil-balloons", label: "Foil Balloons" },
  { href: "/latex-balloons", label: "Latex Balloons" },
  { href: "/products", label: "Menu & Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b-4 border-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4 h-18 py-2">
        <Link href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/brand/logo.svg"
            alt="Balloon Bar Bangkok logo"
            className="h-12 w-12"
          />
          <span className="font-heading text-lg sm:text-xl text-navy font-bold leading-none">
            Balloon Bar
            <br />
            <span className="text-red">Bangkok</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 font-medium text-navy text-[15px] whitespace-nowrap">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-red transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.line.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:inline-flex items-center shrink-0 whitespace-nowrap rounded-full bg-red hover:bg-red-dark text-white font-heading font-semibold px-5 py-2.5 shadow-md transition-colors"
        >
          Chat on LINE
        </a>

        <button
          aria-label="เปิดเมนู"
          className="xl:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-cream border-t-2 border-navy/20 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3 font-medium text-navy">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-red text-white font-heading font-semibold px-5 py-2.5 shadow-md"
            >
              Chat on LINE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
