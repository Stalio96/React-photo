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
                    <p>+1 707 247 8452</p>
                </li>
                <li className="contact__item">
                    <div className="contact__circle mail">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p>
                        <a className="mail" href="mailto:zerothreetwo@sent.com" target="_self">032photoandvideo@gmail.com</a>
                    </p>
                </li>
                <li className="contact__item">
                    <div className="contact__circle">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <p>Los Angeles, California</p>
                </li>
            </ul>

            <form className="email" action="https://formsubmit.co/zerothreetwo@sent.com" method="POST">
                <h1 className="email__heading">SEND EMAIL</h1>
                <label>NAME</label>
                <input className="email__name" type="text" name="Name"  required/>
                <label>EMAIL</label>
                <input className="email__email" type="email" name="Email"  required/>
                <label>MESSAGE</label>
                <textarea className="email__text" name="Message" ></textarea>
                <input className="email__btn" type="submit" value="SEND MESSAGE"/>
            </form>
        </div>
    );
}

export default Contact;