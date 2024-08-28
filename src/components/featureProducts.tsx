import Image from "next/image";
import ProductOne from "@/public/product_1.png";
import ProductThree from "@/public/product_3.png";
import ProductFour from "@/public/product_4.png";
import ProductFive from "@/public/product_5.png";
import ProductSix from "@/public/product_6.png";
import ProductSeven from "@/public/product_7.png";
import ProductEight from "@/public/product_8.png";

export default function Header() {
  return (
    <div className="px-16 py-20">
      <div className="mb-6 flex items-center justify-center space-x-14 ">
        <h4 className="text-xl text-gray-500 hover:text-black hover:font-semibold hover:border-b hover:border-black py-1">
          Best Seller
        </h4>
        <h4 className="text-xl text-gray-500 hover:text-black hover:font-semibold hover:border-b hover:border-black py-1">
          New arrivals
        </h4>
        <h4 className="text-xl text-gray-500 hover:text-black hover:font-semibold hover:border-b hover:border-black py-1">
          One sale
        </h4>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductOne}
            alt="Product One"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            Ribbed Tank Top
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$16.95</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative ">
            <Image
              className="rounded"
              src={ProductOne}
              alt="Product two"
              width={300}
              height={300}
            />
            <span className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] px-2 py-1 rounded-xl">
              -33%
            </span>
            <span className="absolute bottom-5 left-[40%] transform -translate-x-1/3 bg-white text-red-500 text-xs font-semibold px-2 py-1 rounded w-[200px] h-[35px] flex items-center justify-center">
              11d : 15h : 51m : 37s
            </span>
          </div>
          <h5 className="mt-4 text-black font-normal text-sm">
            Ribbed modal T-shirt
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">From $18.95</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-brown"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-pink"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-mint-green"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductThree}
            alt="Product Three"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            Oversized Printed T-shirt
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$10.00</p>
        </div>
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductFour}
            alt="Product Four"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            Oversized Printed T-shirt
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$16.95</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-pink"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductFive}
            alt="Product Five"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            V-neck linen T-shirt
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$114.95</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-brown"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductSix}
            alt="Product Six"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            Loose Fit Sweatshirt
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$10.00</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-mint-green"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-blue-gray"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-blue-800"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductSeven}
            alt="Product Seven"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            Regular Fit Oxford Shirt
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$10.00</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-blue-800"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-brown-light"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-blue-light"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            className="rounded"
            src={ProductEight}
            alt="Product Eight"
            width={300}
            height={300}
          />
          <h5 className="mt-4 text-black font-normal text-sm">
            Loose Fit Hoodie
          </h5>
          <p className="mt-2 text-xs text-black font-semibold">$9.95</p>
          <div className="flex items-center space-x-2">
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="mt-2 w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-custom-product-blue-gray"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button className="w-2/2 text-xs font-semibold text-black border border-black rounded-sm py-3 px-6 flex items-center justify-between hover:bg-black hover:text-white">
          <span className="flex-1 text-center">Load more</span>
        </button>
      </div>
    </div>
  );
}
