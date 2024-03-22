import React from "react";

async function getData(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}`);
  return res.json();
}

// slug adalah bagian dari url yang dapat berubah-ubah
export default async function DetailSearch({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);
  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
