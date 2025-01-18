import React from 'react'
import Image from 'next/image'


const ArtsMotion = () => {
  return (
    <div className="p-4 bg-black">
     <div className="underline px-2  flex flex-row justify-start w-full">
        <span className="text-white font-bold flex justify-center">Arts in Motion</span>
        </div>
        <div className="py-2 flex flex-col sm:flex-row gap-4 items-center">
          <Image
            src="/images/77.webp"
            alt="image"
            width={800}
            height={650}
            className="py-4 px-8 sm:w-fit"
          />
        
        <div className="flex justify-center flex-col gap-4">
          <span className="text-white font-bold underline text-2xl">Whitney White on how Shakespare still resonates today</span>
          <p className="text-white">Tony-nominated theatre maker Whitney White reimagines Shakespeare&apos;s plays by infusing them with gospel and rock</p>
          <button className="py-1 px-4 bg-black border-white border-2 font-bold text-white flex-row rounded-sm"
        >
           See More
        </button>
          </div>
           
         </div>
        

     </div>
    
   
  )
}

export default ArtsMotion