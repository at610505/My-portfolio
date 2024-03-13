import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="m-5 md:m-40">
      <div className="block md:flex md:flex-row-reverse">
        <div id="right-side" className="block w-1/2 md:basis-1/6 md:w-10 mx-auto my-10 md:my-0">
          <Image src="/hero.png" alt="Hero Image" width={400} height={400} />
        </div>
        <div id="left-side" className="block basis-1/2 my-4 md:my-0">
          <div className="text-6xl text-center md:text-left  text-black/80 font-bold">
            Hi, I am Anshuman, Full Stack Developer
          </div>
          <div className="text-base my-8 md:my-4 text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam
            ipsam laborum accusamus deserunt eaque cum dolorem velit asperiores
            delectus sed, iure explicabo incidunt eligendi libero ex similique
            veritatis neque, temporibus in debitis ut deleniti iste
            perspiciatis. Numquam, repudiandae ut?
          </div>
        </div>
      </div>
        <div className="w-1/2 my-5 md:my-0 mx-auto md:mx-0">
          <button className="w-52 text-white rounded-lg bg-red-500 p-4 cursor-pointer hover:bg-red-400">
            Download Resume
          </button>
        </div>
    </section>
  );
}
