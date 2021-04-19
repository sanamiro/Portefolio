import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import MapARImg from '../images/MapAR.jpg';

function Cards() {
    return (
        <div className = 'cards'>
            <h1> Mes Projets </h1>
            <div className='cards-container'>
                <CardItem
                    src={MapARImg}
                    title="Orient'AR"
                    texte={<p>Atelier de d&eacute;couverte de la r&eacute;alit&eacute; virtuelle, avec comme objectif la r&eacute;alisation d&apos;une carte utilisant cette technologie.
                           Moi et mon co&eacute;quipier avons utilis&eacute; Vuforia sur Unity. <br /> <br />
                            Ayant longtemps pratiqu&eacute; la course d&apos;orientation, j&apos;ai propos&eacute; d&apos;utiliser une carte de ce sport et de cr&eacute;er une application
                            permettant d&apos;expliciter les codes de cartographie sp&eacute;cifiques utilis&eacute;s. Orient&apos;AR permet de montrer en 3D ce que
                            la carte en 2D repr&eacute;sente, et permet donc &agrave; de nouveaux venus dans ce sport de mieux comprendre et visualiser comment
                           fonctionne une carte de course d&apos;orientation.</p>}
                    linkGit="https://github.com/florian-las/MapAR"
                    linkYT = "https://google.com"
                />
                <CardItem
                    src={MapARImg}
                    title="Projet 2"
                    texte=""
                />
                <CardItem
                    src={MapARImg}
                    title="Projet 3"
                    texte=""
                />
                <CardItem
                    src={MapARImg}
                    title="Projet 4"
                    texte=""
                />
            </div>
        </div>
        )
}

export default Cards