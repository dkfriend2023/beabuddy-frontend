import Image from "next/image";

import search from "/public/search.svg";

function SearchBar() {
  return (
    <div className="w-[280px] h-[36px] bg-[#e6e7e9] rounded-[11px] px-[27px] py-[5px] flex items-center justify-start gap-[7px]">
      <Image src={search} width={16} height={16} alt="icon" />
      <div className="text-[#9ca3af] text-[12px] font-normal">검색</div>
    </div>
  );
}

export default SearchBar;
