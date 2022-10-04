import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

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

    return (
        <header className="header">
            <Link className="header__title" to='/'>ILIYANA'S PHOTOS</Link>

            <button className="header__menu"><i class="fa-sharp fa-solid fa-bars"></i></button>

            <nav className="header__items">
                <li className="header__item">
                    <Link className="header__item__link" to='/'>REAL ESTATE</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item__link" to='/portrait'>PORTRAIT</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item__link" to='/product'>PRODUCT</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item__link" to='/price'>PRICE</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item__link" to='/about'>ABOUT</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item__link" to='/contact'>CONTACT</Link>
                </li>
                <li className="header__item">
                    <Link className="header__item__link" to='/socials'>SOCIALS</Link>
                </li>

                {user.username
                    ? admin
                    : null
                }
            </nav>
        </header>
    );
}

export default Header;