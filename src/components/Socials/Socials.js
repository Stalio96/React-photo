import './Socials.css';

const Socials = () => {

    return (
        <div className="socials">
            <p className="socials__text">LET'S KEEP IN TOUCH !</p>

            <div className="socials__container">
                {/* <img /> */}
                <div className="socials__insta__container">
                    <i className="fa-brands fa-instagram"></i>
                    <a className="socials__insta__container__instagram" href='https://www.instagram.com/iliyanaivanov/' target="_blank">@iliyanaivanov</a>
                    <p className="socials__insta__container__text">FOLLOW ME ON INSTAGRAM</p>
                </div>
            </div>
        </div>
    );
}

export default Socials;