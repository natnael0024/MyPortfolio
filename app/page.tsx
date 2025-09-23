import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Portfolio from "./components/Portfolio";
import AboutSection from "./components/AboutSection";
import { TbCircleDashedLetterN } from "react-icons/tb";
import Contact from "./components/Contact";
import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <main className=" flex flex-col  dark:bg-[#1C1C27] duration-200 bg-white">
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <Portfolio/>
        <Contact/>
      </main>
      <footer className=" bg-gradient-to-r from-secondary-700/50 to-[#4d2308] dark:bg-[#1a1d29] min-h-36 flex flex-col gap-6 py-5 px-2 lg:px-8">
        
        <div className="flex items-center justify-between ">
          <div className=' flex flex-shrink-0 items-center gap-2'>
            <div className=' bg-gradient-to-tr from-primary-500 to-primary-600 p-2 px-4 w-12 h-12 flex items-center justify-center rounded-xl font-bold text-white text-xl shadow-lg shadow-primary-500/50 dark:shadow-primary-800'>
              <span className=' '><TbCircleDashedLetterN size={40}/></span>
            </div>
            <span className=' text-xl font-bold text-white dark:text-secondary-500'>Natnael</span>
          </div>
          
          <div className=" flex gap-4">
            <Link href=""><SiLinkedin className="text-white text-xl hover:rotate-6 hover:shadow-xl hover:text-secondary-300 hover:shadow-secondary-300/20  duration-500"/></Link>
            <Link href=""><SiGithub className="text-white text-xl hover:rotate-6 hover:shadow-xl hover:text-secondary-300 hover:shadow-secondary-300/20  duration-500"/></Link>
            <Link href=""><SiTelegram className="text-white text-xl hover:rotate-6 hover:shadow-xl hover:text-secondary-300 hover:shadow-secondary-300/20  duration-500"/></Link>
          </div>
        </div>

        <hr className=" opacity-15" />
        <span className=" text-center text-white/75">
            © {new Date().getFullYear()} Natnael Legesse. All rights reserved.
        </span>


      </footer>
    </div>
  );
}
