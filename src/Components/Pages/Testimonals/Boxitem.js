import React from 'react'
import icons from '../../../assets/icons'
import "../../../assets/css/Testimonials.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Boxitem({ text, title, writer }) {
    return (
        <div className='app__testimonials-boxitem-container'>
            <div className='app__testimonials-boxitem-icon'>
                <FontAwesomeIcon style={{ color: 'white' }} className='app__testimonials-boxitem-iconfa' icon={icons.faMusic} />
            </div>
            <div className='app__testimonials-boxitem-text'>
                <p>{text}</p>
            </div>
            <div className='app__testimonials-boxitem-writer'>
                <h3>{writer}</h3>
            </div>
            <div className='app__testimonials-boxitem-title'>
                <h5>{title}</h5>
            </div>
        </div>
    )
}
