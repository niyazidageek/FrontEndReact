import React, { useState } from 'react';
import MenuButtonDesktop from './MenuButtonDesktop';
import { useCart } from 'react-use-cart';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import BasketButton from './BasketButton';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}));

const Navbar = () => {

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

    const classes = useStyles();
    const [color, setColor] = useState('transparent')
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const HandleClickResponsive = () => {
        if (color == 'transparent') {
            setColor(prev => prev = 'white')
        }
        else {
            setColor(prev => prev = 'transparent')
        }
    }

    const SearchInput = () => {
        const style = { border: 'unset', borderBottom: '1px solid black', boxShadow: 'unset', borderRadius: 'unset', marginRight: '2rem', backgroundColor: 'transparent' }
        return (
            <input type="search" placeholder="Search" aria-label="Search" style={style} />
        )
    }

    const HomeDrop = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        )
    }
    const ShopDrop = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        )
    }

    const IconsDrop = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Icons
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        )
    }
    const PagesDrop = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        )
    }

    const DocsDrop = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Docs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light w-100" style={{ backgroundColor: `${color}` }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Varkala</a>
                <div className="__buttons" id="buttons-responsive">
                    <ul>
                        <li>
                            <i className="far fa-user fa-lg"></i>
                        </li>
                        <li>
                            <i className="far fa-heart fa-lg">
                                <span className="__badge-cart position-absolute translate-middle badge">
                                    1
                                </span>
                            </i>
                        </li>
                        <li>
                        <BasketButton/>
                        </li>
                    </ul>
                </div>
                <i onClick={HandleClickResponsive} className=" __menu-btn fas fa-bars fa-2x" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ alignSelf: 'end', color: "black" }}></i>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: `${color}`, zIndex: '10' }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <HomeDrop />
                        <ShopDrop />
                        <IconsDrop />
                        <PagesDrop />
                        <DocsDrop />
                    </ul>
                    <form className="d-flex align-items-center">
                        <SearchInput />
                        <div className="__buttons" id="buttons">
                            <ul>
                                <li>
                                    <i className="far fa-user fa-lg"></i>
                                </li>
                                <li>
                                    <i className="far fa-heart fa-lg">
                                        <span className="__badge-cart position-absolute translate-middle badge">
                                            1
                                        </span>
                                    </i>
                                </li>
                                <li>
                                    <BasketButton/>
                                    
                                </li>
                            </ul>
                        </div>
                        <MenuButtonDesktop />

                        
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
