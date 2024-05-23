import React from "react";
import Container from "../Container";

export default function Experience() {
  return (
    <div className="py-[50px]">
      <Container>
        <h2 className="text-[30px] md:text-[90px] text-green text-center font-bold mb-[50px]">
          Experience
        </h2>
        <ul>
          <li className="mb-[30px] flex gap-4">
            <svg width="75" height="75" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="27"
                r="20"
                class="fill-none stroke-accent stroke-1"
              ></circle>
              <circle
                cx="50"
                cy="27"
                r="20"
                class="fill-green stroke-[5px] dark:fill-zinc-900 dark:stroke-zinc-100"
                pathLength="1"
                stroke-dashoffset="0px"
                stroke-dasharray="1px 1px"
              ></circle>
              <circle
                cx="50"
                cy="27"
                r="10"
                class="fill-white stroke-1"
              ></circle>
            </svg>
            <div>
              <h2 className="text-[24px] font-bold">
                Frontend Web Developer{" "}
                <span className="text-green">@Zink Marketing</span>
              </h2>
              <h3 className="text-[17px] ">March 2023 - Feb 2024 | Lahore</h3>
              <h3 className="text-[17px] ">Html Css Js development</h3>
            </div>
          </li>
          <li className="mb-[30px] flex gap-4">
            <svg width="75" height="75" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="27"
                r="20"
                class="fill-none stroke-accent stroke-1"
              ></circle>
              <circle
                cx="50"
                cy="27"
                r="20"
                class="fill-green stroke-[5px] dark:fill-zinc-900 dark:stroke-zinc-100"
                pathLength="1"
                stroke-dashoffset="0px"
                stroke-dasharray="1px 1px"
              ></circle>
              <circle
                cx="50"
                cy="27"
                r="10"
                class="fill-white stroke-1"
              ></circle>
            </svg>
            <div>
              <h2 className="text-[24px] font-bold">
                Frontend Web Developer Freelancer{" "}
                <span className="text-green">@Fiver</span>
              </h2>
              <h3 className="text-[17px] ">Jan 2023 - Feb 2024 | Worldwide</h3>
              <h3 className="text-[17px] ">Html Css Js development</h3>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
}
