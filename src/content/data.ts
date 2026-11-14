export const site = {
  name: "Commander Group",
  tagline: "Built on Experience. Driven by Expertise. Connected to Progress.",
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
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies", children: true },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export type Company = {
  slug: string;
  name: string;
  short: string;
  sector: string;
  theme: string;
  logo?: string;
  cover: string;
  tagline?: string;
  description: string[];
  facts: { label: string; value: string }[];
  products: { name: string; image: string }[];
  gallery: string[];
  comingSoon?: boolean;
  capabilities?: string[];
  audiences?: string[];
};

const agro = Array.from({ length: 12 }, (_, i) => `/img/commander-agro-${String(i + 1).padStart(2, "0")}-thumb.jpg`);
const gharbeenImgs = [
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
    sector: "Agro Chemicals · Manufacturing",
    theme: "agro",
    logo: "/img/commander-agro-logo-new.webp",
    cover: "/img/commander-agro-02.jpg",
    tagline: "The Formulation Strength Behind Productive Agriculture",
    description: [
      "Founded in 1996, Commander Agro (Pvt.) Ltd. is the manufacturing and formulation cornerstone of Commander Group. The company operates across agrochemical importation and formulation, including herbicides, insecticides and fungicides.",
      "Its established liquid, powder and granular formulation capabilities help bridge technical inputs and market-ready agricultural solutions.",
      "From technical sourcing to formulated crop protection, Commander Agro brings industrial capability to the heart of Pakistan's agricultural value chain.",
    ],
    facts: [
      { label: "Established", value: "1996" },
      { label: "Site area", value: "15 hectares" },
      { label: "Certification", value: "ISO 17025" },
    ],
    products: [
      { name: "Pesticides", image: "/img/commander-agro-01.jpg" },
      { name: "Fungicides", image: "/img/commander-agro-03.jpg" },
      { name: "Weedicides", image: "/img/commander-agro-05.jpg" },
    ],
    gallery: agro,
    capabilities: ["Formulation expertise", "Technical sourcing", "Crop-protection portfolio", "Industrial handling & packaging"],
    audiences: ["Importers & international principals", "Agricultural distributors", "Institutional buyers"],
  },
  {
    slug: "gharbeen",
    name: "Gharbeen (Pvt) Ltd.",
    short: "Gharbeen",
    sector: "Agro Chemicals · Distribution",
    theme: "gharbeen",
    logo: "/img/gharbeen-logo-new.webp",
    cover: "/img/Armata.jpg",
    tagline: "From Product Innovation to Farmer Adoption",
    description: [
      "Established in 2011, Gharbeen (Pvt.) Ltd. is the market-facing agricultural business of Commander Group. It builds the commercial bridge between agricultural products and farming communities through distribution relationships, field engagement, product education and market development.",
      "Its proposition is not simply selling inputs, but making agricultural solutions accessible, understandable and relevant to growers' needs.",
      "With 5 regional hubs and over 50 territorial offices, our field teams educate farmers at their doorstep, delivering knowledge alongside every product.",
    ],
    facts: [
      { label: "Launched", value: "2011" },
      { label: "Regional hubs", value: "5" },
      { label: "Field offices", value: "50+" },
    ],
    products: [
      { name: "Armata", image: "/img/Armata.jpg" },
      { name: "Flanker", image: "/img/flanker.jpg" },
      { name: "Rommel", image: "/img/rommel.jpg" },
    ],
    gallery: gharbeenImgs,
    capabilities: ["Dealer relationships", "Field sales", "Farmer engagement", "Product awareness", "Crop nutrition & soil-support portfolio"],
    audiences: ["Farmers", "Agro-dealers", "Distributors", "Regional agricultural markets"],
  },
  {
    slug: "gharbeen-seeds",
    name: "Commander Seeds (Pvt) Ltd.",
    short: "Commander Seeds",
    sector: "Seeds · Agriculture",
    theme: "seeds",
    logo: "/img/gharbeen-seeds-logo.webp",
    cover: "/img/commander-agro-04.jpg",
    tagline: "Strong Beginnings for Tomorrow's Harvests",
    description: [
      "Commander Seeds (Pvt.) Ltd. focuses on the role of seed choice, crop establishment and agricultural productivity. The seed is the first decision in a successful crop journey.",
      "Our seed categories, sourcing arrangements and quality procedures are designed to deliver proven performance in Pakistan's diverse agro-ecological zones.",
      "Engineered for higher yields, stronger disease resistance and climate adaptability across Pakistan's most important crops: wheat, cotton, rice and maize.",
    ],
    facts: [
      { label: "Division of", value: "Commander Group" },
      { label: "Focus", value: "Certified Seeds" },
      { label: "Coverage", value: "Nationwide" },
    ],
    products: [
      { name: "Wheat Seeds", image: "/img/commander-agro-04.jpg" },
      { name: "Cotton Seeds", image: "/img/commander-agro-06.jpg" },
      { name: "Rice Seeds", image: "/img/commander-agro-08.jpg" },
    ],
    gallery: [],
    capabilities: ["Seed categories", "Quality approach", "Crop suitability", "Dealer access"],
    audiences: ["Growers", "Agricultural dealers", "Seed-sector partners"],
  },
  {
    slug: "mak-ag",
    name: "MAK AG",
    short: "MAK AG",
    sector: "Agricultural Solutions",
    theme: "agro",
    cover: "/img/commander-agro-10.jpg",
    description: [
      "A next-generation agri-solutions company bridging the gap between cutting-edge science and on-the-ground farming across Pakistan.",
      "MAK AG delivers advanced crop-protection formulations, precision-agriculture consulting, and integrated pest-management programs tailored to South Asian conditions.",
      "From soil health diagnostics to harvest optimization, we empower farmers with the tools and knowledge to grow more with less.",
    ],
    facts: [
      { label: "Part of", value: "Commander Group" },
      { label: "Focus", value: "Precision Agri" },
      { label: "Reach", value: "All Pakistan" },
    ],
    products: [
      { name: "Crop Protection", image: "/img/commander-agro-09.jpg" },
      { name: "Growth Enhancers", image: "/img/commander-agro-10.jpg" },
      { name: "Soil Solutions", image: "/img/commander-agro-11.jpg" },
    ],
    gallery: [],
    capabilities: ["Advanced crop-protection formulations", "Precision-agriculture consulting", "Integrated pest management", "Soil health diagnostics"],
    audiences: ["Progressive farmers", "Agricultural consultants", "Institutional buyers"],
  },
  {
    slug: "commander-petrogas",
    name: "Commander Petrogas (Pvt) Ltd.",
    short: "Commander Petrogas",
    sector: "Energy · LPG",
    theme: "petrogas",
    logo: "/img/petrogas-logo-new.webp",
    cover: "/img/petrogas.jpg",
    tagline: "Energy Delivered with Operational Confidence",
    description: [
      "Established in 2017, Commander Petrogas (Pvt.) Ltd. is Commander Group's LPG-focused enterprise, operating from Multan. Its business encompasses LPG handling, storage, cylinder filling and distribution.",
      "In a market where reliable availability, safe handling and effective distribution matter, the company positions its infrastructure and operational discipline as the foundation of dependable service.",
      "With 9,000+ MT in annual sales and PKR 2.1 Billion in revenue, we hold the distinction of being Pakistan's only LPG facility with both ISO 9000 and ISO 14000 certifications.",
    ],
    facts: [
      { label: "Established", value: "2017" },
      { label: "Daily capacity", value: "300 MT" },
      { label: "Annual volume", value: "9,000+ MT" },
      { label: "Revenue", value: "PKR 2.1B" },
    ],
    products: [
      { name: "LPG Cylinders", image: "/img/petrogas.jpg" },
      { name: "Bulk Supply", image: "/img/petrogas-03.jpg" },
      { name: "Distribution", image: "/img/petrogas-05.jpg" },
    ],
    gallery: petro,
    capabilities: ["LPG storage & handling", "Domestic & commercial cylinder filling", "Distribution coordination", "Operational safety focus"],
    audiences: ["LPG distributors", "Hospitality & commercial buyers", "Domestic supply channels"],
  },
  {
    slug: "rafco-energy",
    name: "Rafco Energy (Pvt) Ltd.",
    short: "Rafco Energy",
    sector: "Energy · Infrastructure",
    theme: "energy",
    logo: "/img/rafco-energy-logo.webp",
    cover: "/img/petrogas-05.jpg",
    tagline: "Built for Opportunity in a Changing Energy Landscape",
    description: [
      "Rafco Energy (Pvt.) Ltd. is a focused identity for energy-sector ambition, backed by the values of Commander Group.",
      "A disciplined, forward-looking energy company positioned to capitalize on opportunities across Pakistan's evolving energy landscape.",
      "We are committed to expanding energy access, improving supply-chain efficiency, and delivering sustainable solutions for Pakistan's rapidly growing energy market.",
    ],
    facts: [
      { label: "Part of", value: "Commander Group" },
      { label: "Sector", value: "Energy" },
      { label: "Focus", value: "Infrastructure" },
    ],
    products: [
      { name: "Energy Trading", image: "/img/petrogas-06.jpg" },
      { name: "Distribution", image: "/img/petrogas-07.jpg" },
      { name: "Infrastructure", image: "/img/petrogas-08.jpg" },
    ],
    gallery: [],
    capabilities: ["Energy-sector operations", "Infrastructure development", "Strategic partnerships", "Market development"],
    audiences: ["Energy-sector counterparties", "Prospective partners", "Institutional investors"],
  },
];

export const vision =
  "To be Pakistan's most customer-centric conglomerate: a diversified enterprise that anticipates needs, pioneers solutions, and delivers unmatched value across agriculture and energy.";
export const mission = [
  "Uphold world-class quality management across every product line",
  "Foster innovation through integrated R&D and strategic partnerships",
  "Operate with full transparency, accountability and efficiency at every level",
];

export const chairman = {
  name: "Late Mr. Rafique",
  role: "Chairman | Commander Group",
  memorial: "In Loving Memory of Late Mr. Rafique",
  memorialNote:
    "The following message reflects the vision, values, and enduring legacy of our respected Chairman, Late Mr. Rafique, whose leadership laid the foundation for Commander Group’s continued success.",
  excerpt:
    "With profound gratitude to Almighty Allah, I reflect on the journey of Commander Group since its establishment in 1996. What began with a clear vision and a determination to serve has grown into a diversified group of businesses, built on the enduring values of integrity, commitment and excellence.",
  letter: [
    "With profound gratitude to Almighty Allah, I reflect on the journey of Commander Group since its establishment in 1996. What began with a clear vision and a determination to serve has grown into a diversified group of businesses, built on the enduring values of integrity, commitment and excellence. Every milestone reflects the dedication of our people, the confidence of our customers and partners, and the trust placed in us over the years.",
    "Our progress is measured not simply by the scale of our operations, but by the value we create and the relationships we sustain. Across agriculture, seeds and energy, we remain focused on understanding evolving customer needs, delivering dependable solutions and raising the standards by which we operate. We recognize that lasting success must be earned every day through responsible decisions, consistent performance and an unwavering commitment to quality.",
    "As industries evolve and new opportunities emerge, we are determined to move forward with ambition and discipline. We will continue to invest in our people, embrace meaningful innovation, strengthen operational excellence and build partnerships founded on transparency and mutual respect. Challenges will inevitably arise, but our shared purpose and collective capabilities give us confidence in the future.",
    "Above all, trust remains the foundation of Commander Group. To our customers, business partners, employees and stakeholders, I reaffirm our commitment to act with integrity, honor our responsibilities and pursue sustainable growth that creates lasting value. With the blessings of Almighty Allah, we look forward to the next chapter of progress and shared success. Insha’Allah.",
  ],
  regards: "With warm regards,",
  signer: "Late Mr. Rafique",
  signerRole: "",
  bios: [
    {
      name: "Choudhry Usman Rafique",
      role: "Chief Executive Officer | Commander Petrogas (Pvt.) Ltd.",
      image: "/img/ceo.gif",
      paras: [
        "At Commander Petrogas, our ambition is to build an organization recognized for reliability, forward-thinking leadership and lasting customer relationships. In a rapidly changing business environment, success depends on our ability to anticipate market needs, respond decisively and consistently deliver on our commitments.",
        "With more than two decades of experience across the pesticides and petrochemical industries, I have seen firsthand how innovation, disciplined execution and the early adoption of relevant technologies can transform businesses. My academic background in Business and Information Technology, including undergraduate studies in Australia and postgraduate studies in England, has further shaped my belief in combining sound business judgment with modern systems and data-driven decision-making.",
        "Our priorities are clear: operational excellence, a strong culture of accountability, the continuous development of our people and an unwavering focus on customer confidence. I believe that high-performing teams are built through open communication, mutual respect and a shared commitment to measurable results.",
        "As we advance, we will remain focused on strengthening our capabilities, pursuing responsible growth and creating enduring value for our customers, employees and stakeholders. Together, we aim to shape a resilient, innovative and trusted future for Commander Petrogas.",
      ],
    },
    {
      name: "Mrs. Samina Rafique",
      role: "Director | Commander Petrogas (Pvt.) Ltd.",
      image: "/img/ceo.gif",
      paras: [
        "Mrs. Samina Rafique brings a thoughtful combination of corporate leadership, management experience and a longstanding commitment to social responsibility to her role as Director of Commander Petrogas (Pvt.) Ltd.",
        "A graduate of an overseas university, she has more than a decade of experience in management and social development. Her involvement with national and international non-governmental organizations reflects a sustained dedication to community welfare, with particular interests in education, healthcare and women’s empowerment.",
        "Her approach to leadership is grounded in the belief that sound governance and responsible business practices are essential to long-term organizational success. At Commander Petrogas, she contributes to strategic planning and corporate governance, supporting the company’s commitment to accountability, sustainable progress and stakeholder confidence.",
        "Through her professional and philanthropic endeavors, Mrs. Rafique continues to champion a vision of leadership that connects business performance with positive and meaningful social impact.",
      ],
    },
    {
      name: "Mrs. Zoya Usman",
      role: "Director | Commander Petrogas (Pvt.) Ltd.",
      image: "/img/ceo.gif",
      paras: [
        "At Commander Petrogas, we believe that lasting success is built on a clear vision, the confidence of our customers, and an unwavering commitment to safety, quality, and service. As we look toward the future, our aspiration is to take the strength of our existing operations beyond the plant and closer to the communities and businesses we serve.",
        "A key part of this vision is the planned expansion of our retail presence through a network of Commander Petrogas-branded LPG outlets and distribution points, developed in phases as market opportunities, regulatory approvals, and operational readiness allow. We envision modern, accessible facilities that uphold rigorous safety standards, deliver dependable service, and make quality energy solutions more convenient for households, commercial customers, and industry.",
        "Our growth strategy will be guided by responsible investment, capable teams, strong partnerships, and the adoption of efficient technologies. Each step forward will reflect our commitment to customer trust, regulatory compliance, environmental responsibility, and sustainable long-term value.",
        "I am confident that, with the dedication of our people and the continued support of our stakeholders, Commander Petrogas can establish a stronger market presence and contribute meaningfully to Pakistan’s evolving energy needs. Together, we aim to turn this vision into a legacy of progress, reliability, and shared prosperity.",
      ],
    },
  ],
};

export const testimonials = [
  { name: "Muhammad Aslam", role: "Farmer, Multan", text: "My cotton yield jumped 30% after switching to Commander Agro. Their field training sessions changed the way I approach crop protection. I wouldn't go back." },
  { name: "Haji Bashir Ahmed", role: "Distributor, Lahore", text: "In 12 years of partnership with Gharbeen, I've never had a quality complaint from a single farmer. Their field support team is the best in Pakistan, hands down." },
  { name: "Abdul Rehman", role: "Retailer, Faisalabad", text: "Commander Petrogas delivers on time, every time. In an industry full of supply gaps, their consistency has made them my most trusted energy partner." },
];

export const videoTestimonials = [
  { id: "2731135244007692", title: "Farmer Testimonial: Field Results" },
  { id: "698635022663553", title: "Farmer Feedback: Crop Protection" },
  { id: "3987702088130322", title: "Farmer Review: Product Performance" },
];

export const stats = [
  { value: 1996, label: "Year Established", plain: true },
  { value: 25, suffix: "+", label: "Years of Trust" },
  { value: 55, suffix: "", label: "Offices Nationwide" },
  { value: 9000, suffix: "+ MT", label: "LPG Sold Yearly" },
];

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
