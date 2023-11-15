import React from 'react';
import { heroOptions } from '../../data/datafile';
import Button from '../button/button';

function Hero () {
    return (
        <section className='hero'>
             <div className='hero-container'>  
                <div className='hero-container-inner'>
                    <h1 className='hero-headline'>{heroOptions.heroHeadline}</h1>
                    <p className='hero-copy'>{heroOptions.heroCopy}</p>
                    <Button modifer="primary" buttonCTA={heroOptions.heroCta}/>
                </div>
            </div> 
        
        </section>
    )
}

export default Hero;