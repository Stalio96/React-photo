import { useState, useEffect } from "react";

import * as photoService from '../../services/photoService';

import RealEstateImage from "./RealEstateImage";

const RealEstate = () => {
    const [realEstate, setRealEstate] = useState([]);

    useEffect(() => {
        photoService.getRealEstates()
            .then(result => {
                setRealEstate(result);
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    console.log('work', realEstate);

    return (
        <div className="realEstate__list">
            {realEstate.map(x => <RealEstateImage key={x._id} photo={x} />)}
        </div>
    )
}

export default RealEstate;