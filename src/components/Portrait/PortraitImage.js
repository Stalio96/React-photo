import { useState } from "react";

import * as photoService from '../../services/photoService';

const PortraitImage = ({
    portrait,
    index,
    photo,
    aos,
    aos_offset,
    user
}) => {
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');
    const [way, setWay] = useState(index);
    const length = portrait.length;

    const deleteHandler = (e) => {
        photoService.deletePortrait(photo._id)
            .then(() => {
                console.log('deleted');
            })
    }

    const getDirection = (direction) => {
        if(direction == 'right'){
            setWay(way == length - 1? 0 : way + 1);
            setTempImg(portrait[way].imageUrl);
        }else if(direction == 'left'){
            setWay(way === 0 ? length - 1 : way - 1);
            setTempImg(portrait[way].imageUrl);
        }
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
                <div className="icon__arrow left" onClick={() => getDirection('left')}></div>
                <div className="icon__arrow right" onClick={() => getDirection('right')}></div>
                {/* <i className="fa-solid fa-arrow-right" onClick={() => getDirection('right')}></i>
                <i className="fa-solid fa-arrow-left" onClick={() => getDirection('left')}></i> */}
            </div>
            <div data-aos={aos} data-aos-offset={aos_offset} className="portraitEl" >
                <img className="img" src={photo.imageUrl} style={{ width: '100%' }} onClick={() => getImg(photo.imageUrl)} />
                {
                    user.username
                        ? <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
                        : null
                }
            </div>
        </>
    )
}

export default PortraitImage;