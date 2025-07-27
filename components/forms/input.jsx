import { LockKeyhole, Mail } from "lucide-react";

export default function Input({ placeholder, type, reference }) {
  return (
    <div className="flex items-center gap-1.5 border-b-2 border-neutral-700">
      {type === "password" && <LockKeyhole color="#a1a1a1" className="ml-3" />}
      {type === "text" && <Mail color="#a1a1a1" className="ml-3" />}
      <input
        type={type}
        placeholder={placeholder}
        ref={reference}
        className="outline-0 w-full px-3 py-3.5   "
      />
    </div>
  );
}
