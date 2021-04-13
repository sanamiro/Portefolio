import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <h1> i like bagels and donuts </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text="Explore some stuffie stuff down in the Amazon Jungle"
                            label='Adventure'
                            path = '/Services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text="Have a bad time at a horrible hotel"
                            label='NotAdventure'
                            path='/Services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text="Explore some stuffie stuff down in the Amazon Jungle"
                            label='Adventure'
                            path='/Services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text="Have a bad time at a horrible hotel"
                            label='NotAdventure'
                            path='/Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
        )
}

export default Cards