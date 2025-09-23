import React,{useRef} from 'react'
import p1 from '@/app/images/p1.png'
import p2 from '@/app/images/tew.png'
import p3 from '@/app/images/rhm.png'
import p4 from '@/app/images/natai3.png'
import p5 from '@/app/images/teamlink.png'
import p6 from '@/app/images/chillncode.png'
import p7 from '@/app/images/nataitgbot.png'
import p8 from '@/app/images/tti.png'
import p9 from '@/app/images/mystore.png'
import Image from 'next/image'
import Link from 'next/link'


const portfolios = [
    {
      id:1,
      title:'MyStore',
      desc:'MyStore is an eCommerce platform built with Laravel (backend) and Next.js (frontend). It offers a seamless shopping experience and an intuitive admin dashboard to manage products, orders, users, roles, permissions and view analytics.',
      image:p9,
      url :'https://mystore-a0s0.onrender.com', 
      techStack:['Laravel','NextJs','Postgresql']
    },
    {
      id:2,
      title:'Yemikeray Bet Ale',
      desc:'Yemikeray Bet Ale is a rental property marketplace connecting owners/agents with renters. It offers secure user accounts, property listing, advanced search, detailed profiles and communication tools.The platform also features an admin dashboard.',
      image:p3,
      url :'https://yba.onrender.com/',
      techStack:['Django','JavaScript','TailwindCSS','Postgresql','Supabase']
    },
    {
      id:3,
      title:'EtBolo',
      desc:'EtBolo is a user-friendly web platform for vehicle test companies and government officials. It streamlines the vehicle authorization process by securely storing and accessing test results. With features such as data management, analytics, workflow automation, and collaboration tools, the dashboard promotes efficiency and accuracy in evaluating vehicle compliance with regulations. (Due to NDA I am not allowed to show demo)',
      image:p2,
      url:'https://stg.tewostechsolutions.com',
      techStack:['Laravel','JavaScript']
    },
    {
      id:4,
      title:'NatAI chatbot',
      desc:'Natai is an AI-powered chatbot that aims to be your friendly and knowledgeable companion. Developed using the Google Gemini Model, Natai is designed to engage in natural conversations, answer questions, and assist you with a variety of tasks.',
      image:p4,
      url :'https://nataichat.onrender.com/', 
      techStack:['Python','FastAPI','ReactJS','Postgresql','Supabase','Gemini Model']
    },
    {
      id:5,
      title:'NatAI Telegram chatbot',
      desc:'NataiBot is an AI-powered chatbot designed to bring the capabilities of NatAI to Telegram users. NataiBot allows you to engage in natural conversations, get answers to your questions, and receive help with various tasks within the Telegram app. ',
      image:p7,
      url :'https://t.me/nat_AI_bot', 
      techStack:['Python','Postgresql','Gemini Model']
    },
    // {
    //   id:5,
    //   title:'Text To Image Generator',
    //   desc:'Text-to-Image Generator is an AI-powered platform designed to turn your words into stunning visuals. This platform allows you to create detailed, creative images from simple text descriptions, offering a seamless way to visualize your ideas.',
    //   image:p8,
    //   url :'https://text-to-image-nat-ai.onrender.com', 
    //   techStack:['Python','FastAPI','HuggingFace Model','ReactJs']
    // },
    {
      id:6,
      title:'chill&code',
      desc:'chill&code is a tech-focused blogging project designed to explore and share the latest trends, innovations, and insights in the world of technology. This project aims to provide valuable content for tech enthusiasts, professionals, and anyone interested in staying updated on emerging technologies, product reviews, how-to guides, and industry news. ',
      image:p6,
      url :'https://chillandcode.onrender.com/', 
      techStack:['NodeJs','ReactJS','Postgresql','Supabase']
    },
    // {
    //   id:7,
    //   title:'Traveler',
    //   desc:'A travel assistant web platform that provides users with a range of features and services to enhance their travel experiences. It serves as a digital companion that offers valuable information, personalized recommendations, and convenient tools to assist travelers in planning and organizing their trips.',
    //   image:p1,
    //   url:'https://travelers-coral.vercel.app/',
    //   techStack:['Next.JS','TailwindCSS']
    // },
]

const Portfolio = () => {
  return (
    <div id='portfolio' className=' px-2 lg:px-60 dark:bg-[#1a1d29]  lg:py-32 flex flex-col sm:space-y-16 '>
        <h1 className='text-center text-secondary-800 dark:text-white text-3xl lg:text-5xl font-bold'>Portfolio</h1>
        <div className=' flex flex-col gap-10'>
        {portfolios.map((portfolio)=>(
                <div key={portfolio.id} className={` bg-white dark:bg-[#20222c] border dark:border-neutral-600 rounded-2xl flex flex-col ${portfolio.id % 2===0?'sm:flex-row-reverse':'sm:flex-row'} justify-between items-center  gap-10 hover:shadow-xl duration-500 hover:shadow-secondary-500/5 p-2 sm:p-6 `}>
                    <div className=' flex-1'>
                        <Image 
                         src={portfolio.image}
                         width={800}
                         alt={portfolio.title}
                         className='rounded-xl shadow-2xl shadow-secondary-400/10 h-full'/>
                    </div>

                    <div className=' flex-1 flex flex-col space-y-4'>
                      <span className=' text-2xl font-bold text-gray-800 dark:text-white'>{portfolio.title}</span>
                      <span className=' text-md text-gray-600 dark:text-gray-300'>{portfolio.desc}</span>
                      <div className=' flex flex-wrap gap-2 mt-auto'>
                          {portfolio.techStack.map(t=>(
                              <span className=' shadow-2xl shadow-secondary-500/5  text-teal-600 dark:text-teal-300 text-md bg-teal-500/10 border-secondary-500/15 p-1 px-2 rounded-full'>
                                  {t}
                              </span>
                          ))}
                      </div>
                      <div className=' pt-5 pb-5 flex justify-center sm:justify-start'>
                        <Link href={portfolio.url} target='_blank' className={` ${portfolio.id==3?'hidden':''} bg-gradient-to-r  px-14 hover:scale-105 hover:shadow-2xl hover:shadow-secondary-500/30 duration-200 from-secondary-400 to-secondary-700 p-3 text-white font-semibold rounded-full`} >
                            Visit
                        </Link>
                      </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio