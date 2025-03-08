import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 text-black md:h-[50vh] bg-purple-200 text-xs md:text-base" >
        <div className="flex flex-col items-center justify-center gap-3" >
          <p className="text-3xl font-bold poppins ">
            The best URL shortner in the market
          </p>
          <p className=" text-center px-7 " > 
            We are the most straight forward URL shortner in the market. Most of the URL shortners are filled with ads and trackers. We are not like them. We are simple and straight forward. We don't track you. We don't show you ads. We don't sell your data. We are the best URL shortner in the market.
          </p>
          <div className='gap-3 text-fuchsia-50'>
                <Link href="/generate" > <button className='shadow-2xl px-3 py-1 rounded-xl bg-purple-600 font-bold ' >Try Now</button> </Link>
                <Link href="/github" > <button className='shadow-2xl px-3 py-1 rounded-xl bg-purple-600 font-bold ' >Github</button> </Link>
            </div>
        </div>
        <div className="flex justify-start relative " >
          <Image alt="an image of the vector" src={"/vector.svg"} fill={true} / >
        </div>
      </section>
    </main>
  );
}
