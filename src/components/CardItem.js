import React from 'react';

function CardItem(props) {

    return (
        <>
            <li className="cards-item">
                <div className="cards-item-wrapper">
                    <div className="cards-item-header">
                        <h5 className="cards-item-title">{props.title}</h5>
                    </div>
                    <figure className="cards-item-pic-wrap">
                        <img src={props.src} alt="Travel Img"
                            className = "cards-item-img"/>
                    </figure>  
                </div>
            </li>
        </>
        )
}

export default CardItem