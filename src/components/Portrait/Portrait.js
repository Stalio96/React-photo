import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';
import { useAuthContext } from "../../contexts/AuthContext";

import PortraitImage from "./PortraitImage";
import PortraitCarousel from './PortraitCarousel';

const Portrait = () => {
    const { user } = useAuthContext();
    const [portrait, setPortrait] = useState([]);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getPortraitCarousel()
            .then(result => {
                setCarousel(result);
            }).catch(err => {
                console.log(err);
            })

        photoService.getPortrait()
            .then(result => {
                setPortrait(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='portrait'>
            <PortraitCarousel images={carousel} user={user}/>
            <div className="portrait__list">
                {portrait.map((x, i) => <PortraitImage aos={'zoom-out'} aos_offset={'100'} key={x._id} photo={x} user={user} index={i} portrait={portrait} />)}
            </div>
        </section>
    )
}

export default Portrait;