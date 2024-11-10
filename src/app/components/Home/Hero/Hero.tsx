import { BaseInfo } from "@/app/Data/data"
import Image from "next/image"
import Link from "next/link"
import { FaDownload } from "react-icons/fa"

function Hero() {
  return (
    <div className=" w-full pt-[4vh] md:pt[12vh] h-screen bg-[#0f0715] overflow-hidden">
      <div className=" flex justify-center flex-col w-4/5 h-screen mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Content */}
          <div>
            <h1 className=" text-2xl md:text-3xl lg:text-4xl mb-2 text-gray-300 font-semibold">I am {BaseInfo.name}
            </h1>
            <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-cl">
              {BaseInfo.position}
            </h1>
            <p className=" mt-6 text-sm md:text-base text-white opacity-60 ">{BaseInfo.description}</p>
            <Link href="https://drive.google.com/file/d/1OKpDjNIdaz_Slb-hyDfeYh4C60EK6Jas/view?usp=sharing" target="_blank">
              <button className=" md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold bg-zinc-500 rounded-lg text-sm md:text-lg mt-6 transition-all duration-300 hover:bg-opacity-70 flex items-center space-x-2">
                <span>Download CV</span>
                <FaDownload />
              </button>
            </Link>
          </div>

          {/* image */}
          <div className=" mx-auto hidden lg:block overflow-x-hidden">
            <Image
              src={BaseInfo.ProfileImage}
              alt={BaseInfo.name}
              width={500}
              height={500}

            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero