import React from 'react';
import { Link } from 'react-router-dom';

import DriveLogo from '../images/google-drive.svg';
import YTLogo from '../images/youtube.svg';
import GitLogo from '../images/github.svg';
import ItchIoLogo from '../images/itch-io.svg';

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
                            className="cards-item-img" />
                    </figure>  
                    <div className="cards-item-txt"> {props.texte} </div>
                    <div className="cards-item-links">
                        {props.linkGit != null && <a href={props.linkGit} target="_blank" rel="noopener noreferrer">
                            <button className="cards-item-link-button"> <img src={GitLogo} /> </button>
                        </a>
                        }
                        {props.linkYT != null && <a href={props.linkYT} target="_blank" rel="noopener noreferrer">
                            <button className="cards-item-link-button"> <img src={YTLogo}/> </button>
                        </a>
                        }
                        {props.linkDrive != null && <a href={props.linkDrive} target="_blank" rel="noopener noreferrer">
                            <button className="cards-item-link-button"> <img src={DriveLogo} /> </button>
                        </a>
                        }
                        {props.linkItch != null && <a href={props.linkItch} target="_blank" rel="noopener noreferrer">
                            <button className="cards-item-link-button"> <img src={ItchIoLogo} /> </button>
                        </a>
                        }
                    </div>
                </div>
            </li>
        </>
        )
}

export default CardItem