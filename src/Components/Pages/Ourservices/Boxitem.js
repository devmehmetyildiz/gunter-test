import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icons from '../../../assets/icons'
export default function Boxitem({ Icon, Title }) {

    const [hovermode, sethovermode] = useState(false)


const contentbg = hovermode ? 'app__ourservices-boxitem-container app__ourservices-bgorange' : 'app__ourservices-boxitem-container app__ourservices-bggray'
const iconbg = hovermode ? 'app__ourservices-boxitem-iconcontainer app__ourservices-bgwhite' : 'app__ourservices-boxitem-iconcontainer app__ourservices-bgblack'
    return (
        <div className={contentbg} onMouseEnter={() => { sethovermode(true) }} onMouseLeave={() => { sethovermode(false) }}>
            <div className='app__ourservices-boxitem-portofilo'>
                <div className={iconbg}>
                    <div className='app__ourservices-boxitem-icon'>
                        <FontAwesomeIcon style={{ color: '#ff4800' }} className='app__ourservices-boxitem-iconfa' icon={Icon} />
                    </div>
                </div>
                <div className='app__ourservices-boxitem-title'>
                    <h4>{Title}</h4>
                </div>
                <div className='app__ourservices-boxitem-icon1'>
                    <FontAwesomeIcon style={{ color: 'gray' }} className='app__ourservices-boxitem-iconfa' icon={icons.faArrowRight} />
                </div>
            </div>
        </div>
    )
}
