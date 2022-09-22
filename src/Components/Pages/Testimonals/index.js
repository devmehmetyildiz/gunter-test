import React from 'react'
import icons from '../../../assets/icons'
import images from '../../../assets/images'
import Slider from 'react-slick'
import "../../../assets/css/Testimonials.css"
import Title from '../../Common/Title'
import Boxitem from './Boxitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Index() {
    const Slidersettings = {
        dots: true,
    };
    const txt1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."


    return (
        <div className='app__testimonals-container'>
            <div className='app__testimonals-portofilo'>
                <div className='app__testimonals-upperside'>
                    <div className='app__testimonals-img'>
                        <img src={images.women} alt="" />
                        <FontAwesomeIcon style={{ color: '#ff4800' }} className='app__testimonials-circlefa' icon={icons.faCircleDot} />
                        <button className='app__testimonials-button'>ALL PROJECTS</button>
                    </div>
                    <div className='app__testimonals-brand'>
                        <Title
                            title="WHAT CLIENT SAYS ABOUT US"
                            subtitle="Our Testimonials"
                        />
                        <div className='app__testimonials-slidercontainer'>
                            <Slider {...Slidersettings} >
                                <Boxitem text={txt1} writer="Jason Statham" title="Founder at Envato" />
                                <Boxitem text={txt1} writer="Jason Statham" title="Founder at Envato" />
                                <Boxitem text={txt1} writer="Jason Statham" title="Founder at Envato" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
