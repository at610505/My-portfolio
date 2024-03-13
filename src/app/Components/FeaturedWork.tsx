import Image from "next/image"

export default function FeaturedWork() {
  return (
    <section>
        <div className="m-5 md:mx-40 md:my-10">
            <div>Featured Projects</div>
            <div id="card" className="block md:flex my-5">
                <div className="md:basis-1/5">
                    <Image className="rounded-xl" src="/work1.jpg" alt="Hero Image" width={250} height={250}/>
                </div>
                <div className="md:basis-4/5 md:mx-4">
                <div className="font-bold text-2xl">Designing Dashboard</div>
                <div className="my-3">
                  <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">2020</span>
                  <span className="ml-4 text-black/60">DashBoard</span>
                </div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum asperiores laudantium amet iusto libero, odit consequuntur odio, dolores, iure deserunt ipsum voluptatibus est. Beatae expedita ratione eligendi, earum incidunt sunt!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ratione veritatis earum cumque cupiditate beatae veniam nulla ipsum et aliquam.</p>
                </div>
              </div>
            </div>  
            <div className="border-b-2"></div>
            <div id="card" className="block md:flex my-5">
                <div className="md:basis-1/5">
                    <Image className="rounded-xl" src="/work2.jpg" alt="Hero Image" width={250} height={250} />
                </div>
                <div className="md:basis-4/5 md:mx-4">
                <div className="font-bold text-2xl">Vibrant Port of 2020</div>
                <div className="my-3">
                  <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">2018</span>
                  <span className="ml-4 text-black/60">Illustration</span>
                </div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum asperiores laudantium amet iusto libero, odit consequuntur odio, dolores, iure deserunt ipsum voluptatibus est. Beatae expedita ratione eligendi, earum incidunt sunt!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ratione veritatis earum cumque cupiditate beatae veniam nulla ipsum et aliquam.</p>
                </div>
              </div>
            </div>  
            <div className="border-b-2"></div>
            <div id="card" className="block md:flex my-5">
                <div className="md:basis-1/5">
                    <Image className="rounded-xl" src="/work3.jpg" alt="Hero Image" width={250} height={250} />
                </div>
                <div className="md:basis-4/5 md:mx-4">
                <div className="font-bold text-2xl">36 Day Of Hindi Type</div>
                <div className="my-3">
                  <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">2018</span>
                  <span className="ml-4 text-black/60">Typography</span>
                </div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum asperiores laudantium amet iusto libero, odit consequuntur odio, dolores, iure deserunt ipsum voluptatibus est. Beatae expedita ratione eligendi, earum incidunt sunt!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ratione veritatis earum cumque cupiditate beatae veniam nulla ipsum et aliquam.</p>
                </div>
              </div>
            </div>  
            <div className="border-b-2"></div>
        </div>
    </section>
  )
}
