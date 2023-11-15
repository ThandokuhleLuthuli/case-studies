import React from 'react';
import logo from '../../assets/images/logo.svg'
import Button from '../../components/button/button';
import Image from '../../components/image/image';
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';

function Menu() {
    return (
        <header className='menu'>
            <nav className='menu-inner'>
                <a className='menu-brand' href='#'><Image src={logo} mediaSet={logo}/></a>
                <ul className='menu-inner-container'>
                    <li className='menu-item'><a className='menu-item-link'>Services</a></li>
                    <li className='menu-item'><a className='menu-item-link'>Industries</a></li>
                    <li className='menu-item'><a className='menu-item-link'>Cases</a></li>
                    <li className='menu-item'><a className='menu-item-link'>Contact</a></li>
                </ul>
                <a className='menu-button'><Button modifer="secondary" buttonCTA="lets talk"/></a>
            </nav>
            
        </header>
    )
}

export default Menu;