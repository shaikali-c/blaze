import { Equal, Swords } from "lucide-react";

export default function Header() {
  return (
    <header className="w-screen bg-neutral-950 border-b-2 border-neutral-800 sticky top-0 left-0 z-1000000 flex">
      <h2 className="p-5 border-r-2 border-neutral-800 w-fit h-full">
        <Swords className="text-neutral-300" />
      </h2>
      <input
        type="text"
        placeholder="Search anything.."
        className="px-5 w-full outline-0"
      />
      <h2 className="p-5 border-l-2 border-neutral-800 w-fit h-full">
        <Equal className="text-neutral-300" />
      </h2>
    </header>
  );
}
