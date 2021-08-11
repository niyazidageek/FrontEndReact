import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Carousel from 'react-elastic-carousel';
import Footer from '../components/Footer';
import { useTimer } from 'react-timer-hook';
import products from '../mocks/products';
import { useCart } from 'react-use-cart';
import PreviewModal from '../components/PreviewModal';
import carouselitems from '../mocks/carouselitems';
import Aos from 'aos';
import Rating from '@material-ui/lab/Rating';

const BreakPoints = [
    { width: 1, itemsToShow: 1 }
]

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="row __timer">
            <div className="col-sm-3">
                <h3>{days}</h3>
                <h5>Days</h5>
            </div>
            <div className="col-sm-3">
                <h3>{hours}</h3>
                <h5>Hours</h5>
            </div>
            <div className="col-sm-3">
                <h3>{minutes}</h3>
                <h5>Minutes</h5>
            </div>
            <div className="col-sm-3">
                <h3>{seconds}</h3>
                <h5>Seconds</h5>
            </div>
        </div>
    )
}



const HomePage = () => {
    const [clicked, setClicked] = useState(false)
    function addToWishlist(item) {
        setClicked(prev => prev = !prev)
        var parsedArray = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (parsedArray.some(element => element.id == item.id)) {
            console.log('already')
            var filteredArray = parsedArray.filter(element => element.id !== item.id)
            console.log(filteredArray)
            localStorage.setItem('wishlist', JSON.stringify(filteredArray))
        }
        else {
            parsedArray.push(item);
            localStorage.setItem('wishlist', JSON.stringify(parsedArray));
        }
    }
    const { addItem } = useCart()
    const time = new Date();
    time.setHours(337)
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    useEffect(()=>{
        document.title='Home'
    })

    return (
        <>
            <Header />
            <div className="container __homepage">
                <Carousel className="__carousel" style={{ paddingTop: '4rem' }} breakPoints={BreakPoints} enableAutoPlay={true}>
                    {
                        carouselitems.map((element, index) => {
                            const { id, name, caption, btn, img } = element
                            return (
                                <div className="row" key={index}>
                                    <div className="col-8 col-md-6">
                                        <span>{caption}</span>
                                        <h1>{name}</h1>
                                        <div type='button' className="__btn">{btn}</div>
                                    </div>
                                    <div className="col-8 col-md-6">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
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
                        <div className="col-md-5 col-12">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book-sq.jpg" alt="" />
                            <div className="__description">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                        <div className="col-md-7 col-12 d-flex">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg" alt="" />
                            <div className="__description--float">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-7 col-12 d-flex mb-5">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock-sq.jpg" alt="" />
                            <div className="__description--float">
                                <h2>Sun Clock</h2>
                                <span>$89.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box-sq.jpg" alt="" />
                            <div className="__description">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-5 col-12">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock2-sq.jpg" alt="" />
                            <div className="__description">
                                <h2>Furniture source book</h2>
                                <span>$39.90</span>
                                <p>SHOP NOW</p>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex col-12">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-3-sq.jpg" alt="" />
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
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex flex-column">
                            <div className="__title">
                                <h5>DEAL OF THE WEEK</h5>
                                <h1>
                                    Black and white Nordegg chairs
                                </h1>
                            </div>
                            <span className="text-decoration-line-through">$129.00</span>
                            <span>$79.00</span>
                            <div className="__discount">
                                <span type='button'>$50 off</span>
                            </div>
                            <MyTimer expiryTimestamp={time} />
                            <div className="__shop-button">
                                <span type='button'>SHOP NOW</span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2-transparent.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="__new-arrivals container">
                <div className="container">
                    <div className="__title">
                        <h2>New Arrivals</h2>
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
                        <div className="row">

                            {
                                products.map((item, index) => {
                                    const { img, name, price } = item

                                    return (
                                        <div className="col-xl-3 col-md-4 col-6 mb-4" data-aos="zoom-in-up" key={index}>
                                            <div className="__img-container">
                                                <img src={img} alt="" />
                                                <div className="__bottom">
                                                    <span type='button' onClick={() => addItem(item)}>Add to cart</span>
                                                    <ul>
                                                        <li type='button' onClick={() => addToWishlist(item)}><i class="far fa-heart"></i></li>
                                                        <li><PreviewModal img={img} name={name} price={price} /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h5>{name}</h5>
                                            <span>${price}</span>
                                            <Rating style={{position:'absolute', right:'0'}} name="read-only" value={4} readOnly />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="__summer-sales">
                <div className="container">
                    <h1>Summer Sales</h1>
                    <p>Our biggest sales this year — up to 60% off!</p>
                    <div className="__shopping-btn" type='button'>
                        <span>START SHOPPING</span>
                    </div>
                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-transparent.png" alt="" />
                </div>
            </div>

            <Footer />


        </>

    );
}

export default HomePage;
