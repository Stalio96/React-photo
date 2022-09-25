import { Link, useParams, useNavigate } from "react-router-dom";

import * as photoService from '../../services/photoService';


const PortraitImage = ({
    photo
}) => {

    const deleteHandler = (e) => {
        // e.preventDefault();

        
        photoService.deletePortrait(photo._id)
            .then(() => {
                console.log('deleted');
            })
    }

    return (
        <>
            <img className="img" src={photo.imageUrl} />
            <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
        </>
    )
}

export default PortraitImage;