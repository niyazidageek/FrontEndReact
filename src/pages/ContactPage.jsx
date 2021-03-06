import React, {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ContactPage = () => {

    useEffect(()=>{
        document.title='Contact'
    })

    return (
        <div className="__contact-page">
            <Header />
            <div className="__section-contact">
                <div className="container">
                    <div className="__text-holder">
                        <span><Link to="/" style={{textDecoration:'none', color:'unset'}}>Home</Link></span>
                        <span> — Contact</span>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>

            <div className="__section-address">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <h4>Address</h4>
                            <p>13/25 New Avenue
                                New Heaven, 45Y 73J
                                England, Great Britain
                            </p>
                        </div>
                        <div className="col-md-3 col-12">
                            <h4>Call center</h4>
                            <p>13/25 New Avenue
                                New Heaven, 45Y 73J
                                England, Great Britain
                            </p>
                            <span>+33 555 444 333</span>
                        </div>
                        <div className="col-md-3 col-12">
                            <h4>Electronic support</h4>
                            <p>13/25 New Avenue
                                New Heaven, 45Y 73J
                                England, Great Britain
                            </p>
                            <span>info@varkala.com</span><br />
                            <span>support@varkala.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="__section-map">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674496234!2d49.85175681535466!3d40.3771908793697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2s!4v1628233921200!5m2!1sen!2s" style={{ width: '100%', height: '100vh', style: 'border:0', allowfullscreen: '', loading: 'lazy', filter: 'invert(100%)' }}></iframe>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="row justify-content-between flex-column h-100">
                            <h1>Our stores</h1>

                            <div className="row mb-5">
                                <div className="col-md-3 col-6">New York</div>
                                <div className="col-md-3 col-6">13/25 New Avenue, New Heaven, 45Y 73J</div>
                                <div className="col-md-3 col-6">564546 54566 54</div>
                                <div className="col-md-3 col-6">email@email.com</div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-md-3 col-6">New York</div>
                                <div className="col-md-3 col-6">13/25 New Avenue, New Heaven, 45Y 73J</div>
                                <div className="col-md-3 col-6">564546 54566 54</div>
                                <div className="col-md-3 col-6">email@email.com</div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-md-3 col-6">New York</div>
                                <div className="col-md-3 col-6">13/25 New Avenue, New Heaven, 45Y 73J</div>
                                <div className="col-md-3 col-6">564546 54566 54</div>
                                <div className="col-md-3 col-6">email@email.com</div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 col-6">New York</div>
                                <div className="col-md-3 col-6">13/25 New Avenue, New Heaven, 45Y 73J</div>
                                <div className="col-md-3 col-6">564546 54566 54</div>
                                <div className="col-md-3 col-6">email@email.com</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="__section-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h1>Get in touch </h1>
                            <i  class="fab fa-facebook-f fa-2x"></i>
                            <i  class="fab fa-twitter fa-2x"></i>
                            <i  class="fab fa-instagram fa-2x"></i>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <h5>Your firstname *</h5>
                                    <input type="text" />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <h5>Your lastname *</h5>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col-12">
                                    <h5>Your email *</h5>
                                    <input type="text" />
                                </div>
                                <div className="col-12">
                                    <h5>Your message for us</h5>
                                    <input type="text" />
                                </div>
                                <div className="col-12">
                                    <h5>Your message for us *</h5>
                                    <textarea name="" id=""></textarea>
                                    <div  className="__message-btn">
                                        SEND MESSAGE
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactPage;
