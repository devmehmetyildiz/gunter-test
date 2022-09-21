import React from 'react'
import images from '../../../assets/images'
import icons from '../../../assets/icons'
import "../../../assets/css/Aboutus.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <div className='app__aboutus-boxline'>
                        <div className='app__aboutus-boxline-1' />
                        <div className='app__aboutus-boxline-2' />
                        <div className='app__aboutus-boxline-3' />
                    </div>
                    <div className='app__aboutus-maintxt'>
                        <div className='app__aboutus-maintxticon'>
                            <FontAwesomeIcon style={{ color: '#ff4800' }} className='app__aboutus-boxtitleiconfa' icon={icons.faCertificate} />
                        </div>
                        <div className='app__aboutus-maintxtcontainer'>
                            <div className='app__aboutus-maintxt-title'>
                                <h3> Best Digital Agency in the World</h3>
                            </div>
                            <div className='app__aboutus-maintxt-txt'>
                                <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents. We work with you, not for you. Although we have a great resources.
                                </p>
                                <p>We are an experienced and talented team of passionate consultants who live and breathe search engine marketing.
                                </p>
                            </div>
                            <div className='app__aboutus-maintxt-signature'>
                                <FontAwesomeIcon style={{ color: 'white' }} className='app__aboutus-signaturefa' icon={icons.faSignature} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app__aboutus-imgside'>
                    <div className='app__aboutus-imgside-img'>
                        <img className='app__aboutus-imgside-img1' src={images.aboutusimg1} alt="" />
                        <img className='app__aboutus-imgside-img2' src={images.aboutusimg2} alt="" />
                        <FontAwesomeIcon style={{ color: '#ff4800' }} className='app__aboutus-circlefa' icon={icons.faCircleDot} />
                        <button className='app__aboutus-getstartbutton'>More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
