import React from 'react'
import images from '../../../assets/images'
import "../../../assets/css/Home.css"

export default function Index() {
    return (
        <div id='home'>
            <div className='app__home-container'>
                <div className='app__home-maincontainer'>
                    <div className='app__home-protofilo'>
                        <div className='app__home-title'>
                            <h1>
                                Innovation for <br />
                                Success
                            </h1>
                        </div>
                        <div className='app__home-text'>
                            <p>"We trust on innovation and that
                                help us to succeed in future! Our team
                                is innovative and interested to learn
                                your project to offer the best solutions
                                from out of the box!"</p>
                        </div>
                        <div className='app__home-btn'>
                            <button onClick={() => { }}>Get Started</button>
                        </div>
                    </div>
                    <div className='app__home-bgimg'>
                        <img src={images.Blackman} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
