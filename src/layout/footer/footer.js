import React from 'react';

function Footer() {
    return(
        <footer className='footer'>
           <div className='footer-container'>
                <h2 className='footer-title'>Contact us</h2>
                <div className='footer-row'>
                    <div className='footer-column'>
                        <h1 className='footer-headline'>
                        Have a project in mind? Let's make it happen
                        </h1>
                    </div>
                    <div className='footer-column footer-column--right'>
                        <p className='footer-copy'>22 Street Name, Suburb, 8000,Cape Town, South Africa +27 21 431 0001 <u>enquirie@website.co.za</u></p>
                    </div>
                </div>
                <div className='footer-row'>
                    <div className='footer-column'>
                    <div className='footer-column-inner'>
                        <ul className='footer-column-list'>
                            <li className='footer-column-list-item'>Terms of service</li>
                            <li className='footer-column-list-item'>Privacy policy</li>
                            <li className='footer-column-list-item'>Impressum</li>
                        </ul>

                        <ul className='footer-column-list'>
                            <li className='footer-column-list-item'>Facebook</li>
                            <li className='footer-column-list-item'>Instagram</li>
                            <li className='footer-column-list-item'>Twitter</li>
                        </ul>

                        <ul className='footer-column-list'>
                            <li className='footer-column-list-item'>Github</li>
                            <li className='footer-column-list-item'>Linkedin</li>
                            <li className='footer-column-list-item'>Teams</li>
                        </ul>

                        <ul className='footer-column-list'>
                            <li className='footer-column-list-item'>Youtube</li>
                            <li className='footer-column-list-item'>Behance</li>
                            <li className='footer-column-list-item'>Dribbble</li>
                        </ul>
                    </div>

                    </div>
                    <div className='footer-column footer-column--right'>
                        <p className='footer-copy'>Explore open jobs</p>
                        <p className='footer-copy '>©2000—2023 Company Name</p>
                    </div>
                </div>
           </div>
        </footer>
    )
}


export default Footer;