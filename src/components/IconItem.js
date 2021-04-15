import React from 'react';

function IconItem(props) {
    return (
        <>
            <li className='icon-item'>
                <div className='icon-wrapper'>
                    <figure className='icon-img-wrapper'>
                        <img src={props.src}
                            alt='desc-icon'
                            className='icon-item-img' />
                        <h3 className='icon-item-txt'> {props.txt} </h3>
                    </figure>
                </div>
            </li>
        </>
        )
}

export default IconItem