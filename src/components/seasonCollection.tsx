import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import CollectionOne from "@/public/collection_1.png";
import CollectionTwo from "@/public/collection_2.png";
import CollectionThree from "@/public/collection_3.png";
import CollectionFour from "@/public/collection_4.png";
import CollectionFive from "@/public/collection_5.png";
import CollectionSix from "@/public/collection_6.png";
export default function SeasonCollection() {
  return (
    <div className="bg-custom-light-gray px-16 py-20">
      <div className="flex items-center justify-between text-black">
        <h3 className="text-4xl font-normal">Season Collection</h3>
        <div className="flex items-center space-x-2 text-xs border-b border-black py-1">
          <p>View all categories</p>
          <ArrowUpRightIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={CollectionOne}
            alt="Collection One"
            width={180}
            height={180}
          />
          <h4 className="mt-10 text-black font-medium">Women´s</h4>
          <p className="mt-1 text-xs text-gray-500">23 items</p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={CollectionTwo}
            alt="Collection two"
            width={180}
            height={180}
          />
          <h4 className="mt-10 text-black font-medium">Men´s</h4>
          <p className="mt-1 text-xs text-gray-500">9 items</p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={CollectionThree}
            alt="Collection three"
            width={180}
            height={180}
          />
          <h4 className="mt-10 text-black font-medium">Jewelry</h4>
          <p className="mt-1 text-xs text-gray-500">31 items</p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={CollectionFour}
            alt="Collection four"
            width={180}
            height={180}
          />
          <h4 className="mt-10 text-black font-medium">Sneakers</h4>
          <p className="mt-1 text-xs text-gray-500">21 items</p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={CollectionFive}
            alt="Collection five"
            width={180}
            height={180}
          />
          <h4 className="mt-10 text-black font-medium">Bags</h4>
          <p className="mt-1 text-xs text-gray-500">5 items</p>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            className="rounded-full"
            src={CollectionSix}
            alt="Collection six"
            width={180}
            height={180}
          />
          <h4 className="mt-10 text-black font-medium">Glasses</h4>
          <p className="mt-1 text-xs text-gray-500">14 items</p>
        </div>
      </div>
    </div>
  );
}
