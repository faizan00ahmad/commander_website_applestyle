export type GharbeenCategory = "Fungicide" | "Herbicide" | "Insecticide" | "Crop Nutrition" | "Soil Conditioner";

export type GharbeenProduct = {
  name: string;
  slug: string;
  category: GharbeenCategory;
  active: string;
  formulation: string;
  size: string;
  imgDir: "gharbeen-bottles" | "gharbeen-sachets";
};

export const gharbeenCategories: GharbeenCategory[] = [
  "Fungicide", "Herbicide", "Insecticide", "Crop Nutrition", "Soil Conditioner",
];

export const gharbeenProducts: GharbeenProduct[] = [
  // ── Fungicide ──
  { name: "Arado", slug: "arado", category: "Fungicide", active: "Azoxystrobin 20% + Difenoconazole 12.5%", formulation: "SC", size: "200 ml", imgDir: "gharbeen-bottles" },
  { name: "Protego", slug: "protego", category: "Fungicide", active: "Sulfur 35% + Chlorothalonil 15%", formulation: "SC", size: "400 ml", imgDir: "gharbeen-bottles" },
  { name: "Spankar", slug: "spankar", category: "Fungicide", active: "Tricyclazole 25% + Tebuconazole 50%", formulation: "WG", size: "65 gm", imgDir: "gharbeen-bottles" },
  { name: "Flemming", slug: "flemming", category: "Fungicide", active: "Kasugamycin 2% + Copper Oxychloride 45%", formulation: "WP", size: "250 gm", imgDir: "gharbeen-sachets" },
  { name: "Culver", slug: "culver", category: "Fungicide", active: "Cymoxanil 8% + Mancozeb 64%", formulation: "WP", size: "600 gm", imgDir: "gharbeen-sachets" },
  { name: "Panazole", slug: "panazole", category: "Fungicide", active: "Pyraclostrobin 8% + Tebuconazole 37%", formulation: "WP", size: "100 gm", imgDir: "gharbeen-sachets" },
  { name: "Protium", slug: "protium", category: "Fungicide", active: "Pyraclostrobin 5% + Metiram 55%", formulation: "WG", size: "600 gm", imgDir: "gharbeen-sachets" },
  { name: "Arbiter", slug: "arbiter", category: "Fungicide", active: "Metalaxyl 8% + Mancozeb 64%", formulation: "WP", size: "1 kg", imgDir: "gharbeen-sachets" },
  { name: "Max-Ct", slug: "max-ct", category: "Fungicide", active: "Chlorothalonil 64% + Metalaxyl 8%", formulation: "WP", size: "1 kg", imgDir: "gharbeen-sachets" },
  { name: "Wavell", slug: "wavell", category: "Fungicide", active: "Pyraclostrobin 6.7% + Dimethomorph 12%", formulation: "WG", size: "1 kg", imgDir: "gharbeen-sachets" },
  { name: "Zulu", slug: "zulu", category: "Fungicide", active: "Sulfur 80%", formulation: "WDG", size: "1 kg", imgDir: "gharbeen-sachets" },

  // ── Herbicide ──
  { name: "Cactus", slug: "cactus", category: "Herbicide", active: "S-Metolachlor 96%", formulation: "EC", size: "800 ml", imgDir: "gharbeen-bottles" },
  { name: "Cheval Super", slug: "cheval-super", category: "Herbicide", active: "Fluroxypyr Meptyl 12% + Florasulam 0.4% + MCPA 35.6%", formulation: "SC", size: "350 ml", imgDir: "gharbeen-bottles" },
  { name: "Cheval Ultra", slug: "cheval-ultra", category: "Herbicide", active: "Mesosulfuron Methyl + Florasulam + MCPA", formulation: "OD", size: "360 ml", imgDir: "gharbeen-bottles" },
  { name: "Fletcher", slug: "fletcher", category: "Herbicide", active: "Mesotrione 5% + Atrazine 50%", formulation: "SC", size: "800 ml", imgDir: "gharbeen-bottles" },
  { name: "Graminex", slug: "graminex", category: "Herbicide", active: "Quizalofop-P-Ethyl", formulation: "EC", size: "800 ml", imgDir: "gharbeen-bottles" },
  { name: "Marcus", slug: "marcus", category: "Herbicide", active: "Butachlor 60%", formulation: "EC", size: "800 ml", imgDir: "gharbeen-bottles" },
  { name: "Rafale", slug: "rafale", category: "Herbicide", active: "Haloxyfop-P-Methyl 10.8%", formulation: "EC", size: "500 ml", imgDir: "gharbeen-bottles" },
  { name: "Raincoat", slug: "raincoat", category: "Herbicide", active: "Glyphosate IPA 48%", formulation: "SL", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Rubicorn", slug: "rubicorn", category: "Herbicide", active: "Topramezone 30%", formulation: "SC", size: "35 ml", imgDir: "gharbeen-bottles" },
  { name: "Sanga", slug: "sanga", category: "Herbicide", active: "Mesosulfuron-Methyl 2.5% + Florasulam 1.5% + Fluroxypyr-Meptyl 22%", formulation: "OD", size: "150 gm", imgDir: "gharbeen-bottles" },
  { name: "Sky Bolt", slug: "sky-bolt", category: "Herbicide", active: "Bromoxynil 20% + MCPA 20%", formulation: "EC", size: "400 ml", imgDir: "gharbeen-bottles" },
  { name: "Spectre", slug: "spectre", category: "Herbicide", active: "Pendimethalin 33%", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Spectre Plus", slug: "spectre-plus", category: "Herbicide", active: "Pendimethalin + S-Metolachlor", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Spectre Plus Maroon", slug: "spectre-plus-maroon", category: "Herbicide", active: "Pendimethalin + S-Metolachlor", formulation: "EC", size: "800 ml", imgDir: "gharbeen-bottles" },
  { name: "Clodinafop", slug: "clodinafop", category: "Herbicide", active: "Clodinafop Propargyl", formulation: "WP", size: "160 gm", imgDir: "gharbeen-sachets" },
  { name: "Gazonophate", slug: "gazonophate", category: "Herbicide", active: "Glyphosate Ammonium", formulation: "WG", size: "500 gm", imgDir: "gharbeen-sachets" },
  { name: "Maginot", slug: "maginot", category: "Herbicide", active: "Bispyribac Sodium 18% + Bensulfuron Methyl 12%", formulation: "WDG", size: "100 gm", imgDir: "gharbeen-sachets" },
  { name: "Marcus", slug: "marcus", category: "Herbicide", active: "Metribuzin 70%", formulation: "WP", size: "250 gm", imgDir: "gharbeen-sachets" },
  { name: "Metribuzin", slug: "metribuzin", category: "Herbicide", active: "Metribuzin", formulation: "WP", size: "100 gm", imgDir: "gharbeen-sachets" },
  { name: "Growler", slug: "growler", category: "Herbicide", active: "Metsulfuron Methyl 20%", formulation: "WG", size: "20 gm", imgDir: "gharbeen-sachets" },

  // ── Insecticide ──
  { name: "Armata", slug: "armata", category: "Insecticide", active: "Cypermethrin 15%", formulation: "EC", size: "500 ml", imgDir: "gharbeen-bottles" },
  { name: "Calder", slug: "calder", category: "Insecticide", active: "Emamectin Benzoate 4% + Chlorantraniliprole 12%", formulation: "SC", size: "100 ml", imgDir: "gharbeen-bottles" },
  { name: "Ceedo", slug: "ceedo", category: "Insecticide", active: "Clothianidin 20%", formulation: "SC", size: "200 ml", imgDir: "gharbeen-bottles" },
  { name: "Flanker", slug: "flanker", category: "Insecticide", active: "Chlorpyrifos 40%", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Fonzer", slug: "fonzer", category: "Insecticide", active: "Lufenuron 5%", formulation: "EC", size: "400 ml", imgDir: "gharbeen-bottles" },
  { name: "Guderian", slug: "guderian", category: "Insecticide", active: "Imidacloprid + Lambda Cyhalothrin 2.5%", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Himmler", slug: "himmler", category: "Insecticide", active: "Emamectin Benzoate 1.9%", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Nugent", slug: "nugent", category: "Insecticide", active: "Fipronil 5%", formulation: "SC", size: "480 ml", imgDir: "gharbeen-bottles" },
  { name: "Paracon", slug: "paracon", category: "Insecticide", active: "Buprofezin 20%", formulation: "SL", size: "1 Ltr", imgDir: "gharbeen-bottles" },
  { name: "Ponza", slug: "ponza", category: "Insecticide", active: "Triazophos 20% + Lambda Cyhalothrin 1%", formulation: "EC", size: "800 ml", imgDir: "gharbeen-bottles" },
  { name: "Ring Bolt", slug: "ring-bolt", category: "Insecticide", active: "Bifenthrin 10%", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Rommel", slug: "rommel", category: "Insecticide", active: "Flubendiamide 50%", formulation: "WG", size: "120 gm", imgDir: "gharbeen-bottles" },
  { name: "Rossio", slug: "rossio", category: "Insecticide", active: "Emamectin Benzoate 1% + Lufenuron 2%", formulation: "SC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Sabre", slug: "sabre", category: "Insecticide", active: "Diafenthiuron 50%", formulation: "SC", size: "400 ml", imgDir: "gharbeen-bottles" },
  { name: "Sherminator", slug: "sherminator", category: "Insecticide", active: "Chlorfenapyr + Emamectin Benzoate", formulation: "OD", size: "360 ml", imgDir: "gharbeen-bottles" },
  { name: "Stud", slug: "stud", category: "Insecticide", active: "Clothianidin 25% + Metalaxyl-M 0.3% + Fludioxonil 0.7%", formulation: "FC", size: "80 ml", imgDir: "gharbeen-bottles" },
  { name: "Turma", slug: "turma", category: "Insecticide", active: "Abamectin 1.8%", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Turma Plus", slug: "turma-plus", category: "Insecticide", active: "Abamectin + Emamectin Benzoate", formulation: "EC", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "Cobalt", slug: "cobalt", category: "Insecticide", active: "Monomehypo 5%", formulation: "GR", size: "7 kg", imgDir: "gharbeen-sachets" },
  { name: "Aragon", slug: "aragon", category: "Insecticide", active: "Acetamiprid 20%", formulation: "SP", size: "250 gm", imgDir: "gharbeen-sachets" },
  { name: "Bruno", slug: "bruno", category: "Insecticide", active: "Buprofezin 25%", formulation: "WP", size: "900 gm", imgDir: "gharbeen-sachets" },
  { name: "Calder Ultra", slug: "calder-ultra", category: "Insecticide", active: "Chlorantraniliprole 0.23% + Thiamethoxam 0.46%", formulation: "G", size: "100 gm", imgDir: "gharbeen-sachets" },
  { name: "Galarich", slug: "galarich", category: "Insecticide", active: "Dinotefuran 20%", formulation: "SG", size: "120 gm", imgDir: "gharbeen-sachets" },
  { name: "Galarich Gold", slug: "galarich-gold", category: "Insecticide", active: "Pymetrozine 40% + Dinotefuran 20%", formulation: "WG", size: "120 gm", imgDir: "gharbeen-sachets" },
  { name: "Konev", slug: "konev", category: "Insecticide", active: "Imidacloprid 25%", formulation: "WP", size: "200 gm", imgDir: "gharbeen-sachets" },
  { name: "MacArthur", slug: "macarthur", category: "Insecticide", active: "Emamectin Benzoate 5%", formulation: "WDG", size: "100 gm", imgDir: "gharbeen-sachets" },
  { name: "Nugent Gold", slug: "nugent-gold", category: "Insecticide", active: "Fipronil 0.3% + Emamectin Benzoate 0.05%", formulation: "GR", size: "200 gm", imgDir: "gharbeen-sachets" },
  { name: "Nugent Plus", slug: "nugent", category: "Insecticide", active: "Fipronil 0.4%", formulation: "G", size: "6 kg", imgDir: "gharbeen-sachets" },
  { name: "Paulus", slug: "paulus", category: "Insecticide", active: "Nitenpyram 50%", formulation: "WDG", size: "50 gm", imgDir: "gharbeen-sachets" },
  { name: "Revolt", slug: "revolt", category: "Insecticide", active: "Trichlorfon 80%", formulation: "SP", size: "60 gm", imgDir: "gharbeen-sachets" },

  // ── Crop Nutrition ──
  { name: "Growval", slug: "growval", category: "Crop Nutrition", active: "Potash (K₂O) 30%", formulation: "Liquid", size: "1000 ml", imgDir: "gharbeen-bottles" },
  { name: "ZineLys", slug: "zinelys", category: "Crop Nutrition", active: "Zinc (Zn) 27%", formulation: "Granular", size: "3 kg", imgDir: "gharbeen-sachets" },
  { name: "Kingo", slug: "kingo", category: "Crop Nutrition", active: "EDTA Chelated Zinc", formulation: "Powder", size: "1 kg", imgDir: "gharbeen-sachets" },

  // ── Soil Conditioner ──
  { name: "Adjoint", slug: "adjoint", category: "Soil Conditioner", active: "Adjuvant Megamount", formulation: "Liquid", size: "160 ml", imgDir: "gharbeen-bottles" },
  { name: "Mingo", slug: "mingo", category: "Soil Conditioner", active: "Potassium Humate", formulation: "Solid", size: "100 gm", imgDir: "gharbeen-sachets" },
];

export function gharbeenByCategory(cat: GharbeenCategory): GharbeenProduct[] {
  return gharbeenProducts.filter((p) => p.category === cat);
}

// Legacy exports for backward compatibility
export const gharbeenBottles = gharbeenProducts.filter((p) => p.imgDir === "gharbeen-bottles");
export const gharbeenSachets = gharbeenProducts.filter((p) => p.imgDir === "gharbeen-sachets");
