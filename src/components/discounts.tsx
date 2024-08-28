import Image from "next/image";

export default function Disconts() {
  return (
    <div className="px-16 flex flex-wrap justify-between">
      <div className="relative w-120 h-120 overflow-hidden">
        <Image
          className="rounded object-cover"
          src="https://static.bershka.net/assets/public/756d/cfb9/7ccd408ab3d2/702c5e9d8f79/0588169225114-p/0588169225114-p.jpg?ts=1722525955467&w=800"
          alt="Disconts one"
          layout="responsive"
          width={500}
          height={500}
        />
        <div className="absolute bottom-5 left-[40%] transform -translate-x-1/3 flex flex-col items-center justify-center">
          <span className="text-[11px] font-bold">UP TO 30% OFF</span>
          <span className="mt-2 text-xl font-normal">Essencial Basics</span>
          <div className="mt-5 flex items-center justify-center">
            <button className="w-full text-xs py-2 px-4 font-semibold text-black bg-white rounded-sm flex items-center justify-between hover:bg-black hover:text-white">
              <span className="flex-1 text-center">Shop now</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-120 h-120 overflow-hidden">
        <Image
          className="rounded object-cover"
          src="https://static.bershka.net/assets/public/0a09/df90/92684e888c07/a9a60af71093/09230023800-a4o/09230023800-a4o.jpg?ts=1722871025488&w=450"
          alt="Disconts two"
          layout="responsive"
          width={500}
          height={500}
        />
        <div className="absolute bottom-5 left-[40%] transform -translate-x-1/3 flex flex-col items-center justify-center">
          <span className="text-[11px] font-bold">UP TO 30% OFF</span>
          <span className="mt-2 text-xl font-normal">Athleisure Wear</span>
          <div className="mt-5 flex items-center justify-center">
            <button className="w-full text-xs py-2 px-4 font-semibold text-black bg-white rounded-sm flex items-center justify-between hover:bg-black hover:text-white">
              <span className="flex-1 text-center">Shop now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-120 h-120 overflow-hidden">
        <Image
          className="rounded object-cover"
          src="https://static.bershka.net/assets/public/6d2f/6c72/80fb4a8c8955/5abe41eb0815/08989184250-a2d/08989184250-a2d.jpg?ts=1716973667356&w=800"
          alt="Discont Three"
          layout="responsive"
          width={500}
          height={500}
        />
        <div className="absolute bottom-5 left-[40%] transform -translate-x-1/3 flex flex-col items-center justify-center">
          <span className="text-[11px] font-bold">UP TO 30% OFF</span>
          <span className="mt-2 text-xl font-normal">Seasonal Favorites</span>
          <div className="mt-5 flex items-center justify-center">
            <button className="w-full text-xs py-2 px-4 font-semibold text-black bg-white rounded-sm flex items-center justify-between hover:bg-black hover:text-white">
              <span className="flex-1 text-center">Shop now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
