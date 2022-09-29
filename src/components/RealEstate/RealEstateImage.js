import { useState } from "react";

import * as photoService from '../../services/photoService';
import { useAuthContext } from "../../contexts/AuthContext";

import './RealEstateImage.css';

const RealEstateImage = ({
    photo,
    aos,
    aos_offset
}) => {
    const { user } = useAuthContext();
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');
    // const [way, setWay] = useState();

    const deleteHandler = (e) => {
        // e.preventDefault();    

        photoService.deleteRealEstate(photo._id)
            .then(() => {
                console.log('deleted');
            })
    }

    const getDirection = (direction) => {
        // if(direction == 'right'){

        // }else if(direction == 'left'){

        // }
        console.log(photo)
    }

    const getImg = (imageUrl) => {
        setTempImg(imageUrl);
        setModel(true);
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'} >
                <img src={tempImg} onScroll={() => setModel(false)} />
                <i className="fa-solid fa-xmark" onClick={() => setModel(false)} ></i>
                <i className="fa-solid fa-arrow-right" onClick={() => getDirection('right')}></i>
                <i className="fa-solid fa-arrow-left" onClick={() => getDirection('left')}></i>
            </div>
            <div data-aos={aos} data-aos-offset={aos_offset} className="realEstateEl" onClick={() => getImg(photo.imageUrl)}>
                <img className="realEstateImage" src={photo.imageUrl} style={{ width: '100%' }} />
            </div>
            {
                user.username
                    ? <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
                    : null
            }
        </>
    )
}

export default RealEstateImage;