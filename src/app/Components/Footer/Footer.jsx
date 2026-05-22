import Logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-10 border-t border-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row text-center md:text-start justify-between gap-5 pb-5">
        <div className="flex flex-col items-center">
          <Link
            href={"/"}
            className="font-bold flex items-center text-2xl select-none"
          >
            <Image src={Logo} alt="PixGen" height={50} width={50} />
            PixGen
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">About</h2>
          <Link
            href={"/about/overview"}
            className="hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            Overview
          </Link>
          <Link
            href={"/about/features"}
            className="hover:text-indigo-500  dark:hover:text-indigo-500"
          >
            Features
          </Link>
          <Link
            href={"/about/pricing"}
            className="hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            Pricing
          </Link>
          <Link
            href={"/about/releases"}
            className="hover:text-indigo-500  dark:hover:text-indigo-500"
          >
            Releases
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Resources</h2>
          <Link
            href={"/resources/blog"}
            className="hover:text-indigo-500  dark:hover:text-indigo-500"
          >
            Blog
          </Link>
          <Link
            href={"/resources/newsletter"}
            className="hover:text-indigo-500  dark:hover:text-indigo-500"
          >
            Newsletter
          </Link>
          <Link
            href="/resources/Tutorials"
            className="hover:text-indigo-500  dark:hover:text-indigo-500"
          >
            Tutorials
          </Link>
          <Link
            href="/resources/support"
            className="hover:text-indigo-500  dark:hover:text-indigo-500"
          >
            Support
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <span className="text-2xl flex justify-center md:justify-start space-x-3 py-5">
            <BsFacebook />
            <FcGoogle />
            <BsTwitterX />
            <SiGmail />
          </span>
        </div>
      </div>
      <div className="container mx-auto py-5 text-center space-y-5">
        <hr />
        <span>
          © 2026{" "}
          <Link href={"/"}>
            <strong> BookVerse</strong>
          </Link>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
