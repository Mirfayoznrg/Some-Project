import React from 'react'

const Iphone = ({img, title}) => {
  return (
    <div className='Iphone'>
      <img style={{width:'100px'}} src={img} alt="" />
      <h1 className='text-2xl'>
        {title}
      </h1>
    </div>
  )
}

export default Iphone;