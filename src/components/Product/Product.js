import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import ProductCarousel from './ProductCarousel';
import ProductImage from "./ProductImage";

import './Product.css';

const carousel = [
    {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg'
    },
    {
        image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    },
    {
        image: 'https://media.istockphoto.com/photos/alexander-nevsky-cathedral-in-sofia-bulgaria-taken-in-may-2019-taken-picture-id1182393363?k=20&m=1182393363&s=612x612&w=0&h=1tVDnEAxLygwPdod5B9ijIBnscyLy-mMNxPI2Mw2RjU='
    }
]

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getProduct()
            .then(result => {
                setProduct(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='product'>
            <ProductCarousel images={product} />
            <div className="product__list">
                {product.map(x => <ProductImage aos={'flip-right'} aos_offset={'100'} key={x._id} photo={x} />)}
            </div>
        </section>
    )
}

export default Product;