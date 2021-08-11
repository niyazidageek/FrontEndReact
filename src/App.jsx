import React from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import "./assets/scss/main.scss"
import 'aos/dist/aos.css';
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "react-use-cart";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/wishlist" component={WishlistPage} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404"/>
        </Switch>
      </Router>
    </CartProvider>
    </>
  );
}

export default App;
