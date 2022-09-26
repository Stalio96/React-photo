import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import PortraitImage from "./PortraitImage";

import './Portrait.css';

const Portrait = () => {
    const [portrait, setPortrait] = useState([]);

    useEffect(() => {
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
            {portrait.map(x => <PortraitImage key={x._id} photo={x} />)}
        </div>
    )
}

export default Portrait;