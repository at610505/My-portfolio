import React from "react";
import {
  MailIcon,
  AddressIcon,
  PhoneIcon,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "../Components/Icons";

export default function Contact() {
  return (
    <section className="mx-2 my-10 md:mx-60 md:my-20">
      <div className="text-2xl text-center font-bold text-black/90">
        Contact Me
      </div>
      <div className="my-5">
        <div className="text-xl font-bold">Email</div>
        <div className="text-sm my-1 font-medium ">
          <a href="mailto:anshumant72@gmail.com" className="flex">
            <span>
              <MailIcon />
            </span>
            <span className="my-1 mx-2 hover:text-black/60">
              anshumant72@gmail.com
            </span>
          </a>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="my-5">
        <div className="text-xl font-bold">Phone</div>
        <div className="text-sm font-medium ">
          <a href="tel:+919654086085" className="hover:text-black/60 flex">
            <span>
              <PhoneIcon />
            </span>
            <span className="mx-2 hover:text-black/60">+91 9654086085</span>
          </a>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="my-5">
        <div className="text-xl font-bold">Address</div>
        <div className="text-sm font-medium flex">
          <span>
            <AddressIcon />
          </span>
          <p className="mx-2">Gurugram, Haryana , India</p>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="my-5">
        <div className="text-xl font-bold">Contact through Social Media</div>
        <div className="text-sm font-medium  my-2 w-28">
          <a
            href="https://www.github.com/iam-anshuman"
            target="_blank"
            className="flex hover:text-black/60"
          >
            <span>
              <GithubIcon />
            </span>
            <span className="mx-2">Github</span>
          </a>
        </div>
        <div className="text-sm font-medium my-2 w-28">
          <a
            href="https://www.linkedin.com/in/anshuman-tiwari-65b142206/"
            target="_blank"
            className="flex hover:text-black/60"
          >
            <span>
              <LinkedInIcon />
            </span>
            <span className="mx-2">LinkedIn</span>
          </a>
        </div>
        <div className="text-sm font-medium my-2 w-28">
          <a
            href="https://www.x.com/anshuma2580"
            target="_blank"
            className="flex hover:text-black/60"
          >
            <span>
              <TwitterIcon />
            </span>
            <span className="mx-2">Twitter(X)</span>
          </a>
        </div>
        <div className="text-sm font-medium my-2 w-28">
          <a
            href="https://www.instagram.com/officialanshumantiwari"
            target="_blank"
            className="flex hover:text-black/60"
          >
            <span></span>
            <InstagramIcon />
            <span className="mx-2">Instagram</span>
          </a>
        </div>
        <div className="text-sm font-medium my-2 w-28">
          <a
            href="https://wa.me/+919654086085?text=I%20am%20interested%20in%20provide%20you%20oppurtunity%20to%20work%20with%20us."
            target="_blank"
            className="flex hover:text-black/60"
          >
            <span></span>
            <WhatsAppIcon />
            <span className="mx-2">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
