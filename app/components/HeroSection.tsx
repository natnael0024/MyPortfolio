import React from 'react'
import Image from 'next/image'
import pic from '@/app/images/1.png'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";

import Link from 'next/link';


const HeroSection = () => {
  return (
    <div className='px-2 py-10 relative'>
        <div className='gradient lg:w-[50rem] lg:h-[30rem]  -translate-x-1/2 left-1/2 top-60'></div>
        <div className=' z-30 relative bg-white dark:bg-[#1c1c27]  w-full lg:w-[60rem] p-10 border-2 border-secondary-200 dark:border-secondary-300/10 duration-500 rounded-3xl shadow-xl hover:shadow-lg shadow-secondary-500/10 hover:shadow-secondary-500/10  mx-auto mt-28'>
            <div className=' z-20  flex flex-col space-y-6 justify-center items-center'>
                <div className=' relative'>
                    {/* <Image src={pic}
                     className=' duration-[10000ms] z-20 relative filter blur-xl '
                     alt='image'
                     width={370}
                     height={370}/>
                      <Image src={pic}
                     className=' absolute z-20 top-0 filter  '
                     alt='image'
                     width={360}
                     height={360}/> */}
                     <div className='z-10 top-0 left-1/2 transform -translate-x-1/2 absolute h-60 w-60 bg-gradient-to-br from-secondary-500 via-secondary-200 to-secondary-700 rounded-full p-4 border-[7px] border-secondary-500 shadow-2xl shadow-secondary-300/50 '></div>
                </div>
                <h1 className=' w-full z-20 bg-gradient-to-r from-secondary-600 via-secondary-300 to-secondary-800 dark:from-secondary-300 dark:via-secondary-200 dark:to-secondary-500 bg-clip-text text-transparent text-xl text-center sm:text-4xl lg:text-6xl font-bold tracking-wider '>
                  Hi, I'm Natnael Legesse</h1>
                {/* <div className=' flex items-center gap-4'>
                  <Link href="https://www.linkedin.com/in/natnael-legesse-6239591a2/" target='_blank' className=' flex gap-2 items-center bg-primary-500/10 hover:bg-primary-500/25 duration-300 p-1 px-3 rounded-full border border-primary-500/20'>
                    <TbBrandLinkedinFilled size={20} className='text-primary-500'/>
                    <span className='text-primary-500'>Linkedin</span>
                  </Link>
                  <Link href="https://t.me/nattechnology" target='_blank'  className=' flex gap-2 items-center bg-cyan-500/10 hover:bg-cyan-500/25 duration-300 p-1 px-3 rounded-full border border-cyan-500/20'>
                    <TbBrandTelegram size={20} className='text-cyan-500'/>
                    <span className='text-cyan-500'>Telegram</span>
                  </Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default HeroSection