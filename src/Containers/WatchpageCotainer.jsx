import React from 'react'
import WatchCard from '../components/WatchCard'
import { watchData } from "../constants/WatchData"
import { Link } from 'react-router-dom'
const WatchpageCotainer = () => {
  return (
    <div className='flex'> 
        {
          watchData.map(({ img,id, title})=>{
            return <Link to={`/Mac/${id}`}>
              <WatchCard img={img} title={title}/>
            </Link>
          })
        }
    </div>
  )
}

export default WatchpageCotainer