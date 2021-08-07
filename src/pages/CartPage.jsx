import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from 'react-use-cart';

const CartPage = () => {

    const [word, setWord] = useState('')
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    } = useCart()

    useEffect(() => {
        if (totalUniqueItems == 1) {
            setWord(prev => prev = 'item')
        }
        else {
            setWord(prev => prev = 'items')
        }
    })

    return (
        <div className="__cart-page">
            <Header />
            <div className="__section-cart">
                <div className="container">
                    <div className="__text-holder">
                        <h1>Shopping cart</h1>
                        <p>You have {totalUniqueItems} {word} in your cart.</p>
                        <p>For the checkout, you can use either a Multiple pages checkout or have everything on a single page.</p>
                    </div>
                    <div className="__section-summary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    {
                                        items.map((item, index) => {
                                            const { name, img, price, id, quantity } = item
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
                                                    <i onClick={() => { removeItem(id) }} className="fas fa-times close-button-up col-2"></i>
                                                    <div className="__right col-md-7 col-12">
                                                        <div className="col-6 responsive-left">
                                                            <span>Price per item</span>
                                                            <span>Quantity</span>
                                                            <span>Total price</span>
                                                        </div>
                                                        <div className="col-6 responsive-right"><h4>${price}</h4>
                                                            <div className="__counter">
                                                                <i onClick={() => updateItemQuantity(id, quantity + 1)} className="fas fa-plus"></i>
                                                                <div className="__number">
                                                                    <h4>{item.quantity}</h4>
                                                                </div>
                                                                <i onClick={() => updateItemQuantity(id, quantity - 1)} className="fas fa-minus"></i>
                                                            </div>
                                                            <h4>${quantity * (Number(price))}</h4>
                                                            <i className="fas fa-times close-button-bottom"></i>
                                                        </div>
                                                        <h4 className="desktop">${price}</h4>
                                                        <div className="__counter desktop">
                                                            <i onClick={() => updateItemQuantity(id, quantity + 1)} className="fas fa-plus desktop"></i>
                                                            <div className="__number desktop">
                                                                <h4 className="desktop">{item.quantity}</h4>
                                                            </div>
                                                            <i onClick={() => updateItemQuantity(id, quantity - 1)} className="fas fa-minus desktop"></i>
                                                        </div>
                                                        <h4 className="desktop">${quantity * (Number(price))}</h4>
                                                        <i onClick={() => { removeItem(id) }} className="fas fa-times close-button-bottom"></i>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;
