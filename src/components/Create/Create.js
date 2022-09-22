import * as photoService from '../../services/photoService';

import axios from 'axios'

import { useState } from 'react';

const Create = () => {
    const [file, setFile] = useState();
    const [caption, setCaption] = useState('');

    const onCreate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('caption', caption);
        await axios.post("http://localhost:3030/data/catalog/create", formData, { headers: {'Content-Type': 'multipart/form-data'}})

        // const image = formData.get('image');
        // const caption = formData.get('caption');

        // console.log(image, caption)
        // photoService.create({image, caption})
        //     .then(data => {
        //         console.log(data);
        //     });
    }

    return (
        <form onSubmit={onCreate} method="POST" encType='multipart/form-data'>
            <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"></input>
            <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder="caption"></input>

            <input type="submit" />
            {/* <input name='image' type="file" accept="image/*" />
            <input name='caption' type="text" placeholder="caption" />

            <input type="submit" /> */}
        </form>
    );
}

export default Create;