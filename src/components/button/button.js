import React from 'react';


function Button ({buttonCTA,modifer}) {
    return (
        <button className={`button button--${modifer}`}>
            {buttonCTA}
        </button>
    )
}

export default Button;