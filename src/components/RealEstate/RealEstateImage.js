import { useState } from "react";

import * as photoService from '../../services/photoService';

const RealEstateImage = ({
    realEstate,
    index,
    photo,
    aos,
    aos_offset,
    user
}) => {
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');
    const [way, setWay] = useState(index);
    const length = realEstate.length;

    const deleteHandler = (e) => {
        // e.preventDefault();    

        photoService.deleteRealEstate(photo._id)
            .then(() => {
                console.log('deleted');
            })
    }

    const getDirection = (direction) => {
        if(direction == 'right'){
            setWay(way == length - 1? 0 : way + 1);
            setTempImg(realEstate[way].imageUrl);
        }else if(direction == 'left'){
            setWay(way === 0 ? length - 1 : way - 1);
            setTempImg(realEstate[way].imageUrl);
        }
    }

    const getImg = (imageUrl) => {
        setTempImg(imageUrl);
        setModel(true);
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'} onScroll={() => setModel(false)} >
                <img src={tempImg} onScroll={() => setModel(false)} />
                <i className="fa-solid fa-xmark" onClick={() => setModel(false)} ></i>
                <i className="fa-solid fa-arrow-right" onClick={() => getDirection('right')}></i>
                <i className="fa-solid fa-arrow-left" onClick={() => getDirection('left')}></i>
            </div>
            <div data-aos={aos} data-aos-offset={aos_offset} className="realEstateEl" onClick={() => getImg(photo.imageUrl)}>
                <img className="realEstateImage" src={photo.imageUrl} style={{ width: '100%' }} />
                {
                    user.username
                        ? <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
                        : null
                }
            </div>
        </>
    )
}

export default RealEstateImage;