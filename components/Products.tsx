import { signatureOfferings, specialCollections } from "@/data/products";

const cardAccents = ["bg-red", "bg-navy", "bg-yellow", "bg-pink"];

export default function Products() {
  return (
    <section id="products" className="relative py-20 sm:py-28 bg-navy">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Signature Offerings
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            สินค้าลูกโป่งซิกเนเจอร์ของเรา
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {signatureOfferings.map((item, i) => (
            <div
              key={item.name}
              className="rounded-3xl bg-cream p-6 shadow-lg flex flex-col"
            >
              <span
                className={`inline-block w-10 h-10 rounded-full ${cardAccents[i % cardAccents.length]} mb-4`}
                aria-hidden
              />
              <h3 className="font-heading font-bold text-xl text-navy mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-yellow font-semibold text-sm mb-3">
            Special Collections
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            คอลเลกชันพิเศษตามธีมและเทศกาล
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialCollections.map((item, i) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white/10 border border-white/15 p-6 flex flex-col backdrop-blur"
            >
              <span
                className={`inline-block w-10 h-10 rounded-full ${cardAccents[i % cardAccents.length]} mb-4`}
                aria-hidden
              />
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                {item.nameEn}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
