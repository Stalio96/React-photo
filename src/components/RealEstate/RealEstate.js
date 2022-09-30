import Aos from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from "react";

import * as photoService from '../../services/photoService';

import RealEstateCarousel from './RealEstateCarousel';
import RealEstateImage from "./RealEstateImage";

const carousel = [
    {
        image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg'
    },
    {
        image: 'https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain'
    },
    {
        image: 'https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg'
    },
    {
        image: 'https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg'
    }
]

const RealEstate = () => {
    const [realEstate, setRealEstate] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getRealEstates()
            .then(result => {
                setRealEstate(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='realEstate'>
            <RealEstateCarousel images={carousel} />
            <div className="realEstate__list">
                {realEstate.map(x => <RealEstateImage aos={'fade-up'} aos_offset={'100'} key={x._id} photo={x} />)}
            </div>
        </section>
    )
}

export default RealEstate;