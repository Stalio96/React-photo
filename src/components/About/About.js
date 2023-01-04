const About = () => {
    return (
        <main className='about'>
            <section className="about__section">
                {/* <img className="about__img" src="https://scontent.fsof11-1.fna.fbcdn.net/v/t1.18169-9/14117825_1253574694667019_2950681071552338521_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ve9RnBhHh6UAX_PSq-q&_nc_ht=scontent.fsof11-1.fna&oh=00_AT_6Pn4AUPvNxtEQiWgqFeXhjZqA3_cm7yYeGo6OHbInRA&oe=6354829C" /> */}
                <div className="about__container">
                    <h1 className='about__heading'>ABOUT ILIYANA IVANOV</h1>

                    <p className='about__text'>
                        Hello there, my name is Iliyana and I’ve been loving photography since I was little girl.
                        My journey started 6 years ago when I bought my first camera.
                    </p>

                    <p className='about__text'>
                        I started with taking pictures of my friends and family this is when photography became my job.
                    </p>

                    <p className='about__text'>
                        Since then I realized that I love taking pictures in general and started shooting Real Estate, Product photography as well.
                        Now I specialize in all of above categories.
                    </p>
                </div>
            </section>
            <a className='about__instagram' href='https://www.instagram.com/iliyanaivanov/' target="_blank">INSTAGRAM</a>
        </main>
    )
}

export default About;