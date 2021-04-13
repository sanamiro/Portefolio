import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <h1> ADVENTURE AWAITSSS</h1>
            <p> YEE YEE ! </p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    LET'S GO
                </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Not here tho <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
        )
}

export default HeroSection