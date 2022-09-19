import React from 'react'
import "../../../assets/css/Features.css"
import images from "../../../assets/images"
import Boxitem from './Boxitem'
export default function features() {
  return (
    <div className='app__features-container'>
      <div className='app__features-boxes'>
        <Boxitem
          Icon={{}}
          IconLight={{}}
          Title="Email Marketing"
          Text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
        />
        <Boxitem />
        <Boxitem />
      </div>
    </div>
  )
}
