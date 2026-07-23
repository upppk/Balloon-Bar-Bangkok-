export type Product = {
  name: string;
  nameEn: string;
  description: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  products: Product[];
};

export const signatureOfferings: Product[] = [
  {
    name: "Latex Balloon",
    nameEn: "Latex Balloon",
    description:
      "ลูกโป่งยางยืด นุ่ม เนื้อนิ่ม เติมได้ทั้งลมและก๊าซฮีเลียม มีให้เลือกหลายทรง ทั้งทรงกลมและทรงยาว เหมาะกับงานปาร์ตี้และตกแต่งทุกโอกาส",
  },
  {
    name: "Premium Foil Balloon",
    nameEn: "Premium Foil Balloon",
    description:
      "ลูกโป่งฟอยล์เงางาม ทนทาน เก็บฮีเลียมได้นาน มีหลากหลายทรงให้เลือก ปิดผนึกเองอัตโนมัติ (ควรเลี่ยงอากาศร้อนจัดหรือเย็นจัดเพื่อคงรูปทรงสวยที่สุด)",
  },
  {
    name: "Themed Balloon Bundle",
    nameEn: "Themed Balloon Bundle",
    description:
      "ชุดลูกโป่งจับคู่ธีมหรือโทนสีที่ออกแบบมาโดยเฉพาะ ช่วยให้งานปาร์ตี้หรืออีเวนต์ของคุณดูครบและมีสไตล์ได้ง่ายๆ",
  },
  {
    name: "Balloon Garland & Backdrop",
    nameEn: "Balloon Garland & Backdrop",
    description:
      "แบ็คดรอปลูกโป่งสั่งทำตามธีมและขนาดพื้นที่ของงาน ออกแบบและติดตั้งบูธหรือสถานที่จัดงานแบบกำหนดเอง ผสานความคิดสร้างสรรค์สุนทรียภาพ",
  },
];

export const specialCollections: Product[] = [
  {
    name: "Special Collections (Seasonal)",
    nameEn: "Seasonal Collection",
    description:
      "ชุดลูกโป่งธีมพิเศษตามเทศกาล ดีไซน์และโทนสีที่เข้ากับช่วงเวลาสำคัญ เช่น คริสต์มาส ปีใหม่ วาเลนไทน์ หรืออีเวนต์หน้าร้อน ให้ตกแต่งได้ง่ายและทันเทศกาล",
  },
  {
    name: "Personalized Text Design",
    nameEn: "Personalized Text Design",
    description:
      "บริการสั่งพิมพ์ชื่อ ข้อความ หรือคำพิเศษลงบนลูกโป่ง เพิ่มความเป็นส่วนตัวให้ทุกโมเมนต์",
  },
  {
    name: "Special Collections (Surprise Photo)",
    nameEn: "Surprise Photo Balloon",
    description:
      "ลูกโป่งที่ซ่อนภาพเซอร์ไพรส์ไว้ข้างใน เหมาะสำหรับของขวัญเซอร์ไพรส์ การขอแต่งงาน หรือโมเมนต์พิเศษที่อยากสร้างความประทับใจ",
  },
  {
    name: "Special Collections (Gems Balloon)",
    nameEn: "Gems Balloon Collection",
    description:
      "ลูกโป่งดีไซน์แรงบันดาลใจจากอัญมณีและคริสตัล มาพร้อมผิวสัมผัสแวววาวหรูหรา เพิ่มความพรีเมียมให้งานของคุณ",
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: "latex-balloon",
    name: "ลูกโป่งยาง",
    nameEn: "Latex Balloon",
    description: "ลูกโป่งยางยืดคุณภาพสูง เหมาะสำหรับงานปาร์ตี้และตกแต่งทุกโอกาส",
    products: [
      {
        name: "Latex Balloon Bundle",
        nameEn: "Latex Balloon Bundle",
        description: "เรียม 110.-/ช่อ เลือกสีและทรงได้ตามต้องการ ยืดหยุ่นและทนทาน",
      },
      {
        name: "Pastel Latex Balloon",
        nameEn: "Pastel Latex Balloon",
        description: "ลูกโป่งยางสีพาสเทลนุ่มสดใส เหมาะสำหรับงานเด็ก งานเจ้าสาว และงานฉลองคลาสสิก",
      },
      {
        name: "Metallic Latex Balloon",
        nameEn: "Metallic Latex Balloon",
        description: "ลูกโป่งยางสีเมทัลลิควิวเงาสวย เหมาะสำหรับงานพรีเมียมและงานพิเศษ",
      },
      {
        name: "Giant Latex Balloon",
        nameEn: "Giant Latex Balloon",
        description: "ลูกโป่งยางขนาดยักษ์ 18 นิ้ว สร้างผลกระทบสายตาที่ชั่วร้าย เหมาะสำหรับจุดสังเกต",
      },
    ],
  },
  {
    id: "foil-balloon",
    name: "ลูกโป่งฟลอย",
    nameEn: "Foil Balloon",
    description: "ลูกโป่งฟอยล์เงาสวย เก็บฮีเลียมได้นาน ปิดผนึกอัตโนมัติ",
    products: [
      {
        name: "Premium Foil Balloon",
        nameEn: "Premium Foil Balloon",
        description: "เรียม 170.-/ลูก ฟอยล์คุณภาพสูง ทรงต่างๆ มากมาย เก็บฮีเลียมได้นาน",
      },
      {
        name: "Heart Shape Foil Balloon",
        nameEn: "Heart Shape Foil Balloon",
        description: "ลูกโป่งฟลอยทรงหัวใจ สีสดใส เหมาะสำหรับงานแต่งงาน วัน Valentine และงานโรแมนติก",
      },
      {
        name: "Star Shape Foil Balloon",
        nameEn: "Star Shape Foil Balloon",
        description: "ลูกโป่งฟลอยทรงดาว หลากสี เหมาะสำหรับงานเด็ก และงานบรรยากาศสนุกๆ",
      },
      {
        name: "Number & Letter Foil Balloon",
        nameEn: "Number & Letter Foil Balloon",
        description: "ลูกโป่งฟลอยตัวเลขและตัวอักษร ใช้เพื่อสร้างข้อความพิเศษ วันเกิด และปีใหม่",
      },
    ],
  },
  {
    id: "cartoon-foil-balloon",
    name: "ลูกโป่งฟลอย Cartoon",
    nameEn: "Cartoon Foil Balloon",
    description: "ลูกโป่งฟอยล์ตัวการ์ตูนโปรด สีสดใส เหมาะสำหรับวันเกิดเด็ก",
    products: [
      {
        name: "Disney Character Balloon",
        nameEn: "Disney Character Balloon",
        description: "ลูกโป่งตัวการ์ตูน Disney หลากตัวให้เลือก Mickey, Minnie, Elsa และอีกมากมาย",
      },
      {
        name: "Superhero Cartoon Balloon",
        nameEn: "Superhero Cartoon Balloon",
        description: "ลูกโป่งสูเปอร์ฮีโร่โปรด Batman, Superman, Spider-Man เด็กชายชอบแน่นอน",
      },
      {
        name: "Princess Cartoon Balloon",
        nameEn: "Princess Cartoon Balloon",
        description: "ลูกโป่งเจ้าหญิง Frozen, Cinderella, Snow White เหมาะสำหรับปาร์ตี้เด็กผู้หญิง",
      },
      {
        name: "Animal Cartoon Balloon",
        nameEn: "Animal Cartoon Balloon",
        description: "ลูกโป่งสัตว์โลก Lion, Panda, Dinosaur ตัวตลกน่ารัก เด็กๆชอบมาก",
      },
    ],
  },
  {
    id: "balloon-accessories",
    name: "Balloon Accessories",
    nameEn: "Balloon Accessories",
    description: "อุปกรณ์เสริมลูกโป่งและตกแต่ง ช่วยเพิ่มสวยงาม",
    products: [
      {
        name: "Balloon Ribbon & Tape",
        nameEn: "Balloon Ribbon & Tape",
        description: "เทป และริบบิ้นสำหรับผูกลูกโป่ง หลากสี ผ้านุ่มและรับไม่ขาด",
      },
      {
        name: "Balloon Glue Dots & Stickers",
        nameEn: "Balloon Glue Dots & Stickers",
        description: "กาวติดลูกโป่ง แผ่นติดเก้อะและสติกเกอร์ ไม่เสียลูกโป่ง",
      },
      {
        name: "Balloon Pump",
        nameEn: "Balloon Pump",
        description: "ปั๊มลมไฟฟ้า ปั๊มมือแบบต่างๆ เติมลูกโป่งได้ง่ายและรวดเร็ว",
      },
      {
        name: "Balloon Clip & Stand",
        nameEn: "Balloon Clip & Stand",
        description: "คลิปและอุปกรณ์รอง วางลูกโป่งตกแต่ง ใช้สำหรับตกแต่งโต๊ะและพื้นที่ต่างๆ",
      },
      {
        name: "Balloon Garland Kit",
        nameEn: "Balloon Garland Kit",
        description: "ชุดติดลูกโป่งประดับตกแต่ง พร้อมสายและอุปกรณ์ ใช้ประดับเพดาน ผนัง บนเก้าอี้",
      },
    ],
  },
];
