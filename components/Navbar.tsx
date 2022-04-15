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
        <Link href="/user/">
          <a>user</a>
        </Link>
        <Link href="/comments/">
          <a>comment</a>
        </Link>
      </div>
    </nav>
  );
}
