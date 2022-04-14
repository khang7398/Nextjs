import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about/">
          <a>about</a>
        </Link>
      </div>
    </nav>
  );
}
