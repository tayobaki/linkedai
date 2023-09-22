import guide from "@/app/assets/guideImage.png";
import PurpleLens from "@/app/assets/purple-lens-flare.png";
import Image from "next/image";
import star from "@/app/assets/star.png";

export default function Guidelines() {
  return (
    <section className="border-t border-white/10 md:mt-20 mt-10 py-4 ">
      <div className="grid justify-between grid-cols-1 md:grid-cols-2 items-center relative">
        <div className="space-y-4 left-guideline order-2 md:order-1 text-center md:text-left">
          <div className="left-guideline-lens absolute -top-20 rounded-full left-0">
            <Image
              src={PurpleLens}
              width={384}
              height={384}
              className=" object-cover"
            />
          </div>
            <Image src={star} width={26} height={32} className="absolute md:left-44 md:top-28 -top-0" />
          <h1 className=" md:text-3xl text-xl font-bold">
            Rules and <br />
            <span className="text-violet">Guidelines</span>
          </h1>

          <p className=" md:text-sm text-xs">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <div className="order-1 md:order-2 flex items-end justify-end relative z-50">
          <Image
            src={guide}
            width={668}
            height={664}
            alt="guideline"
            className=" object-contain"
          />
          <div className=" w-32 h-32 bg-gradient-to-l from-purple from-10% to-violet to-100% rounded-full absolute top-20 right-28 hidden lg:block -z-10" />
        </div>
      </div>
    </section>
  );
}
