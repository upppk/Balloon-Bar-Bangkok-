"use client";

import { useState } from "react";
import DeliveryCarAnimation from "./DeliveryCarAnimation";

export default function BalloonCareInfo() {
  const [language, setLanguage] = useState<"en" | "th">("en");

  const careTips = [
    {
      icon: "☀️",
      titleEn: "Keep Away from Sunlight & Heat",
      titleTh: "เก็บให้ห่างจากแสงแดดและสถานที่อบอ้าน",
      descriptionEn: "Store balloons in an air-conditioned room. Avoid direct sunlight and warm areas to maintain quality.",
      descriptionTh: "ควรเก็บลูกโป่งในห้องปรับอากาศ หลีกเลี่ยงแสงแดดโดยตรงและสถานที่ร้อนเพื่อรักษาคุณภาพ",
    },
    {
      icon: "🌡️",
      titleEn: "Temperature Control",
      titleTh: "ควบคุมอุณหภูมิ",
      descriptionEn: "Helium expands in warm temperatures. Rapid temperature changes can cause balloons to burst.",
      descriptionTh: "ฮีเลียมขยายตัวเมื่ออุณหภูมิสูง และอาจระเบิดได้หากอุณหภูมิเปลี่ยนแปลงอย่างรวดเร็ว",
    },
    {
      icon: "✋",
      titleEn: "Handle with Care",
      titleTh: "จัดการด้วยความเอื่อมลม",
      descriptionEn: "Balloons are delicate. Handle them gently to avoid accidental damage or deflation.",
      descriptionTh: "ลูกโป่งเป็นวัตถุที่อ่อนไหว จัดการให้เบาเพื่อหลีกเลี่ยงความเสียหายหรือการสูญเสียลม",
    },
    {
      icon: "✂️",
      titleEn: "Avoid Sharp Objects",
      titleTh: "หลีกเลี่ยงวัตถุมีคม",
      descriptionEn: "Keep balloons away from sharp objects, scissors, pins, and pointed items that may burst them.",
      descriptionTh: "เก็บลูกโป่งให้ห่างจากวัตถุมีคม กรรไกร เข็ม และสิ่งของที่มีปลายแหลมที่อาจทำให้ระเบิด",
    },
    {
      icon: "🎈",
      titleEn: "Arrange Upon Arrival",
      titleTh: "จัดเรียงเมื่อมาถึง",
      descriptionEn: "When balloons arrive, hold one bouquet in each hand to prevent them from tangling together.",
      descriptionTh: "เมื่อลูกโป่งมาถึง ให้จับกำเนิดหนึ่งในแต่ละมือเพื่อหลีกเลี่ยงการพันกัน",
    },
    {
      icon: "🪟",
      titleEn: "Avoid Windows & Breezy Areas",
      titleTh: "หลีกเลี่ยงหน้าต่างและบริเวณที่มีลม",
      descriptionEn: "Keep away from open windows, doors, and breezy areas to prevent balloons from being blown into sharp objects.",
      descriptionTh: "เก็บให้ห่างจากหน้าต่าง ประตู และบริเวณที่มีลมเพื่อหลีกเลี่ยงการชนกับวัตถุมีคม",
    },
  ];

  const orderingTips = [
    {
      icon: "✓",
      titleEn: "100% Pure Helium",
      titleTh: "ฮีเลียมบริสุทธิ์ 100%",
      descriptionEn: "Our balloons are filled with 100% pure helium gas, which is safe and non-flammable.",
      descriptionTh: "ลูกโป่งของเราใช้ฮีเลียมบริสุทธิ์ 100% ซึ่งปลอดภัยและไม่ติดไฟ",
    },
    {
      icon: "⏰",
      titleEn: "Lifespan Varies",
      titleTh: "ระยะเวลาลอยแตกต่างกัน",
      descriptionEn: "Balloon lifespan depends on type and conditions. For best photos, pick up 1-2 hours before your event.",
      descriptionTh: "ระยะเวลาลอยของลูกโป่งขึ้นอยู่กับชนิดและสภาพแวดล้อม ขอแนะนำให้รับ 1-2 ชั่วโมงก่อนงาน",
    },
    {
      icon: "❄️",
      titleEn: "Foil Balloon Care",
      titleTh: "ดูแลลูกโป่งฟลอย",
      descriptionEn: "Foil balloons may shrink in cold weather and burst in extreme heat. Keep in air-conditioned rooms away from direct sunlight.",
      descriptionTh: "ลูกโป่งฟลอยอาจหดตัวในอากาศหนาว และอาจระเบิดในความร้อนสูง ควรเก็บในห้องปรับอากาศหรือสถานที่ร่มเงา",
    },
    {
      icon: "🧪",
      titleEn: "Quality Tested",
      titleTh: "ทดสอบคุณภาพแล้ว",
      descriptionEn: "All balloons are inflated and leak-tested 30-60 minutes before delivery.",
      descriptionTh: "ลูกโป่งทั้งหมดจะถูกเติมลมและทดสอบรั่วให้ 30-60 นาทีก่อนการส่งสินค้า",
    },
  ];

  const lifeSpans = [
    { categoryEn: "LATEX BALLOON", categoryTh: "ลูกโป่งยาง", items: [
      { typeEn: '6" Latex', typeTh: '6" ยาง', span: "1-2 Hours" },
      { typeEn: '12" Plain Latex', typeTh: '12" ยาง', span: "12-16 Hours" },
      { typeEn: '12" Clear + Glitter', typeTh: '12" โปร่ง + กลิตเตอร์', span: "6-12 Hours" },
      { typeEn: '24" Plain Latex', typeTh: '24" ยาง', span: "2-5 Days" },
      { typeEn: '24" Clear + Glitter', typeTh: '24" โปร่ง + กลิตเตอร์', span: "2-5 Days" },
      { typeEn: '36" Plain Latex', typeTh: '36" ยาง', span: "3-6 Days" },
      { typeEn: '36" Marble', typeTh: '36" ลายหินอ่อน', span: "1-3 Days" },
      { typeEn: '36" Bomb Balloon', typeTh: '36" บอมบ์บอลลูน', span: "1-3 Days" },
    ]},
    { categoryEn: "FOIL BALLOON", categoryTh: "ลูกโป่งฟลอย", items: [
      { typeEn: '18" Foil', typeTh: '18" ฟลอย', span: "2-5 Days" },
      { typeEn: '24" Foil', typeTh: '24" ฟลอย', span: "3-6 Days" },
      { typeEn: '36" Foil', typeTh: '36" ฟลอย', span: "4-7 Days" },
      { typeEn: '40" Foil', typeTh: '40" ฟลอย', span: "5-14 Days" },
      { typeEn: 'Air-Walker Foil', typeTh: 'Air-Walker ฟลอย', span: "4-7 Days" },
    ]},
    { categoryEn: "BUBBLE & ORB BALLOONS", categoryTh: "บับเบิล และออร์บ", items: [
      { typeEn: 'Bubble 24"', typeTh: 'บับเบิล 24"', span: "5-9 Days" },
      { typeEn: 'Orbz 22"', typeTh: 'ออร์บ 22"', span: "5-14 Days" },
      { typeEn: 'Orbz 32"', typeTh: 'ออร์บ 32"', span: "1-2 Weeks" },
      { typeEn: '4D 24"', typeTh: '4D 24"', span: "4-10 Days" },
      { typeEn: '4D 32"', typeTh: '4D 32"', span: "5-12 Weeks" },
    ]},
  ];

  const warningItems = [
    {
      textEn: "We are fully responsible for any balloon leakage or damage during production or delivery.",
      textTh: "เรารับผิดชอบสำหรับการรั่วไหลหรือความเสียหายของลูกโป่งระหว่างการผลิตหรือส่งสินค้า",
    },
    {
      textEn: "Please verify all items when received to ensure everything is complete and in good condition.",
      textTh: "โปรดตรวจสอบสินค้าเมื่อรับเพื่อให้แน่ใจว่าครบถ้วนและในสภาพดี",
    },
    {
      textEn: "We cannot take responsibility for any damage that occurs AFTER delivery confirmation with photo.",
      textTh: "เราไม่สามารถรับผิดชอบสำหรับความเสียหายที่เกิดขึ้นหลังจากการยืนยันการส่งสินค้าด้วยรูปถ่าย",
    },
    {
      textEn: "If someone else receives your delivery, please check the product with them upon arrival.",
      textTh: "หากบุคคลอื่นรับสินค้าของคุณ โปรดตรวจสอบสินค้ากับพวกเขาเมื่อมาถึง",
    },
    {
      textEn: "Balloons cannot be reused or reinflated once filled and have a limited lifespan.",
      textTh: "ลูกโป่งไม่สามารถนำกลับมาใช้หรือเติมลมใหม่ได้เมื่อเติมลมแล้ว และมีระยะเวลาลอยที่จำกัด",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setLanguage("en")}
            className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
              language === "en"
                ? "bg-navy text-white"
                : "bg-gray-200 text-navy hover:bg-gray-300"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("th")}
            className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
              language === "th"
                ? "bg-navy text-white"
                : "bg-gray-200 text-navy hover:bg-gray-300"
            }`}
          >
            ไทย
          </button>
        </div>

        {/* Section 1: Care Tips */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-2">
            {language === "en" ? "Balloons Info & Care Tips" : "ข้อมูลและการดูแลลูกโป่ง"}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {language === "en" ? "ข้อมูลและการดูแลลูกโป่ง" : "Balloons Info & Care Tips"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {language === "en" ? tip.titleEn : tip.titleTh}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "en" ? tip.descriptionEn : tip.descriptionTh}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Ordering Tips */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8 sm:p-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-2">
            {language === "en" ? "Tips for Ordering Balloons" : "ข้อแนะนำในการสั่งลูกโป่ง"}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {language === "en" ? "ข้อแนะนำในการสั่งลูกโป่ง" : "Tips for Ordering Balloons"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orderingTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{tip.icon}</div>
                  <div>
                    <h3 className="font-semibold text-navy text-base mb-2">
                      {language === "en" ? tip.titleEn : tip.titleTh}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === "en" ? tip.descriptionEn : tip.descriptionTh}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Balloon Life Spans */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-2">
            {language === "en" ? "Balloon Life Spans" : "อายุการใช้งานของลูกโป่งชนิดต่างๆ (ในห้องแอร์)"}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {language === "en" ? "อายุการใช้งานของลูกโป่งชนิดต่างๆ (ในห้องแอร์)" : "Balloon Life Spans"}
          </p>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            {lifeSpans.map((section, idx) => (
              <div key={idx} className={idx !== 0 ? "border-t" : ""}>
                <div className="bg-navy text-white px-6 py-3 font-semibold text-lg flex items-center gap-4">
                  <span>{language === "en" ? section.categoryEn : section.categoryTh}</span>
                  {idx === 0 && (
                    <div className="ml-auto">
                      <img
                        src="/images/latex-balloon-12-blue.png"
                        alt="12 inch latex balloon example"
                        className="h-24 w-auto"
                      />
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="ml-auto">
                      <img
                        src="/images/foil-balloon-heart-pink.png"
                        alt="Pink heart foil balloon example"
                        className="h-24 w-auto"
                      />
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="ml-auto flex items-center gap-3">
                      <img
                        src="/images/bubble-balloon-clear.png"
                        alt="Clear bubble balloon example"
                        className="h-24 w-auto"
                      />
                      <img
                        src="/images/orbz-balloon-silver.png"
                        alt="Silver orbz balloon example"
                        className="h-24 w-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="divide-y">
                  {section.items.map((item, itemIdx) => {
                    const displaySpan = language === "en"
                      ? item.span
                      : item.span
                          .replace(/Hours/g, "ชม.")
                          .replace(/Days/g, "วัน");
                    return (
                      <div key={itemIdx} className="flex justify-between items-center px-6 py-3 hover:bg-gray-50">
                        <span className="text-gray-800 font-medium">
                          {language === "en" ? item.typeEn : item.typeTh}
                        </span>
                        <span className="text-navy font-semibold">{displaySpan}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-4 px-4 py-3 bg-orange-100 text-orange-800 rounded-lg">
            {language === "en"
              ? "💡 Lifespan depends on storage conditions. For best results, keep balloons in air-conditioned rooms, avoid sharp objects, heat, direct sunlight, and sudden temperature changes."
              : "💡 ระยะเวลาลอยขึ้นอยู่กับสภาพการเก็บ เพื่อผลลัพธ์ที่ดีที่สุด ให้เก็บลูกโป่งในห้องปรับอากาศ หลีกเลี่ยงวัตถุมีคม ความร้อน แสงแดดโดยตรง และการเปลี่ยนแปลงอุณหภูมิอย่างรวดเร็ว"
            }
          </p>
        </div>

        {/* Section 4: Important Policy */}
        <div className="bg-red-50 rounded-xl p-8 sm:p-10 border-l-4 border-red-500">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
                {language === "en" ? "Product Claim & Damage Responsibility" : "การรับผิดชอบในการเรียกร้องสินค้า"}
              </h2>

              <ul className="space-y-4 mb-6">
                {warningItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg mt-1">•</span>
                    <span className="text-gray-800">
                      {language === "en" ? item.textEn : item.textTh}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-4 rounded border border-red-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-red-600">
                    {language === "en" ? "Important:" : "สำคัญ:"}
                  </strong>{" "}
                  {language === "en"
                    ? "We use an external delivery service. After delivery completion, we receive a photo confirmation. We are happy to take responsibility for any damage during preparation or delivery, but cannot take responsibility for damage that occurs after delivery confirmation in every case."
                    : "เราใช้บริการจัดส่งจากบุคคลที่สาม หลังจากสิ้นสุดการส่งสินค้า เราจะได้รับการยืนยันด้วยรูปถ่าย เรายินดีรับผิดชอบสำหรับความเสียหายระหว่างการเตรียมหรือส่งสินค้า แต่ไม่สามารถรับผิดชอบสำหรับความเสียหายที่เกิดขึ้นหลังจากการยืนยันการส่งสินค้า"}
                  </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <DeliveryCarAnimation />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-4">
            {language === "en" ? "Questions about balloon care or ordering?" : "มีคำถามเกี่ยวกับการดูแลหรือสั่งลูกโป่ง?"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0966632454"
              className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              📞 {language === "en" ? "Call:" : "โทร:"} 096-663-2454
            </a>
            <a
              href="https://lin.ee/6Q8QZ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              💬 Line: @Balloonbar_bkk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
