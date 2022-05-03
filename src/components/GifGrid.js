import React, { useEffect, useState } from 'react';
import getGif from '../helpers/getGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // Postman
    // *9G&-wG)Rtw&2P&
    // HararecMG
    // hararecmedina@getDefaultNormalizer.com

    // Hooks
    const [image, setImage] = useState([]);

    // solo se renderiza una vez la función getGif
    useEffect(() => {
        getGif(category).then(img => setImage(img));
    }, [category]);
    
    return (
        <>
            <div className='card-grid'>
                <h2>{ category }</h2>
                {
                    image.map( img => (
                        <GifGridItem
                            key={ img.id }
                            // definimos al objeto promp como img
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;