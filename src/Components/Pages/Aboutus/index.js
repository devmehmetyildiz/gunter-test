import React from 'react'
import images from '../../../assets/images'
import icons from '../../../assets/icons'
import "../../../assets/css/Aboutus.css"

export default function index() {
    return (
        <div className='app__aboutus-container'>
            <div className='app__aboutus-portofilo'>
                <div className='app__aboutus-txtside'>
                    <div className='app__aboutus-subtitle'>
                        <h5>ABOUT US</h5>
                    </div>
                    <div className='app__aboutus-title'>
                        <h2>Leading the way in Creative Digital Agency</h2>
                    </div>
                    <div className='app__aboutus-line'>
                        <div className='app__aboutus-boxline-1' />
                        <div className='app__aboutus-boxline-1' />
                        <div className='app__aboutus-boxline-1' />
                    </div>
                    <div className='app__aboutus-maintxt'>
                        <div className='app__aboutus-maintxtcontainer'>
                            <div className='app__aboutus-maintxticon'>

                            </div>
                            <div className='app__aboutus-maintxtcontainer'>
                                <div className='app__aboutus-maintxt-title'>
                                </div>
                                <div className='app__aboutus-maintxt-txt'>
                                </div>
                                <div className='app__aboutus-maintxt-signature'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app__aboutus-imgside'>
                    <div className='app__aboutus-imgside-img'>

                    </div>
                    <div className='app__aboutus-imgside-circle'>

                    </div>
                    <div className='app__aboutus-imgside-btn'>

                    </div>
                </div>
            </div>
        </div>
    )
}
