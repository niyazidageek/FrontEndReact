import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="__top">
                <div className="__info">
                    <div className="container">
                        <ul className="justify-content-center">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <li>
                                        <div className="__content">
                                            <i class="fas fa-truck fa-2x"></i>
                                            <div className="__lettering">
                                                <p>Free shipping & return</p>
                                                <p>Free Shipping over $300</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <li>
                                        <div className="__content">
                                            <i class="fas fa-coins fa-2x"></i>
                                            <div className="__lettering">
                                                <p>Money back guarantee</p>
                                                <p>30 Days Money Back Guarantee</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <li>
                                        <div className="__content">
                                            <i class="fas fa-percent fa-2x"></i>
                                            <div className="__lettering">
                                                <p>Best prices</p>
                                                <p>Always the best prices</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <li>
                                        <div className="__content">
                                            <i class="fas fa-headset fa-2x"></i>
                                            <div className="__lettering">
                                                <p>020-800-456-747</p>
                                                <p>24/7 Available Support</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>




            <div className="__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <div className="text">
                                <h3>Be in touch</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            </div>
                            <div className="__input">
                                <input type="text" placeholder="Your Email Address" />
                                <i class="fas fa-envelope fa-2x" style={{ paddingRight: '1rem' }}></i>
                            </div>
                        </div>


                        <div className="__footer-li col-md-2">
                            <ul>
                                <li><h5>Shop</h5></li>
                                <li><Link to="/" className="dropdown-item">For women</Link></li>
                                <li><Link to="/" className="dropdown-item">For Men</Link></li>
                                <li><Link to="/contact" className="dropdown-item">Stores</Link></li>
                                <li><Link to="/blog" className="dropdown-item">Our Blog</Link></li>
                                <li><Link to="/" className="dropdown-item">Shop</Link></li>
                            </ul>
                        </div>


                        <div className="__footer-li col-md-2">
                            <ul>
                                <li><h5>Company</h5></li>
                                <li><Link to="/" className="dropdown-item">Login</Link></li>
                                <li><Link to="/" className="dropdown-item">Register</Link></li>
                                <li><Link to="/wishlist" className="dropdown-item">Wishlist</Link></li>
                                <li><Link to="/" className="dropdown-item">Our Products</Link></li>
                                <li><Link to="/cart" className="dropdown-item">Checkouts</Link></li>
                            </ul>
                        </div>


                        <div className="__footer-li col-md-2">
                            <ul>
                                <li><h5>Your account</h5></li>
                                <li><Link to="/" className="dropdown-item">Login</Link></li>
                                <li><Link to="/" className="dropdown-item">Register</Link></li>
                                <li><Link to="/wishlist" className="dropdown-item">Wishlist</Link></li>
                                <li><Link to="/" className="dropdown-item">Our Products</Link></li>
                                <li><Link to="/cart" className="dropdown-item">Checkouts</Link></li>
                            </ul>
                        </div>

                        <div className="__footer-li--collapse">
                            <div className="col-12 __collapse-btn" data-bs-toggle="collapse" href="#shop" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span>Shop</span>
                                <i class="fas fa-plus"></i>
                                <i class="fas fa-minus -minus"></i>
                            </div>
                            <div className="collapse" id="shop">
                                <div className="card card-body">
                                    <div className="__footer-li--resp col-md-2">
                                        <ul>
                                            <li><Link to="/" className="dropdown-item">For women</Link></li>
                                            <li><Link to="/" className="dropdown-item">For Men</Link></li>
                                            <li><Link to="/contact" className="dropdown-item">Stores</Link></li>
                                            <li><Link to="blog/" className="dropdown-item">Our Blog</Link></li>
                                            <li><Link to="/" className="dropdown-item">Shop</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="__footer-li--collapse my-5">
                            <div className="col-12 __collapse-btn" data-bs-toggle="collapse" href="#company" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span>Company</span>
                                <i class="fas fa-plus"></i>
                                <i class="fas fa-minus -minus"></i>
                            </div>
                            <div className="collapse" id="company">
                                <div className="card card-body">
                                    <div className="__footer-li--resp col-md-2">
                                        <ul>
                                            <li><Link to="/" className="dropdown-item">Login</Link></li>
                                            <li><Link to="/" className="dropdown-item">Register</Link></li>
                                            <li><Link to="/wishlist" className="dropdown-item">Wishlist</Link></li>
                                            <li><Link to="/" className="dropdown-item">Our Products</Link></li>
                                            <li><Link to="/cart" className="dropdown-item">Checkouts</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="__footer-li--collapse">
                            <div className="col-12 __collapse-btn" data-bs-toggle="collapse" href="#account" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span>Your account</span>
                                <i class="fas fa-plus"></i>
                                <i class="fas fa-minus -minus"></i>
                            </div>
                            <div className="collapse" id="account">
                                <div className="card card-body">
                                    <div className="__footer-li--resp col-md-2">
                                        <ul>
                                            <li><Link to="/" className="dropdown-item">Login</Link></li>
                                            <li><Link to="/" className="dropdown-item">Register</Link></li>
                                            <li><Link to="/wishlist" className="dropdown-item">Wishlist</Link></li>
                                            <li><Link to="/" className="dropdown-item">Our Products</Link></li>
                                            <li><Link to="/cart" className="dropdown-item">Checkouts</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
