import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-red font-semibold text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy text-balance">
            เราสร้างสรรค์ประสบการณ์งานเฉลิมฉลองแบบครบวงจร
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-4">
            ออกแบบและใส่ใจในทุกรายละเอียด ตั้งแต่ของขวัญชิ้นเล็กไปจนถึงการติดตั้งขนาดใหญ่
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border-2 border-navy/10 p-7 hover:border-red/40 hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
