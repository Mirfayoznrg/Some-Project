import React from 'react'
import MacCard from '../components/MacCard'
import { macData } from '../constants/MacData'
import { Link } from 'react-router-dom'
const MacPageContiners = () => {
  return (
    <div className='flex'>
      {
        macData.map(({img, id, title})=>{
          return <Link to={`/Mac/${id}`}>
          <MacCard img={img} title={title}/>
          </Link>
        })
      }
    </div>
  )
}

export default MacPageContiners