import React, { useState, useEffect } from 'react';
import MenuButtonDesktop from './MenuButtonDesktop';
import BasketButton from './BasketButton';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Navbar = () => {

    const [clicked, setClicked] = useState(true)
    const [color, setColor] = useState('transparent')
    const [wishCount, setWishCount] = useState(0)
    const [storage, setStorage] = useState(false)

    useEffect(() => {
        var parsedArray = JSON.parse(localStorage.getItem('wishlist'))
        if (parsedArray == null) {
            setWishCount(prev => prev = 0)
        }
        else {
            setWishCount(prev => prev = parsedArray.length)
        }
        console.log('wish')
        window.addEventListener('storage', filterCount)
    })
    function filterCount() {
        setStorage(prev => prev = !prev)
        var parsedArray = JSON.parse(localStorage.getItem('wishlist'))
        if (parsedArray == null) {
            setWishCount(prev => prev = 0)

        }
        else {
            setWishCount(prev => prev = parsedArray.length)
        }
    }

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
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <li><Link to="/" className="dropdown-item">Home 1 - Fashion</Link></li>
                        <li><Link to="/" className="dropdown-item">Home 2 - Fashion</Link></li>
                        <li><Link to="/" className="dropdown-item">Home 3 - Fashion</Link></li>
                        <li><Link to="/" className="dropdown-item">Home 4 - Fashion</Link></li>
                    </div>
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
                    <div className="container ">
                        <div className="row">
                            <div className="col-4">
                                <ul>
                                    <li>Shop pages</li>
                                    <li>Full width</li>
                                    <li>Full width with category menu</li>
                                    <li>Full width with big products</li>
                                    <li>Fixed width</li>
                                    <li>Fixed width  & sidebar</li>
                                    <li>Fixed width & mansory layout</li>
                                    <li>subcategories</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul>
                                    <li>Product pages</li>
                                    <li>Product with sticky info</li>
                                    <li>Product with background</li>
                                    <li>Product standart</li>
                                </ul>
                            </div>
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/kyle-loftus-596319-unsplash-cropped.jpg" alt="" />
                        </div>
                    </div>
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
                    <div className="container flex">
                        <div className="row">
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center">
                                <i class="fas fa-tshirt fa-2x"></i>
                                <h5>Trousers</h5>
                            </div>
                        </div>
                    </div>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/christopher-campbell-28571-unsplash.jpg" alt="" />
                                <ul>
                                    <li><h5>Homepage</h5></li>
                                    <li>Home-1 Fashion</li>
                                    <li>Home-1 Fashion</li>
                                    <li>Home-1 Fashion</li>
                                </ul>
                                <ul>
                                    <li><h5>Category</h5></li>
                                    <li>Full width</li>
                                    <li>Full width</li>
                                    <li>Full width</li>
                                    <li>Full width</li>
                                    <li>Full width</li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/ian-dooley-347962-unsplash.jpg" alt="" />
                                <ul>
                                    <li><h5>Category</h5></li>
                                    <li>Shopping cart</li>
                                    <li>Checkout</li>
                                    <li>Wishlist</li>
                                </ul>
                                <ul>
                                    <li><h5>Product</h5></li>
                                    <li>Product with sticky info</li>
                                    <li>Product standart</li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/ian-dooley-347942-unsplash.jpg" alt="" />
                                <ul>
                                    <li><h5>Blog</h5></li>
                                    <li>Blog</li>
                                    <li>Blog-mansory</li>
                                    <li>Post</li>
                                </ul>
                                <ul>
                                    <li><h5>Pages</h5></li>
                                    <li>About-Company</li>
                                    <li>F.A.Q</li>
                                    <li>Contact</li>
                                    <li>Privacy policy</li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/photo-1534126511673-b6899657816a.jpg" alt="" />
                                <ul>
                                    <li><h5>Customer</h5></li>
                                    <li>Login</li>
                                    <li>Orders</li>
                                    <li>Order tracing</li>
                                    <li>Adresses</li>
                                    <li>Wishlist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
                    <div className="container">
                        <ul>
                            <li>Introduction</li>
                            <li>Directory structure</li>
                            <li>Gulp</li>
                            <li>Customizing CSS</li>
                            <li>Credits</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </ul>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light w-100" style={{ backgroundColor: `${color}` }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Varkala</Link>
                <div className="__buttons" id="buttons-responsive">
                    <ul>
                        <li>
                            {/* <i onClick={onOpenModal} className="far fa-user fa-lg"></i> */}
                            <LoginModal />
                        </li>
                        <li>
                            <Link style={{ color: 'unset' }} to="/wishlist">
                                <i className="far fa-heart fa-lg">
                                    <span className="__badge-cart position-absolute translate-middle badge">
                                        {wishCount}
                                    </span>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <BasketButton />
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
                                    <LoginModal />
                                </li>
                                <li>
                                    <Link to="/wishlist" style={{ color: 'unset' }}>
                                        <i className="far fa-heart fa-lg">
                                            <span className="__badge-cart position-absolute translate-middle badge">
                                                {wishCount}
                                            </span>
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <BasketButton />

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
