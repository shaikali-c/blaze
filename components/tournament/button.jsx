import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function Button({ active }) {
  const baseClasses = "p-2 rounded-xl text-xs px-5 flex items-center gap-1";
  const activeClasses =
    "bg-neutral-200 text-neutral-950 hover:underline cursor-pointer";
  const inactiveClasses = "bg-neutral-700 text-neutral-200 cursor-not-allowed";
  if (active) {
    return (
      <Link
        className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
        href={"/match"}
      >
        JOIN NOW
        <ArrowUpRight size={15} />
      </Link>
    );
  } else {
    return (
      <span className={`${baseClasses} ${inactiveClasses}`} href={"/match"}>
        MAX MEMBERS REACHED
      </span>
    );
  }
}
