import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/images/brand/logo.svg" alt="Balloon Bar Bangkok" className="w-10 h-10" />
          <div>
            <p className="font-heading font-bold text-white leading-none">Balloon Bar Bangkok</p>
            <p className="text-xs text-white/50 mt-1">{site.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
            Instagram
          </a>
          <a href={site.line.url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
            Line
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-yellow transition-colors">
            Email
          </a>
        </div>

        <p className="text-xs text-white/40 text-center sm:text-right">
          © {new Date().getFullYear()} Balloon Bar Bangkok. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
