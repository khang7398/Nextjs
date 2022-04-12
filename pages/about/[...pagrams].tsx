import { useRouter } from "next/router";
import * as React from "react";

type Props = {};

const ParamDetail = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <h1>Params detail pages</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default ParamDetail;
