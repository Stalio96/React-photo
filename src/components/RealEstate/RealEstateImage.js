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
    let [way, setWay] = useState(index);
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');
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
            setWay(way == length - 1? way = 0 : way += 1);
            setTempImg(realEstate[way].imageUrl);
        }else if(direction == 'left'){
            setWay(way === 0 ? way = length - 1 : way -= 1);
            setTempImg(realEstate[way].imageUrl);
        }
    }

    console.log(way);

    const getImg = (imageUrl) => {
        setTempImg(imageUrl);
        setModel(true);
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'} onScroll={() => setModel(false)} >
                <img src={tempImg} onScroll={() => setModel(false)} />
                <i className="fa-solid fa-xmark" onClick={() => setModel(false)} ></i>
                <div className="icon__arrow left" onClick={() => getDirection('left')}></div>
                <div className="icon__arrow right" onClick={() => getDirection('right')}></div>
                {/* <i className="fa-solid fa-arrow-right" onClick={() => getDirection('right')}></i>
                <i className="fa-solid fa-arrow-left" onClick={() => getDirection('left')}></i> */}
            </div>
            <div data-aos={aos} data-aos-offset={aos_offset} className="realEstateEl" >
                <img className="realEstateImage" src={photo.imageUrl} style={{ width: '100%' }} onClick={() => getImg(photo.imageUrl)} />
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