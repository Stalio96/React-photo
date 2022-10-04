import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>

            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to='/'>HOMEPAGE</Link>
        </section>
    );
}

export default NotFound;