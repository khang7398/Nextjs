import Head from "next/head";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function aboutList({ data }: any) {
  return (
    <>
      <Head>
        <meta name="keywords" content="User"></meta>
      </Head>
      <div>
        <h1>All User</h1>
        {data.map((item: any) => (
          <Link href={{ pathname: `/user/${item.id}` }} key={item.id}>
            <a>
              <h3>{item.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
