import { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import * as photoService from '../../services/photoService';

import { Swiper, SwiperSlide, pagination } from 'swiper/react';
import 'swiper/css';

const PortraitCarousel = ({
    images,
    user
}) => {
    // let [current, setCurrent] = useState(0);
    // const length = images.length;

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1);
    // }

    // const previousSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // }

    const deleteHandler = (id) => {
        photoService.deletePortraitCarousel(id)
            .then(() => {
                console.log('deleted');
            })
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }
    return (
        <Swiper
            className='swipe'
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: false }}
        >
            {images.map(x => <SwiperSlide id='slider' className='swipeCont' key={x._id}>
                <img className="swipeImg" src={x.imageUrl} />
                {
                user.username
                    ? <i onClick={deleteHandler(x._id)} className="fa-regular fa-trash-can"></i>
                    : null
            }
            </SwiperSlide>)}
            
        </Swiper>
        // <section className="portraitCarousel">
        //     <i className="fa-solid fa-arrow-left-long" onClick={previousSlide}></i>
        //     <i className="fa-solid fa-arrow-right-long" onClick={nextSlide}></i>
        //     {images.map((slide, index) => {
        //         return (
        //             <div className={index == current ? 'portraiSlide active' : ' slide'} key={index}>
        //                 {index == current && (<img src={slide.imageUrl} className="portrait__carousel__image" />)}
        //             </div>
        //         )
        //     })}
        // </section>
    );
}

export default PortraitCarousel;