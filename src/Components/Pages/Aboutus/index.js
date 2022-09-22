import React from 'react'
import images from '../../../assets/images'
import icons from '../../../assets/icons'
import "../../../assets/css/Aboutus.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '../../Common/Title'

export default function index() {
    return (
        <div className='app__aboutus-container'>
            <div className='app__aboutus-portofilo'>
                <div className='app__aboutus-txtside'>
                    <Title
                        title="ABOUT US"
                        subtitle="Leading the way in Creative Digital Agency"
                    />
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
