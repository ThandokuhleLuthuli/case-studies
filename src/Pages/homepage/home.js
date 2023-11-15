import React from 'react';
import Menu from '../../layout/menu/menu';
import Footer from '../../layout/footer/footer';
import Hero from '../../components/hero/hero';
import { SectionOne } from '../../components/section/section';
import { SectionCasestudies } from '../../components/section/section';
import { SectionBrands } from '../../components/section/section';

function Home () {
    return(
    <>
    <Menu/>
    <Hero/>
    <main className="home">
        
        <SectionOne/>
        <SectionCasestudies/>
        <SectionBrands/>
    </main>
    <Footer/>
    </>)
}

export default Home;