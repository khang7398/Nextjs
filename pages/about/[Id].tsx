import { GetStaticPaths } from "next";
import { useRouter } from "next/router";

import * as React from "react";

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ context }: any) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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
      <h1>{data.address}</h1>
    </div>
  );
};

export default PostDetail;
