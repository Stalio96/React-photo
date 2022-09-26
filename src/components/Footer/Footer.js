import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer__socials">
                <a href='https://www.instagram.com/iliyanaivanov/' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/iliyana.ivanov" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
            </div>

            <div className="footer__nav">
                <nav className="footer__items">
                    <li className="footer__item">
                        <Link className="item__link" to='/'>REAL ESTATE</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="item__link" to='/portrait'>PORTRAIT</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="item__link" to='/product'>PRODUCT</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="item__link" to='/about'>ABOUT</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="item__link" to='/contact'>CONTACT</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="item__link" to='/socials'>SOCIALS</Link>
                    </li>
                </nav>
            </div>

            <p className="footer__copyright">Copyright © 2022 ILIYANA'S PHOTOS. All Rights Reserved.</p>

            <a className="go-to-top__link" href='#'><i class="fa-solid fa-arrow-up-long"></i></a>
        </footer>
    );
}

export default Footer;