"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;
    event.preventDefault();
    router.push(`/search/${keyword}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search Anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
