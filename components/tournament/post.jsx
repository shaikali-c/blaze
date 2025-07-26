import FreeFireIcon from "@/public/icons/freefire.png";
import { Clock, Ellipsis, Trophy, UsersRound } from "lucide-react";

import Image from "next/image";
import Tag from "./tag";
import Button from "./button";

export default function Post() {
  return (
    <div className="w-full border-t-1 max-w-120 border-neutral-800 bg-neutral-950 border-b-1">
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
          <div className="w-full h-50 bg-neutral-800 rounded-xl relative overflow-hidden">
            <Image
              src={
                "https://thebridge.in/wp-content/uploads/2020/09/Free-Fire-feature-image-e1610258666449.jpg"
              }
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
            <Tag text={"Free"} />
            <Tag text={"Clash Squad"} />
          </div>
          <h2 className="flex gap-1.5 text-neutral-400">
            <UsersRound size={20} fill="#a1a1a1" />
            20/64
          </h2>
        </main>
        <p className="pt-0 p-5 pb-1.5 text-neutral-500 flex items-center gap-1.5">
          <Clock size={15} />
          20/5 10:00 PM
        </p>
        <main className="p-5 pt-0">
          <h2 className=" text-neutral-300">
            Join the ultimate 8-round Free Fire Clash Squad tournament! Battle
            it out in fast-paced matches, showcase your squad's skills, and
            climb to the top. Only the best will survive!
          </h2>
          <div className="flex justify-between items-center p-5 pl-0  pb-0 flex-wrap">
            <div className=" flex gap-1.5 text-neutral-300 items-center">
              <Trophy
                color="oklch(82.8% 0.189 84.429)"
                fill="oklch(82.8% 0.189 84.429)"
                size={20}
              />
              <h2>300.00</h2>
            </div>
            <Button active={true} />
          </div>
        </main>
      </section>
    </div>
  );
}
