import React from "react"
import Title from 'components/ui/title'
import Image from "next/image"

const About = () => {
  return (
    <div>
      <div className='bg-secondary py-14'>
        <div className='container mx-auto flex items-center text-white gap-20 flex-wrap
        justify-center'>
          <div className='relative w-[450px] h-[450px]'>
            <Image src="/images/bg3salmon.jpg" alt="" layout="fill" />
          </div>
          <div className="text-white">
            <Title addClass="text-[40px]">Who we are ?</Title>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam corporis quod sint debitis earum obcaecati perferendis, in eius nulla.
              Impedit alias debitis cupiditate!
              Placeat asperiores quo quae inventore saepe!</p>
            <button className="btn-primary">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
