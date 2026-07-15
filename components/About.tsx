import Image from "next/image";

const occasions = [
  "Birthdays",
  "Weddings",
  "Brand Launches",
  "Special Celebrations",
  "School Events",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-xl rotate-[-2deg]">
            <Image
              src="/images/portfolio/helium/06.jpg"
              alt="Balloon Bar Bangkok ตกแต่งงานฉลองวันเกิดสไตล์พรีเมียม"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-yellow border-4 border-cream shadow-lg flex items-center justify-center text-center font-heading font-bold text-navy-dark text-sm sm:text-base rotate-6 p-3">
            Premium Balloon Styling
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-red font-semibold text-sm mb-3">
            About Us
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-6 text-balance">
            Balloon Bar Bangkok คือแบรนด์ลูกโป่งสไตล์พรีเมียม
          </h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            เราคือทีมออกแบบและตกแต่งลูกโป่งระดับพรีเมียม เชี่ยวชาญงาน
            วันเกิด งานแต่งงาน เปิดตัวแบรนด์ งานเฉลิมฉลองพิเศษ และอีเวนต์โรงเรียน
            ไปไกลกว่าลูกโป่งทั่วไป เราสร้างสรรค์ประสบการณ์การตกแต่งครบวงจร
            ทั้งของตกแต่ง แบ็คดรอป และคอนเซปต์เฉพาะตัว
            เพื่อให้ทุกโมเมนต์ของคุณพิเศษและน่าจดจำ
          </p>
          <div className="flex flex-wrap gap-3">
            {occasions.map((item) => (
              <span
                key={item}
                className="rounded-full bg-navy/5 border border-navy/15 text-navy font-medium px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
