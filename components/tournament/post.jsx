import FreeFireIcon from "@/public/icons/freefire.png";
import {
  Badge,
  BadgeDollarSign,
  Clock,
  Ellipsis,
  UsersRound,
} from "lucide-react";

import Image from "next/image";
import Tag from "./tag";
import Button from "./button";

export default function Post({ data }) {
  return (
    <div className="w-full border-b-2 border-neutral-800 bg-neutral-950 md:border-r-2">
      <header className="p-5 flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={FreeFireIcon}
            alt="Game Icon"
            className="w-5 h-5 rounded-full"
          />
          <h2 className="text-neutral-300">Garena free fire</h2>
        </div>
        <div>
          <Ellipsis size={20} />
        </div>
      </header>
      <section>
        <div className="p-5 pt-0">
          <div className="w-full h-70 bg-neutral-800 rounded-xl relative overflow-hidden">
            <Image
              src={data.image_url}
              alt="Tournament Image"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <main className="p-5 pt-0 flex justify-between items-center">
          {/* TAGS SECTION */}
          <div className="flex gap-3 flex-wrap">
            {/* Take a look */}
            {data.tags.map((elem) => (
              <Tag text={elem} key={elem} />
            ))}
          </div>

          <h2 className="flex gap-1.5 text-neutral-400">
            <UsersRound size={20} />
            {data.joined}/{data.max_members}
          </h2>
        </main>
        <div className="flex pb-2 pr-5">
          <p className="pt-0 p-5 pb-0 text-neutral-400 flex items-center gap-1.5">
            <Clock size={15} />
            {data.time}
          </p>
          <h2 className="flex items-center gap-1 text-neutral-400">
            <BadgeDollarSign size={15} />
            {data.prize}.00
          </h2>
        </div>

        <main className="p-5 pt-0">
          <h2 className=" text-neutral-300 pb-5">{data.description}</h2>
          <Button active={data.joined < data.max_members} />
        </main>
      </section>
    </div>
  );
}
