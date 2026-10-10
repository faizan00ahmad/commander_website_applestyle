export const site = {
  name: "Commander Group",
  tagline: "Quality within your reach",
  founded: 1996,
  address: "5A/5B Industrial Estate, Multan, Pakistan.",
  phones: ["+92 61 6514 060-61-62-63"],
  mobile: "+92-345-6320003",
  mobileContact: "Muhammad Saleem Akhter (GM Commander Petrogas Pvt. Ltd)",
  fax: "+92 61 6514 089",
  emails: ["info@comdgroup.com", "saleem.akhtar@comdgroup.com", "Usman@comdgroup.com"],
  facebook: "https://www.facebook.com/COMMANDERGROUPMULTAN",
  instagram: "https://www.instagram.com/commander_group/",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Chairman Message", href: "/chairman" },
  { label: "Companies", href: "/companies/commander-agro", children: true },
  { label: "Services", href: "/services" },
  { label: "Distributor", href: "/distributors" },
  { label: "Contact Us", href: "/contact" },
];

export type Company = {
  slug: string;
  name: string;
  short: string;
  sector: string;
  theme: "agro" | "gharbeen" | "petrogas" | "seeds" | "energy";
  logo?: string;
  cover: string;
  description: string[];
  facts: { label: string; value: string }[];
  gallery: string[];
  comingSoon?: boolean;
};

const agro = Array.from({ length: 12 }, (_, i) => `/img/commander-agro-${String(i + 1).padStart(2, "0")}-thumb.jpg`);
const gharbeen = [
  "Abriter", "AmmoniumSulphate", "Armata", "Asclon", "Brunu", "Crazon", "Culver", "Duxi", "Flemming",
  "Orgapell", "Pracon", "SOP", "Vertisol", "aragon", "calder", "flanker", "fletcher", "fonzer", "guderian",
  "konev", "panzer", "paulus", "ringbolt", "rommel", "sabre", "turma", "zulu", "feb-01-2021", "feb-02-2021",
].map((n) => `/img/${n}-thumb.jpg`);
const petro = ["petrogas", ...[2, 3, 4, 5, 6, 7, 8].map((n) => `petrogas-0${n}`)].map((n) => `/img/${n}-thumb.jpg`);

export const companies: Company[] = [
  {
    slug: "commander-agro",
    name: "Commander Agro (Pvt) Ltd.",
    short: "Commander Agro",
    sector: "Agro Chemicals",
    theme: "agro",
    logo: "/img/commander-agro-logo.png",
    cover: "/img/commander-agro-02-thumb.jpg",
    description: [
      "This firm is one of the leading importers & formulators for Pesticides, Fungicides, Rodenticides, Acaricides, Weedicides in Pakistan. Since its inception in 1996 the firm has progressed and emerged one of the growing conglomerates in Pakistan.",
      "It has state of the art formulation plants for liquid, powder and granule products in same composite locations having all equipped with computerized Refilling and Repacking systems for retail setup. The total area is 15 hectares having gigantic warehousing facilities of different kind of products.",
      "The state of the art R&D facilities provide added strength to the concept of quality products and for new developments. Our R&D department is headed by a team of professionals who are working tremendously hard in research based developments. In lieu of our competence we have been awarded ISO 17025 certification.",
    ],
    facts: [
      { label: "Established", value: "1996" },
      { label: "Site area", value: "15 hectares" },
      { label: "Certification", value: "ISO 17025" },
    ],
    gallery: agro,
  },
  {
    slug: "gharbeen",
    name: "Gharbeen (Pvt) Ltd.",
    short: "Gharbeen",
    sector: "Agro Chemicals · Retail",
    theme: "gharbeen",
    logo: "/img/gharbeen-logo.png",
    cover: "/img/Armata-thumb.jpg",
    description: [
      "This is our new venture for the retail setup under the flagship of its parent company Commander Agro (Pvt) Ltd. It has been started in 2011. Since its establishment we have registered many branded formulations having distinctive active ingredients.",
      "Because of growing demands in the market we have established 5 Regional and 50 territorial offices across Pakistan. This has helped our Field Sales Staff (FSS) and Field Training Staff (FTS) to enhance the probabilities of not only sales but to educate the farmers at their door step.",
      "These variety of training sessions are conducted on regular basis among farmers so that best application of products be attained, best yield of crops by giving them emergency training programs and above all to prepare them for emergency climate conditions in the eve of a catastrophe. So far this firm has achieved tremendous results in all sectors.",
    ],
    facts: [
      { label: "Started", value: "2011" },
      { label: "Regional offices", value: "5" },
      { label: "Territorial offices", value: "50" },
    ],
    gallery: gharbeen,
  },
  {
    slug: "commander-petrogas",
    name: "Commander Petrogas (Pvt) Ltd.",
    short: "Commander Petrogas",
    sector: "Petrogas · LPG",
    theme: "petrogas",
    logo: "/img/petrogas-logo.png",
    cover: "/img/petrogas-thumb.jpg",
    description: [
      "Plant site address: Commander Petrogas Private Limited, Plot 5-A, Industrial Estate, Multan.",
      "This firm was established in 2017. This firm is dealing with the import and distribution of Liquified Petroleum Gas (LPG) in all over Pakistan. The LPG Plant is located in the city of Multan. Around 300 MT can be stored per day which is then refilled in dedicated cylinders of our company to our retail outlets and authorized distributors.",
      "The average sales turnover per year is more than 9000 MT making the annual revenue of PKR 2.1 Billion. Our readily available sales staff covering from North to South has made it possible to achieve such tremendous growth in sales. Here at Commander Petrogas we believe in providing reputable services to our clients without compromising on quality and quantity. Our LPG facilities are the only in Pakistan having certifications of ISO 9000 and ISO 14000.",
    ],
    facts: [
      { label: "Established", value: "2017" },
      { label: "Storage", value: "300 MT / day" },
      { label: "Annual sales", value: "9000+ MT" },
      { label: "Annual revenue", value: "PKR 2.1 Billion" },
    ],
    gallery: petro,
  },
  {
    slug: "commander-seeds",
    name: "Commander Seeds (Pvt) Ltd.",
    short: "Commander Seeds",
    sector: "Seeds",
    theme: "seeds",
    cover: "/img/commander-agro-04-thumb.jpg",
    description: ["Commander Seeds (Pvt) Ltd. is part of Commander Group. Details of this company are coming soon."],
    facts: [],
    gallery: [],
    comingSoon: true,
  },
  {
    slug: "rafco-energy",
    name: "Rafco Energy (Pvt) Ltd.",
    short: "Rafco Energy",
    sector: "Energy",
    theme: "energy",
    cover: "/img/petrogas-05-thumb.jpg",
    description: ["Rafco Energy (Pvt) Ltd. is part of Commander Group. Details of this company are coming soon."],
    facts: [],
    gallery: [],
    comingSoon: true,
  },
];

export const vision =
  "Our vision is to be most customer oriented company; to build a diversified place and to discover the most based on our customer needs.";
export const mission = [
  "Maintain effective Quality Management System at large",
  "To be committed and Integrated",
  "Transparency & Efficiency in all our activities",
];

export const chairman = {
  name: "Mr. Rafique",
  role: "Chairman Commander Group",
  excerpt:
    "First of all I myself and all the people working at COMMANDER GROUP are highly obliged and grateful to Almighty ALLAH for the success and blessings bestowed on us since its establishment in 1996. I cannot help but regard with wonder the events that have transpired over 25 years of my association with this Group. Our Corporate Profile is much stronger today than ever in our past…",
  letter: [
    "First of all I myself and all the people working at COMMANDER GROUP are highly obliged and grateful to Almighty ALLAH for the success and blessings bestowed on us since its establishment in 1996. I cannot help but regard with wonder the events that have transpired over 25 years of my association with this Group. Our Corporate Profile is much stronger today than ever in our past. We do more for our clients than ever in our past. Today, we are better positioned to take advantage of the opportunities ahead of us than ever in our past. I am tremendously proud and privileged to serve as the Chairman of this Group. We embrace a strong foundation of commitment, integrity and excellence and are moving forward into an era of growth and opportunity by looking into the future where obstacles and challenges awaits us.",
    "Our dedication to innovate supports our commitment to be the partner of choice for our clients in all the diversified sectors in which COMMANDER Group is working. It is our goal to be adaptable, be responsive and accountable to our clients to meet their excessive needs. To do so, we will combine our professional skills, our diversity, our team-driven yet practical approach and our relentless pursuit of business objectives with a well-driven knowledge of today's industry. As we look ahead, we want to achieve more trust; a mandatory imperative of business on which our Group foundation is entrusted upon. This is our pledge to our customers and we will honour it. INSHA ALLAH.",
  ],
  regards: "With Warm Regards,",
  signer: "Choudhry Usman Rafique",
  signerRole: "CEO Commander Petrogas Pvt Ltd",
  bios: [
    {
      name: "Choudhry Usman Rafique",
      role: "CEO, Commander Petrogas (Pvt) Ltd.",
      paras: [
        "Choudhry Usman Rafique is a results-driven professional with over 20 years of extensive experience in the pesticides and petrochemical industries. As a forward-thinking leader, he has consistently demonstrated success in fostering innovation and championing the early adoption of emerging technologies and platforms within the sector.",
        "He holds a Bachelor's degree in Business and Information Technology from a reputable university in Australia, and further advanced his academic credentials with a Master's degree from a highly ranked university in England.",
        "Mr. Rafique is recognized for his strategic mindset, exceptional time management, and strong communication skills. His proven ability to build customer trust, lead dynamic teams, and drive organizational growth reflects his deep commitment to excellence. As CEO of Commander Petrogas (Pvt.) Ltd., he continues to focus on enhancing team performance, nurturing a positive corporate culture, and steering the company toward sustainable growth and innovation.",
      ],
    },
    {
      name: "Mrs. Samina Rafique",
      role: "Director",
      paras: [
        "Mrs. Samina Rafique is a distinguished philanthropist and a dedicated member of several leading national and international non-governmental organizations (NGOs). She holds a Bachelor's degree from a prestigious foreign university and brings over a decade of experience in management and social development.",
        "With a strong commitment to community welfare, Mrs. Rafique has actively contributed to numerous humanitarian initiatives, focusing on education, healthcare, and women's empowerment. Her leadership and vision have earned her recognition in both corporate and social sectors.",
        "She currently serves as the Director of Commander Petrogas (Pvt.) Ltd., a prominent petrochemical company based in Multan, where she plays a pivotal role in strategic planning and corporate governance.",
      ],
    },
  ],
};

export const awardsText =
  "You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.";

export const distributors = [
  ["Rana Gas", "Multan", "0302 7352908"],
  ["Al-Wasif Agency", "Multan", "0300 2957875"],
  ["Al-Fateh Gas Agency", "Multan", "0308 8214949"],
  ["BHATTI Gas Agency", "Multan", "0309 3304204"],
  ["M Iqbal Gas Agency", "Multan", "0300 1496401"],
  ["Qasim Gas Agency", "Multan", "0307 7465307"],
  ["Ahsan Gas Agency", "Multan", "0306 4540857"],
  ["Safi Gas Agency", "Multan", "0304 7230854"],
  ["Mughal Brother Gas Agency", "Multan", "0300 6304226"],
  ["Sultan Gas Agency", "Multan", "0304 3019273"],
];

export const corporate = [
  { key: "Agro Chemicals", slug: "commander-agro", text: companies[0].description[0] },
  { key: "Seeds", slug: "commander-seeds", text: companies[3].description[0] },
  { key: "Petrogas", slug: "commander-petrogas", text: companies[2].description[1] },
];

export const stats = [
  { value: 1996, label: "Year established", plain: true },
  { value: 25, suffix: "+", label: "Years of trust" },
  { value: 55, suffix: "", label: "Regional & territorial offices" },
  { value: 300, suffix: " MT", label: "LPG storage per day" },
  { value: 9000, suffix: "+ MT", label: "LPG sold every year" },
];
