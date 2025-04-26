import React from 'react'

const Gradient = ({height}) => {
  return (
    <div style={{
      width: '100%',
      height: `${height}`
    }} className={`w-full h-[${height}] bg-gradient-to-t from-black`}>
      
    </div>
  )
}

export default Gradient