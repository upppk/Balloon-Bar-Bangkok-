import { priceList, customQuoteServices, deliveryNote } from "@/data/pricing";
import { site } from "@/data/site";

function formatBaht(n: number) {
  return n.toLocaleString("th-TH");
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-navy">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Menu &amp; Pricing
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            เมนูและราคา
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            ราคาเริ่มต้นสำหรับลูกโป่งและของขวัญสำเร็จรูป ส่วนงานตกแต่งอีเวนต์และงานสั่งทำพิเศษ
            ราคาขึ้นอยู่กับขนาด ธีม และพื้นที่ ทักไลน์เพื่อขอใบเสนอราคาได้ฟรี
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {priceList.map((category) => (
            <div key={category.id} className="rounded-3xl bg-cream p-7 shadow-lg">
              <h3 className="font-heading font-bold text-xl text-navy mb-5 pb-3 border-b-2 border-navy/10">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-navy">{item.name}</p>
                      {item.note && (
                        <p className="text-xs text-foreground/60 mt-0.5">{item.note}</p>
                      )}
                    </div>
                    <p className="font-heading font-bold text-red whitespace-nowrap">
                      เริ่ม {formatBaht(item.price)}.-
                      {item.unit && (
                        <span className="text-xs font-normal text-foreground/60"> {item.unit}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">
            บริการจัดอีเวนต์ &amp; ตกแต่งสถานที่
          </h3>
          <p className="text-white/70">ราคาสั่งทำพิเศษตามความต้องการ — ทักไลน์เพื่อขอใบเสนอราคา</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {customQuoteServices.map((service) => (
            <div
              key={service.name}
              className="rounded-3xl bg-white/10 border border-white/15 p-6 flex items-center justify-between gap-4 backdrop-blur"
            >
              <div>
                <p className="font-heading font-bold text-white">{service.name}</p>
                <p className="text-sm text-white/70 mt-1">{service.description}</p>
                {service.startingPrice && (
                  <p className="text-yellow font-semibold text-sm mt-2">
                    เริ่มต้น {formatBaht(service.startingPrice)}.-
                  </p>
                )}
              </div>
              <a
                href={site.line.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-red hover:bg-red-dark text-white text-sm font-heading font-semibold px-5 py-2.5 transition-colors"
              >
                ขอใบเสนอราคา
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/50 text-xs mt-14 max-w-2xl mx-auto">
          {deliveryNote}
        </p>
      </div>
    </section>
  );
}
