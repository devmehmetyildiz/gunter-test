import React from 'react'
import icons from '../../../assets/icons'
import "../../../assets/css/Ourservices.css"

import Boxitem from "./Boxitem"

export default function index() {
    return (
        <div className='app__ourservices-container'>
            <div className='app__ourservices-portofilo'>
                <div className='app__ourservices-subtitle'>
                    <h5>WHAT WE DO</h5>
                </div>
                <div className='app__ourservices-title'>
                    <h2>Our Services</h2>
                </div>
                <div className='app__ourservices-line'>
                    <div className='app__ourservices-line1' />
                    <div className='app__ourservices-line2' />
                    <div className='app__ourservices-line3' />
                </div>
                <div className='app__ourservices-brands'>
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Creative Solutions" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                    <Boxitem Icon={icons.faLightbulb} Title="Digital Branding" />
                </div>
            </div>
        </div>
    )
}
