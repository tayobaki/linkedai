import lock from "@/app/assets/lock.png";
import lockbg from "@/app/assets/lock-bg.png";
import Image from "next/image";
import PurpleLens from "@/app/assets/purple-lens-flare.png";

export default function Terms() {
  return (
    <section className="border-t mt-10 border-white/10 py-20  relative">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start ">
        <div className="">
          <h1 className=" text-3xl font-bold max-w-xs">
            Privacy Policy and Terms
          </h1>
          <p className=" my-4 opacity-50 text-sm">
            Last updated on September 12, 2023
          </p>
          <p
            className=" mt-3 max-w-md
          "
          >
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className=" rounded border-violet border p-8 text-sm mt-9">
            <p className=" max-w-[425px]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h5 className=" text-violet font-bold text-lg mt-5">
              Licensing Policy
            </h5>
            <span className="mt-2 font-bold">
              Here are terms of Standard License"
            </span>

            <div className="flex items-start my-6 gap-3 max-w-[400px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
              </svg>
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="flex max-w-[400px] items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
              </svg>
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="mx-auto text-center w-full">
              <button className="mx-auto mt-6 w-44 h-14 bg-gradient-to-l from-purple from-10% to-violet to-100% rounded ">
                <span>Read More</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative ">
          <Image src={lock} className="p-10" />
          <Image src={lockbg} className="absolute top-0 p-20 -z-10" />
        </div>
      </div>
        <div className="purple1 -left-[24%] sm:-bottom-80 -bottom-0 -z-40 absolute">
          <Image src={PurpleLens} />
        </div>
    </section>
  );
}
