import React, {useState, useEffect} from 'react';
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

    useEffect(()=>{
        if(totalUniqueItems==1){
            setWord(prev=>prev='item')
        }
        else{
            setWord(prev=>prev='items')
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
               </div>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;
