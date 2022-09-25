import axios from 'axios'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

            await axios.post("http://localhost:3030/api/catalog/createRealEstate", formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/');
        } else if (caption == 'Portrait') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post("http://localhost:3030/api/catalog/createPortrait", formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/portrait');
        } else if (caption == 'Product') {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('caption', caption);

            await axios.post("http://localhost:3030/api/catalog/createProduct", formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            navigate('/product');
        }
    }

    return (
        <form onSubmit={onCreate} method="POST" encType='multipart/form-data'>
            <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"></input>
            <select name='caption' value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder="caption">
                <option value="Real Estate">Real Estate</option>
                <option value="Portrait">Portrait</option>
                <option value="Product">Product</option>
            </select>

            <input type="submit" />
        </form>
    );
}

export default Create;