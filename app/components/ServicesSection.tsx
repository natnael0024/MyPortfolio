'use client'
import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoPython, IoLogoLaravel } from "react-icons/io5";
import { SiCss3, SiDjango, SiDocker, SiGithubactions, SiHtml5, SiLinux, SiNetlify, SiTailwindcss, SiVercel, SiFastapi, SiFramer } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
    {
        id:1,
        title:'Web Develpment',
        desc:'Full-Stack Development',
        color: 'teal',
        techs:[<RiReactjsFill/>,<IoLogoJavascript/>, <IoLogoPython/>,<SiDjango/>,<SiFastapi/>, <IoLogoNodejs/>,<IoLogoLaravel/>],
        icon: '🛠'
    },
    {
        id: 2,
        title: 'Custom Development',
        color: 'secondary',
        desc: 'Portfolio sites, Business sites, Landing Pages',
        techs: [<RiReactjsFill/>, <IoLogoJavascript/>, <SiTailwindcss/>, <SiHtml5/>, <SiCss3/>, <SiFramer/>],
        icon: '🧑🏾‍💻'
    },
    {
        id: 3,
        title: 'DevOps & Deployment',
        color: 'primary',
        desc: 'CI/CD setup, Docker, Vercel, Netlify',
        techs: [<SiDocker/>, <SiGithubactions/>, <SiVercel/>, <SiNetlify/>, <SiLinux/>],
        icon: '🐳'
    }
]

const ServicesSection = () => {
  return (
    <div id="services" className=' px-2 lg:px-28 py-10  lg:py-32 flex flex-col space-y-10 '> 
        <h1 className='text-center text-secondary-800 dark:text-white text-3xl lg:text-5xl font-bold'>Services</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {services.map((s)=>(
                <div key={s.id} className=' bg-secondary-50 dark:bg-[#292938] border dark:border-neutral-600 rounded-2xl flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-2 duration-500 hover:shadow-secondary-500/5 p-6 '>
                    <div className='flex items-center  gap-4'>
                        <div className={`shadow-2xl text-2xl dark:text-white ${s.id == 1 ? 'bg-gradient-to-r from-teal-500 to-teal-600':''} shadow-${s.color}-500/10 bg-gradient-to-r from-${s.color}-500 to-${s.color}-600 rouned-xl p-4 h-16 w-16 flex items-center justify-center rounded-2xl`}>
                            {s.icon}
                        </div>
                        <span className=' text-2xl font-bold text-gray-800 dark:text-white'>{s.title}</span>
                    </div>
                    <span className=' text-lg text-gray-600 dark:text-gray-300'>{s.desc}</span>
                    <div className=' flex flex-wrap space-x-4 mt-auto'>
                        {s.techs.map(t=>(
                            <span className=' dark:text-white text-2xl'>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesSection