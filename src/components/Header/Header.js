import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import './Header.css';

const Header = () => {
    const { user } = useAuthContext();

    const admin = (
        <>
            <li className="header__item">
                <Link className="item__link" to='/create'>CREATE</Link>
            </li>
            <li className="header__item">
                <Link className="item__link" to='/logout'>LOGOUT</Link>
            </li>
        </>
    );

    // console.log(user)
    return (
        <header className="header">
            <Link className="header__title" to='/'>ILIYANA'S PHOTOS</Link>

            <nav className="header__items">
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

                {user
                    ? admin
                    : null
                }
            </nav>
        </header>
    );
}

export default Header;