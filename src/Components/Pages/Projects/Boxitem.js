import React, { useState } from 'react'

export default function Boxitem({ imgsrc, title, subtitle }) {
    const [hovermode, sethovermode] = useState(false)

    const containerbg = hovermode ? 'app__projects-boxitem-imgcontainer app__projects-boxitem-imgcontainer-bglg'
        : 'app__projects-boxitem-imgcontainer app__projects-boxitem-imgcontainer-bgdark'

    return (
        <div className={containerbg} onMouseEnter={() => { sethovermode(true) }} onMouseLeave={() => { sethovermode(false) }}>
            <img className='app__projects-boxitem-img' src={imgsrc} alt="" />
            <div className='app__projects-boxitem-titlesection'>
                <div className='app__projects-boxitem-title'>
                    <h3>{title}</h3>
                </div>
                <div className='app__projects-boxitem-subtitle'>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
