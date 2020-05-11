import React from 'react';

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <p>&copy; 2020 Todos os direitos reservados</p>
                <ul className="redes-sociais">
                    <li><a href="#"><img src={require('../../assets/images/facebook.svg')} /></a></li>
                    <li><a href="#"><img src={require('../../assets/images/whatsapp.svg')} /></a></li>
                    <li><a href="#"><img src={require('../../assets/images/linkedin.svg')} /></a></li>
                </ul>
            </div>       
        </footer>
    )
}

export default Footer;