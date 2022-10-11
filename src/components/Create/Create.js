import axios from 'axios'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://guarded-inlet-03061.herokuapp.com';

const Create = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [caption, setCaption] = useState('');

    const onCreate = async (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const caption = data.get('caption');

        if (caption == 'Real Estate') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post(`${baseUrl}/api/catalog/createRealEstate`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/');
        } else if (caption == 'Real Estate-carousel') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post(`${baseUrl}/api/catalog/createRealEstateCarousel`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/');
        } else if (caption == 'Portrait') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post(`${baseUrl}/api/catalog/createPortrait`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/portrait');
        } else if (caption == 'Portrait-carousel') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post(`${baseUrl}/api/catalog/createPortraitCarousel`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/portrait');
        } else if (caption == 'Product') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post(`${baseUrl}/api/catalog/createProduct`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/product');
        } else if (caption == 'Product-carousel') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post(`${baseUrl}/api/catalog/createProductCarousel`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/product');
        }
    }

    return (
        <form onSubmit={onCreate} method="POST" encType='multipart/form-data'>
            <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"></input>
            <select name='caption' value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder="caption">
                <option value="Real Estate">Real Estate</option>
                <option value="Real Estate-carousel">Real Estate-carousel</option>
                <option value="Portrait">Portrait</option>
                <option value="Portrait-carousel">Portrait-carousel</option>
                <option value="Product">Product</option>
                <option value="Product-carousel">Product-carousel</option>
            </select>

            <input type="submit" />
        </form>
    );
}

export default Create;