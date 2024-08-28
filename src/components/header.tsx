import Image from "next/image";
import {
  ShoppingBagIcon,
  ChevronDownIcon,
  HeartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center h-16 px-10 border-b border-gray-200">
        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-2">
            <Image
              src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000"
              alt="Unite State"
              width={22}
              height={22}
            />
            <span className="text-sm font-light">USD</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-light">English</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </div>
        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold -ml-20">ecomus</h1>
        </div>
        <div className="flex items-center space-x-5">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <UserIcon className="w-5 h-5" />
          <div className="relative">
            <HeartIcon className="w-5 h-5" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[8px] font-light text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/3">
              0
            </span>
          </div>
          <div className="relative">
            <ShoppingBagIcon className="w-5 h-5" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[8px] font-light text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/3">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
