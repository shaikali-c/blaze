"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavChild({ text, url }) {
  const [active, setActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName === url);
  }, [pathName]);
  return (
    <Link
      href={url}
      className={`hover:underline hover:text-neutral-300 ${
        active ? "underline text-neutral-300" : ""
      }`}
    >
      {text}
    </Link>
  );
}
