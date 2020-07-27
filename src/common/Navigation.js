import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


function Navigation() {
    return (
        <nav className="navigation">
            <div className="container">

                <Link href="#" class="navigation__logo">
                    <img src="bookstore.svg" alt="a bookstore logo" class="logo__image" />
                </Link>

                <ul className="navigation__links">
                    <li className="links__item"><Link to="#">book</Link></li>
                    <li className="links__item"><Link to="#">author</Link></li>
                    <li className="links__item"><Link to="#">about</Link></li>
                    <li className="links__item"><Link to="#">cart</Link></li>
                </ul>

                <form class="navigation__search-form">
                    <input name="search" type="search" inputMode="search" placeholder="search a book or author ..." class="search-form__input" />
                    <i class="fas fa-search search-form__icon"></i>
                </form>

                <div class="navigation__menu">
                    <div className="menu__top bar"></div>
                    <div className="menu__middle bar"></div>
                    <div className="menu__bottom bar"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;