import NotFoundImage from "@/assets/Not-found.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
const notFoundPage = () => {
  return (
    <div className="pt-25 md:pt-15 bg-[#F1F1F1] h-screen text-center">
      <Image
        src={NotFoundImage}
        alt="This page is not found"
        height={250}
        width={250}
        className="mx-auto select-none"
      />
      <div className="flex flex-col items-center justify-center space-y-3 ">
        <h2 className="text-indigo-600 text-5xl font-extrabold">
          No Results Found
        </h2>
        <p className="text-xl font-medium text-muted">
          We could not find what you searched for. Try searching again.
        </p>
        <Link href={"/"}>
          {" "}
          <button className="btn btn-primary rounded-full flex flex-row items-center w-45">
            <IoIosHome />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default notFoundPage;
