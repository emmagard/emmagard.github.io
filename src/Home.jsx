import './index.css';
import React from 'react';
import Name from './Name.jsx';
import FlowerMain from './FlowerMain.jsx';

function Home() {
  return (
    <section className="relative flex items-center h-screen grid grid-cols-12 gap-2">
      <h1 className="hidden">Emma Gardner</h1>
      <div className="flex flex-col justify-center items-center col-start-4 col-span-6">
        <Name />
        <p className="font-display text-2xl font-semibold letter-spacing-[5px]">Software Engineer</p>
      </div>

      <FlowerMain className="absolute size-[200px] top-[3%] left-[3%] rotate-z-10" />
      <FlowerMain className="absolute size-[100px] top-[15%] right-[30%] rotate-z-100" />
      <FlowerMain className="absolute size-[300px] -top-[12%] right-0 -rotate-z-15" />

      <FlowerMain className="absolute size-[100px] left-[2%] rotate-z-70" />
      <FlowerMain className="absolute size-[200px] right-0" />
      
      <FlowerMain className="absolute size-[300px] -bottom-[14%] left-[5%] rotate-60" />
      <FlowerMain className="absolute size-[100px] bottom-[5%] left-[40%] rotate-185" />
      <FlowerMain className="absolute size-[150px] -bottom-[2%] right-[24%] rotate-180" />
      <FlowerMain className="absolute size-[80px] bottom-[18%] right-[12%]" />
      <FlowerMain className="absolute size-[200px] -bottom-[10%] -right-[3%] -rotate-z-110" />
    </section>
  )
}

export default Home
