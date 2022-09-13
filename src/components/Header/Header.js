import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <Link to='/'>ILIYANA'S PHOTOS</Link>

            <ul>
                <li><Link to='/'>WORK</Link></li>
                <li><Link to='/product'>PRODUCT</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
                <li><Link to='/impressum'>IMPRESSUM</Link></li>
                <li><Link to='/socials'>SOCIALS</Link></li>
            </ul>
        </header>
    );
}

export default Header;