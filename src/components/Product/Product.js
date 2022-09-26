import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import ProductImage from "./ProductImage";

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Aos.init();
        photoService.getProduct()
            .then(result => {
                setProduct(result);
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    console.log('work', product);

    return (
        <div className="product__list">
            {product.map(x => <ProductImage aos={'flip-right'} aos_offset={'100'} key={x._id} photo={x} />)}
        </div>
    )
}

export default Product;