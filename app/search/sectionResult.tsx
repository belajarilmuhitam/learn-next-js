import error from "../error";
import React from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  query: string;
}

export default function SectionResult({ query }: Props) {
  const { data } = useSWR(`https://api.github.com/users/${query}`, fetcher);
  var loading = !data && !error;
  return (
    <div style={{ marginTop: "10px" }}>
      <p>Hasil Pencarian : {query}</p>
      <div>
        {loading && "Tunggu Sebentar..."}
        {JSON.stringify(data)}
      </div>
    </div>
  );
}
