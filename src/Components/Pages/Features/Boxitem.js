import React, { useState } from 'react'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Boxitem({ Icon, IconLight, Title, Text,Titleicon }) {

  const [hovermode, sethovermode] = useState(false)

  const cssclass = hovermode ? "app__features-boxcontainer app__features-colored" : "app__features-boxcontainer app__features-dark"

  return (
    <div>
      <div className={cssclass} onMouseEnter={() => { sethovermode(true) }} onMouseLeave={() => { sethovermode(false) }}>
        <div className='app__features-boxprofilo'>
          <div className='app__features-boxtitleicon d-inline'>
            {hovermode ? <FontAwesomeIcon style={{color:'white'}}  className='app_features-boxtitleiconfa' icon={Titleicon} />
              : <FontAwesomeIcon style={{color:'#ff4800'}} className='app_features-boxtitleiconfa' icon={Titleicon} />
            }
          </div>
          <div className='app__features-boxtitletxt'>
            <h3>{Title}</h3>
          </div>
          <div className='app__features-boxline'>
            <div className={`app__features-boxline-1 ${hovermode ? 'app__features-boxline-wt' : ' '}`}/>
            <div className={`app__features-boxline-2 ${hovermode ? 'app__features-boxline-wt' : ' '}`}/>
            <div className={`app__features-boxline-3 ${hovermode ? 'app__features-boxline-wt' : ' '}`}/>
          </div>
          <div className='app__features-boxtxt'>
            <p>{Text}</p>
          </div>
        </div>
        <div className='app__features-footerimg'>
          {hovermode ? <img className="" src={images.dotWhite} alt="" />
            : <img className="" src={images.dotColored} alt="" />
          }
        </div>
      </div>
    </div>
  )
}
