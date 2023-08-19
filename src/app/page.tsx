"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function Home() {
  const [searchText,setSearchText] = useState<string>("")
  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event?.target?.value)
  };
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-3 w-full">
        <input
          onChange={searchHandle}
          type="text"
          name="search"
          id="search"
          className="px-3 py-1 rounded"
          value={searchText}
        />
        <button className="flex justify-center items-center shadow-md shadow-sky-500">
          <AiOutlineSearch className="text-sky-600 w-7 h-7 bg-gray-200 rounded " />
        </button>
      </div>
    </div>
  );
}
