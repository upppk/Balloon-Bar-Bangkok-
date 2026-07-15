// ⚠️ ราคาด้านล่างเป็น "ราคาเริ่มต้นตัวอย่าง" (placeholder) เท่านั้น
// เนื่องจาก company profile ที่ให้มาไม่มีราคาระบุไว้
// กรุณาแก้ไขตัวเลขในไฟล์นี้ให้ตรงกับราคาจริงของร้านก่อนเปิดเว็บไซต์ใช้งานจริง

export type PriceItem = {
  name: string;
  price: number;
  unit?: string;
  note?: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};

export const priceList: PriceCategory[] = [
  {
    id: "balloons",
    title: "ลูกโป่ง & ช่อลูกโป่ง",
    items: [
      { name: "Latex Balloon Bundle", price: 110, unit: "/ ช่อ", note: "เลือกสีและจำนวนได้" },
      { name: "Clear Bubble Balloon", price: 1190, unit: "/ ลูก", note: "ใส่คอนเฟตติหรือของตกแต่งได้" },
      { name: "Premium Foil Balloon", price: 170, unit: "/ ลูก" },
      { name: "Themed Balloon Bundle", price: 1200, unit: "/ ชุด", note: "จับคู่ธีมหรือโทนสีตามต้องการ" },
    ],
  },
  {
    id: "special-collections",
    title: "Special Collections",
    items: [
      { name: "Personalized Text Design", price: 150, unit: "/ ลูก", note: "แอดออนจากช่อลูกโป่งหลัก" },
      { name: "Surprise Photo Balloon", price: 990, unit: "/ ลูก" },
      { name: "Gems Balloon Collection", price: 1500, unit: "/ ช่อ" },
      { name: "Jelly Bear Collection", price: 1200, unit: "/ ช่อ" },
      { name: "Magic Gems Collection", price: 1500, unit: "/ ช่อ" },
    ],
  },
  {
    id: "gifting",
    title: "ของขวัญ & ดอกไม้",
    items: [
      { name: "Flower Bouquet & Floral Pairing", price: 890, unit: "/ ช่อ" },
      { name: "Creative Gift Set", price: 990, unit: "/ เซ็ต", note: "ปรับแต่งตามธีมหรือโอกาส" },
    ],
  },
];

export type QuoteService = {
  name: string;
  description: string;
  startingPrice?: number;
};

export const customQuoteServices: QuoteService[] = [
  {
    name: "Balloon Garland & Backdrop",
    description: "แบ็คดรอปลูกโป่งสั่งทำตามธีมและขนาดพื้นที่ของงาน",
    startingPrice: 3500,
  },
  {
    name: "Balloon Art Installation",
    description: "งานประติมากรรมลูกโป่งสั่งทำพิเศษสำหรับอีเวนต์และแบรนด์",
    startingPrice: 8000,
  },
  {
    name: "Event Decoration & Planner",
    description: "ตกแต่งงานครบวงจร วันเกิด งานแต่งงาน อีเวนต์คอร์ปอเรต",
    startingPrice: 5000,
  },
  {
    name: "Booths & Styling Installation",
    description: "ออกแบบและติดตั้งบูธหรือสถานที่จัดงานแบบกำหนดเอง",
    startingPrice: 6000,
  },
];

export const deliveryNote =
  "จัดส่งแบบด่วนในวันเดียวกันหรือแบบนัดหมายล่วงหน้าทั่วกรุงเทพฯ ผ่าน Grab และ Lalamove ค่าจัดส่งคิดตามอัตราจริงของแอปพลิเคชัน ณ วันที่จัดส่ง";
