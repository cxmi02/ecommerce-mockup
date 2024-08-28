import Image from "next/image";
import {
  ChevronDownIcon,
  ArrowUpRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import TarjetOne from "@/public/visa-logo-png-2015.png";
import TarjetTwo from "@/public/2-2-paypal-logo-transparent-png.png";
import TarjetThree from "@/public/mastercard-26161.png";
import TarjetFour from "@/public/icons8-american-express-48.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <div className="px-16 bg-custom-light-gray2 flex-wrap justify-between">
      <div className="py-10 flex flex-wrap justify-between">
        <div className="w-72">
          <h2 className="text-3xl font-bold">ecomus</h2>
          <p className="text-xs font-light mt-4">
            Adress: 1234 Fashion Street, Suite 567,
          </p>
          <p className="text-xs font-light mt-2">New York, NY 10001</p>
          <p className="text-xs font-light mt-2">
            Email: <strong>info@fashionshop.com</strong>
          </p>
          <p className="text-xs font-light mt-2">
            Phone: <strong>(212) 555-1234</strong>
          </p>
          <div className="mt-5 mb-4 w-28 flex items-center space-x-2 text-xs font-bold border-b border-black py-1">
            <p>Get Direction</p>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
          <div className="flex flex-wrap justify-between w-48">
            <div className="mt-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <i className="fa-brands fa-facebook-f text-black text-xs"></i>
            </div>
            <div className="mt-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <i className="fa-brands fa-x-twitter text-black text-xs"></i>
            </div>
            <div className="mt-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <i className="fa-brands fa-instagram text-black text-xs"></i>
            </div>
            <div className="mt-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <i className="fa-brands fa-tiktok text-black text-xs"></i>
            </div>
            <div className="mt-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <i className="fa-brands fa-pinterest text-black text-xs"></i>
            </div>
          </div>
        </div>
        <div className="w-72">
          <h5 className="text-base font-medium">Help</h5>
          <p className="text-xs font-light mt-4">Privacy Policy</p>
          <p className="text-xs font-light mt-2">Returns + Exchanges</p>
          <p className="text-xs font-light mt-2">Shipping</p>
          <p className="text-xs font-light mt-2">Terms & Conditions</p>
          <p className="text-xs font-light mt-2">FAQ's</p>
          <p className="text-xs font-light mt-2">Compare</p>
          <p className="text-xs font-light mt-2">My Wishlist</p>
        </div>
        <div className="w-72">
          <h5 className="text-base font-medium">About us</h5>
          <p className="text-xs font-light mt-4">Our Story</p>
          <p className="text-xs font-light mt-2">Visit Our Store</p>
          <p className="text-xs font-light mt-2">Contact Us</p>
          <p className="text-xs font-light mt-2">Account</p>
        </div>
        <div className="w-80">
          <h5 className="text-base font-medium">Sing Up for Email</h5>
          <p className="text-xs font-light mt-4">
            Sing up to get first dibs on new arrivals, sales,
          </p>
          <p className="text-xs font-light mt-2">
            exclusive content, events and more!
          </p>
          <div className="mt-7 w-72 h-12 pl-4 pr-2 bg-white border border-gray-300 flex items-center justify-between">
            <span className="text-xs text-gray-500">Enter your email...</span>
            <button className="w-28 h-8 text-xs text-white font-semibold bg-black flex justify-center items-center space-x-2 rounded-sm">
              <p>Subscribe</p>
              <ArrowUpRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-7 flex items-center space-x-7">
            <div className="flex items-center space-x-2">
              <Image
                src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000"
                alt="Unite State"
                width={17}
                height={17}
              />
              <span className="text-xs font-light">USD</span>
              <ChevronDownIcon className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-light">English</span>
            </div>
          </div>
          <div className="mt-7 flex justify-end">
            <div className="mr-8 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black cursor-pointer">
              <ChevronUpIcon className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 border-t border-gray-200 flex justify-between">
        <p className="mt-6 text-xs text-gray-500 flex justify-start">
          © 2024 Ecomus Store. All Rigths Reserved
        </p>
        <div className="mr-7 flex justify-end space-x-4">
          <Image
            src={TarjetOne}
            alt="Tarjet One"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src={TarjetTwo}
            alt="Tarjet Two"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src={TarjetThree}
            alt="Tarjet Three"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src={TarjetFour}
            alt="Tarjet Four"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
