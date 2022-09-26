import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import PortraitImage from "./PortraitImage";

import './Portrait.css';

const Portrait = () => {
    const [portrait, setPortrait] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getPortrait()
            .then(result => {
                setPortrait(result);
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    console.log('work', portrait);

    return (
        <div className="portrait__list">
            {portrait.map(x => <PortraitImage aos={'slide-left'} aos_offset={'100'} key={x._id} photo={x} />)}
        </div>
    )
}

export default Portrait;