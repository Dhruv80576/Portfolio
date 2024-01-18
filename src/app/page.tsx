import Image from 'next/image'
import Page from './home/page';

import { Bebas_Neue, Dancing_Script, Exo, Rubik_Glitch, Tektur } from 'next/font/google';
import About from '@/app/about/page';
import Projects from './projects/page';
import Contact from './contact/page';
const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dancing'
})
const rubik=Rubik_Glitch({
   weight:'400',
   subsets:['latin'],
})
const exo=Exo({
  subsets:['latin'],
  weight:'400',
})

export default function Home() {

  return (
    <>
    <div className='h-screen bg-white overflow-x-hidden'>
      <div className='h-screen flex flex-col'>
        <div className='fixed w-screen flex flex-row items-center justify-center pt-2 backdrop-blur-sm text-black'>
          <h1 className='px-3 py-1 rounded-xl transition-all ease-in-out duration-300 hover:px-4 hover:bg-yellow-400'>Home</h1>
          <h1 className='px-3 py-1 rounded-xl'>About</h1>
          <h1 className='px-3 py-1 rounded-xl'>Projects</h1>
          <h1 className='px-3 py-1 rounded-xl'>Contact</h1>
        </div>
        <div className='flex flex-col w-screen items-center text-black mt-[15%]'>
          <div className='flex flex-col justify-start'>
            <p className='text-4xl font-bold italic'>
              2024
            </p>
            <p className={` text-[120px] ${rubik.className} py-0`}>
              Portfolio
            </p>
            <div className='flex flex-row justify-start items-start'>
              <div>

              </div>
              <p className={`text-2xl font-extrabold ${exo.className}`}>
                Dhruv Agrawal
              </p>
              {/* <p className={`text-xl font-bold font-Dancingscript ${dancing.className} justify-self-end self-end`}>
                Software Developer
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}
