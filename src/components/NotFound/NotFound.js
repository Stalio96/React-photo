import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='notFound'>
            <h1 className='notFound__title'>404</h1>
            <h2 className='notFound__title'>PAGE NOT FOUND</h2>

            <p className='notFound__text'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to='/' className='notFound__link'>HOMEPAGE</Link>
        </section>
    );
}

export default NotFound;