import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  return (
    <div className="flex items-center justify-center h-16 space-x-5">
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-sm">Home</span>
        <ChevronDownIcon className="w-3 h-3" />
      </div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-sm">Shop</span>
        <ChevronDownIcon className="w-3 h-3" />
      </div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-sm">Products</span>
        <ChevronDownIcon className="w-3 h-3" />
      </div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-sm">Pages</span>
        <ChevronDownIcon className="w-3 h-3" />
      </div>
      <div className="flex items-center space-x-1">
        <span className="font-semibold text-sm">Blog</span>
        <ChevronDownIcon className="w-3 h-3" />
      </div>
      <span className="font-semibold text-sm">Buy now</span>
    </div>
  );
}
