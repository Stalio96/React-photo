import * as photoService from '../../services/photoService';

import useDimensions from '../../hooks/useDimensions';

import { Swiper, SwiperSlide, pagination } from 'swiper/react';
import 'swiper/css';

const PortraitCarousel = ({
    images,
    user
}) => {
    const { height, width } = useDimensions();

    console.log(width)

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }


    return (
        <Swiper
            className='swipe'
            spaceBetween={50}
            slidesPerView={width < 992 ? 1 : 3}
            pagination={{ clickable: true }}
        >
            {images.map(x => {
                const photoId = x._id;

                const deleteHandler = () => {
                    photoService.deletePortraitCarousel(photoId)
                        .then(() => {
                            console.log('deleted');
                        })
                }
                return (
                    <SwiperSlide id='slider' className='swipeCont' key={x._id}>
                        <img className="swipeImg" src={x.imageUrl} />
                        {
                            user.username
                                ? <i onClick={deleteHandler} className="fa-regular fa-trash-can"></i>
                                : null
                        }
                    </SwiperSlide>
                )
            })}

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