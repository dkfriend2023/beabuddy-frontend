import Header from "../components/Header";
import AreaCard from "../components/AreaCard";
import NavBar from "../components/NavBar";

function Page() {
  return (
    <div className="h-screen bg-[#f6f6f6] relative px-[18px] pt-[32px]">
      <Header />
      <AreaCard />
      <NavBar />
    </div>
  );
}

export default Page;
