import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from 'react-elastic-carousel'

const BreakPoints = [
    { width: 1, itemsToShow: 5 }
]

const ItemsToScroll = {
    number:1
}

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />
            <div className="__section-who-we-are">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="line"></div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h5>ABOUT US</h5>
                            <h1>We are Varkala</h1>
                            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <div className="line"></div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <h5>THE OLD TIMES</h5>
                            <h1>History of Varkala</h1>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/photo/raoul-ortega-2JtF6pYAOOI-unsplash.jpg" alt="" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <h5>HUMBLE BEGINNINGS</h5>
                            <h1>We started as little</h1>
                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-5">
                            <h5>VARKALA TODAY</h5>
                            <h1>And then we grew a bit</h1>
                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
                        </div>

                        <div className="col-12 col-sm-5">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/photo/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="__section-milestone">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h1>Varkala's Milestones</h1>
                            <p>
                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                            </p>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-6">
                                    <h3>
                                        1995
                                    </h3>
                                    <span>
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin
                                    </span>
                                </div>
                                <div className="col-6">
                                    <h3>
                                        1995
                                    </h3>
                                    <span>
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin
                                    </span>
                                </div>
                                <div className="col-6">
                                    <h3>
                                        1995
                                    </h3>
                                    <span>
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin
                                    </span>
                                </div>
                                <div className="col-6">
                                    <h3>
                                        1995
                                    </h3>
                                    <span>
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="__section-founder">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-0.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <p>
                                Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
                            </p>
                            <span>— FRANKIE KAFKA, FOUNDER</span>
                            <h5>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="__section-people">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="line"></div>
                        </div>
                        <div className="col-6">
                            <h5>OUR TEAM</h5>
                            <h1>People</h1>
                            <p>He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="__content">
                            <div className="__img-container">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-7.jpg" alt="" />
                            </div>
                            <h5>Frankie Kafka</h5>
                            <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="__section-carousel">
                <div className="container">
                    <Carousel breakPoints={BreakPoints} enableAutoPlay={true} enableMouseSwipe={true}>
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-1.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-2.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-3.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-4.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-5.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-1.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-2.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-3.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-4.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-5.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-1.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-2.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-3.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-4.svg" alt="" />
                        <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/brand/brand-5.svg" alt="" />
                    </Carousel>
                </div>
            </div>

            <div className="__section-last">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                            At Varkala, we want the right choice to be as easy as putting on a great T-shirt
                            </h1>
                        </div>
                        <div className="col-6">
                            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
                        </div>
                        <div className="col-6">
                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutPage;
