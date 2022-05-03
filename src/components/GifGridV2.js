import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category);
    
    return (
        <>
            <div className='card-grid'>
                <h2>{ category }</h2>
                { loading
                    ? <h6 className='animate__animated animate__zoomIn'>Cargando</h6>
                    :images.map( img => (
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