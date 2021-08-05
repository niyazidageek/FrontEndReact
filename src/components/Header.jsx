import React, { useState } from 'react';
import DropDownBtn from './DropDownBtn';
import Navbar from './Navbar';

export const LeftHeader = ({style}) => {
    return (
        <div className="__left">
            <ul>
                <li style={{marginRight:`${style}`}}>
                    <i class="fab fa-facebook-f"></i>
                </li>
                <li style={{marginRight:`${style}`}}>
                    <i class="fab fa-twitter"></i>
                </li>
                <li style={{marginRight:`${style}`}}>
                    <div className="__phone">
                        <i style={{marginRight:`${style}`}} className="fas fa-phone-alt"></i>
                        <span>020-800-456-747</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const Header = () => {

    return (
        <header>
            <div className="__top">
                <LeftHeader/>
                <div className="__middle">
                    <span>Free in-store delivery</span>
                </div>
                <div className="__right">
                    <ul>
                        <li>
                            <DropDownBtn type="language" lang1="German" lang2="French" lang3="English" />
                        </li>
                        <li>
                            <DropDownBtn type="currency" currency1="USD" currency2="EUR" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="__bottom">
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
