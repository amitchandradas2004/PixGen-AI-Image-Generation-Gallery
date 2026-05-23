"use client";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
const Navbar = () => {
  const NavLinks = (
    <>
      <Link href="/" className="btn btn-ghost btn-primary h-7 rounded-full">
        Home
      </Link>
      <Link
        href="/allphotos"
        className="btn btn-ghost btn-primary h-7 rounded-full"
      >
        All Photos
      </Link>
      <Link
        href="/profile"
        className="btn btn-ghost btn-primary h-7 rounded-full"
      >
        My Profile
      </Link>
    </>
  );
  return (
    <div className="shadow-md dark:bg-black/5 text-black dark:text-white border-b border-gray-200 dark:border-gray-800 font-space fixed top-0 z-10 w-full backdrop-blur-md bg-black/5">
      <div className="flex justify-between items-center container mx-auto w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl z-5 mt-3 w-40 p-2 shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] text-xs"
            >
              {NavLinks}
            </ul>
          </div>
          <Link
            href={"/"}
            className="font-bold flex items-center text-2xl select-none"
          >
            <Image src={Logo} alt="PixGen" height={50} width={50} />
            PixGen
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-xs">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <span>
            {" "}
            <ThemeToggle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
