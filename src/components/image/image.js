import React from 'react';


 function Image({mediaSet,src,alt}) {
     return (
        <>
        <picture className='image-wrapper'>
            <source media='(min-width:300px)' srcSet={mediaSet}/>
            <img className='image' src={src} alt={alt}/>
        </picture>
        </>
     )
}

export default Image;