import React from "react";
import Link from "next/link";

export default function GoPreviousPage() {
  return (
    <Link href="/">
      <button
        className="border border-black dark:border-white text-center w-36 rounded-2xl h-14 relative text-black text-xl font-semibold group"
        type="button"
      >
        <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[3px] group-hover:w-[135px] z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="24px"
            width="24px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2 text-sm text-black dark:text-white">
          Go Back
        </p>
      </button>
    </Link>
  );
}
