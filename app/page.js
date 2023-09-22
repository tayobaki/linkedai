import Header from "./components/Header";
import Image from "next/image";
import Line from "@/public/line.svg";
import Introduction from "./components/Introduction";
import Guidelines from "./components/guidelines/Guidelines";
import Criteria from "./components/criteria/Criteria";
import Faqs from "./components/faqs/Faqs";
import Timeline from "./components/timeline/Timeline";
import Prizes from "./components/prizes/Prizes";
import Terms from "./components/terms/Terms";
import Footer from "./components/footer/Footer";
import Sponsors from "./components/sponsors/Sponsors";

export default function Home() {
  return (
    <main className="bg-indigo z-30 font-montserrat ">
      <div className=" text-white">
        <div className="relative px-10 py-5  lg:w-full w-fit mx-auto">
          <h1 className="lg:text-right text-center italic font-bold">
            Igniting a Revolution in HR Innovation
          </h1>
          <div className="absolute  right-9">
            <Image src={Line} width={130} height={17} alt="line" className="" />
          </div>
        </div>
        <Header />
        <div className="px-10">
          <Introduction />
          <Guidelines />
          <Criteria />
          <Faqs />
          <Timeline />
          <Prizes />
          <Sponsors />
          <Terms />
          <Footer />
        </div>
      </div>
    </main>
  );
}
