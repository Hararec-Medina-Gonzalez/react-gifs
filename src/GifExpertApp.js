import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGridV2 from './components/GifGridV2';
// import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {
    // los Hoocks sirven para mutar el estado de alguna variable
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // Handlers
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <div>
                {/* cuando se renderiza un array automaticamente genera el salto de línea en el html */}
                {categories.map(category => 
                    <GifGridV2 
                        category={ category }
                        key={ category }
                    />
                )}
            </div>
        </>
    );
};

export default GifExpertApp
// el snipet es rafc