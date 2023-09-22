import criteriaImage from "@/app/assets/criteriaImage.png";
import Image from "next/image";
import { criteria } from "@/constants/data";
import star from "@/app/assets/star.png";

export default function () {
  return (
    <section className="mt-10 py-10 border-t border-white/10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center lg:items-ce 
      "
      >
        <div className="relative">
          <Image
            src={criteriaImage}
            width={710}
            height={587}
            className=" object-cover  bg-bottom"
          />
          <div className=" w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-l from-purple from-10% to-violet to-100% rounded-full absolute top-0 lg:left-20  left-12 hidden md:block -z-10 " />
          <Image
            src={star}
            width={26}
            height={32}
            className="absolute -top-10 md:block hidden"
          />
        </div>

        <div className=" text-3xl text-center md:text-left font-bold">
          <h1>
            Judging Criteria <br />
            <span className=" text-violet">Key attributes</span>
          </h1>

          <div className="flex flex-col gap-4 mt-3 ">
            {criteria.map((item) => (
              <h1 className="text-[#ff26b9]   text-base">
                {item.title}
                <p className="text-white text-sm font-normal">{item.p}</p>
              </h1>
            ))}
          </div>

          <button className="mt-8 w-44 h-14 bg-gradient-to-l from-purple from-10% to-violet to-100% text-lg rounded ">
            <span>Read More </span>
          </button>
        </div>
      </div>
    </section>
  );
}
