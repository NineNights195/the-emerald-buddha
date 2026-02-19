export type Category = 'history' | 'culture' | 'thai-society'

export interface Post {
  id: number
  slug: string
  category: Category
  date: string
  readMin: number
  image?: string               // path relative to public/, e.g. '/images/mythical-origins.jpg'
  title: { en: string; th: string }
  summary: { en: string; th: string }
  body: { en: string[]; th: string[] }  // each string is one paragraph
}

export const posts: Post[] = [
  // ── History ────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'mythical-origins',
    category: 'history',
    date: '2025-01-10',
    readMin: 6,
    title: {
      en: 'Mythical Origins: From Ancient India to Chiang Rai',
      th: 'ต้นกำเนิดในตำนาน: จากอินเดียโบราณสู่เชียงราย',
    },
    summary: {
      en: 'Legend holds that the Emerald Buddha was crafted in India around 43 BCE. Discover how this sacred image made its way across Southeast Asia before arriving in Thailand.',
      th: 'ตำนานกล่าวว่าพระแก้วมรกตถูกสร้างขึ้นในอินเดียเมื่อราว 43 ปีก่อนคริสตกาล สำรวจว่าพระพุทธรูปศักดิ์สิทธิ์นี้เดินทางข้ามเอเชียตะวันออกเฉียงใต้มายังไทยได้อย่างไร',
    },
    body: { en: [], th: [] },
  },
  {
    id: 2,
    slug: 'journey-through-kingdoms',
    category: 'history',
    date: '2025-02-03',
    readMin: 8,
    title: {
      en: 'A Journey Through Kingdoms: Laos, Cambodia & Siam',
      th: 'การเดินทางผ่านอาณาจักร: ลาว กัมพูชา และสยาม',
    },
    summary: {
      en: 'From Chiang Rai to Chiang Mai, Luang Prabang to Vientiane — the Emerald Buddha changed hands many times before King Taksin reclaimed it for Siam in 1779.',
      th: 'จากเชียงรายสู่เชียงใหม่ หลวงพระบางสู่เวียงจันทน์ พระแก้วมรกตเปลี่ยนมือหลายครั้งก่อนที่สมเด็จพระเจ้ากรุงธนบุรีจะทรงนำกลับคืนสู่สยามในปี 2322',
    },
    body: { en: [], th: [] },
  },
  {
    id: 3,
    slug: 'grand-palace-enshrined',
    category: 'history',
    date: '2025-03-15',
    readMin: 5,
    title: {
      en: 'Enshrined at the Grand Palace: The Chakri Era',
      th: 'ประดิษฐาน ณ พระบรมมหาราชวัง: ยุครัตนโกสินทร์',
    },
    summary: {
      en: 'In 1784, King Rama I enshrined the Emerald Buddha in Wat Phra Kaew within Bangkok\'s Grand Palace complex. Explore how the Chakri dynasty cemented the image as the palladium of Thailand.',
      th: 'ในปี 2327 พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราชทรงประดิษฐานพระแก้วมรกตไว้ในวัดพระแก้ว ภายในพระบรมมหาราชวัง กรุงเทพมหานคร สำรวจว่าราชวงศ์จักรีทรงสถาปนาพระพุทธรูปนี้ให้เป็น "ปัลลาเดียม" ของไทยได้อย่างไร',
    },
    body: { en: [], th: [] },
  },

  // ── Culture ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: 'three-seasonal-robes',
    category: 'culture',
    date: '2025-01-22',
    readMin: 7,
    title: {
      en: 'The Three Seasonal Robes: A Living Ceremony',
      th: 'เครื่องทรงสามฤดู: พิธีกรรมที่ยังมีชีวิต',
    },
    summary: {
      en: 'Three times a year, the King of Thailand performs a centuries-old ceremony to change the Emerald Buddha\'s golden robes — one each for summer, rainy season, and cool season.',
      th: 'ปีละสามครั้ง พระมหากษัตริย์ไทยทรงประกอบพระราชพิธีเปลี่ยนเครื่องทรงพระแก้วมรกต ซึ่งมีอายุนานหลายศตวรรษ โดยมีชุดสำหรับฤดูร้อน ฤดูฝน และฤดูหนาว',
    },
    body: { en: [], th: [] },
  },
  {
    id: 5,
    slug: 'wat-phra-kaew-art',
    category: 'culture',
    date: '2025-02-14',
    readMin: 9,
    title: {
      en: 'Wat Phra Kaew: A Canvas of Thai Sacred Art',
      th: 'วัดพระแก้ว: ผ้าใบแห่งศิลปะศักดิ์สิทธิ์ไทย',
    },
    summary: {
      en: 'The temple complex surrounding the Emerald Buddha is a masterpiece of traditional Thai architecture and mural painting, depicting scenes from the Ramakien epic.',
      th: 'บริเวณวัดที่ล้อมรอบพระแก้วมรกตเป็นผลงานชิ้นเอกของสถาปัตยกรรมไทยดั้งเดิมและภาพจิตรกรรมฝาผนัง ซึ่งแสดงฉากจากมหากาพย์รามเกียรติ์',
    },
    body: { en: [], th: [] },
  },
  {
    id: 6,
    slug: 'merit-making-pilgrimage',
    category: 'culture',
    date: '2025-04-05',
    readMin: 5,
    title: {
      en: 'Merit-Making Pilgrimages to the Sacred Image',
      th: 'การแสวงบุญเพื่อทำบุญกับพระพุทธรูปศักดิ์สิทธิ์',
    },
    summary: {
      en: 'For Thais and Buddhist devotees worldwide, visiting the Emerald Buddha is a deeply spiritual act. Learn about the offerings, prayers, and cultural etiquette observed at Wat Phra Kaew.',
      th: 'สำหรับชาวไทยและผู้ศรัทธาในพระพุทธศาสนาทั่วโลก การมาเยือนพระแก้วมรกตเป็นการกระทำทางจิตวิญญาณที่ลึกซึ้ง เรียนรู้เกี่ยวกับเครื่องสักการะ การอธิษฐาน และมารยาทวัฒนธรรมที่ปฏิบัติ ณ วัดพระแก้ว',
    },
    body: { en: [], th: [] },
  },

  // ── Thai Society ─────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: 'national-palladium',
    category: 'thai-society',
    date: '2025-01-30',
    readMin: 6,
    title: {
      en: 'The National Palladium: Identity and Sovereignty',
      th: 'ปัลลาเดียมแห่งชาติ: อัตลักษณ์และอำนาจอธิปไตย',
    },
    summary: {
      en: 'The Emerald Buddha is more than a religious object — it is a symbol of Thai sovereignty and national unity. Explore its role in shaping modern Thai identity and statecraft.',
      th: 'พระแก้วมรกตมิใช่เพียงวัตถุทางศาสนาเท่านั้น แต่ยังเป็นสัญลักษณ์แห่งอำนาจอธิปไตยและความเป็นเอกภาพของชาติไทย สำรวจบทบาทในการหล่อหลอมอัตลักษณ์และรัฐกิจไทยสมัยใหม่',
    },
    body: { en: [], th: [] },
  },
  {
    id: 8,
    slug: 'monarchy-and-the-emerald-buddha',
    category: 'thai-society',
    date: '2025-03-01',
    readMin: 7,
    title: {
      en: 'The Monarchy and the Sacred Jewel of the Realm',
      th: 'สถาบันพระมหากษัตริย์และแก้วศักดิ์สิทธิ์แห่งแผ่นดิน',
    },
    summary: {
      en: 'From coronation ceremonies to royal prayers for rain, the Emerald Buddha sits at the intersection of Thai monarchy and spiritual power. Understand this unique constitutional relationship.',
      th: 'ตั้งแต่พระราชพิธีบรมราชาภิเษกจนถึงพระราชพิธีขอฝน พระแก้วมรกตอยู่ ณ จุดตัดระหว่างสถาบันพระมหากษัตริย์ไทยและอำนาจทางจิตวิญญาณ ทำความเข้าใจความสัมพันธ์ตามรัฐธรรมนูญอันเป็นเอกลักษณ์นี้',
    },
    body: { en: [], th: [] },
  },
  {
    id: 9,
    slug: 'emerald-buddha-in-everyday-thai-life',
    category: 'thai-society',
    date: '2025-04-18',
    readMin: 5,
    title: {
      en: 'The Emerald Buddha in Everyday Thai Life',
      th: 'พระแก้วมรกตในชีวิตประจำวันของชาวไทย',
    },
    summary: {
      en: 'Beyond the palace walls, the Emerald Buddha\'s image appears in homes, amulets, and festivals. Discover how this sacred icon permeates the daily spiritual life of ordinary Thai citizens.',
      th: 'นอกจากพระบรมมหาราชวังแล้ว ภาพพระแก้วมรกตยังปรากฏในบ้านเรือน เครื่องรางของขลัง และงานเทศกาลต่าง ๆ ค้นพบว่าพระพุทธรูปศักดิ์สิทธิ์นี้แทรกซึมอยู่ในชีวิตประจำวันของชาวไทยทั่วไปอย่างไร',
    },
    body: { en: [], th: [] },
  },
]

export function getPostsByCategory(category: Category): Post[] {
  return posts.filter((p) => p.category === category)
}
