import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <Link className="header__title" to='/'>ILIYANA'S PHOTOS</Link>

            <ul className="header__items">
                <li className="header__item">
                    <Link className="item__link" to='/'>WORK</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to='/product'>PRODUCT</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to='/about'>ABOUT</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to='/contact'>CONTACT</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to='/impressum'>IMPRESSUM</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to='/socials'>SOCIALS</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;