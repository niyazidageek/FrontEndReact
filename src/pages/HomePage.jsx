import React from 'react';
import Header from '../components/Header';
import Carousel from 'react-elastic-carousel'
import Footer from '../components/Footer';

const BreakPoints = [
    { width: 1, itemsToShow: 1 }
]

const HomePage = () => {

    return (
        <>
            <Header />
            <div className="container __homepage">
                <Carousel className="__carousel" style={{ paddingTop: '4rem' }} breakPoints={BreakPoints}>
                    <div className="row">
                        <div className="col-8 col-md-6">
                            <span>TIME IS ALMOST UP</span>
                            <h1>
                                Design clocks on sale
                            </h1>
                            <div className="__btn">START SHOPPING</div>
                        </div>
                        <div className="col-8 col-md-6">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock-transparent.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-md-6">
                            <span>ALL OF OUR FAVOURITES</span>
                            <h1>
                                Black & White
                            </h1>
                            <div className="__btn">DISCOVER MORE</div>
                        </div>
                        <div className="col-8 col-md-6">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2-transparent.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-md-6">
                            <span>OUR ALL-TIME FAVOURITES</span>
                            <h1>
                                Boxxez
                            </h1>
                            <div className="__btn">DISCOVER MORE</div>
                        </div>
                        <div className="col-8 col-md-6">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box-transparent.png" alt="" />
                        </div>
                    </div>
                </Carousel>

                <div className="__popular-this-week">
                    <div className="row mt-5">
                        <div className="col-7">
                            <span>TOP CHOICES</span>
                            <h2>Popular this week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <img style={{ height: '400px' }} src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book-sq.jpg" alt="" />
                            <div className="__description">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-end">
                            <img style={{ height: '550px' }} src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg" alt="" />
                            <div className="__description--float">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-7 --right d-flex">
                            <img style={{ height: '550px' }} src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock-sq.jpg" alt="" />
                            <div className="__description--float">
                                <h2>Sunn Clock</h2>
                                <span>$89.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img style={{ height: '400px' }} src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box-sq.jpg" alt="" />
                            <div className="__description">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-5">
                            <img style={{ height: '400px' }} src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock2-sq.jpg" alt="" />
                            <div className="__description">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-end">
                            <img style={{ height: '550px' }} src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-3-sq.jpg" alt="" />
                            <div className="__description--float">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="__deal-of-week">
                <div className="container d-flex">
                    <div className="row justify-content-between w-100">
                        <div className="col-sm-6  d-flex justify-content-between flex-column">
                            <div className="__title">
                                <h5>DEAL OF THE WEEK</h5>
                                <h1>
                                    Black and white Nordegg chairs
                                </h1>
                            </div>
                            <span className="text-decoration-line-through">$129.00</span>
                            <span>$79.00</span>
                            <div className="__discount">
                                <span>$50 off</span>
                            </div>
                            <div className="row __timer">
                                <div className="col-sm-3">
                                    <h3>14</h3>
                                    <h5>Days</h5>
                                </div>
                                <div className="col-sm-3">
                                    <h3>23</h3>
                                    <h5>Hours</h5>
                                </div>
                                <div className="col-sm-3">
                                    <h3>34</h3>
                                    <h5>Minutes</h5>
                                </div>
                                <div className="col-sm-3">
                                    <h3>06</h3>
                                    <h5>Seconds</h5>
                                </div>
                            </div>
                            <div className="__shop-button">
                                <span>SHOP NOW</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2-transparent.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="__new-arrivals">
                <div className="container">
                    <div className="__title">
                        <h2>New Arrivals</h2>
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair.jpg" alt="" />
                                <h5>Norwegg Chair</h5>
                                <span>$40.00</span>
                            </div>
                            <div className="col-md-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book.jpg" alt="" />
                                <h5>Book</h5>
                                <span>$40.00</span>
                            </div>
                            <div className="col-md-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2.jpg" alt="" />
                                <h5>Another chair</h5>
                                <span>$40.00</span>
                            </div>
                            <div className="col-md-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3.jpg" alt="" />
                                <h5>Your new chair</h5>
                                <span>$40.00</span>
                            </div>


                            <div className="row">
                                <div className="col-md-3">
                                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock.jpg" alt="" />
                                    <h5>Clock</h5>
                                    <span>$40.00</span>
                                </div>
                                <div className="col-md-3">
                                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock3.jpg" alt="" />
                                    <h5>Clock</h5>
                                    <span>$40.00</span>
                                </div>
                                <div className="col-md-3">
                                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box.jpg" alt="" />
                                    <h5>Accesory box</h5>
                                    <span>$40.00</span>
                                </div>
                                <div className="col-md-3">
                                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box2.jpg" alt="" />
                                    <h5>Biege</h5>
                                    <span>$40.00</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="__summer-sales">
                <div className="container">
                    <h1>Summer Sales</h1>
                    <p>Our biggest sales this year — up to 60% off!</p>
                    <div className="__shopping-btn">
                        <span>START SHOPPING</span>
                    </div>
                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-transparent.png" alt="" />
                </div>
            </div>

        <Footer/>
            

        </>

    );
}

export default HomePage;