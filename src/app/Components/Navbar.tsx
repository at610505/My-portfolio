"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);
    console.log("Open Navbar");
  };

  const HamburgerStyle = clsx(
    `block absolute top-10 right-2 bg-slate-200 p-2 rounded-lg  md:hidden duration-300 z-10 ease-in-out ${openNavbar ? "scale-100" : "scale-0"}`,
  );

  return (
    <nav className="block md:flex justify-end relative">
      <ul className="hidden md:flex m-5">
        <li>
          <Link
            href="/"
            className="mx-4 my-2 hover:text-black/60 font-semibold text-xl"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="mx-4 my-2 hover:text-black/60 font-semibold text-xl"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/education"
            className="mx-4 my-2  hover:text-black/60 font-semibold text-xl"
          >
            Education{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className="mx-4 my-2  hover:text-black/60 font-semibold text-xl"
          >
            Experience{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="mx-4 my-2 hover:text-black/60 font-semibold text-xl"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="mx-4 my-2 hover:text-black/60 font-semibold text-xl"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="block m-5 w-10 ml-auto md:hidden cursor-pointer">
        <Image
          src="/HamburgerIcon.svg"
          width={50}
          height={50}
          alt="Menu"
          onClick={handleOpenNavbar}
        />
      </div>
      {
        <ul className={HamburgerStyle}>
          <li>
            <Link
              href="/"
              className="mx-4 my-2 hover:text-black/60 font-semibold text-xl"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="m-4 my-2 hover:text-black/60 font-semibold text-xl"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className="m-4 my-2 hover:text-black/60 font-semibold text-xl"
            >
              Education{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="m-4 my-2 hover:text-black/60 font-semibold text-xl"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="m-4 my-2 hover:text-black/60 font-semibold text-xl"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="m-4 my-2 hover:text-black/60 font-semibold text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      }
    </nav>
  );
}
