import React from 'react'

const Watch = ({img, title}) => {
  return (
    <div className='Watch'>
      <img style={{width:'150px'}} src={img} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default Watch;
