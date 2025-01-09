import Image from 'next/image'
import React from 'react'

const Welcomecard1 = ({ title, desc, time, image }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full p-2">
         <Image
            src={image}
            alt="image"
            width={300}
            height={250}
        />
        <span className="flex font-bold underline text-2xl">
            {title}
        </span>
        <p clasName="flex w-full justify-center">
            {desc}
        </p>
        <p className="flex justify-right">
            {time}
        </p>

    </div>
  )
}

export default Welcomecard1