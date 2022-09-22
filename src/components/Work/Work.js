import { useState, useEffect } from "react";

import * as photoService from '../../services/photoService';

import WorkImage from "./WorkImage";

const Work = () => {
    const [work, setWork] = useState([]);

    useEffect(() => {
        photoService.getWork()
            .then(result => {
                setWork(result);
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    console.log('work', work);

    return (
        <>
            {work.map(x => <WorkImage key={x._id} imageUrl={x} />)}
        </>
    )
}

export default Work;