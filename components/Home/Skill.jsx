import React from "react";
import Container from "../Container";
import { skills } from "@/constants/data";

export default function Skill() {
  return (
    <div className="py-[50px]">
      <Container>
        <h2 className="text-[35px] text-green font-semibold mb-[30px]">
          Skills
        </h2>
        <ul>
          <li>
            {skills.map((item, i) => (
              <div key={i} className="mb-[40px]">
                <h3 className="text-[15px] mb-3 font-medium tetx-black">
                  {item.title}
                </h3>
                <div className="flex items-center gap-[20px]">
                  {item.languages.map((item, i) => (
                    <div
                      key={i}
                      className="flex transitions hover:scale-105 cursor-pointer w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg"
                    >
                      <img src={item.icon} alt="" className="w-[28px]" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </li>
        </ul>
      </Container>
    </div>
  );
}
