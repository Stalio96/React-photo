import { Link } from 'react-router-dom';

const DropDown = ({
    user,
    admin,
    setIsDrop
}) => {

    return (
        <nav className="drop__items">
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/'>REAL ESTATE</Link>
            </li>
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/portrait'>PORTRAIT</Link>
            </li>
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/product'>PRODUCT</Link>
            </li>
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/price'>PRICE</Link>
            </li>
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/about'>ABOUT</Link>
            </li>
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/contact'>CONTACT</Link>
            </li>
            <li className="header__item">
                <Link className="header__item__link" onClick={() => setIsDrop(false)} to='/socials'>SOCIALS</Link>
            </li>

            {user.username
                ? admin
                : null
            }
        </nav>
    );
}

export default DropDown;