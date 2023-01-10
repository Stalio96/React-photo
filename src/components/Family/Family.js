import Aos from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// import logo from '../../assets/White_and_Black_Minimal_Real_Estate_Logo-removebg.png'; 

import * as photoService from '../../services/photoService';

import { useAuthContext } from "../../contexts/AuthContext";

import FamilyImage from './FamilyImage';

const Family = () => {
    const { user } = useAuthContext();
    const [familyState, setFamilyState] = useState([]);

    useEffect(() => {
        Aos.init();
          
        photoService.getFamily()
            .then(result => {
                setFamilyState(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='family'>
            <div className="family__list">
                {familyState.map((x, i) => <FamilyImage aos={'fade-up'} aos_offset={'100'} key={x._id} photo={x} user={user} index={i} familyState={familyState} />)}
            </div>

            <Link className='FamilyContact' to='/contact'>CONTACT</Link>
        </section>
    );
}

export default Family;