import React from 'react'

const Mac = ({img, title}) => {
  return (
    <div className='Mac'>
      <img style={{width:'300px'}} src={img} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default Mac;