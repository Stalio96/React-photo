import Aos from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from "react";

import * as photoService from '../../services/photoService';

import RealEstateImage from "./RealEstateImage";

const RealEstate = () => {
    const [realEstate, setRealEstate] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getRealEstates()
            .then(result => {
                setRealEstate(result);
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="realEstate__list">
            {realEstate.map(x => <RealEstateImage aos={'fade-up'} aos_offset={'100'} key={x._id} photo={x} />)}
        </div>
    )
}

export default RealEstate;