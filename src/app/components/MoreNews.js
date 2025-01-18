import React from 'react'
import { MoreNewsLinks } from '../constants'
import Link from 'next/link'


const MoreNews = () => {
  return (
    <div className="flex flex-col justify-right text-xl font-bold">More News
    <div className="flex flex-col sm:flex-row md:flex-row items-center px-4 py-6">
       
         {MoreNewsLinks.map((d, i) => (
        <Link
          key={i}
          href={d.route}
          className="relative group px-2 py-2 transition-all"
        >
          <p className="flex cursor-pointer hover:bg-gray-200 items-center text-2xl underline gap-2 text-black px-4">
            <span>{d.title}</span>
            
          </p>
          <div className="text-sm flex py-2 px-4">{d.time}</div>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default MoreNews