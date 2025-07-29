import { Swords } from "lucide-react";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="w-screen bg-neutral-950 border-b-2 border-neutral-800 fixed top-0 left-0 z-1000000 flex items-center">
      <Link
        className="p-5 border-r-2 border-neutral-800 w-fit h-full"
        href={"/"}
      >
        <Swords className="text-neutral-300" />
      </Link>
      <input
        type="text"
        placeholder="Search anything.."
        className="px-5 w-full outline-0"
      />
    </header>
  );
}
