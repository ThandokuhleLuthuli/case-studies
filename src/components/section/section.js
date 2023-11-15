import React from 'react';
import Tile from '../tile/tile';
import Image from '../image/image';
import { brandImages } from '../../data/datafile';
import Carousel from '../carousel/carousel';

export function SectionOne({}) {
    return (
        <section className='section'>
            <h2 className='section-title'>what we do</h2>
            <h3 className='section-headline'>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h3>
            <div className='section-container'>
                <Tile/>
            </div>

        </section>
    )
}

export function SectionCasestudies() {
    return( 
           <section className='section'>
                <h2 className='section-title'>Case Studies</h2>
                <Carousel/>
           </section>
    )
}


export function SectionBrands () {
    return (
        <section className='section'>
            <h2 className='section-title'>You’ll be in good company</h2>
            <h3 className='section-headline'>Trusted by leading brands</h3>
            <div className='section-brands'>
                <div className='section-brands-container'>
                    <Image src={brandImages.visa} mediaSet={brandImages.visa}/>
                    <Image src={brandImages.tymBank} mediaSet={brandImages.tymBank}/>
                    <Image src={brandImages.distell} mediaSet={brandImages.distell}/>
                    <Image src={brandImages.spotify} mediaSet={brandImages.spotify}/>
                    <Image src={brandImages.microsoft} mediaSet={brandImages.microsoft}/>
                </div>
                <div className='section-brands-container'>
                    <Image src={brandImages.engen} mediaSet={brandImages.engen}/>
                    <Image src={brandImages.nike} mediaSet={brandImages.nike}/>
                    <Image src={brandImages.wegro} mediaSet={brandImages.wegro}/>
                    <Image src={brandImages.multichoice} mediaSet={brandImages.multichoice}/>
                    <Image src={brandImages.picknPay} mediaSet={brandImages.picknPay}/>
                </div>
                <div className='section-brands-container'>
                    <Image src={brandImages.liquid} mediaSet={brandImages.liquid}/>
                    <Image src={brandImages.tfg} mediaSet={brandImages.tfg}/>
                    <Image src={brandImages.sanlam} mediaSet={brandImages.sanlam}/>
                    <Image src={brandImages.Santam} mediaSet={brandImages.Santam}/>
                    <Image src={brandImages.bbc} mediaSet={brandImages.bbc}/>
                </div>
            </div>
        </section>
    )
}


