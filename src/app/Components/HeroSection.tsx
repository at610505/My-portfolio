"use client";
import Image from "next/image";
import { useState } from "react";
import throttle from "lodash.throttle";


export default function HeroSection() {

  const [progress, setProgress] = useState<number>(0);

  const updateProgress = throttle((step: number) => {
    setProgress(step);
  },500,{leading: true, trailing: true});

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

      if (!res?.body) {
        throw new Error("Network response was not ok");
      }
      const reader = res.body.getReader();
      const contentLength = res.headers.get("Content-Length");
      const totolLength = typeof contentLength === "string" && parseInt(contentLength);
      const chunks = [];
      
      
      let receivedLength = 0;

      while(true) {
        const {done, value} = await reader.read();
        if(done) {
          break
        };

        chunks.push(value);
        receivedLength = receivedLength + value.length;
        if( typeof totolLength === "number") {
            const step = parseFloat((receivedLength / totolLength).toFixed(2)) * 100;
            updateProgress(step);
        }
      }

      const blob = new Blob(chunks, {type: "application/pdf"});
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
        {
          progress > 0 && progress < 100 ?
          <button disabled type="button" className="w-52 text-white rounded-lg bg-red-500 p-4 cursor-pointer hover:bg-red-400 inline-flex items-center">
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Downloading {progress.toFixed()}%
          </button>
          :
          <button
          className="w-52 text-white rounded-lg bg-red-500 p-4 cursor-pointer hover:bg-red-400"
          onClick={handleDownload}
          >
            Download Resume
          </button>
        }
      </div>
    </section>
  );
}
