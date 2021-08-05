import React, { useState } from 'react';
import MenuButtonDesktop from './MenuButtonDesktop';
import { useCart } from 'react-use-cart';



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
        

    const [color, setColor] = useState('transparent')

    // const Menu = () => {
    //     return (
    //         <div className="collapse" id="collapseExample" style={{ position: 'absolute' }}>
    //             <div className="card card-body align-items-start">
    //                 <MenuButton />
    //                 <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
    //             </div>
    //         </div>
    //     )
    // }

    // const HandleClickMenu = () => {
    //     if(clicked==false){
    //         setClicked(prev=>prev = true)
    //     }
    //     else{
    //         setClicked(prev=>prev=false)
    //     }
    // }

    const HandleClickResponsive = () => {
        if (color == 'transparent') {
            setColor(prev => prev = 'white')
        }
        else {
            setColor(prev => prev = 'transparent')
        }
    }

    // const Menu = () => {
    //     if(clicked==true){
    //         return(
    //             <div className="menu-desktop" style={{height:'150vh', position:'absolute', backgroundColor:'white', zIndex:'1'}}>
    //                 <h3 style={{zIndex:'13'}}>saamaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>
    //                 <h4>eekm</h4>
    //             </div>
    //         )
    //     }
    //     else{
    //         return <div></div>
    //     }

    // }



    
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
                            <i className="fas fa-shopping-bag fa-lg">
                                <span className="__badge-cart position-absolute translate-middle badge">
                                    99
                                </span>
                            </i>
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
                                    <i className="fas fa-shopping-bag fa-lg">
                                        <span className="__badge-cart position-absolute translate-middle badge">
                                            {cartTotal}
                                        </span>
                                    </i>
                                </li>
                            </ul>
                        </div>
                        {/* <Menu styles={styles} customBurgerIcon={<i id="menubutton" className="__menu-btn fas fa-bars fa-2x" style={{ alignSelf: 'end' }}></i>}>
                            <a id="home" className="menu-item" href="/">Home</a>
                        </Menu> */}
                        <MenuButtonDesktop />
                        
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
