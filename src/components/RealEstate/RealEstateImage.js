import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as photoService from '../../services/photoService';

import './RealEstateImage.css';

const RealEstateImage = ({
    photo
}) => {
    const { user } = useAuthContext();
    const [imageClass, setImageClass] = useState('');

    useEffect(() => {
        const img = new Image();
        img.src = photo.imageUrl;
        img.onload = () => {
            if (img.height > img.width) {
                setImageClass('tall');
            } else if (img.height < img.width) {
                setImageClass('thick');
            } else if (img.height == img.width) {
                setImageClass('equal');
            }
        };
    })
    const deleteHandler = (e) => {
        // e.preventDefault();    

        photoService.deleteRealEstate(photo._id)
            .then(() => {
                console.log('deleted');
            })
    }

    return (
        <li className="realEstate__item">
            <img className={imageClass} src={photo.imageUrl} />
            <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
        </li>
    )
}

export default RealEstateImage;