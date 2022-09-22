import { Link, useParams, useNavigate } from "react-router-dom";

import * as photoService from '../../services/photoService';

import './WorkImage.css';

const WorkImage = ({
    photo
}) => {

    const deleteHandler = (e) => {
        // e.preventDefault();

        photoService.deleteWork(photo._id)
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

export default WorkImage;