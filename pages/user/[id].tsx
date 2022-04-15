import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import * as React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

const PostDetail = ({ data }: any) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.address.street}</h1>
    </div>
  );
};

export default PostDetail;
