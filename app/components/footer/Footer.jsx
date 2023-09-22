import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo border-t border-white/10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-r from-white from-35% to-violet to-5% z-40 text-transparent"
          >
            getlinked
          </Link>
          <span>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </span>
          <h5 className=" mt-auto">Terms of Use Privacy Policy</h5>
        </div>
        <ul className="flex flex-col gap-4 items-center text-left">
          <h1 className=" text-violet">Useful Links</h1>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
          <li className="flex items-center">
            <span>Follow Us</span>
            <div className=""></div>
          </li>
        </ul>
        <div className=" justify-end grid">
          <h1 className=" text-violet">Contact Us</h1>
          <div className="flex flex-col gap-3 ">
            <span>+234 679 81839</span>
            <span className="max-w-[149px]">27, Alara Street Yaba 10012 Lagos State</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
