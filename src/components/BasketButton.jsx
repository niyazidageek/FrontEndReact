import React, { useState, useEffect } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const BasketButton = () => {
    const [open, setOpen] = useState(false)
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
  

    if (isEmpty) return (
        <>
            <i onClick={() => setOpen(true)} type="button" className="fas fa-shopping-bag fa-lg">
                <span className="__badge-cart position-absolute translate-middle badge">
                    {totalUniqueItems}
                </span>
            </i>
            <SwipeableDrawer
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { }}
                swipeAreaWidth='5'
                anchor='right'>

                <List className="__basket-menu" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <ListItem style={{ justifyContent: 'flex-end' }}>
                        <i onClick={() => setOpen(false)} className="fas fa-times fa-2x"></i>
                    </ListItem>
                    <ListItem style={{justifyContent:'center'}}>
                        <h1 className="text-center">Cart is empty</h1>
                    </ListItem>
                    <ListItem>
                    <div className="cart-menu">
                    <div className="__checkout">
                                <div className="__upper-section">
                                    <h2>Subtotal :</h2>
                                    <h2>${cartTotal}</h2>
                                </div>
                                <div className="__buttons">
                                    <Link to="/cart" className="__btn" style={{textDecoration:'none', color:'unset'}}>
                                        <h4>VIEW CART</h4>
                                    </Link>
                                    <div className="__btn">
                                        <h4>CHECKOUT</h4>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </ListItem>
                </List>

            </SwipeableDrawer>
        </>
    )

    return (
        <div>
            <i onClick={() => setOpen(true)} type="button" className="fas fa-shopping-bag fa-lg">
                <span className="__badge-cart position-absolute translate-middle badge">
                    {totalUniqueItems}
                </span>
            </i>

            <SwipeableDrawer
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { }}
                swipeAreaWidth='5'
                anchor='right'>

                <List className="__basket-menu" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                    <ListItem style={{ justifyContent: 'flex-end' }}>
                        <i onClick={() => setOpen(false)} className="fas fa-times fa-2x"></i>
                    </ListItem>
                   
                    <ListItem>
                        <div className="cart-menu">
                            <ul className="__cart" style={{ flexDirection: 'column' }}>
                                {


                                    items.map((item, index) => {
                                        const { img, name, price, quantity } = item;

                                        return (
                                            <li key={index}>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="col-8">
                                                        <h5>{name}</h5>
                                                        <span>Quantity: {quantity}</span>
                                                        <h5>${price}</h5>
                                                    </div>

                                                    <div className="col-1">
                                                        <i onClick={() => { removeItem(item.id) }} class="fas fa-times"></i>
                                                    </div>

                                                </div>
                                            </li>
                                        )

                                    })
                                }
                            </ul>
                            <div className="__checkout">
                                <div className="__upper-section">
                                    <h2>Subtotal :</h2>
                                    <h2>${cartTotal}</h2>
                                </div>
                                <div className="__buttons">
                                    <Link to="/cart" className="__btn" style={{textDecoration:'none', color:'unset'}}>
                                        <h4>VIEW CART</h4>
                                    </Link>
                                    <div className="__btn">
                                        <h4>CHECKOUT</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ListItem>



                </List>

            </SwipeableDrawer>

        </div>
    );
}

export default BasketButton;
