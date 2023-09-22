import Image from "next/image";
import liberty from "@/app/assets/liberty-logo.png";
import libertyPay from "@/app/assets/liberty-pay.png";
import winwise from "@/app/assets/winwise.png";
import wisper from "@/app/assets/wisper.png";

export default function Sponsors() {
  return (
    <div>
      <h1 className="text-bold text-center">Patners and Sponsors</h1>
      <p className="text-medium mt-5 text-center">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>

      <div className=" border mt-5 p-6 border-violet ">
        <div className="relative overflow-hidden grid grid-cols-3 grid-rows-2 items-center  justify-evenly max-w-2xl gap-6 md:gap-20  mx-auto before:border-t-2 before:overflow-hidden before:border-violet   before:absolute before:w-full before:h-full before:top-1/2 m-10">

          <div className="absolute before:absolute before:w-10 before:-left-5 before:top-1/2 before:translate-y-[-50%] before:bg-indigo before:h-10 before:rounded-full right-[30%] h-full border-violet border-2" />
          <div className="absolute before:absolute before:w-10 before:-left-5 before:top-1/2 before:translate-y-[-50%] before:bg-indigo before:h-10 before:rounded-full left-[30%] h-full border-violet border-2" />
          <Image src={liberty} className="p-2" />
          <Image src={libertyPay} className=" p-2" />
          <Image src={winwise} className="p-2" />
          <Image src={wisper} className="p-2" />
          <span className=" "></span>
          <Image src={libertyPay} className="p-2" />
        </div>
      </div>
    </div>
  );
}
