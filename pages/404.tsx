import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div>
      <div className="not-found">
        <h1>warning......</h1>
        <h2>That page cannot be found:</h2>
        <p>
          Going back to the{" "}
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          is 3 seconds...
        </p>
      </div>
    </div>
  );
}
