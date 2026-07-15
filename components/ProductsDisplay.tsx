"use client";

import { productCategories } from "@/data/products";

export default function ProductsDisplay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-navy to-blue-700 px-6 py-6 text-white">
                <h2 className="font-heading font-bold text-2xl mb-2">
                  {category.name}
                </h2>
                <p className="text-sm text-blue-100">{category.nameEn}</p>
                <p className="text-sm text-blue-100 mt-2">{category.description}</p>
              </div>

              {/* Products List */}
              <div className="divide-y">
                {category.products.map((product, idx) => (
                  <div key={idx} className="px-6 py-5 hover:bg-blue-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy text-base">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">{product.nameEn}</p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="bg-gray-50 px-6 py-4">
                <a
                  href="https://lin.ee/6Q8QZ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  สอบถามและสั่งซื้อ
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 sm:p-8">
          <h3 className="font-heading font-bold text-2xl text-navy mb-4">
            ℹ️ ข้อมูลเพิ่มเติม
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold">•</span>
              <span>
                <strong>ราคาเป็นราคาเริ่มต้น</strong> - ราคาอาจเปลี่ยนแปลงตามตัวเลือกและจำนวน
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold">•</span>
              <span>
                <strong>เติมลมฮีเลียม</strong> - เพิ่มเงินสำหรับการเติมลมฮีเลียม (ไม่รวมในราคา)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold">•</span>
              <span>
                <strong>ปรึกษาแบบด้วยตัวเอง</strong> - โทร 096-663-2454 หรือ 099-263-6656 เพื่อปรึกษาแบบแผนการตกแต่งเฉพาะของคุณ
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 font-bold">•</span>
              <span>
                <strong>การส่งมอบ</strong> - ใช้เวลา 1-3 วัน ขึ้นอยู่กับจำนวนและความซับซ้อน
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
