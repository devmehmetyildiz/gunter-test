import React from 'react'
import "../../../assets/css/Features.css"
import images from "../../../assets/images"
import Boxitem from './Boxitem'
import icons from '../../../assets/icons'

export default function features() {
  return (
    <div id="features">
      <div className='app__features-container'>
        <div className='app__features-boxes'>
          <Boxitem
            Icon={images.Email}
            IconLight={images.EmailLight}
            Titleicon = {icons.faMailBulk}
            Title="Email Marketing"
            Text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
          />
          <Boxitem
            Icon={images.Email}
            IconLight={images.EmailLight}
            Titleicon = {icons.faMailBulk}
            Title="Email Marketing"
            Text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
          />
          <Boxitem
            Icon={images.Email}
            IconLight={images.EmailLight}
            Titleicon = {icons.faMailBulk}
            Title="Email Marketing"
            Text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  )
}
