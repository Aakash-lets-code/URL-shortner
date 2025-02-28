import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 text-black h-[50vh] bg-purple-200 " >
        <div className="flex flex-col items-center justify-center gap-2" >
          <p className="text-xl font-bold " >
            The best URL shortner in the market
          </p>
          <p>
            We are the most straight forward URL shortner in the market.
          </p>
        </div>
        <div className="flex justify-start relative " >
          <Image alt="an image of the vector" src={"/vector.png"} fill={true} / >
        </div>
      </section>
    </main>
  );
}
