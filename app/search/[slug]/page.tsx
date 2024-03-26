import React, { Suspense } from "react";

async function getDataUser(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}`);
  return res.json();
}

async function getDataRepos(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}/repos`);
  return res.json();
}

const RepoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);
  return (
    <>
      <p>List Repositiry</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

// slug adalah bagian dari url yang dapat berubah-ubah
export default async function DetailSearch({
  params,
}: {
  params: { slug: string };
}) {
  const dataUser = await getDataUser(params.slug);

  // bisa  pakai cara ini untuk asychronus get data barengan
  // const [user, repos] = await Promise.all([dataUser, dataRepos]);

  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>
      <br className="mx-50" />
      <Suspense fallback={<div>Sedang mengambil Repository....</div>}>
        <RepoList slug={params.slug} />
      </Suspense>
    </div>
  );
}
