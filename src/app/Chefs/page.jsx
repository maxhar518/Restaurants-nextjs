import React from 'react'
import Hero from "./Hero"
import ChefGrid from "./ChefGrid"
import Image from 'next/image'

const OurChefs = () => {
  return (
    <div>
      <Hero />
      <section className="bg-black md:px-[135px]   py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal techef Imagext-[#FF9F0D] font whitespace-nowrap font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>
        <ChefGrid />
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src="/chef1.png" alt="chef Image" width={400} height={400} />
          <Image src='/chef2.png' alt="chef Image" width={400} height={400} />
          <Image src='/chef3.png' alt="chef Image" width={400} height={400} />
          <Image src='/chef4.png' alt="chef Image" width={400} height={400} />
        </div>
      </section>
    </div>
  )
}

export default OurChefs
