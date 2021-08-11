import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from 'react-use-cart';


const WishlistPage = () => {
    const { addItem } = useCart()

    const [word, setWord] = useState('')
    const [number, setNumber] = useState(0)
    const [array, setArray] = useState([])
    useEffect(() => {
        setArray(prev => prev = JSON.parse(localStorage.getItem('wishlist')))
    }, [])
    function removeItem(id) {
        var filteredArray = array.filter(element => element.id !== id)
        setArray(prev => prev = filteredArray)
        localStorage.setItem('wishlist', JSON.stringify(filteredArray));
    }

    function filterArray() {
        var parsedArray = JSON.parse(localStorage.getItem('wishlist'))
        setArray(prev => prev = parsedArray)
    }
    useEffect(() => {
        window.addEventListener('storage', filterArray)
        document.title='Wishlist'
    })
    useEffect(() => {
        var parsedArray = JSON.parse(localStorage.getItem('wishlist'))
        if (parsedArray == null) {
            setWord(prev => prev = 'items')
            setNumber(prev => prev = 0)
        }
        else if (parsedArray.length == 1) {
            setWord(prev => prev = 'item')
            setNumber(prev => prev = parsedArray.length)
        }
        else {
            setWord(prev => prev = 'items')
            setNumber(prev => prev = parsedArray.length)
        }
    })
    const List = () => {
        return (
            <div className="col-12">
                {
                    array.map((item, index) => {
                        const { name, img, price, id } = item
                        return (
                            <div key={index} className="__product row">
                                <div className="__left col-5">
                                    <img src={img} alt="" />
                                    <div className="__description">
                                        <h5>{name}</h5>
                                        <p>Size: Xs</p>
                                        <p>Color: Green</p>
                                    </div>
                                </div>
                                <i  onClick={() => removeItem(id)} className="fas fa-times close-button-up col-2"></i>
                                <div className="__right col-md-7 col-12">
                                    <div className="col-6 responsive-left">
                                        <span>Price per item</span>
                                    </div>
                                    <div className="col-6 responsive-right">
                                        <div  onClick={() => addItem(item)} className="__btn">
                                            ADD TO CART
                                        </div>
                                        <h4>${price}</h4>
                                        <i  onClick={() => removeItem(id)} className="fas fa-times close-button-bottom"></i>
                                    </div>
                                    <h4 className="desktop">${price}</h4>
                                    <div  onClick={() => addItem(item)} className="__btn desktop">ADD TO CART</div>
                                    <i  onClick={() => removeItem(id)} className="fas fa-times close-button-bottom"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
    const Content = () => {
        var parsedArray = JSON.parse(localStorage.getItem('wishlist'))
        if (parsedArray == null) {
            return (
                <div className="col-12">
                    <h3 className="isempty">Your wishlist is empty
                        <i className="far fa-heart ms-1"></i>
                    </h3>

                </div>
            )
        }
        else if (parsedArray.length == 0) {
            return (
                <div className="col-12">
                    <h3 className="isempty">Your wishlist is empty
                        <i className="far fa-heart ms-1"></i>
                    </h3>

                </div>
            )
        }
        else {
            return (
                <List />
            )
        }
    }
    return (
        <div className="__wishlist-page">
            <Header />
            <div className="container">
                <div className="__section-wishlist">
                    <div className="__text-holder">
                        <h1>Wishlist</h1>
                        <p>You have {number} {word} in your wishlist.</p>
                    </div>
                </div>
                <div className="__section-list">
                    <div className="container">
                        <div className="row __list">
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WishlistPage;
