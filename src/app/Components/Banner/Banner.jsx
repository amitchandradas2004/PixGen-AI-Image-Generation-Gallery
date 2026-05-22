import Image from "next/image";
import Link from "next/link";
import { FaUpRightFromSquare } from "react-icons/fa6";
import BannerImage from "@/assets/bannerImage.png";
const BannerPage = () => {
  return (
    <div className="pt-20 container mx-auto flex flex-col md:flex-row justify-between items-center h-full px-2 md:px-0 gap-10">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start">
        <div className="group inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-100 dark:bg-black dark:text-white backdrop-blur-md border border-white/20 text-black text-sm font-medium shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-500 ease-in-out cursor-pointer">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
          </span>

          <span className="tracking-wide text-xs">
            Explore Thousands of All Generated Photos
          </span>
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl font-bold mt-5">
            Turn Words Into Art via PixGen
          </h3>
          <p className="{nunito.className} opacity-80 py-3">
            PixGen is a modern AI image generator that transforms text prompts
            into high-quality digital artwork, illustrations, and creative
            visuals instantly.
          </p>
          <Link href={"/allphotos"}>
            <button className="btn btn-primary dark:bg-black rounded-full h-10 w-45 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5">
              Browse Photos <FaUpRightFromSquare />
            </button>
          </Link>
        </div>
      </div>
      <div>
        {" "}
        <Image
          src={BannerImage}
          alt="PixGen is a modern AI image generator that transforms text prompts into high-quality digital artwork."
          height={400}
          width={400}
          className="transition-all duration-300 ease-in-out hover:scale-103 select-none"
        />
      </div>
    </div>
  );
};

export default BannerPage;
