

import React from 'react';
import './header-style.css';
import TrollFace from '../img/troll-face.png';

export default function Header() {
    return (
        <header className='header'>
            <img src={TrollFace} alt='Troll Face' className='header-img' />
            <h2 className='header-title'>Meme Generator</h2>
            <h4 className='header-project'>React Course - Project 3</h4>
        </header>
    )
}


