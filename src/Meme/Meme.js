

import React from 'react';
import './meme-style.css';
import MemeData from '../MemeData';

export default function Meme() {

    function loged() {
        const memesArr = MemeData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArr.length);
        const url = memesArr[randomNum].url;
        console.log(url);
        // It gives us random url of MemeData
    }

    return (
        <main>
            <div className='form'>
                <input
                    type='text'
                    placeholder='Top text'
                    className='form-input'
                />
                <input
                    type='text'
                    placeholder='Bottom text'
                    className='form-input'
                />
                <button 
                    className='form-button'
                    onClick={loged}
                >
                    Get a new meme image 🏞
                </button>
            </div>
        </main>
    )
}


