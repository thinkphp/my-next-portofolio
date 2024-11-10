import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className="pt-2 pb-8 bg-[#0f0715] border-t border-gray-400 shadow-xl ">

      <div className="text-white opacity-60 mt-3 text-center">
        © 2024 Talha Jamal. All Rights Reserved.
      </div>
      <div className="flex justify-center items-center gap-6 mt-4">

        <Link href="https://www.facebook.com/profile.php?id=100086759149845" target="_blank">
          <FaFacebook size={24} className="text-white hover:text-[#0866FF] transition-colors duration-300" />
        </Link>

        <Link href="https://github.com/TalhaJamal02" target="_blank">
          <FaGithub size={24} className="text-white hover:text-gray-800 transition-colors duration-300" />
        </Link>

        <Link href="https://www.linkedin.com/in/talha-jamal-/" target="_blank">
          <FaLinkedin size={24} className="text-white hover:text-[#0A66C2] transition-colors duration-300" />
        </Link>
      </div>
    </div>
  )
}

export default Footer