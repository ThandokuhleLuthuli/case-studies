import React from 'react';

function Preloader() {
    return(
        <>
        <div className='preloader'>
            <p className='preloader-text'>Loading...</p>
            <span className='preloader-bar'></span>
        </div>
        </>
    )
}

export default Preloader;