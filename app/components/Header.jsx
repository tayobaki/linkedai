import Image from "next/image";
import PurpleLens from "@/app/assets/purple-lens-flare.png";
import headerCircle from "@/app/assets/headerCiricle.png";
import headerImage from "@/app/assets/headerImage.png";
import chain from "@/app/assets/chain.png";
import Time from "./Time";

export default function Header() {
  return (
    <section className="text-white relative   z-50 md:mt-20 mt-10 w-full">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className="purple1 lg:-top-[89%]  z-40 absolute">
          <Image src={PurpleLens} />
        </div>
        <div className="space-y-6 px-10 text-center md:text-left z-50 left-header">
          <div className=" max-w-3xl  lg:text-7xl font-bold text-3xl  ">
            <div className="w-fit mx-auto md:mx-0">
              <h1>getlinked Tech</h1>
              <div className="flex items-center justify-center md:justify-start relative">
                <span>Hackathon</span>
                <span className=" text-violet">1.0</span>
                <div className="absolute md:h-20 md:w-20 w-10 h-10 right-0">
                  <Image
                    src={chain}
                    fill
                    alt="chain"
                    className="object-contain ml-10 md:ml-20"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className=" md:text-xl text-xs max-w-[264px] sm:max-w-full sm:mx-0 mx-auto">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <button className=" w-44 h-14 bg-gradient-to-l from-purple from-10% to-violet to-100% rounded ">
            <span>Register</span>
          </button>

          <Time />
        </div>

        <div className="right-header p-1 relative w-full h-96">
          <div className="">
            <Image
              src={headerImage}
              fill
              className="object-contain bg-blend-luminosity bg-no-repeat headerImage"
            />
            <Image
              src={headerCircle}
              fill
              className="object-contain bg-blend-luminosity bg-no-repeat headeCircle -z-10 bgblen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
