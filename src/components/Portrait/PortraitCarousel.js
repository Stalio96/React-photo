import Carousel from 'react-elastic-carousel';

const PortraitCarousel = ({
    images
}) => {
    return (
        <Carousel className='portraitCarousel'>
            {images.map((slide) => <img key={slide._id} src={slide.imageUrl} className='portrait__carousel__image' />)}
        </Carousel>
    );
}

export default PortraitCarousel;