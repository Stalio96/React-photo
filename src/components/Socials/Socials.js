const Socials = () => {

    return (
        <div className="socials">
            <p className="socials__text">LET`S WORK TOGETHER!</p>

            <div className="socials__container">
                <img className='socials__img' src="https://scontent.fsof11-1.fna.fbcdn.net/v/t31.18172-8/26023983_10105807942169233_2758262281561815635_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=pkpb5Ut1mM0AX88WCvr&_nc_ht=scontent.fsof11-1.fna&oh=00_AT9u0pjXgpJuLBK2_lkQvDPRpmzzY3fJ0zJ_4DcXqabI2w&oe=635619EB" />
                <div className="socials__insta__container">
                    <i className="fa-brands fa-instagram"></i>
                    <a className="socials__insta__container__instagram" href='https://www.instagram.com/zerothreetwophotoandvideo/' target="_blank">@zerothreetwophotoandvideo</a>
                    <p className="socials__insta__container__text">FOLLOW MY INSTAGRAM</p>
                </div>
            </div>
        </div>
    );
}

export default Socials;