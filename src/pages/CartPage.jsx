import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from 'react-use-cart';

const CartPage = () => {

    const [tax, setTax] = useState(0)
    const [word, setWord] = useState('')
    const [emptyWord, setEmptyWord] = useState('')
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

    useEffect(()=>{
        if(totalUniqueItems>=1){
            setTax(prev=>prev = 10)
            setEmptyWord(prev=>prev='')
        }
        else{
            setTax(prev=>prev = 0)
            setEmptyWord(prev=>prev='Your cart is empty')
        }
    })
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
                                <div className="col-lg-8 col-12 __products">
                                    <h1 id="isempty">{emptyWord}<i class="fas fa-shopping-cart"></i></h1>
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
                                <div className="col-lg-4 col-12 __order-summary">
                                    <div className="row">
                                        <div className="col-12 __header">
                                            <div className="container">
                                                <h5>Order summary</h5>
                                            </div>
                                        </div>
                                        <div className="col-12 __text">
                                            <div className="container">
                                                <p>Shipping and additional costs are calculated based on values you have entered.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 __subtotal">
                                            <div className="container">
                                            <h5>Order Subtotal</h5>
                                            <span>${cartTotal}.00</span>
                                            </div>
                                        </div>
                                        <div className="col-12 __shipping">
                                            <div className="container">
                                            <h5>Shipping and handling</h5>
                                            <span>$10.00</span>
                                            </div>
                                        </div>
                                        <div className="col-12 __tax">
                                            <div className="container">
                                            <h5>Tax</h5>
                                            <span>$0.00</span>
                                            </div>
                                        </div>
                                        <div className="col-12 __total">
                                            <div className="container">
                                            <h5>Total</h5>
                                            <span>${cartTotal+tax}.00</span>
                                            </div>
                                        </div>
                                    </div>
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
