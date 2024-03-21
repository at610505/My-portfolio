import React from "react";
import Image from "next/image";

export default function Footer() {
  function getFullYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="p-10">
      <div className="flex justify-center py-5">
        <div className="flex ">
          <a href="https://www.github.com/iam-anshuman" target="_blank">
            <Image
              className="mx-2 cursor-pointer"
              src="/GithubIcon.svg"
              alt="Github"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.instagram.com/officialanshumantiwari"
            target="_blank"
          >
            <Image
              className="mx-2 cursor-pointer"
              src="/InstaIcon.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.x.com/anshuma2580" target="_blank">
            <Image
              className="mx-2 cursor-pointer"
              src="/TwitterIcon.svg"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anshuman-tiwari-65b142206/"
            target="_blank"
          >
            <Image
              className="mx-2 cursor-pointer"
              src="/LinkedInIcon.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://wa.me/+919654086085?text=I%20am%20interested%20in%20provide%20you%20oppurtunity%20to%20work%20with%20us."
            target="_blank"
          >
            <Image
              className="mx-2 cursor-pointer"
              src="/WhatsAppIcon.svg"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
      <div className="text-center">
        Copyright &#169;{getFullYear()} All Right Reserved
      </div>
    </footer>
  );
}
