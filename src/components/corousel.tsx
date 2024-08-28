import Image from "next/image";
import {
    ChevronRightIcon,
  } from "@heroicons/react/24/outline";
import Principal from "@/public/1.png";
export default function Corousel() {
  return (
    <div className="w-full h-3/4 flex items-center bg-custom-gray">
      <div className="w-1/2 p-16 text-black">
        <h2 className="flex flex-col items-start text-8xl font-bold mt-12">
          <span className="mb-5 font-light text">Summer</span>
          <span className="mb-5 font-light ">Escapades</span>
        </h2>
        <p className="mb-10">
          Embrace the sun-kissed season with our collection of breezy
        </p>
        <button className="w-2/2 text-xs font-medium bg-white text-black py-3 px-4 hover:bg-black hover:text-white transition-colors focus:outline-none flex items-center justify-between">
          <span className="flex-1 text-center">Shop collection</span>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image src={Principal} alt="Principal" width={850} height={850} />
      </div>
    </div>
  );
}
