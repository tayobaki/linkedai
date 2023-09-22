import Faq from "@/app/assets/faqs.png";
import { question } from "@/constants/data";
import Image from "next/image";

export default function Faqs() {
  return (
    <section id="
    faqs" className="py-10 border-t border-white/10">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 gap-5">
        <div className="">
          <h1 className=" font-bold text-3xl max-w-[250px]">
            Frequently Ask Question
          </h1>
          <p className="font-bold my-5 text-sm max-w-xs">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <ul className=" space-y-4 list-none">
            {question.map((item) => (
              <li
                className="flex border-b pb-1  w-full justify-between
             border-violet items-center"
              >
                <p>{item.p}</p>
                <span className=" cursor-pointer text-xl text-violet">+</span>
              </li>
            ))}
          </ul>
        </div>

        <Image src={Faq} className="lg:p-5 " alt="" />
      </div>
    </section>
  );
}
