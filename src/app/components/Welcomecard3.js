
import React from 'react'

const Welcomecard3 = ({ title, desc, time }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full p-2">
        
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

export default Welcomecard3