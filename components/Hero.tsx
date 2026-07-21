import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/helium/02.jpg"
          alt="งานตกแต่งลูกโป่งฮีเลียมทองแดงและขาว โดย Balloon Bar Bangkok"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
      </div>

      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        className="hidden sm:block absolute -left-6 top-16 w-[125px] md:w-[166px] opacity-90 animate-float pointer-events-none select-none hue-rotate-[0deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        className="hidden sm:block absolute right-2 top-32 w-[83px] md:w-[125px] opacity-80 animate-float-delay pointer-events-none select-none hue-rotate-[45deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        className="hidden md:block absolute left-1/4 bottom-10 w-[73px] opacity-70 animate-float-slow pointer-events-none select-none hue-rotate-[90deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        style={{ animationDelay: "1s" }}
        className="hidden sm:block absolute right-8 top-4 w-[78px] opacity-80 animate-float pointer-events-none select-none hue-rotate-[135deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        style={{ animationDelay: "0.5s" }}
        className="hidden md:block absolute right-[22%] bottom-6 w-[91px] opacity-75 animate-float-slow pointer-events-none select-none hue-rotate-[180deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        className="hidden lg:block absolute left-2 top-1/2 w-[65px] opacity-70 animate-float-delay pointer-events-none select-none hue-rotate-[225deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        style={{ animationDelay: "1.5s" }}
        className="hidden sm:block absolute left-4 bottom-4 w-[85px] opacity-80 animate-float pointer-events-none select-none hue-rotate-[270deg]"
      />
      <Image
        src="/images/brand/balloon-deco.png"
        alt=""
        aria-hidden
        width={140}
        height={256}
        className="hidden lg:block absolute right-[35%] top-6 w-[59px] opacity-70 animate-float-slow pointer-events-none select-none hue-rotate-[315deg]"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 text-center flex flex-col items-center">
        <Image
          src="/images/brand/logo.png"
          alt="Balloon Bar Bangkok"
          width={110}
          height={110}
          className="mb-6 drop-shadow-lg"
          priority
        />
        <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-4">
          Bangkok-based · Delivery &amp; Event Styling
        </p>
        <h1 className="font-heading font-extrabold text-white text-4xl sm:text-6xl leading-tight mb-4 text-balance">
          More Than Balloons
          <br />
          Float Into Something <span className="text-yellow">Special</span>
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mb-10 text-balance">
          {site.taglineTh} — รับออกแบบและตกแต่งลูกโป่งพรีเมียมสำหรับวันเกิด งานแต่งงาน
          เปิดตัวแบรนด์ อีเวนต์โรงเรียน และทุกวันสำคัญของคุณ
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="rounded-full bg-yellow hover:bg-yellow-dark text-navy-dark font-heading font-bold px-8 py-3.5 shadow-lg transition-colors"
          >
            ดูผลงานของเรา
          </a>
          <a
            href={site.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red hover:bg-red-dark text-white font-heading font-bold px-8 py-3.5 shadow-lg transition-colors"
          >
            ทักไลน์สอบถามราคา
          </a>
        </div>
      </div>

      <div className="relative h-10 sm:h-16 bg-cream [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
}
