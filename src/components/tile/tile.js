import React from 'react';
import { tileOptions } from '../../data/datafile';
import Image from '../image/image';

function Tile () {
   
     return (
        <>
        {
            tileOptions.map((tile,index) => (
                <div className='tile' key={index}>
                    <div className='tile-container'>
                        <Image src={tile.tileImage}/>
                        <h3 className='tile-title'>{tile.tileTitle}</h3>
                        <p className='tile-copy'>{tile.titleCopy}</p> 
                    </div>
                </div>
            ))

        }
        </>
     )
}

export default Tile;