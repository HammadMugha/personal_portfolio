import { Span } from "next/dist/trace";
import React from "react";

export default function Button({ style, text, icon }) {
  return (
    <div className={`cursor-pointer text-md font-medium px-3 ${style} 
    ${icon && "flex items-center gap-3"}
    `}>
      {icon && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </span>
      )}
      {text}
    </div>
  );
}
