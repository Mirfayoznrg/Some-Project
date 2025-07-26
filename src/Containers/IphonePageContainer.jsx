import React from 'react'
import IphoneCard from '../components/IphoneCard'
import {iphone} from "../constants/IphoneData"
import { Link } from 'react-router-dom'
const IphonePageContainer = () => {
  return (
    <div className='flex'>
      {
        iphone.map(({img, title, id})=>{
          return <Link to={`/Mac/${id}`}>
           <IphoneCard img={img} title={title}/>
          </Link>
        })
      }
    </div>
  )
}

export default IphonePageContainer