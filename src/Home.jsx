import './index.css';
import React from 'react';
import Name from './Name.jsx';
import FlowerMain from './FlowerMain.jsx';

function Home() {
  return (
    <section className="relative flex items-center h-screen grid grid-cols-12 gap-2">
      <h1 className="hidden">Emma Gardner</h1>
      <div className="flex flex-col justify-center items-center col-start-2 sm:col-start-4 col-span-10 sm:col-span-6">
        <Name />
        <p className="font-display text-2xl font-semibold letter-spacing-[5px] text-white">Software Engineer</p>
      </div>

      <FlowerMain className="flower-1 absolute size-[82px] top-[18%] left-[-3%] sm:size-[200px] sm:top-[3%] sm:left-[3%] rotate-z-10" />
      <FlowerMain className="flower-2 absolute size-[100px] top-[10%] right-[35%] rotate-z-100" />
      <FlowerMain className="flower-3 absolute size-[100px] top-[17%] right-0 sm:size-[300px] sm:-top-[12%] sm:right-0 -rotate-z-15" />

      <FlowerMain className="flower-4 absolute invisible sm:visible sm:size-[100px] left-[2%] rotate-z-70" />
      <FlowerMain className="flower-5 absolute invisible sm:visible size-[175px] -right-[8%] sm:size-[200px] sm:right-0" />
      
      <FlowerMain className="flower-6 absolute invisible sm:visible size-[200px] bottom-[5%] sm:size-[300px] sm:bottom-[-14%] sm:left-[5%] rotate-60" />
      <FlowerMain className="flower-7 absolute invisible sm:visible size-[100px] bottom-[18%] sm:bottom-[5%] left-[40%] rotate-185" />
      <FlowerMain className="flower-8 absolute size-[100px] sm:size-[150px] bottom-[10%] sm:bottom-[-2%] left-[-3%] sm:right-[24%] rotate-180" />
      <FlowerMain className="flower-9 absolute size-[80px] bottom-[7%] sm:bottom-[18%] right-[40%] sm:right-[12%]" />
      <FlowerMain className="flower-10 absolute size-[100px] bottom-[12%] sm:bottom-[5%] right-[2%] sm:right-[-3%] -rotate-z-110" />
    </section>
  )
}

export default Home
