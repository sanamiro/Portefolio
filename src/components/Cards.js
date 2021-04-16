import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <h1> Mes Projets </h1>
            <div className='cards-container'>
                <CardItem
                    src='/'
                    title="Projet 1"
                />
                <CardItem
                    src='/'
                    title="Projet 2"
                />
                <CardItem
                    src='/'
                    title="Projet 3"
                />
                <CardItem
                    src='/'
                    title="Projet 4"
                />
            </div>
        </div>
        )
}

export default Cards