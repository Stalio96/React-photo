import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';
import { useAuthContext } from '../../contexts/AuthContext';

import ProductCarousel from './ProductCarousel';
import ProductImage from "./ProductImage";

const Product = () => {
    const { user } = useAuthContext();
    const [product, setProduct] = useState([]);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getPortraitCarousel()
            .then(result => {
                setCarousel(result);
            }).catch(err => {
                console.log(err);
            })

        photoService.getProduct()
            .then(result => {
                setProduct(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='product'>
            <ProductCarousel images={carousel} user={user} />
            <div className="product__list">
                {product.map(x => <ProductImage aos={'flip-right'} aos_offset={'100'} key={x._id} photo={x} user={user} />)}
            </div>
        </section>
    )
}

export default Product;