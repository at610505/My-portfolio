"use client";
import Image from "next/image";
export default function HeroSection() {
  async function handleDownload() {
    try {
      const res = await fetch(
        "https://res.cloudinary.com/dwspckz4l/image/upload/v1710951178/Resume/a2oz2otdmr3mzaqt8e5c.pdf",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        },
      );
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Anshuman_Tiwari_Resume.pdf";
      a.click();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="m-5 md:m-40">
      <div className="block md:flex md:flex-row-reverse">
        <div
          id="right-side"
          className="block w-1/2 md:basis-1/6 md:w-10 mx-auto my-10 md:my-0"
        >
          <Image src="/hero.png" alt="Hero Image" width={400} height={400} />
        </div>
        <div id="left-side" className="block basis-1/2 my-4 md:my-0">
          <div className="text-6xl text-center md:text-left  text-black/80 font-bold">
            Hi, I am Anshuman, Full Stack Developer
          </div>
          <div className="text-base my-8 md:my-4 text-black/60">
            Hello there! 👋 I&apos;m a budding full-stack developer on the
            exciting journey of completing my B.Tech in Computer Science
            Engineering by 2024. I&apos;ve been passionately honing my skills
            and crafting some cool projects along the way, both as a freelancer
            and for personal enrichment. Now, I&apos;m eagerly seeking out
            opportunities to kickstart my career in the tech world.
          </div>
        </div>
      </div>
      <div className="w-1/2 my-5 md:my-0 mx-auto md:mx-0">
        <button
          className="w-52 text-white rounded-lg bg-red-500 p-4 cursor-pointer hover:bg-red-400"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}
