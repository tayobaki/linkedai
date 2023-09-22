import insta from "@/app/assets/insta.svg";
import x from "@/app/assets/x.svg";
import facebook from "@/app/assets/facebook.svg";
import linkedin from "@/app/assets/linkedin.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section className=" font-montserrat pt-32 px-10 py-32 bg-indigo  text-white">
      <div className="grid items-start grid-cols-1 md:grid-cols-2">
        <div className="relative hidden md:block space-y-4 ml-32">
          <h1 className=" text-violet font-bold">Get in touch</h1>
          <span>Contact information</span>
          <h2>
            27,Alara Street <br /> Yaba 100012 Lagos State
          </h2>
          <h6>Call Us : 07067981819</h6>
          <span className=" ">
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </span>

          <p className=" text-violet">Share on</p>
          <div className="flex items-center gap-3 mt-2">
            <Image src={insta} alt="insta" />
            <Image src={x} alt="X" />
            <Image src={facebook} alt="X" />
            <Image src={linkedin} alt="X" />
          </div>
          <div className="contactflare absolute -left-[80%] -top-32"></div>
        </div>

        <div className="glass max-w-[470px] relative rounded-xl shadow-lg">
          <div className="contactflare md:hidden absolute -left-[80%] -top-32"></div>
          <div className="p-5 ">
            <h2
              className=" text-violet text-xl 
            "
            >
              Questions or need assistance? <br />
              Let us know about it!
            </h2>

            <form className="grid mt-5 gap-3 " action="">
              <input
                type="text"
                placeholder="First Name"
                className="w-full py-2 pl-4 rounded-md bg-transparent border"
              />
              <input
                type="text"
                placeholder="Mail"
                className="w-full py-2 pl-4 rounded-md bg-transparent border"
              />
              <textarea
                placeholder="Message"
                className="w-full py-2 pl-4 rounded-md bg-transparent border"
                name=""
                id=""
                cols="30"
                rows="3"
              ></textarea>
              <button className="mx-auto w-44 h-14 bg-gradient-to-l from-purple from-30% to-violet to-100% rounded ">
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
