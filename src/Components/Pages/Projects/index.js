import React from 'react'
import icons from '../../../assets/icons'
import images from '../../../assets/images'
import Slider from 'react-slick'
import Boxitem from "./Boxitem"
import "../../../assets/css/Projects.css"
import Title from '../../Common/Title'

export default function index() {
    const Slidersettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    return (
        <div className='app__projects-container'>
            <div className='app__projects-portofilo'>
                <div className='app__projects-titlesection'>
                    <Title
                        title="OUR COMPLETED PROJECTS"
                        subtitle="Recent Projects"
                    />
                    <div className='app__projects-buttonside'>
                        <button className='app__projects-button'>ALL PROJECTS</button>
                    </div>
                </div>
                <div className='app__projects-slidersection'>
                    <div className='app__projects-slider-container'>
                        <Slider className='app__projects-slider' {...Slidersettings}>
                            <Boxitem imgsrc={images.caroselitem1} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem2} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem3} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem1} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem2} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem3} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem1} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem2} title="Development" subtitle="Web / Mobile" />
                            <Boxitem imgsrc={images.caroselitem3} title="Development" subtitle="Web / Mobile" />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
