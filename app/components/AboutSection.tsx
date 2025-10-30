import Link from 'next/link';
import React from 'react'
import { RiLightbulbFlashLine } from "react-icons/ri";
import { TbBrandGithub, TbBrandHackerrank, TbBrandLinkedinFilled, TbBrandTelegram } from 'react-icons/tb';

const socialMedias = [
    // {
    //     id:1,
    //     name:'LinkedIn',
    //     color:'primary',
    //     icon:<TbBrandLinkedinFilled className=' text-primary-500'/>,
    //     link:'https://www.linkedin.com/in/natnael-legesse-6239591a2/'
    // },
    {
        id:2,
        name:'Github',
        color:'gray',
        icon:<TbBrandGithub className=' dark:text-white'/>,
        link:'https://github.com/natnael0024'
    },
    // {
    //     id:3,
    //     name:'HackerRank',
    //     color:'green',
    //     icon:<TbBrandHackerrank className='text-green-500'/>,
    //     link:'https://www.hackerrank.com/certificates/3b09704215a1'
    // },
    {
        id:3,
        name:'Telegram',
        color:'cyan',
        icon:<TbBrandTelegram className=' text-cyan-500'/>,
        link:'https://t.me/nattechnology/'
    },
    
]

const AboutSection = () => {
  return (
    <div id='about' className=' px-2 lg:px-56   sm:py-32 flex flex-col space-y-10 '> 
        <div className=' flex justify-center  sm:justify-between items-center gap-10 '>
            <div className=' flex flex-col space-y-10'>
                <h1 className=' text-center sm:text-left text-secondary-800 dark:text-white text-3xl lg:text-5xl font-bold'>About</h1>
                <p className=' text-secondary-900/75 dark:text-white/90 break-words text-center sm:text-left justify-between leading-9 text-xl'>
                    IT professional with a strong background in programming, networking, and system support. Skilled in solving technical challenges, optimizing infrastructure, and writing clean, efficient code. Passionate about continuous learning and staying updated with evolving tech.
                </p>
                <div className=' flex flex-wrap gap-4'>
                    {socialMedias.map(soc=>(
                      <Link href={soc.link} target='_blank' key={soc.id} className={` flex gap-2 items-center bg-${soc.color}-500/10 hover:bg-${soc.color}-500/25 duration-300 p-2 px-4 rounded-full border border-primary-500/20`}>
                        {soc.icon}
                        <span className={` ${soc.id==2? 'dark:text-white':''} text-${soc.color}-500`}>{soc.name}</span>
                      </Link>
                    ))}
                </div>
            </div>
            <div className=' w-full hidden sm:block'>
                <div className='relative z-10 h-60 w-60 bg-gradient-to-br from-secondary-500 via-secondary-200 to-secondary-700 rounded-full p-4 border-[7px] border-secondary-500 shadow-2xl shadow-secondary-300/50 hover:shadow-secondary-400/75 '>
                    <RiLightbulbFlashLine size={100} className='absolute z-20 text-secondary-900  left-1/2 -translate-x-1/2 translate-y-1/2'/>
                </div>
                {/* <div className=' rotate-12 shadow-2xl h-[35rem] w-[17.5rem] border-[8px] border-white rounded-[3rem] bg-gradient-to-r from-primary-500 to-primary-600'></div> */}
            </div>
        </div>
    </div>
  )
}

export default AboutSection