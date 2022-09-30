import { useState } from "react";

const ProductCarousel = ({
    images
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

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }
    
    return (
        <section className="productCarousel">
            <i className="fa-solid fa-arrow-left-long" onClick={previousSlide}></i>
            <i className="fa-solid fa-arrow-right-long" onClick={nextSlide}></i>
            {images.map((slide, index) => {
                return (
                    <div className={index == current ? 'slide active' : 'slide'} key={index}>
                        {index == current && (<img src={slide.imageUrl} className="product__carousel__image" />)}
                    </div>
                )
            })}
        </section>
    );
}

export default ProductCarousel;