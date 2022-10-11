import { useState } from "react";

import * as photoService from '../../services/photoService';

const RealEstateCarousel = ({
    images,
    user
}) => {
    let [current, setCurrent] = useState(0);
    const length = images.length;

    // if(images.length > 1) {
    //     setTimeout(() => {
    //         setCurrent((current + 1) === length ? 0 : current + 1);
    //     }, 4500);
    // }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }


    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className="realEstateCarousel">
            <div className="icon__arrow left" onClick={previousSlide}></div>
            <div className="icon__arrow right" onClick={nextSlide}></div>
            {/* <i className="fa-solid fa-arrow-left-long" onClick={previousSlide}></i>
            <i className="fa-solid fa-arrow-right-long" onClick={nextSlide}></i> */}
            {images.map((slide, index) => {
                const photoId = slide._id;
                const deleteHandler = () => {
                    photoService.deleteRealEstateCarousel(photoId)
                        .then(() => {
                            console.log('deleted');
                        })
                }
                return (
                    <div id="slider" className={index == current ? 'slide active' : 'slide'} key={slide._id}>
                        {index == current && (<img src={slide.imageUrl} className="carousel__image" />)}
                        {
                            user.username
                                ? <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
                                : null
                        }
                    </div>
                )
            })}
        </section>
    );
}

export default RealEstateCarousel;