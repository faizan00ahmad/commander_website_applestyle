"use client";

import { useState } from "react";
import ProductSearch from "./ProductSearch";
import CatalogueGrid from "./CatalogueGrid";

export default function CatalogueSection() {
  const [query, setQuery] = useState("");

  return (
    <>
      <ProductSearch query={query} onQueryChange={setQuery} />
      <CatalogueGrid query={query} />
    </>
  );
}
