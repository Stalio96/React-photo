import { useState } from 'react';

import * as photoService from '../../services/photoService';
import { useAuthContext } from '../../contexts/AuthContext';

import './Product.css';

const ProductImage = ({
    photo
}) => {
    const { user } = useAuthContext();
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const deleteHandler = (e) => {
        photoService.deleteProduct(photo._id)
            .then(() => {
                console.log('deleted');
            })
    }

    const getImg = (imageUrl) => {
        setTempImg(imageUrl);
        setModel(true);
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempImg} />
                <i className="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
            </div>
            <div className="productEl" onClick={() => getImg(photo.imageUrl)}>
                <img className="img" src={photo.imageUrl} style={{ width: '100%' }} />
            </div>
            {
                user.username
                    ? <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
                    : null
            }
        </>
    )
}

export default ProductImage;