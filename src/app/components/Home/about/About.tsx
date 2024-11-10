import { aboutInfo } from "@/app/Data/data"
import SectionsHeading from "../../Helper/SectionsHeading"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"

function About() {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]" id="about">
      <SectionsHeading>
        About me
      </SectionsHeading>

      <div className=" w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-cl text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {aboutInfo.title}
          </h1>
          <p className=" mt-6 text-base text-white opacity-70">{aboutInfo.description}</p>
          <div className="mt-8">

            <div className=" flex items-center space-x-2 mb-6">
              <div className=" w-7 h-7 bg-zinc-700 flex flex-col items-center justify-center rounded-md">
                <FaCheck className="text-white " />
              </div>
              <p className=" text-sm sm:text-base mg:text-lg font-bold text-gray-300">Frontend Development</p>
            </div>
          </div>

          <div className=" flex items-center space-x-2 mb-6">
            <div className=" w-7 h-7 bg-zinc-700 flex flex-col items-center justify-center rounded-md">
              <FaCheck className="text-white " />
            </div>
            <p className=" text-sm sm:text-base mg:text-lg font-bold text-gray-300">UI/UX Design</p>
          </div>

          <div className=" flex items-center space-x-2 mb-6">
            <div className=" w-7 h-7 bg-zinc-700 flex flex-col items-center justify-center rounded-md">
              <FaCheck className="text-white " />
            </div>
            <p className=" text-sm sm:text-base mg:text-lg font-bold text-gray-300">Problem Solving & Debugging</p>

          </div>
        </div>

        {/* stats content */}
        <div className="grid grid-cols-2 items-center gap-16 lg:mx-auto">
          <div>
            <Image
              src={"/images/experience.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className=" mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
            <p className=" text-base sm:text-lg text-gray-300 text-center ">Years Experience</p>
          </div>

          <div>
            <Image
              src={"/images/completed.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className=" mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
            <p className=" text-base sm:text-lg text-gray-300 text-center">
              Completed Project
            </p>
          </div>

          <div>
            <Image
              src={"/images/rocket.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className=" mt-3 font-bold text-xl text-white text-center">{aboutInfo.website}</p>
            <p className=" text-base sm:text-lg text-gray-300 text-center ">
              Website Launched
            </p>

          </div>
        </div>

      </div>
    </div>

  )
}

export default About