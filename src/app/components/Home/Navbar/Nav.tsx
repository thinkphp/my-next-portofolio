import Link from "next/link"
import { navLinks } from "../../../../../constant/constant"
import { HiBars3BottomRight } from "react-icons/hi2"

type Props = {
  openNav: () => void;
}

function Nav({ openNav }: Props) {

  return (
    <div className="fixed h-[11vh] z-[10]  w-full transition-all duration-200 bg-gray-800 backdrop-blur-xl">
      <div className=" flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">

        <h1 className=" sm:ml-0 text-gray-200 text-3xl font-bold">Adrian.</h1>

        <div className=" flex items-center space-x-10">
          <div className=" hidden lg:flex items-center space-x-8">
            {" "}
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav-link">{navlink.label}</p>
                </Link>
              )
            })};
          </div>

          <div className=" flex items-center space-x-4">
            <HiBars3BottomRight onClick={openNav} className=" w-8 h-8 cursor-pointer text-white lg:hidden " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
