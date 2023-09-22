import designer from "@/app/assets/register.png";
import Image from "next/image";
import girl from "@/app/assets/girl.png";
import man from "@/app//assets/man.png";

export default function Register() {
  return (
    <section className="h-full py-10 px-10 bg-indigo text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image src={designer} />

        <div className="glass relative rounded-xl shadow-lg px-9 py-9">
          <div className=" w-full">
            <h1 className=" text-violet font-bold text-2xl">Register</h1>
            <div className="flex items-end gap-1 mt-4">
              <span className="">Be part of the movement!</span>
              <div className="flex items-center relative ">
                <div
                  className="line w-full h-1 absolute border-dashed border-violet
                 border-b bottom-1 left-0"
                ></div>
                <Image src={girl} />
                <Image src={man} className="mb-1" />
              </div>
            </div>
            <strong className=" text-2xl">CREATE YOUR ACCOUNT</strong>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-4 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Team's Name</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border rounded-md bg-transparent py-3 pl-4 shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border rounded-md bg-transparent py-3 pl-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border rounded-md bg-transparent py-3 pl-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Project Topic</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border rounded-md bg-transparent py-3 pl-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Category</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border rounded-md bg-transparent py-3 pl-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Group Size</label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border rounded-md bg-transparent py-3 pl-4"
                />
              </div>
            </form>

            <h6 className=" text-violet">
              Please review your registration details before submitting
            </h6>

            <div className="flex items-start my-3 gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="mt-1 bg-transparent "
              />

              <p className=" max-w-xs italic">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>

            <button className="mx-auto w-44 h-14 bg-gradient-to-l from-purple from-30% to-violet to-100% rounded ">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
