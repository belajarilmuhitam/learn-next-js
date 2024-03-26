"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function Search() {
  const [query, setQuery] = useState("");

  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" placeholder="cari user github" />
        <button type="submit">cari orang</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
