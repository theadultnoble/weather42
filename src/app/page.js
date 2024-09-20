import Link from "next/link";
import Image from "next/image";
export default function ComponentName() {
  return (
    <div className="w-screen h-screen px-8 py-8">
      <div className="flex flex-row p-2 ">
        <div className="rounded-full w-16 h-16 mx-5">
          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="avatar"
            className="rounded-full "
          />
        </div>
        <div className="relative h-4 w-44 overflow-hidden rounded">
          <div className="absolute inset-y-0 left-0 flex items-center h-full pl-1 pointer-events-none">
            <svg
              className="w-3 h-3 text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block px-4 pl-5 text-xs text-slate-400 border border-slate-900 rounded bg-slate-700 outline-none box-border h-full w-full flex-1"
            placeholder="Search for a city"
          />
        </div>
      </div>
    </div>
  );
}
import React from "react";
