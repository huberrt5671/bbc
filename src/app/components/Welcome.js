import React from 'react'
import { welcomeLinks1, welcomeLinks3 } from "../constants"
import Welcomecard1 from './Welcomecard1'
import Image from 'next/image'
import Welcomecard3 from './Welcomecard3'

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-8">
      <div className="hidden md:block xl:block">
        {welcomeLinks1.map((welcome) => (
          <Welcomecard1 key={welcome.title} {...welcome} />
        ))}
    </div>
    <div className="col-span-2 p-2">
       <div className="flex">
        <Image
         src="/images/44.webp"
         alt="image"
         height={500}
         width={650}
         />
       </div>
       <div className="flex items-center">
        <span className=" text-3xl font-bold underline">
       Los Angeles wildfires approach Hollywood sign, with Sunset Boulevard in ruins.
        </span>
       </div>
       <p className="flex">
       Before and after pictures show businesses completely devastated by the Palisades blaze. Buildings have been burned to their bones as what is expected to be the most destructive fire to hit Los Angeles continues to tear unabated through the suburbs.
       </p>
    </div>
    <div className="">
     {welcomeLinks3.map((welcome) => (
          <Welcomecard3 key={welcome.title} {...welcome} />
        ))} 
    
    </div>
      
    </div>
  )
}

export default Welcome