import React from 'react'
import icons from '../../../assets/icons'
import "../../../assets/css/Ourservices.css"

import Boxitem from "./Boxitem"
import Title from '../../Common/Title'

export default function index() {
    return (
        <div className='app__ourservices-container'>
            <div className='app__ourservices-portofilo'>
                <Title
                    title="WHAT WE DO"
                    subtitle="Our Services"
                />
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
