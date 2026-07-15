export type CatalogImage = {
  src: string;
  alt: string;
  price?: number; // ราคารวม (THB) — ดึงจากตัวเลข TOTAL ในรูป ถ้ายังไม่ได้ระบุ จะไม่ถูกกรองด้วยตัวกรองราคา
};

export type CatalogCategory = {
  id: string;
  label: string;
  description: string;
  theme: string; // ใช้สำหรับตัวกรอง "ธีม"
  colorTone: string; // ใช้สำหรับตัวกรอง "โทนสี"
  images: CatalogImage[];
};

// ราคาที่สำรวจแล้วจากรูปจริงในโฟลเดอร์ Baby Blue (รูปที่ยังไม่มีราคาระบุ จะไม่ถูกซ่อนเมื่อกรองราคา)
const babyBluePrices: Record<number, number> = {
  1: 2115, 2: 4240, 3: 2775, 4: 4270, 5: 2390, 6: 2290, 7: 1960, 8: 1940,
  9: 2010, 10: 3480, 11: 2760, 12: 2145, 13: 1975, 14: 2490, 15: 2545,
  16: 3120, 17: 935, 18: 3260, 19: 3280, 20: 1830, 21: 1650, 22: 2480,
  23: 1585, 24: 5130, 25: 2070, 26: 2510, 27: 5220, 28: 2115, 29: 2510,
  30: 2970, 31: 3890, 32: 2800, 33: 2100, 34: 2515, 35: 3475, 36: 2615,
  37: 2235, 38: 2650,
};

// ราคาที่สำรวจแล้วจากรูปจริงในโฟลเดอร์ Baby Pink (รูปที่ยังไม่มีราคาระบุ จะไม่ถูกซ่อนเมื่อกรองราคา)
const babyPinkPrices: Record<number, number> = {
  1: 2565, 2: 1275, 3: 2120, 4: 1535, 5: 2880, 6: 2380, 7: 2350, 8: 2540,
  9: 1900, 10: 3290, 11: 3920, 12: 1560, 13: 1755, 14: 2800, 15: 3480,
  16: 3435, 17: 6165, 18: 1755, 19: 2740, 20: 2135, 21: 1450, 22: 4035,
  23: 2805, 24: 4080, 25: 2565, 26: 2800, 27: 2450, 28: 3270, 29: 2465,
  30: 4950, 31: 2120, 32: 4215, 33: 2070, 34: 2150, 35: 2580, 36: 1275,
  37: 1410, 38: 2715, 39: 3140, 40: 3800, 41: 1790, 42: 1575, 43: 2050,
};

// ราคาที่สำรวจแล้วจากรูปจริงในโฟลเดอร์ Blue Navy (ครบทั้ง 137 รูป)
const blueNavyPrices: Record<number, number> = {
  1: 1690, 2: 3130, 3: 1755, 4: 1380, 5: 2480, 6: 2890, 7: 4210, 8: 3815,
  9: 2050, 10: 1345, 11: 880, 12: 1275, 13: 3730, 14: 2435, 15: 2590,
  16: 275, 17: 330, 18: 1775, 19: 1370, 20: 1940, 21: 3630, 22: 2275,
  23: 2630, 24: 1115, 25: 1040, 26: 1520, 27: 1775, 28: 1845, 29: 2340,
  30: 4960, 31: 1575, 32: 2180, 33: 3360, 34: 7700, 35: 1940, 36: 1345,
  37: 1810, 38: 2720, 39: 1430, 40: 1940, 41: 3580, 42: 2520, 43: 4630,
  44: 2780, 45: 1590, 46: 2200, 47: 2290, 48: 2760, 49: 2520, 50: 2520,
  51: 1855, 52: 2520, 53: 3340, 54: 3405, 55: 3450, 56: 2520, 57: 2100,
  58: 2460, 59: 2790, 60: 3090, 61: 2100, 62: 3130, 63: 3060, 64: 3780,
  65: 1925, 66: 1995, 67: 2220, 68: 1910, 69: 2190, 70: 2145, 71: 2645,
  72: 2790, 73: 2120, 74: 2950, 75: 2145, 76: 1345, 77: 2140, 78: 4080,
  79: 1835, 80: 940, 81: 1650, 82: 3720, 83: 3470, 84: 1950, 85: 535,
  86: 4010, 87: 1300, 88: 3085, 89: 1910, 90: 945, 91: 1095, 92: 1525,
  93: 2990, 94: 1575, 95: 2990, 96: 3010, 97: 875, 98: 1590, 99: 1950,
  100: 2900, 101: 1590, 102: 900, 103: 2335, 104: 5230, 105: 3075,
  106: 1275, 107: 4800, 108: 2460, 109: 4920, 110: 1910, 111: 2900,
  112: 2180, 113: 1910, 114: 2670, 115: 1530, 116: 1910, 117: 1820,
  118: 880, 119: 5430, 120: 1200, 121: 285, 122: 1745, 123: 1560,
  124: 3580, 125: 800, 126: 2060, 127: 2730, 128: 2140, 129: 2160,
  130: 2460, 131: 2010, 132: 3460, 133: 2475, 134: 660, 135: 3400,
  136: 1675, 137: 3210,
};

// ราคาที่คัดสรร (18 จาก 39 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const babyMixedPrices: Record<number, number> = {
  1: 2170, 3: 2610, 5: 2520, 7: 3450, 9: 2450, 11: 3130, 13: 2020, 15: 2945,
  17: 1490, 19: 3780, 21: 1790, 24: 3300, 27: 4195, 30: 2835, 33: 2900,
  36: 2255, 38: 2690, 39: 2690,
};

// ราคาที่คัดสรร (17 จาก 138 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const goldSilverPrices: Record<number, number> = {
  1: 1580, 9: 1540, 17: 4710, 25: 1830, 33: 2310, 41: 2070, 49: 1580,
  57: 2000, 65: 1510, 73: 3540, 81: 2140, 89: 4595, 97: 1780, 105: 2405,
  113: 3170, 121: 1580, 130: 2330,
};

// ราคาที่คัดสรร (16 จาก 116 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const roseGoldPrices: Record<number, number> = {
  1: 2980, 9: 5600, 17: 2320, 25: 3210, 33: 2600, 41: 5010, 45: 1685,
  49: 6230, 57: 1745, 65: 3410, 73: 2045, 81: 3140, 89: 2750, 97: 850,
  105: 3200, 113: 1910, 116: 1060,
};

// ราคาที่คัดสรร (17 จาก 141 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const pinkPrices: Record<number, number> = {
  1: 4185, 9: 2910, 17: 1790, 25: 3130, 33: 535, 41: 5670, 49: 760,
  57: 4275, 65: 1560, 73: 1920, 81: 2140, 89: 2540, 97: 1590, 105: 2730,
  113: 3370, 125: 1590, 141: 5100,
};

// ราคาที่คัดสรร (16 จาก 93 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const redPrices: Record<number, number> = {
  1: 3380, 7: 3880, 13: 4690, 19: 4080, 25: 2180, 31: 4360, 37: 3590,
  43: 2445, 49: 2615, 55: 3710, 61: 560, 67: 1855, 73: 2740, 79: 1700,
  85: 425, 93: 1405,
};

// ราคาที่คัดสรร (15 จาก 47 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const greenPrices: Record<number, number> = {
  1: 2730, 4: 3040, 7: 2685, 10: 2590, 13: 625, 16: 2140, 19: 1530,
  22: 3040, 25: 1775, 28: 1300, 31: 1990, 37: 345, 40: 2060, 43: 1345, 47: 1700,
};

// ราคาที่คัดสรร (9 จาก 17 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const yellowOrangePrices: Record<number, number> = {
  1: 1675, 3: 1120, 5: 4115, 7: 1845, 9: 1715, 11: 1590, 13: 3030, 15: 1065, 17: 3030,
};

// ราคาที่คัดสรร (9 จาก 47 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const blackwhitePrices: Record<number, number> = {
  1: 3810, 6: 3460, 11: 1740, 17: 2240, 23: 3415, 29: 4020, 36: 2385, 42: 2330, 47: 4170,
};

// ราคาที่คัดสรร (9 จาก 43 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const purplePrices: Record<number, number> = {
  1: 1785, 6: 2980, 11: 2970, 17: 5310, 23: 1740, 29: 1980, 36: 1945, 41: 2140, 43: 1440,
};

// ราคาที่คัดสรร (9 จาก 42 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const whitesandPrices: Record<number, number> = {
  1: 2860, 6: 3080, 11: 3660, 17: 1995, 23: 1665, 29: 3560, 36: 2590, 40: 435, 42: 1000,
};

// ราคาที่คัดสรร (9 จาก 79 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const rainbowpastelPrices: Record<number, number> = {
  1: 1460, 10: 1695, 20: 2690, 30: 3100, 40: 1460, 50: 1160, 60: 1170, 70: 535, 79: 2070,
};

// ราคาที่คัดสรร (9 จาก 52 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const butterflybowPrices: Record<number, number> = {
  1: 4500, 7: 3880, 14: 2045, 21: 2930, 28: 3630, 35: 2270, 42: 1955, 49: 2150, 52: 1565,
};

// ราคาที่คัดสรร (9 จาก 48 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const congratsPrices: Record<number, number> = {
  1: 2520, 6: 2435, 12: 2260, 18: 1800, 24: 1845, 30: 1745, 36: 2820, 42: 3470, 48: 1190,
};

// ราคาที่คัดสรร (9 จาก 172 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const getwellsoonPrices: Record<number, number> = {
  1: 1840, 20: 2985, 40: 3025, 60: 3745, 80: 3155, 100: 3395, 120: 3085, 150: 2400, 172: 2140,
};

// ราคาที่คัดสรร (9 จาก 196 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const cartoonPrices: Record<number, number> = {
  1: 1375, 25: 1370, 50: 3705, 75: 3640, 100: 1140, 125: 2620, 150: 5190, 175: 4405, 196: 4405,
};

// ราคาที่คัดสรร (9 จาก 236 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const numberalphabetPrices: Record<number, number> = {
  1: 1770, 30: 4210, 60: 2090, 90: 1760, 120: 2755, 150: 2710, 180: 2450, 210: 3305, 236: 510,
};

// ราคาที่คัดสรร (ครบทั้ง 9 รูป - Special Collection) — เซ็ตลูกโป่งพิเศษตกแต่งสีเคลือบ Acrylic Paint
const acrylicpaintPrices: Record<number, number> = {
  1: 2580, 2: 4785, 3: 1875, 4: 1815, 5: 6275, 6: 4945, 7: 2590, 8: 1765, 9: 1655,
};

// ราคาที่คัดสรร (ครบทั้ง 7 รูป - Special Collection) — เซ็ตลูกโป่งตกแต่ง Mosaic Balloon
const mosaicballoonPrices: Record<number, number> = {
  1: 4420, 2: 11235, 3: 4375, 4: 3000, 5: 6000, 6: 3000, 7: 3590,
};

// ราคาที่คัดสรร (10 จาก 74 รูป) — รูปที่เหลือยังไม่มีราคา รอเพิ่มทีหลังได้
const bridetobePrices: Record<number, number> = {
  1: 3290, 10: 2840, 20: 4150, 30: 2650, 40: 3560, 50: 2920, 60: 3410, 70: 2780, 74: 3640,
};

// เพิ่มหมวดหมู่ใหม่ได้โดยเพิ่ม object ในอาเรย์นี้ (ตามด้วยการเพิ่มรูปในโฟลเดอร์ public/images/catalog/<id>/)
export const catalogCategories: CatalogCategory[] = [
  {
    id: "baby-blue",
    label: "Baby Blue",
    description: "เซ็ตลูกโป่งต้อนรับเบบี๋โทนสีฟ้าพาสเทล เหมาะสำหรับงาน Welcome Baby และ Baby Shower",
    theme: "Baby Shower / Welcome Baby",
    colorTone: "ฟ้าอ่อน (Pastel Blue)",
    images: Array.from({ length: 82 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/baby-blue/${String(n).padStart(2, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งต้อนรับเบบี๋โทนสีฟ้า แบบที่ ${n}`,
        price: babyBluePrices[n],
      };
    }),
  },
  {
    id: "baby-pink",
    label: "Baby Pink",
    description: "เซ็ตลูกโป่งต้อนรับเบบี๋โทนสีชมพูพาสเทล เหมาะสำหรับงาน Welcome Baby และ Baby Shower",
    theme: "Baby Shower / Welcome Baby",
    colorTone: "ชมพูอ่อน (Pastel Pink)",
    images: Array.from({ length: 44 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/baby-pink/${String(n).padStart(2, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งต้อนรับเบบี๋โทนสีชมพู แบบที่ ${n}`,
        price: babyPinkPrices[n],
      };
    }),
  },
  {
    id: "blue-navy",
    label: "Blue Navy",
    description: "เซ็ตลูกโป่งโทนสีน้ำเงิน-กรมท่า เหมาะสำหรับวันเกิด ฉลองความสำเร็จ และงานเฉลิมฉลองทุกโอกาส",
    theme: "Birthday / Celebration",
    colorTone: "ฟ้า - สีน้ำเงินเข้ม (Blue - Midnight Blue)",
    images: Array.from({ length: 137 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/blue-navy/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งโทนสีน้ำเงิน-กรมท่า แบบที่ ${n}`,
        price: blueNavyPrices[n],
      };
    }),
  },
  {
    id: "baby-mixed",
    label: "Baby Mixed",
    description: "เซ็ตลูกโป่งต้อนรับเบบี๋หลากหลายโทนสีและธีม เหมาะสำหรับงาน Welcome Baby, Baby Shower และ Gender Reveal",
    theme: "Baby Shower / Welcome Baby",
    colorTone: "หลากสี (Mixed Colors)",
    images: Array.from({ length: 39 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/baby-mixed/${String(n).padStart(2, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งต้อนรับเบบี๋ แบบที่ ${n}`,
        price: babyMixedPrices[n],
      };
    }),
  },
  {
    id: "gold-silver",
    label: "Gold Silver",
    description: "เซ็ตลูกโป่งโทนสีทอง-เงินหรูหรา เหมาะสำหรับวันเกิด งานฉลองความสำเร็จ งานเปิดตัว และทุกโอกาสพิเศษ",
    theme: "Birthday / Celebration",
    colorTone: "ทอง-เงิน (Gold Silver)",
    images: Array.from({ length: 138 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/gold-silver/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งโทนสีทอง-เงิน แบบที่ ${n}`,
        price: goldSilverPrices[n],
      };
    }),
  },
  {
    id: "rose-gold",
    label: "Rose Gold",
    description: "เซ็ตลูกโป่งโทนสีชมพูทอง-โรสโกลด์หรูหรา เหมาะสำหรับวันเกิด งานฉลองความสำเร็จ งานแต่งงาน และทุกโอกาสพิเศษ",
    theme: "Birthday / Celebration",
    colorTone: "ชมพูทอง-โรสโกลด์ (Rose Gold)",
    images: Array.from({ length: 116 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/rose-gold/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งโทนสีชมพูทอง-โรสโกลด์ แบบที่ ${n}`,
        price: roseGoldPrices[n],
      };
    }),
  },
  {
    id: "pink",
    label: "Pink",
    description: "เซ็ตลูกโป่งสีชมพูสดใสหลากหลายแบบ เหมาะสำหรับวันเกิด วันวาเลนไทน์ งานแต่งงาน และทุกโอกาสฉลองที่ต้องการความน่ารัก",
    theme: "Birthday / Celebration",
    colorTone: "ชมพู-แมจนตา (Pink - Magenta)",
    images: Array.from({ length: 141 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/pink/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งสีชมพู แบบที่ ${n}`,
        price: pinkPrices[n],
      };
    }),
  },
  {
    id: "red",
    label: "Red",
    description: "เซ็ตลูกโป่งสีแดงสุดหรูหรา เหมาะสำหรับวันแต่งงาน วันวาเลนไทน์ และทุกโอกาสที่ต้องการแสดงออกถึงความรัก",
    theme: "Birthday / Celebration",
    colorTone: "แดง-บอร์กันดี (Red - Burgundy)",
    images: Array.from({ length: 93 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/red/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งสีแดง แบบที่ ${n}`,
        price: redPrices[n],
      };
    }),
  },
  {
    id: "green",
    label: "Green",
    description: "เซ็ตลูกโป่งสีเขียวสดชื่น เหมาะสำหรับวันเกิด การเปิดตัว และโอกาสพิเศษที่ต้องการความสดใหม่",
    theme: "Birthday / Celebration",
    colorTone: "เขียว-ทะเล (Green - Sage)",
    images: Array.from({ length: 47 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/green/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งสีเขียว แบบที่ ${n}`,
        price: greenPrices[n],
      };
    }),
  },
  {
    id: "yelloworange",
    label: "Yellow Orange",
    description: "เซ็ตลูกโป่งโทนสีเหลือง-ส้มอบอุ่น เหมาะสำหรับวันเกิด งานเปิดตัว และโอกาสที่ต้องการสีสันเบิกบาน",
    theme: "Birthday / Celebration",
    colorTone: "เหลือง-ส้ม (Yellow - Orange)",
    images: Array.from({ length: 17 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/yelloworange/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งโทนสีเหลือง-ส้ม แบบที่ ${n}`,
        price: yellowOrangePrices[n],
      };
    }),
  },
  {
    id: "blackwhite",
    label: "Black White",
    description: "เซ็ตลูกโป่งโทนสีขาว-ดำ-เทา สไตล์หรูหราและเรียบหรู เหมาะสำหรับวันเกิด งานฉลองความสำเร็จ งานแต่งงาน และทุกโอกาสพิเศษ",
    theme: "Birthday / Celebration",
    colorTone: "ขาว-ดำ-เทา (Black - White - Silver)",
    images: Array.from({ length: 47 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/blackwhite/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งโทนสีขาว-ดำ แบบที่ ${n}`,
        price: blackwhitePrices[n],
      };
    }),
  },
  {
    id: "purple",
    label: "Purple",
    description: "เซ็ตลูกโป่งสีม่วงสวยงาม หลากหลายแบบ เหมาะสำหรับวันเกิด วันครบรอบ และทุกโอกาสฉลองที่ต้องการความโรแมนติก",
    theme: "Birthday / Celebration",
    colorTone: "ม่วง-ลาเวนเดอร์ (Purple - Lavender)",
    images: Array.from({ length: 43 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/purple/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งสีม่วง แบบที่ ${n}`,
        price: purplePrices[n],
      };
    }),
  },
  {
    id: "whitesand",
    label: "White Sand",
    description: "เซ็ตลูกโป่งโทนสีขาว-ทรายขาวอ่อน สไตล์อ่อนหวาน เหมาะสำหรับวันเกิด งานฉลองความสำเร็จ วันครบรอบ และทุกโอกาสพิเศษ",
    theme: "Birthday / Celebration",
    colorTone: "ขาว-ทรายขาว (White - Beige - Sand)",
    images: Array.from({ length: 42 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/whitesand/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งโทนสีขาว-ทราย แบบที่ ${n}`,
        price: whitesandPrices[n],
      };
    }),
  },
  {
    id: "rainbowpastel",
    label: "Rainbow Pastel",
    description: "เซ็ตลูกโป่งหลากสีรุ้งโทนพาสเทลสวยสดใส เหมาะสำหรับวันเกิดสำหรับเด็ก งานฉลองที่สดใสสนุกสนาน และทุกโอกาสที่ต้องการสีสันบ้าบัว",
    theme: "Birthday / Celebration",
    colorTone: "รุ้งพาสเทล (Rainbow Pastel)",
    images: Array.from({ length: 79 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/rainbowpastel/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งรุ้งพาสเทล แบบที่ ${n}`,
        price: rainbowpastelPrices[n],
      };
    }),
  },
  {
    id: "butterflybow",
    label: "Butterfly & Bow",
    description: "เซ็ตลูกโป่งตกแต่งด้วยผีเสื้อและโบว์หวานสวย เหมาะสำหรับวันเกิด งานแต่งงาน วันครบรอบ และทุกโอกาสพิเศษที่ต้องการความสงามและหรูหรา",
    theme: "Birthday / Celebration",
    colorTone: "ผีเสื้อและโบว์ (Butterfly & Bow)",
    images: Array.from({ length: 52 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/butterflybow/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งผีเสื้อและโบว์ แบบที่ ${n}`,
        price: butterflybowPrices[n],
      };
    }),
  },
  {
    id: "congrats",
    label: "Congratulations",
    description: "เซ็ตลูกโป่งฉลองความสำเร็จและความภูมิใจ เหมาะสำหรับการส่งมอบงาน ฉลองความสำเร็จ วันจบการศึกษา และทุกโอกาสที่ต้องการให้คำแสดงความยินดี",
    theme: "Birthday / Celebration",
    colorTone: "หลากสี (Congratulations)",
    images: Array.from({ length: 48 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/congrats/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งฉลองความสำเร็จ แบบที่ ${n}`,
        price: congratsPrices[n],
      };
    }),
  },
  {
    id: "getwellsoon",
    label: "Get Well Soon",
    description: "เซ็ตลูกโป่งส่งความเป็นกำลังใจให้ผู้ป่วย เหมาะสำหรับเยี่ยมผู้ป่วย ส่งกำลังใจ และแสดงความห่วงใยต่อผู้ที่กำลังฟื้นตัว",
    theme: "Birthday / Celebration",
    colorTone: "หลากสี (Get Well Soon)",
    images: Array.from({ length: 172 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/getwellsoon/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งส่งกำลังใจ แบบที่ ${n}`,
        price: getwellsoonPrices[n],
      };
    }),
  },
  {
    id: "cartoon",
    label: "Cartoon",
    description: "เซ็ตลูกโป่งตัวการ์ตูนโปรดชอบ สีสันสดใส เหมาะสำหรับวันเกิดเด็ก งานฉลองเพื่อน และทุกโอกาสที่ต้องการความสนุกสนาน",
    theme: "Birthday / Celebration",
    colorTone: "หลากสี (Cartoon Characters)",
    images: Array.from({ length: 196 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/cartoon/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งการ์ตูน แบบที่ ${n}`,
        price: cartoonPrices[n],
      };
    }),
  },
  {
    id: "numberalphabet",
    label: "Number & Alphabet",
    description: "เซ็ตลูกโป่งตัวเลขและตัวอักษร เหมาะสำหรับวันเกิด เฉลิมฉลอง และงานเลี้ยงเพื่อน ให้ลูกค้าเลือกตัวอักษรหรือตัวเลขโปรดได้",
    theme: "Birthday / Celebration",
    colorTone: "หลากสี (Numbers & Letters)",
    images: Array.from({ length: 236 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/numberalphabet/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งตัวเลขและตัวอักษร แบบที่ ${n}`,
        price: numberalphabetPrices[n],
      };
    }),
  },
  {
    id: "acrylicpaint",
    label: "Acrylic Paint ✨",
    description: "เซ็ตลูกโป่งพิเศษตกแต่งด้วยสีเคลือบ Acrylic Paint จากศิลปินของเรา หลากสีและดีไซน์ที่หนึ่งในโลก เหมาะสำหรับงานฉลองพิเศษและโอกาสที่ต้องการแสดงความประณีต",
    theme: "Birthday / Celebration",
    colorTone: "สีเคลือบ - ศิลปะ (Acrylic Paint - Artistic)",
    images: Array.from({ length: 9 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/acrylicpaint/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งตกแต่งสีเคลือบ Acrylic Paint แบบที่ ${n}`,
        price: acrylicpaintPrices[n],
      };
    }),
  },
  {
    id: "mosaicballoon",
    label: "Mosaic Balloon 🎨",
    description: "เซ็ตลูกโป่งพิเศษตกแต่งแบบ Mosaic ด้วยลูกโป่งเล็กสีสดใสเรียงประดับอย่างศิลปะ เหมาะสำหรับวันเกิด งานฉลองพิเศษ และโอกาสที่ต้องการความสวยงามที่โดดเด่น",
    theme: "Birthday / Celebration",
    colorTone: "โมเสก - หลากสี (Mosaic - Multicolor)",
    images: Array.from({ length: 7 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/mosaicballoon/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งตกแต่งแบบ Mosaic แบบที่ ${n}`,
        price: mosaicballoonPrices[n],
      };
    }),
  },
  {
    id: "bridetobe",
    label: "Bride To Be 👰",
    description: "เซ็ตลูกโป่งสำหรับงานแต่งงาน บาชเชลอร์เพอร์ตี้ และงานแต่งงานอื่นๆ หลากสีและดีไซน์หรูหรา เหมาะสำหรับการฉลองช่วงเวลาพิเศษของสาวสวย",
    theme: "Wedding / Celebration",
    colorTone: "หลากสี (Bride To Be)",
    images: Array.from({ length: 74 }, (_, i) => {
      const n = i + 1;
      return {
        src: `/images/catalog/bridetobe/${String(n).padStart(3, "0")}.jpg`,
        alt: `เซ็ตลูกโป่งสำหรับสาวสวยแต่งงาน แบบที่ ${n}`,
        price: bridetobePrices[n],
      };
    }),
  },
];

export const priceRanges = [
  { id: "under-1500", label: "ต่ำกว่า 1,500.-", min: 0, max: 1500 },
  { id: "1500-2500", label: "1,500 - 2,500.-", min: 1500, max: 2500 },
  { id: "2500-3500", label: "2,500 - 3,500.-", min: 2500, max: 3500 },
  { id: "over-3500", label: "มากกว่า 3,500.-", min: 3500, max: Infinity },
];
