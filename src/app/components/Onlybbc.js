import React from 'react'
import Image from 'next/image'

const Onlybbc = () => {
  return (
    <div className="border-black border-y-2 px-4 py-8">
     <span className="font-bold">
        Only From BBC
     </span>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    <div className="col-span-1 p-2">
      <Image
       src="/images/4A.webp"
       alt="images"
       width={650}
       height={550}
      />
      <span className="font-bold hover:underline cursor-pointer">
      An ironwoman&apos;s guide to Finland&apos;s best icy plunges
      </span>
      <p className="">
      Elina Mäkinen was the first Finnish woman to complete the Ice Mile. Here are her top ice bathing experiences, from plunges under the Northern Lights to paying homage to Arctic gods.
      </p>  
      </div>
      <div className="col-span-1 p-2">
      <Image
       src="/images/4B.webp"
       alt="images"
       width={650}
       height={550}
      />
      <span className="font-bold hover:underline cursor-pointer">
      Why influencers are facing a pushback
      </span>
      <p className="">
      Rejecting the haul culture of excessive shopping and promoting conscious consuming, the de-influencer movement is going mainstream – here&apos;s why.
      </p>  
      </div>
    </div>
    </div>
   
    
  )
}

export default Onlybbc