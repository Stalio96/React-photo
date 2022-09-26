import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import ProductImage from "./ProductImage";

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
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
            {product.map(x => <ProductImage key={x._id} photo={x} />)}
        </div>
    )
}

export default Product;