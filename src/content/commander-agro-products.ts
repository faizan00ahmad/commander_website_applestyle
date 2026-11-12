export interface CommanderAgroProduct {
  name: string;
  slug: string;
  category: string;
  active: string;
  formulation: string;
  size: string;
}

export const commanderAgroBags: CommanderAgroProduct[] = [
  {
    name: "Azler",
    slug: "azler",
    category: "Fertilizer",
    active: "Ammonium Sulphate (21-0-0+24S)",
    formulation: "Granular",
    size: "50 kg",
  },
  {
    name: "Bosphorous",
    slug: "bosphorous",
    category: "Fertilizer",
    active: "Urea Phosphate (N:P:K = 17:44:00)",
    formulation: "Granular",
    size: "25 kg",
  },
  {
    name: "Commander Potash",
    slug: "commander-potash",
    category: "Fertilizer",
    active: "Sulphate of Potash (0-0-50+18S)",
    formulation: "Granular",
    size: "25 kg",
  },
  {
    name: "MAP",
    slug: "map",
    category: "Fertilizer",
    active: "Mono Ammonium Phosphate (12-61-0)",
    formulation: "Crystalline",
    size: "25 kg",
  },
  {
    name: "Nutrivit",
    slug: "nutrivit",
    category: "Fertilizer",
    active: "Ammonium Sulphate Horticultural Grade (21-0-0+60 SO₃)",
    formulation: "Granular",
    size: "25 kg",
  },
  {
    name: "Nutrivit SOP",
    slug: "nutrivit-sop",
    category: "Fertilizer",
    active: "Potassium Sulphate (SOP) Horticultural Grade (0-0-52+45 SO₃)",
    formulation: "Granular",
    size: "25 kg",
  },
  {
    name: "Orga Pell",
    slug: "orga-pell",
    category: "Organic Fertilizer",
    active: "Granular NPK (4-3-65 OM) — Van Iperen",
    formulation: "Pellet",
    size: "25 kg",
  },
  {
    name: "Urea Phosphate",
    slug: "urea-phosphate",
    category: "Fertilizer",
    active: "Urea Phosphate (17-44-0)",
    formulation: "Granular",
    size: "25 kg",
  },
];
