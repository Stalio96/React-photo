import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__heading">CONTACTS</h1>

            <p className="contact__text">LET`S WORK TOGETHER!</p>

            <ul className="contact__items">
                <li className="contact__item">
                    <div className="contact__circle">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <p>+1 720 517 5090</p>
                </li>
                <li className="contact__item">
                    <div className="contact__circle mail">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p>032photoandvideo@gmail.com</p>
                </li>
                <li className="contact__item">
                    <div className="contact__circle">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <p>Los Angeles, California</p>
                </li>
            </ul>
        </div>
    );
}

export default Contact;