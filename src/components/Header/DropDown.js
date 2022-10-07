import { Link } from 'react-router-dom';

const DropDown = ({
    user,
    admin
}) => {

    return (
        <nav className="drop__items">
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
    );
}

export default DropDown;