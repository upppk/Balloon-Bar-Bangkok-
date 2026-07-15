"use client";

import { useState } from "react";
import { foilBalloonProducts } from "@/data/foil-balloons";
import { site } from "@/data/site";

export default function FoilBalloonsDisplay() {
  const [selectedProduct, setSelectedProduct] = useState<typeof foilBalloonProducts[0] | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");

  const openColorSelector = (product: typeof foilBalloonProducts[0]) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0] || "");
  };

  const closeColorSelector = () => {
    setSelectedProduct(null);
    setSelectedColor("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-2">
          ลูกโป่งฟลอย Foil Balloons
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          ลูกโป่งฟลอยเกรดสูง ลอยได้นาน หลากสีและทรงให้เลือก ราคากันน้ำเหลา ทั้งปรึกษาได้ฟรี
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foilBalloonProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative w-full h-80 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-navy mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Color Selection Button */}
                <button
                  onClick={() => openColorSelector(product)}
                  className="w-full mb-4 px-4 py-3 bg-blue-100 hover:bg-blue-200 text-navy font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <span>🎨</span>
                  ดูสีทั้งหมด ({product.colors.length} สี)
                </button>

                {/* Pricing Table */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4 space-y-3">
                  {product.pricing.map((price, idx) => (
                    <div key={idx} className="pb-3 border-b border-blue-100 last:border-b-0 last:pb-0">
                      <p className="font-semibold text-navy text-sm mb-2">{price.size}</p>
                      <div className="space-y-1">
                        {price.airPrice > 0 && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-700">ลมธรรมดา (ไม่ลอย):</span>
                            <span className="font-semibold text-navy">{price.airPrice}.-</span>
                          </div>
                        )}
                        {price.heliumPrice > 0 && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-orange-600">Helium Gas (ลอย):</span>
                            <span className="font-semibold text-orange-600">{price.heliumPrice}.-</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Add-ons Section */}
                  {product.addOns && (
                    <div className="pt-3 border-t border-blue-200">
                      <p className="font-semibold text-navy text-sm mb-2">✏️ {product.addOns.title}</p>
                      <div className="space-y-1">
                        {product.addOns.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700">{item.name}:</span>
                            <span className="font-semibold text-navy">{item.price}.- / side</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={site.line.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  สอบถามและสั่งซื้อ
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-navy/5 to-blue-100/20 rounded-xl p-8 border border-navy/10">
          <h3 className="font-heading font-bold text-2xl text-navy mb-6 flex items-center gap-2">
            <span>💡</span> ข้อมูลเพิ่มเติม
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="font-semibold text-navy mb-2">🎈 เติมลมฮีเลียม (Helium)</p>
              <p className="text-sm">
                ราคาฮีเลียมเป็นราคาเพิ่มเติม ใช้สำหรับลูกโป่งที่ต้องการให้ลอยได้นาน โดยไม่รวมในราคาที่แสดง
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy mb-2">⏱️ ระยะเวลาลอย</p>
              <p className="text-sm">
                ระยะเวลาลอยขึ้นอยู่กับสภาพแวดล้อม อุณหภูมิ ความชื้น และคุณภาพของฮีเลียม
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy mb-2">✏️ เพิ่มข้อความหรือชื่อ</p>
              <p className="text-sm">
                สามารถพิมพ์ข้อความ หรือชื่อลงบนลูกโป่งได้ คิดค่าพิมพ์เพิ่มเติมตามจำนวนตัวอักษร
              </p>
            </div>
            <div>
              <p className="font-semibold text-navy mb-2">📦 การจัดส่ง</p>
              <p className="text-sm">
                สั่งได้ทุกวัน ใช้เวลา 1-3 วันในการเตรียม ส่งได้ทั่วประเทศ กรุงเทพและปริมณฑล ส่งวันเดียว
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-navy/10">
            <p className="text-sm text-gray-600">
              📞 <strong>ติดต่อสอบถาม:</strong> {" "}
              <a href={`tel:${site.tel[0]}`} className="text-orange-600 font-semibold hover:underline">
                {site.tel[0]}
              </a>
              {" / "}
              <a href={`tel:${site.tel[1]}`} className="text-orange-600 font-semibold hover:underline">
                {site.tel[1]}
              </a>
              {" | "}
              <a
                href={site.line.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold hover:underline"
              >
                Line: @Balloonbar_bkk
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Color Selector Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeColorSelector}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-navy text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="font-heading font-bold text-2xl">{selectedProduct.name}</h2>
                <p className="text-sm text-blue-100 mt-1">เลือกสีที่ต้องการ</p>
              </div>
              <button
                onClick={closeColorSelector}
                className="text-white hover:bg-navy-dark p-2 rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Featured Image with Selected Color */}
              <div className="mb-6 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4" style={{ height: '400px' }}>
                <img
                  src={
                    selectedProduct.colorImages?.[selectedColor] || selectedProduct.image
                  }
                  alt={`${selectedProduct.name} - ${selectedColor}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Color Grid */}
              <div className="mb-6">
                <p className="font-semibold text-navy mb-4">สีให้เลือก ({selectedProduct.colors.length} สี)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`p-3 rounded-lg font-medium transition-all text-sm ${
                        selectedColor === color
                          ? "bg-navy text-white ring-2 ring-navy ring-offset-2"
                          : "bg-gray-100 text-navy hover:bg-gray-200"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons Info in Modal */}
              {selectedProduct.addOns && (
                <div className="mb-4 bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-navy text-sm mb-2">✏️ {selectedProduct.addOns.title}</p>
                  <div className="space-y-1">
                    {selectedProduct.addOns.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">{item.name}:</span>
                        <span className="font-semibold text-navy">{item.price}.- / side</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={closeColorSelector}
                  className="flex-1 px-4 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  ยกเลิก
                </button>
                <a
                  href={site.line.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  สั่งสีนี้
                </a>
              </div>

              {/* Info */}
              <p className="text-xs text-gray-500 text-center mt-4">
                💬 ส่งข้อมูลรายละเอียด รูปภาพ และสีที่ต้องการไปทาง Line เพื่อสั่งซื้อ
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
