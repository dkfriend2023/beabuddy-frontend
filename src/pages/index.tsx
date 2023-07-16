import Link from "next/link";

import Header from "../components/Header";
import AreaCard from "../components/AreaCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function Page() {
  return (
    <div className="h-screen bg-[#f6f6f6] relative p-[18px]">
      <Header />
      <Link href="#">
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </Link>
      <AreaCard />
      <NavBar />
    </div>
  );
}

export default Page;
