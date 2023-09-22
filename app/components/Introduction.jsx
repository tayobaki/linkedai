import bigIdea from "@/app/assets/the big idea 1.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className=" pt-7 md:pt-20 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5">
        <div className="relative w-full h-96">
          <div className="">
            <Image src={bigIdea} fill className=" object-contain " />
          </div>
          <h2 className=" absolute left-1/2 top-1/2 translate-y-[5%] translate-x-[-50%] max-w-[124px]  text-center text-2xl ">
            The Big Idea
          </h2>
        </div>

        <div className="text-center md:text-left space-y-3">
          <h1 className=" md:text-3xl text-xl font-bold text-white">
            Introduction to getlinked <br />
            <span className="text-violet">tech Hackathon 1.0</span>
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
      </div>
    </section>
  );
}
