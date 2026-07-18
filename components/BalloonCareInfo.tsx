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

  const sizePricing = [
    {
      sizeEn: '12" Latex Balloon',
      sizeTh: 'ลูกโป่งยาง ขนาด 12"',
      items: [
        { nameEn: "Plain Color", nameTh: "สีพื้น", priceEn: "55 THB / balloon", priceTh: "55 บาท/ลูก", image: "/images/products/size-pricing/12in_plain.png" },
        { nameEn: "Chrome Color", nameTh: "สีโครม", priceEn: "90 THB / balloon", priceTh: "90 บาท/ลูก", image: "/images/products/size-pricing/12in_chrome.png" },
        { nameEn: "Clear + Glitter", nameTh: "ลูกใสใส่กลิตเตอร์", priceEn: "105 THB / balloon", priceTh: "105 บาท/ลูก", image: "/images/products/size-pricing/12in_glitter.png" },
      ],
      notesEn: [
        "Chrome color may look different under white/yellow lighting",
        "Clear + Glitter balloons become cloudier over time",
        "Weight to keep balloon from floating away: +10 THB/balloon",
        "We don't recommend adding a message sticker — the balloon can't support the weight and may tear or curl",
      ],
      notesTh: [
        "สีของลูกโป่งอาจเปลี่ยนตามแสงไฟ โดยรอบ เช่น ไฟขาว/ไฟเหลือง",
        "เมื่อเวลาผ่านไปลูกโป่งใส+กลิตเตอร์จะขุ่นขึ้น",
        "หากต้องการถ่วงน้ำหนักแยกลูก ค่าบริการเพิ่ม 10 บาท/ลูก",
        "ไม่แนะนำให้ติดข้อความเนื่องจากลูกโป่งจะรับน้ำหนักไม่ไหว อาจทำให้ลูกโป่งเหี่ยวและตกเร็ว ข้อความที่เป็นสติกเกอร์จะเด่งขึ้นมา",
      ],
    },
    {
      sizeEn: '24" Latex & Orbz Balloon',
      sizeTh: 'ลูกโป่งยาง และ ลูกโป่งใส ขนาด 24"',
      items: [
        { nameEn: 'Bubble + 9 mini balloons inside (6")', nameTh: "บับเบิ้ล — ลูกโป่งใส ใส่ลูกโป่งเล็กด้านใน 9 ลูก", priceEn: "Plain 1,190 / Plain+Chrome 1,290 THB", priceTh: "สีพื้น 1,190 / สีพื้น+สีโครม 1,290 บาท", image: "/images/products/size-pricing/24in_bubble.png" },
        { nameEn: "Orbz + Glitter — clear w/ glitter inside", nameTh: "อควาใส่กลิตเตอร์ — ลูกโป่งใสใส่กลิตเตอร์", priceEn: "1,290 THB", priceTh: "1,290 บาท", image: "/images/products/size-pricing/24in_glitter-orbz.png" },
        { nameEn: "Orbz + Feather — clear w/ feathers inside", nameTh: "อควาใส่ขนนก — ลูกโป่งใสใส่ขนนก", priceEn: "1,490 THB", priceTh: "1,490 บาท", image: "/images/products/size-pricing/24in_feather-orbz.png" },
        { nameEn: "Plain Latex Balloon", nameTh: "ลูกโป่งสีพื้น — ลูกยางธรรมดา", priceEn: "Plain 1,090 / Chrome 1,290 THB", priceTh: "สีพื้น 1,090 / สีโครม 1,290 บาท", image: "/images/products/size-pricing/24in_plain-latex.png" },
        { nameEn: "Clear aqua balloon over Latex balloon (2 layers)", nameTh: "อควาซ้อนลูกยาง — ลูกยางซ้อนลูกใส 2 ชั้น", priceEn: "Plain 1,390 / Chrome 1,590 THB", priceTh: "ลูกยางสีพื้น 1,390 / ลูกยางสีโครม 1,590 บาท", image: "/images/products/size-pricing/24in_layered-orbz.png" },
        { nameEn: "Orbz + Glitter over latex balloon (2 layers, glitter between)", nameTh: "อควาซ้อนลูกยางใส่กลิตเตอร์ — ลูกโป่ง 2 ชั้น ใส่กลิตเตอร์ระหว่างชั้น", priceEn: "Plain 1,490 / Chrome 1,690 THB", priceTh: "ลูกยางสีพื้น 1,490 / ลูกยางสีโครม 1,690 บาท", image: "/images/products/size-pricing/24in_layered-glitter-orbz.png" },
        { nameEn: "Hand-Painted Acrylic — clear balloon, hand painted", nameTh: "อควาเพ้นสีอคริลิค — ลูกโป่งใสเพ้นสี", priceEn: "1,390 THB", priceTh: "1,390 บาท", image: "/images/products/size-pricing/24in_acrylic-paint.png" },
        { nameEn: "Gem Deco — clear balloon with gems", nameTh: "อควาติดเพชร — ลูกโป่งใสติดเพชร", priceEn: "1,390 THB", priceTh: "1,390 บาท", image: "/images/products/size-pricing/24in_gem-orbz.png" },
        { nameEn: "Plain Latex with Butterfly Decoration", nameTh: "ลูกยางสีพื้นติดผีเสื้อ — ลูกยางสีพื้น ติดลายผีเสื้อ", priceEn: '18" 1,390 / 24" 1,490 THB', priceTh: 'ขนาด 18" 1,390 / ขนาด 24" 1,490 บาท', image: "/images/products/size-pricing/24in_butterfly-latex.png" },
      ],
      notesEn: [],
      notesTh: [],
    },
    {
      sizeEn: '36" Latex & Orbz Balloon',
      sizeTh: 'ลูกโป่งยาง และ ลูกโป่งใส ขนาด 36"',
      items: [
        { nameEn: "Bubble — clear w/ 14-18 mini balloons inside", nameTh: "บับเบิ้ล — ลูกโป่งใส มีลูกโป่งเล็กด้านใน 14-18 ลูก", priceEn: "Plain 2,190 / Plain+Chrome 2,390 THB", priceTh: "สีพื้น 2,190 / สีพื้น+สีโครม 2,390 บาท", image: "/images/products/size-pricing/36in_bubble.png" },
        { nameEn: "Bubble + Glitter — clear w/ 14-18 mini balloons & glitter", nameTh: "บับเบิ้ล — ลูกโป่งใส มีลูกโป่งเล็กด้านใน 14-18 ลูกและกลิตเตอร์", priceEn: "Plain 2,290 / Plain+Chrome 2,490 THB", priceTh: "สีพื้น 2,290 / สีพื้น+สีโครม 2,490 บาท", image: "/images/products/size-pricing/36in_bubble-glitter.png" },
        { nameEn: "Orbz + Glitter — clear w/ glitter inside", nameTh: "อควาใส่กลิตเตอร์ — ลูกโป่งใสใส่กลิตเตอร์", priceEn: "1,790 THB", priceTh: "1,790 บาท", image: "/images/products/size-pricing/36in_glitter-orbz.png" },
        { nameEn: "Plain Latex Balloon", nameTh: "ลูกยางสีพื้น", priceEn: "1,690 THB", priceTh: "1,690 บาท", image: "/images/products/size-pricing/36in_plain-latex.png" },
        { nameEn: "Chrome Latex Balloon", nameTh: "ลูกโป่งยางสีโครม", priceEn: "1,890 THB", priceTh: "1,890 บาท", image: "/images/products/size-pricing/36in_chrome-latex.png" },
        { nameEn: "Plain Latex with Butterfly Decoration", nameTh: "ลูกยางสีพื้นติดผีเสื้อ — ลูกยางสีพื้น ติดลายผีเสื้อ", priceEn: "1,890 THB", priceTh: "1,890 บาท", image: "/images/products/size-pricing/36in_butterfly-latex.png" },
        { nameEn: "Orbz + Feather — clear w/ feathers inside", nameTh: "อควาใส่ขนนก — ลูกโป่งใสใส่ขนนก", priceEn: "2,090 THB", priceTh: "2,090 บาท", image: "/images/products/size-pricing/36in_feather-orbz.png" },
        { nameEn: "Orbz — clear balloon over latex balloon (2 layers)", nameTh: "อควาซ้อนลูกยาง — ลูกยางซ้อนลูกใส 2 ชั้น", priceEn: "Plain 1,990 / Chrome 2,190 THB", priceTh: "ลูกยางสีพื้น 1,990 / ลูกยางสีโครม 2,190 บาท", image: "/images/products/size-pricing/36in_layered-orbz.png" },
        { nameEn: "Orbz + Glitter over latex balloon (2 layers, glitter between)", nameTh: "อควาซ้อนลูกยางใส่กลิตเตอร์ — ลูกโป่ง 2 ชั้น ใส่กลิตเตอร์ระหว่างชั้น", priceEn: "Plain 2,090 / Chrome 2,390 THB", priceTh: "ลูกยางสีพื้น 2,090 / ลูกยางสีโครม 2,390 บาท", image: "/images/products/size-pricing/36in_layered-glitter-orbz.png" },
      ],
      notesEn: [],
      notesTh: [],
    },
  ];

  const size24And36Notes = {
    en: [
      "You can add up to 1-2 paper messages, or a ribbon + bow",
      "Lifespan: 1-3 days indoors (air-conditioned). Outdoors approx. 2-6 hours depending on temperature. Ideal temp: 24-27°C",
      "Message on 18\" and 24\" balloons: plain color message is free. Silver/Gold message costs 80 THB/side",
    ],
    th: [
      "สามารถใส่พู่กระดาษได้ 1-2 ชิ้น หรือเป็นริบบิ้นยาว และผูกโบว์",
      "อายุการใช้งาน 1-3 วัน ในห้องแอร์ กรณีใช้งาน Outdoor ลูกโป่งจะอยู่ได้ประมาณ 2-6 ชม. ขึ้นอยู่กับอุณหภูมิ อุณหภูมิที่เหมาะสม 24-27 องศา",
      "ข้อความบนลูกโป่งขนาด 18\" และ 24\": ข้อความสีพื้น ไม่มีค่าบริการ / ข้อความสีเงิน-สีทอง 80 บาท/ด้าน",
    ],
  };

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

        {/* Section 1.5: Balloon Sizes & Pricing */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-2">
            {language === "en" ? "Balloon Sizes & Pricing" : "ราคาลูกโป่งตามขนาด"}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {language === "en" ? "ราคาลูกโป่งตามขนาด" : "Balloon Sizes & Pricing"}
          </p>

          <div className="space-y-8">
            {sizePricing.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="bg-navy text-white px-6 py-3 font-semibold text-lg">
                  {language === "en" ? section.sizeEn : section.sizeTh}
                </div>
                <div className="divide-y">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img
                        src={item.image}
                        alt={language === "en" ? item.nameEn : item.nameTh}
                        className="w-14 h-14 rounded-full object-cover bg-blue-50 shrink-0"
                      />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 flex-1 min-w-0">
                        <span className="text-gray-800 font-medium">
                          {language === "en" ? item.nameEn : item.nameTh}
                        </span>
                        <span className="text-navy font-semibold sm:text-right sm:shrink-0">
                          {language === "en" ? item.priceEn : item.priceTh}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {(language === "en" ? section.notesEn : section.notesTh).length > 0 && (
                  <ul className="px-6 py-4 bg-blue-50 space-y-1">
                    {(language === "en" ? section.notesEn : section.notesTh).map((note, noteIdx) => (
                      <li key={noteIdx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-navy">**</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <ul className="mt-4 px-4 py-3 bg-orange-100 text-orange-800 rounded-lg space-y-1">
            {(language === "en" ? size24And36Notes.en : size24And36Notes.th).map((note, idx) => (
              <li key={idx} className="text-sm flex items-start gap-2">
                <span>💡</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
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
