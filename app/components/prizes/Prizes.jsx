import trophy from "@/app/assets/trophy.png";
import Image from "next/image";
import silver from "@/app/assets/silver.png";

export default function Prizes() {
  return (
    <section className="min-h-screen border-t border-white/10 py-16">
      <div className="">
        <h1>Prizes and Rewards</h1>
        <p className="">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        <div className="relative">
          <Image src={trophy} className="trophy p-10" />
          <div className="trophy-lens absolute md:-top-32 md:-left-3 -left-20 md:w-96  md:h-96"></div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 text-center">
            <div className=" border-violet  border bg-violet/10  rounded-xl flex flex-col justify-center items-center p-20  h-48 md:h-72 relative ">
              <h2 className="mt-6 font-bold text-xs md:text-3xl">
                2nd <br />
                Runner
              </h2>
              <span className=" text-violet">N300,000</span>
              <Image
                src={silver}
                className="absolute md:-top-10 w-16 -top-10 h-16 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
