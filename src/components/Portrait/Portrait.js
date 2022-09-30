import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import PortraitImage from "./PortraitImage";
import PortraitCarousel from './PortraitCarousel';

const Portrait = () => {
    const [portrait, setPortrait] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getPortrait()
            .then(result => {
                setPortrait(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='portrait'>
            <PortraitCarousel images={portrait}/>
            <div className="portrait__list">
                {portrait.map(x => <PortraitImage aos={'slide-left'} aos_offset={'100'} key={x._id} photo={x} />)}
            </div>
        </section>
    )
}

export default Portrait;