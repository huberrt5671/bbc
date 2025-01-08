import React from 'react'

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="invisible md:visible xl:visible">01</div>
      <div className="col-span-2 border-2">02</div>
      <div className="">03</div>
      
    </div>
  )
}

export default Welcome