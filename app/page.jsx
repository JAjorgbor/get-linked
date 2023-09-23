import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-2xl">
      <section className="spotlight-bg h-screen flex flex-col md:flex-row items-center pl-40 relative">
        <div className=" h-full flex items-center text-[4rem] 
        min-w-[40%] leading-[4rem]">
          <div>
            <h1>getlinked Tech</h1>
            <h1>Hackathon 1.0</h1>
          </div>
        </div>
        <div className="h-full w-full flex justify-end items-end relative grayscale ">
          <Image
            src="/media/man-wearing-smart-glasses.svg"
            className="absolute right-0 w-full h-4/5"
            alt="man-wearing-smart-glasses"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute right-20 bottom-10 flex items-end h-[500px] w-[500px]">
          <Image
            src="/media/blue-globe.svg"
            className="absolute right-0 w-full h-full"
            alt="blue-glowing-globe"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
