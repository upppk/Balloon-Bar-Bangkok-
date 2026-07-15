import { site } from "@/data/site";

const contactItems = [
  {
    label: "ที่อยู่",
    value: `${site.address.line1}\n${site.address.line2}`,
    href: site.mapsLinkSrc,
  },
  { label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
  { label: "Line Official Account", value: site.line.handle, href: site.line.url },
  { label: "โทร", value: site.tel.join(" / "), href: `tel:${site.tel[0].replace(/-/g, "")}` },
  { label: "อีเมล", value: site.email, href: `mailto:${site.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-red font-semibold text-sm mb-3">
            Contact Us
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy text-balance">
            ติดต่อ Balloon Bar Bangkok
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl bg-white shadow-lg p-8 sm:p-10 flex flex-col justify-center gap-6">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 group"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-red shrink-0" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-foreground/50 font-medium">
                    {item.label}
                  </span>
                  <span className="block font-medium text-navy group-hover:text-red transition-colors whitespace-pre-line">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}

            <a
              href={site.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-red hover:bg-red-dark text-white font-heading font-bold px-8 py-3.5 shadow-md transition-colors w-fit"
            >
              ทักไลน์เพื่อสอบถาม / ขอใบเสนอราคา
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-80">
            <iframe
              title="แผนที่ Balloon Bar Bangkok"
              src={site.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={site.mapsLinkSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 rounded-full bg-white text-navy text-sm font-heading font-semibold px-4 py-2 shadow-md hover:bg-yellow transition-colors"
            >
              เปิดใน Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
