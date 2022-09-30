import { useState } from "react";

import * as photoService from '../../services/photoService';

const RealEstateCarousel = ({
    images,
    user
}) => {
    let [current, setCurrent] = useState(0);
    const length = images.length;

    setTimeout(() => {
        setCurrent((current + 1) === length ? 0 : current + 1);
    }, 4500);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const deleteHandler = (id) => {
        // e.preventDefault();    

        photoService.deleteRealEstateCarousel(id)
            .then(() => {
                console.log('deleted');
            })
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className="realEstateCarousel">
            <i className="fa-solid fa-arrow-left-long" onClick={previousSlide}></i>
            <i className="fa-solid fa-arrow-right-long" onClick={nextSlide}></i>
            {images.map((slide, index) => {
                return (
                    <div id="slider" className={index == current ? 'slide active' : 'slide'} key={slide._id}>
                        {index == current && (<img src={slide.imageUrl} className="carousel__image" />)}
                        {
                            user.username
                                ? <i onClick={deleteHandler(slide._id)} className="fa-regular fa-trash-can"></i>
                                : null
                        }
                    </div>
                )
            })}
        </section>
    );
}

export default RealEstateCarousel;