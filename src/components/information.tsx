import Image from "next/image";
import {
  ArrowTurnDownLeftIcon,
  ArrowUpRightIcon,
  CreditCardIcon,
  CubeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import BrandOne from "@/public/brand_1.png";
import BrandTwo from "@/public/brand_2.png";
import BrandThree from "@/public/brand_3.png";
import BrandFour from "@/public/brand_4.png";
import BrandFive from "@/public/brand_5.png";
import BrandSix from "@/public/brand_6.png";

export default function Information() {
  return (
    <div>
      <div className="px-16 py-20 flex flex-wrap justify-between">
        <div className="flex items-center space-x-4 ">
          <div className="mt-2 w-13 h-13 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
            <CubeIcon className="w-8 h-8 ounded-ful" />
          </div>
          <div>
            <h5 className="">Free Shipping</h5>
            <p className="mt-2 text-xs text-gray-500">
              Free shipping over order $120
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="mt-2 w-13 h-13 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
            <CreditCardIcon className="w-8 h-8 ounded-ful" />
          </div>
          <div>
            <h5 className="">Flexible Payment</h5>
            <p className="mt-2 text-xs text-gray-500">
              Pay whith Multiple Credit Cards
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="mt-2 w-13 h-13 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
            <ArrowTurnDownLeftIcon className="w-8 h-8 ounded-ful" />
          </div>
          <div>
            <h5 className="">14 Day Returns</h5>
            <p className="mt-2 text-xs text-gray-500">
              Whithin 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="mt-2 w-13 h-13 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
            <PhoneArrowDownLeftIcon className="w-8 h-8 ounded-ful" />
          </div>
          <div>
            <h5 className="">Premium Support</h5>
            <p className="mt-2 text-xs text-gray-500">
              Outstanding premium support
            </p>
          </div>
        </div>
      </div>
      <div className="px-16 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348138.0026680488!2d-79.6699252560207!3d43.76127498879417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2sco!4v1724803729128!5m2!1ses-419!2sco"
          width="1402"
          height="500"
          loading="lazy"
          className="border-0 rounded"
        ></iframe>
        <div className="bg-white w-96 px-12 py-12 absolute bottom-20 left-[20%] transform -translate-x-1/3 ">
          <h4 className="text-2xl mb-5  text-black">Toronto Store</h4>
          <div className="text-xs text-gray-500">
            <p>301 Front St Toronto, Canada</p>
            <p>support@ecomus.com</p>
            <p>(08) 8942 1299</p>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            <p>Mon - Fri, 8:30am - 10:30pm</p>
            <p>Saturday, 8:30am - 10:30pm</p>
            <p>Sunday Closed</p>
          </div>
          <div className="mt-7 w-28 flex items-center space-x-2 text-xs font-bold border-b border-black py-1">
            <p>Get Directions</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="px-16 py-20 flex">
        <Image
          className="rounded-tl-xl rounded-bl-xl border border-gray-400 border-r-0"
          src={BrandOne}
          alt="Brand One"
          width={230}
          height={235}
        />
        <Image
          className="border border-gray-400 border-r-0"
          src={BrandTwo}
          alt="Brand Two"
          width={235}
          height={235}
        />
        <Image
          className="border border-gray-400 border-r-0"
          src={BrandThree}
          alt="Brand Three"
          width={235}
          height={235}
        />
        <Image
          className="border border-gray-400 border-r-0"
          src={BrandFour}
          alt="Brand Four"
          width={235}
          height={235}
        />
        <Image
          className="border border-gray-400 border-r-0"
          src={BrandFive}
          alt="Brand Five"
          width={235}
          height={235}
        />
        <Image
          className="rounded-tr-xl rounded-br-xl border border-gray-400"
          src={BrandSix}
          alt="Brand Six"
          width={235}
          height={235}
        />
      </div>
    </div>
  );
}
