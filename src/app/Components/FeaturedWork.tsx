import Image from "next/image";

export default function FeaturedWork() {
  return (
    <section>
      <div className="m-5 md:mx-40 md:my-10">
        <div className="font-bold text-2xl">Featured Projects</div>
        <div id="card" className="block md:flex my-5">
          <div className="md:basis-1/5">
            <Image
              className="rounded-xl"
              src="/VarshaMekupStudio.png"
              alt="Hero Image"
              width={250}
              height={250}
            />
          </div>
          <div className="md:basis-4/5 md:mx-4">
            <a href="https://www.varshamekup.in" target="_blank">
              <div className="font-bold text-2xl">Varsha Mekup Studio</div>
            </a>
            <div className="my-3">
              <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">
                2024
              </span>
              <span className="ml-4 text-black/60">WebApp</span>
            </div>
            <div>
              <p>
                Varsha Mekup Studio is a website which is build for local
                Parlour for their students. Where Students can interact with the
                Parlour through Website. Admin of the website can generate the
                certificate on course completion and user can view their
                certficated by logging into the website. Currently it has 200
                Users who are current and past students.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div id="card" className="block md:flex my-5">
          <div className="md:basis-1/5">
            <Image
              className="rounded-xl"
              src="/Admin-Panel.png"
              alt="Hero Image"
              width={250}
              height={250}
            />
          </div>
          <div className="md:basis-4/5 md:mx-4">
            <a
              href="https://adminpanelllrboyshostel.netlify.app"
              target="_blank"
            >
              <div className="font-bold text-2xl">Hostel Management System</div>
            </a>
            <div className="my-3">
              <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">
                2023
              </span>
              <span className="ml-4 text-black/60">WebApp</span>
            </div>
            <div>
              <p>
                It was a Academic Project to build a Hostel management WebApp
                for our college Hostel. It has a main website wehere Students
                can Interact and find their bill, pay their bill. Student had a
                different section for Complaining where they can register their
                compalain.
              </p>
              <p>
                It has a separate admin panel for hostel warden and clerk to
                view the complaints and the payment received by students.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div id="card" className="block md:flex my-5">
          <div className="md:basis-1/5">
            <Image
              className="rounded-xl"
              src="/URL-Shortner.png"
              alt="Hero Image"
              width={250}
              height={250}
            />
          </div>
          <div className="md:basis-4/5 md:mx-4">
            <a href="https://url-shortner-frontend-sage.vercel.app">
              <div className="font-bold text-2xl">Url Shortner</div>
            </a>
            <div className="my-3">
              <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">
                2024
              </span>
              <span className="ml-4 text-black/60">MERN</span>
            </div>
            <div>
              <p>
                It is a Project made for shortening the long urls in small url,
                same as Bitly. The Project was Made Using MERN stack. This
                project is able to short the url and analyze number of click or
                number visit to the main website. It has authentication facility
                so that user will only be able to see their short url&apos;s
                Analytics.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div id="card" className="block md:flex my-5">
          <div className="md:basis-1/5">
            <Image
              className="rounded-xl"
              src="/Secret-App.png"
              alt="Hero Image"
              width={250}
              height={250}
            />
          </div>
          <div className="md:basis-4/5 md:mx-4">
            <a href="https://secret-frontend-kohl.vercel.app/">
              <div className="font-bold text-2xl">Secret WebApp</div>
            </a>
            <div className="my-3">
              <span className="mr-4 bg-blue-950 px-2 rounded-xl text-white font-semibold">
                2023
              </span>
              <span className="ml-4 text-black/60">CRUD</span>
            </div>
            <div>
              <p>
                It is a secret blogging webApp, where user can share their
                secrets without revealing their identity. User Can Read
                Secret&apos;s of others by logging into the website
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2"></div>
      </div>
    </section>
  );
}
