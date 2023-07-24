import Image from "next/image";

import sampleimg from "/public/sampleimg.png";
import location from "/public/location.svg";

interface Area {
  image: string | null;
  name: string;
  description: string;
}

const AreaCard: React.FC<Area> = ({ image, name, description }) => {
  return (
    <div className="min-h-[196px] bg-[#ffffff] rounded-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] p-[10px] flex flex-col justify-center items-center">
      <Image src={sampleimg} width={90} height={90} alt="icon" />
      <div className="text-[1f2937] text-[16px] font-semibold mt-[16px] mb-[3.98px]">
        {name}
      </div>
      <div className="flex items-baseline justify-start gap-[5.7px]">
        <Image src={location} width={8.3} height={10.95} alt="icon" />
        <div className="text-[#6b7280] text-[10px] font-medium max-w-[130px]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default AreaCard;
