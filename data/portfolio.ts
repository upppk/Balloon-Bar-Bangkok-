export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioCategory = {
  id: string;
  label: string;
  labelEn: string;
  description: string;
  images: PortfolioImage[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "helium",
    label: "ลูกโป่งฮีเลียม & Party Styling",
    labelEn: "Helium Balloon Sets & Party Styling",
    description:
      "ตั้งแต่ช่อลูกโป่งฮีเลียมสั่งทำ ไปจนถึงการตกแต่งงานปาร์ตี้แบบครบชุด ที่ให้ความรู้สึกหรูหรา โมเดิร์น และพิเศษในทุกโอกาส",
    images: [
      { src: "/images/portfolio/helium/01.jpg", alt: "ช่อลูกโป่งหัวใจสีแดงชมพูฉลองวันเกิด" },
      { src: "/images/portfolio/helium/02.jpg", alt: "ลูกโป่งหัวใจสีแดงชมพูพร้อมเค้กวันเกิด" },
      { src: "/images/portfolio/helium/03.jpg", alt: "ลูกโป่งหัวใจยักษ์สีแดงฉลองวันเกิด" },
      { src: "/images/portfolio/helium/04.jpg", alt: "ลูกโป่งฮีเลียมสีเขียวมิ้นต์งานวันเกิดสามสิบปี" },
      { src: "/images/portfolio/helium/05.jpg", alt: "ลูกโป่งฮีเลียมสีขาวครีมตกแต่งงานปาร์ตี้เพื่อน" },
      { src: "/images/portfolio/helium/06.jpg", alt: "ลูกโป่งเลข 28 สีเงินทองฉลองวันเกิดคู่รัก" },
      { src: "/images/portfolio/helium/07.jpg", alt: "ลูกโป่งฮีเลียมลูกใหญ่ Bride ตกแต่งงานเจ้าสาว" },
      { src: "/images/portfolio/helium/08.jpg", alt: "ลูกโป่งหัวใจสีชมพูพร้อมรูปภาพ Welcome Home" },
      { src: "/images/portfolio/helium/09.jpg", alt: "ช่อลูกโป่งฮีเลียมตกแต่งงานปาร์ตี้สไตล์หรูหรา" },
      { src: "/images/portfolio/helium/10.jpg", alt: "ลูกโป่งฮีเลียมตกแต่งงานฉลองพิเศษ" },
      { src: "/images/portfolio/helium/11.jpg", alt: "ช่อลูกโป่งฮีเลียมสีสันสดใสสำหรับงานปาร์ตี้" },
      { src: "/images/portfolio/helium/12.jpg", alt: "ลูกโป่งฮีเลียมตกแต่งงานเฉลิมฉลอง" },
      { src: "/images/portfolio/helium/13.jpg", alt: "ช่อลูกโป่งฮีเลียมสไตล์พรีเมียม" },
      { src: "/images/portfolio/helium/14.jpg", alt: "ลูกโป่งฮีเลียมตกแต่งงานวันเกิด" },
      { src: "/images/portfolio/helium/15.jpg", alt: "ช่อลูกโป่งฮีเลียมสีสันหวานสำหรับงานฉลอง" },
      { src: "/images/portfolio/helium/16.jpg", alt: "ลูกโป่งฮีเลียมตกแต่งบรรยากาศงานปาร์ตี้" },
      { src: "/images/portfolio/helium/17.jpg", alt: "ช่อลูกโป่งฮีเลียมพร้อมของตกแต่งเพิ่มเติม" },
      { src: "/images/portfolio/helium/18.jpg", alt: "ลูกโป่งฮีเลียมสไตล์โมเดิร์นสำหรับงานพิเศษ" },
      { src: "/images/portfolio/helium/19.jpg", alt: "ช่อลูกโป่งฮีเลียมตกแต่งงานฉลองวันสำคัญ" },
      { src: "/images/portfolio/helium/20.jpg", alt: "ลูกโป่งฮีเลียมสีสันสดใสสำหรับปาร์ตี้" },
      { src: "/images/portfolio/helium/21.jpg", alt: "ช่อลูกโป่งฮีเลียมตกแต่งงานเฉลิมฉลองพิเศษ" },
      { src: "/images/portfolio/helium/22.jpg", alt: "ลูกโป่งฮีเลียมสไตล์หรูหราสำหรับงานวันเกิด" },
      { src: "/images/portfolio/helium/23.jpg", alt: "ช่อลูกโป่งฮีเลียมตกแต่งงานปาร์ตี้พิเศษ" },
      { src: "/images/portfolio/helium/24.jpg", alt: "ลูกโป่งฮีเลียมตกแต่งบรรยากาศหรูหรา" },
      { src: "/images/portfolio/helium/25.jpg", alt: "ช่อลูกโป่งฮีเลียมสำหรับงานฉลองพิเศษ" },
      { src: "/images/portfolio/helium/26.jpg", alt: "ลูกโป่งฮีเลียมตกแต่งงานปาร์ตี้สไตล์พรีเมียม" },
      { src: "/images/portfolio/helium/27.jpg", alt: "ช่อลูกโป่งฮีเลียมตกแต่งงานเฉลิมฉลอง" },
      { src: "/images/portfolio/helium/28.jpg", alt: "ลูกโป่งฮีเลียมสไตล์โมเดิร์นตกแต่งงานพิเศษ" },
    ],
  },
  {
    id: "garland",
    label: "การ์แลนด์ & แบ็คดรอป",
    labelEn: "Garland & Backdrop",
    description:
      "แบ็คดรอปลูกโป่งที่ออกแบบให้ตรงกับวิสัยทัศน์ของคุณ เต็มไปด้วยความคิดสร้างสรรค์ สีสัน และสไตล์เฉพาะของ Balloon Bar ปรับแต่งได้ตามพื้นที่และธีมของงาน",
    images: [
      { src: "/images/portfolio/garland/01.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศงานฉลอง" },
      { src: "/images/portfolio/garland/02.jpg", alt: "แบ็คดรอปลูกโป่งสไตล์พรีเมียมสำหรับงานพิเศษ" },
      { src: "/images/portfolio/garland/03.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานเฉลิมฉลอง" },
      { src: "/images/portfolio/garland/04.jpg", alt: "แบ็คดรอปลูกโป่งสีสันสดใสสำหรับงานปาร์ตี้" },
      { src: "/images/portfolio/garland/05.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศหรูหรา" },
      { src: "/images/portfolio/garland/06.jpg", alt: "แบ็คดรอปลูกโป่งธีมพิเศษสำหรับงานฉลอง" },
      { src: "/images/portfolio/garland/07.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานปาร์ตี้สไตล์โมเดิร์น" },
      { src: "/images/portfolio/garland/08.jpg", alt: "แบ็คดรอปลูกโป่งสำหรับงานเฉลิมฉลองพิเศษ" },
      { src: "/images/portfolio/garland/09.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานวันสำคัญ" },
      { src: "/images/portfolio/garland/10.jpg", alt: "แบ็คดรอปลูกโป่งสไตล์หรูหราสำหรับงานพิเศษ" },
      { src: "/images/portfolio/garland/11.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศงานฉลอง" },
      { src: "/images/portfolio/garland/12.jpg", alt: "แบ็คดรอปลูกโป่งสีสันสดใสตกแต่งงานพิเศษ" },
      { src: "/images/portfolio/garland/13.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานเฉลิมฉลองพิเศษ" },
      { src: "/images/portfolio/garland/14.jpg", alt: "แบ็คดรอปลูกโป่งสไตล์พรีเมียมตกแต่งงานฉลอง" },
      { src: "/images/portfolio/garland/15.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศงานพิเศษ" },
      { src: "/images/portfolio/garland/16.jpg", alt: "แบ็คดรอปลูกโป่งตกแต่งงานปาร์ตี้หรูหรา" },
      { src: "/images/portfolio/garland/17.jpg", alt: "การ์แลนด์ลูกโป่งสไตล์โมเดิร์นตกแต่งงานฉลอง" },
      { src: "/images/portfolio/garland/18.jpg", alt: "แบ็คดรอปลูกโป่งตกแต่งงานเฉลิมฉลอง" },
      { src: "/images/portfolio/garland/19.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศงานพิเศษ" },
      { src: "/images/portfolio/garland/20.jpg", alt: "แบ็คดรอปลูกโป่งสไตล์หรูหราสำหรับงานฉลอง" },
      { src: "/images/portfolio/garland/21.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานปาร์ตี้พิเศษ" },
      { src: "/images/portfolio/garland/22.jpg", alt: "แบ็คดรอปลูกโป่งสีสันสดใสตกแต่งงานสำคัญ" },
      { src: "/images/portfolio/garland/23.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศงานฉลองพิเศษ" },
      { src: "/images/portfolio/garland/24.jpg", alt: "แบ็คดรอปลูกโป่งสไตล์พรีเมียมตกแต่งงานพิเศษ" },
      { src: "/images/portfolio/garland/25.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานเฉลิมฉลองหรูหรา" },
      { src: "/images/portfolio/garland/26.jpg", alt: "แบ็คดรอปลูกโป่งตกแต่งบรรยากาศงานฉลอง" },
      { src: "/images/portfolio/garland/27.jpg", alt: "การ์แลนด์ลูกโป่งสไตล์โมเดิร์นสำหรับงานพิเศษ" },
      { src: "/images/portfolio/garland/28.jpg", alt: "แบ็คดรอปลูกโป่งตกแต่งงานฉลองพิเศษ" },
      { src: "/images/portfolio/garland/29.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งบรรยากาศงานสำคัญ" },
      { src: "/images/portfolio/garland/30.jpg", alt: "แบ็คดรอปลูกโป่งสไตล์หรูหราตกแต่งงานฉลอง" },
      { src: "/images/portfolio/garland/31.jpg", alt: "การ์แลนด์ลูกโป่งตกแต่งงานปาร์ตี้สไตล์พรีเมียม" },
      { src: "/images/portfolio/garland/32.jpg", alt: "แบ็คดรอปลูกโป่งตกแต่งบรรยากาศงานเฉลิมฉลอง" },
      { src: "/images/portfolio/garland/33.jpg", alt: "การ์แลนด์ลูกโป่งงาน Hen Night สไตล์หรูหรา" },
      { src: "/images/portfolio/garland/34.jpg", alt: "การ์แลนด์ลูกโป่งงาน Hen Night ตกแต่งพิเศษ" },
      { src: "/images/portfolio/garland/35.jpg", alt: "แบ็คดรอปลูกโป่งตกแต่งงานฉลองสไตล์คลาสสิก" },
    ],
  },
  {
    id: "art",
    label: "Balloon Art",
    labelEn: "Balloon Art",
    description:
      "งานประติมากรรมลูกโป่งสั่งทำพิเศษ สำหรับยกระดับบรรยากาศงานแฟชั่นโชว์และอีเวนต์สร้างสรรค์ ด้วยรูปทรงออร์แกนิกและผิวเมทัลลิกสุดหรู",
    images: [
      { src: "/images/portfolio/art/01.jpg", alt: "ประติมากรรมลูกโป่งดอกไม้เมทัลลิกม่วงเขียวสไตล์แฟชั่น" },
      { src: "/images/portfolio/art/02.jpg", alt: "ดอกไม้ลูกโป่งเมทัลลิกฟ้าม่วงสไตล์อาร์ต" },
      { src: "/images/portfolio/art/03.jpg", alt: "ดอกไม้ลูกโป่งเมทัลลิกชมพูเขียวสไตล์อาร์ต" },
      { src: "/images/portfolio/art/04.jpg", alt: "ต้นไม้ลูกโป่งเมทัลลิกม่วงฟ้าดอกไม้หลายชั้น" },
      { src: "/images/portfolio/art/05.jpg", alt: "ประติมากรรมลูกโป่งอาร์ตสไตล์เมทัลลิกพิเศษ" },
      { src: "/images/portfolio/art/06.png", alt: "ดอกไม้ลูกโป่งเมทัลลิกทองม่วงจัดวางเป็นฉาก" },
      { src: "/images/portfolio/art/07.png", alt: "งานติดตั้งประติมากรรมลูกโป่งอาร์ตสไตล์พิเศษ" },
      { src: "/images/portfolio/art/08.png", alt: "ภาพรวมงานติดตั้งประติมากรรมลูกโป่งอาร์ตหลายชิ้น" },
    ],
  },
  {
    id: "special",
    label: "Special Collection",
    labelEn: "Special Collection",
    description:
      "คอนเซปต์ลูกโป่งสุดพิเศษและคอลเลกชันจำนวนจำกัด ออกแบบมาเพื่อให้ทุกการเฉลิมฉลองรู้สึกไม่เหมือนใคร",
    images: [
      { src: "/images/portfolio/special/01.jpg", alt: "ปกคอลเลกชัน Magic Gems สไตล์คอลลาจสีสันสดใส" },
      { src: "/images/portfolio/special/02.jpg", alt: "อัญมณีสีสันสดใสธีมคอลเลกชัน Magic Gems" },
      { src: "/images/portfolio/special/03.jpg", alt: "ลูกโป่งใสสกรีนข้อความ Gems Spirits ประดับคริสตัล" },
      { src: "/images/portfolio/special/04.jpg", alt: "หญิงสาวถือช่อลูกโป่งใส Gems Spirits พร้อมลูกโป่งฟอยล์หัวใจ" },
      { src: "/images/portfolio/special/05.jpg", alt: "ลูกโป่งพิมพ์ข้อความ Happy Birthday คอลเลกชัน Balloon Charm" },
      { src: "/images/portfolio/special/06.jpg", alt: "พวงกุญแจ Balloon Charm รูปหัวใจประดับริบบิ้น" },
      { src: "/images/portfolio/special/07.jpg", alt: "Balloon Charm รูปหัวใจลูกปัดสีขาวสไตล์มินิมอล" },
      { src: "/images/portfolio/special/08.jpg", alt: "ลูกโป่งใสข้อความ Love You Mom คอลเลกชัน Mother's Day" },
      { src: "/images/portfolio/special/09.jpg", alt: "ปกคอลเลกชัน Mother's Day ลายดอกไม้พาสเทล" },
      { src: "/images/portfolio/special/10.jpg", alt: "ช่อลูกโป่ง Mother's Day Collection พร้อมป้ายราคา" },
      { src: "/images/portfolio/special/11.jpg", alt: "โต๊ะจัดงานปาร์ตี้ธีมสีสันสดใสพร้อมลูกโป่งใส" },
      { src: "/images/portfolio/special/12.jpg", alt: "ลูกโป่งใสพิมพ์ข้อความ Mrs. Pringle สไตล์ศิลปะ" },
      { src: "/images/portfolio/special/13.jpg", alt: "ลูกโป่งดำข้อความ You're Shining พร้อมสาวสวย" },
    ],
  },
];
