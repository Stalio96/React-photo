import Aos from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import * as photoService from '../../services/photoService';

import { useAuthContext } from "../../contexts/AuthContext";

import RealEstateCarousel from './RealEstateCarousel';
import RealEstateImage from './RealEstateImage';

const RealEstate = () => {
    const { user } = useAuthContext();
    const [realEstate, setRealEstate] = useState([]);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getRealEstatesCarousel()
            .then(result => {
                setCarousel(result);
            }).catch(err => {
                console.log(err);
            })
            
        photoService.getRealEstates()
            .then(result => {
                setRealEstate(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='realEstate'>
            <RealEstateCarousel images={carousel} user={user} />
            <div className="realEstate__list">
                {realEstate.map(x => <RealEstateImage aos={'fade-up'} aos_offset={'100'} key={x._id} photo={x} user={user} />)}
            </div>

            <Link className='realEstateContact' to='/contact'>CONTACT</Link>
        </section>
    )
}

export default RealEstate;