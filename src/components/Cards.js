import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import MapARImg from '../images/MapAR.jpg';
import HotTLineImg from '../images/HotTLine.png';
import MinicraftImg from '../images/Minicraft.png';
import PodraceVRImg from '../images/PodRacer.png';
import ChipsRoyaleImg from '../images/ChipsRoyale.jpg';
import BreadAndGamesImg from '../images/BreadAndGames.png';
import InfiltraSon from '../images/InfiltraSon.png';

function Cards() {
    return (
        <div className='cards' id="sectionProjets">
            <h1> Mes Projets </h1>
            <div className='cards-container'>
                <CardItem
                    src={BreadAndGamesImg}
                    title="Bread and Games"
                    texte={<p>
                        R&eacute;alis&eacute; lors d&apos;une game jam (Ludum Dare 44), c&apos;est &agrave; dire en l&apos;espace d&apos;un weekend et suivant le th&egrave;me
                        &apos;Your Life is Currency&apos; avec une &eacute;quipe d&apos;environ 6 personnes.<br /> <br />
                        Dans Gladiator, le joueur doit gagner sa libert&eacute; en r&eacute;unissant assez d&apos;argent au cours de combats de gladiateurs. 
                        Entre chaque combat, il doit choisir entre se soigner, acheter de meilleurs &eacute;quipements ou &eacute;conomiser pour sa libert&eacute;. 
                        J&apos;ai particip&eacute; au game design en d&eacute;but de jam et me suis ensuite concentr&eacute; sur le d&eacute;veloppement du jeu (dev sur Unity en C#).
                    </p>}
                    linkItch="https://theodull.itch.io/bread-and-games"
                    linkGit="https://github.com/sanamiro/LDGladiator"
                    linkYT="https://google.com"
                />
                <CardItem
                    src={ChipsRoyaleImg}
                    title="Chips Royale"
                    texte={<p>
                        R&eacute;alis&eacute; lors d&apos;une game jam (Enjam 2019), c&apos;est-&agrave;-dire en l&apos;espace d&apos;un weekend.
                        Le th&egrave;me &eacute;tait &apos;Party like there&apos;s no tomorrow&apos;.<br /> <br />
                        Chips Royale reprend les codes du Battle Royale et du Party game dans un jeu multijoueur local :
                        les joueurs jouent chacun une chips cherchant &agrave; survivre le plus longtemps possible durant un ap&eacute;ro.
                        Des taches de sauces viennent les ralentir, et des mains tombant du ciel cherchent &agrave; les attraper.
                        J&apos;ai principalement travaill&eacute; sur le code du jeu, notamment ce qui est du d&eacute;placement des joueurs,
                        l&apos;int&eacute;gration du multijoueur et des FX, l&apos;interface,...
                        </p>}
                    linkItch="https://yesa.itch.io/chips-royale"
                    linkGit="https://github.com/sanamiro/ChipsRoyale"
                    linkYT="https://google.com"
                />
                <CardItem
                    src={MapARImg}
                    title="7 Shapes"
                    texte={<p>
                        Durant mes 3 ann&eacute;es d&apos;alternance chez 7 Shapes, j&apos;ai pu travailler sur de nombreux projets,
                        dans le but d&apos;am&eacute;liorer le jeu ou de r&eacute;pondre au besoin d&apos;un client. J&apos;ai par exemple con&ccedil;u et cod&eacute;
                        la quasi-int&eacute;gralit&eacute; des niveaux-le&ccedil;ons du jeu. J&apos;ai aussi particip&eacute; &agrave; la r&eacute;alisation
                        des diff&eacute;rents mini-jeux disponibles, g&eacute;n&eacute;ralement au niveau du code et du d&eacute;bogage
                        et toujours au niveau du game design.
                        </p>}
                    linkYT="https://www.youtube.com/watch?v=8hRN-HrpQKo"
                />
                <CardItem
                    src={PodraceVRImg}
                    title="PodraceVR"
                    texte={<p>
                        Jeu en R&eacute;alit&eacute; Virtuel, r&eacute;alis&eacute; en &eacute;quipe de 6, sur Unity. <br /> <br />
                        Le joueur cherche &agrave; &eacute;chapper &agrave; une tornade de sable &agrave; bord d&apos;un podracer.
                        Il peut tourner, freiner et acc&eacute;l&eacute;rer facilement, mais doit faire attention aux obstacles et &agrave; la surchauffe.
                        J&apos;ai principalement travaill&eacute; sur le game design ainsi que sur l&apos;UI du projet.
                    </p>}
                    linkGit="https://github.com/seazth/podrace_vr"
                    linkYT="https://www.youtube.com/watch?v=sPc-93RiMtg"
                />
                <CardItem
                    src={MapARImg}
                    title="LabyRush"
                    texte={<p>Projet de premi&egrave;re ann&eacute;e &agrave; l&apos;Enjmin : r&eacute;alisation d&apos;un jeu multijoueur en ligne, par &eacute;quipe de 5.
                        Cr&eacute;&eacute; sur Unity (C#) en utilisant le plug-in Photon.<br /> <br />
                        Dans LabyRush, les joueurs font la course dans un labyrinthe g&eacute;n&eacute;r&eacute; al&eacute;atoirement.
                        Des pouvoirs peuvent &ecirc;tre r&eacute;cup&eacute;r&eacute;s et utilis&eacute;s pour modifier l&apos;environnement et pi&eacute;ger ses adversaires. 
                        La conception du jeu s&apos;est faite en groupe, et j&apos;ai &eacute;t&eacute; principalement charg&eacute; de la g&eacute;n&eacute;ration du labyrinthe.
                        </p>}
                    linkDrive="https://drive.google.com/file/d/1O9l4FZzT8Y6t_Cjord1Z47ov3I7bYVd3/view?usp=sharing"
                    linkGit="https://github.com/tomatopp1/LabyRush"
                    linkYT="https://google.com"
                />
                <CardItem
                    src={HotTLineImg}
                    title="Hot-T-Line"
                    texte={<p>
                        Jeu r&eacute;alis&eacute; en 2 jours en &eacute;quipe de 5, lors d&apos;un atelier centr&eacute; sur l&apos;al&eacute;atoire.
                        Cod&eacute; en C# sur Unity.<br /> <br />
                        Hot-T-Line est un jeu de tir nerveux en multijoueur local. Les joueurs s&apos;affrontent
                        dans un environnement 0 Gravit&eacute;, o&ugrave; les armes sont donc &agrave; la fois un moyen de se d&eacute;placer 
                        et d&apos;&eacute;liminer l&apos;adversaire. Les cartes sont g&eacute;n&eacute;r&eacute;es al&eacute;atoirement. J&apos;ai &eacute;t&eacute; moteur sur le
                        Game Design du jeu ainsi que charg&eacute; de coder une partie de l&apos;UI ainsi que du Gameplay.
                    </p>}
                    linkDrive="https://drive.google.com/file/d/1Y8raBplYRlhwmz1lBB1XUxLxwr4jESMN/view?usp=sharing"
                    linkGit="https://github.com/sanamiro/Hot-T-Line"
                    linkYT="https://youtu.be/uMmcI794s7U"
                />
                <CardItem
                    src={MinicraftImg}
                    title="Minicraft"
                    texte={<p>
                        Atelier centr&eacute; sur les shaders, la r&eacute;alisation d&apos;un moteur de jeu ainsi que sur l&apos;al&eacute;atoire (Perlin).
                        Customisation d&apos;un moteur de jeu fourni par l&apos;intervenant sur OpenGL (C++).<br /> <br />
                        R&eacute;alisation en quelques jours d&apos;un g&eacute;n&eacute;rateur de monde type Minecraft. Ont &eacute;t&eacute; cod&eacute;s, &agrave; partir du
                        moteur de jeu fourni : la cam&eacute;ra et son d&eacute;placement, le cycle jour / nuit, la g&eacute;n&eacute;ration d&apos;un monde
                        al&eacute;atoire avec cavernes, &eacute;tangs, arbres, montagnes,... mais aussi le d&eacute;placement du joueur dans le monde.
                    </p>}
                    linkGit="https://google.com"
                />
                <CardItem
                    src={InfiltraSon}
                    title="InfiltraSon"
                    texte={<p>
                        Atelier de deux jours centr&eacute; sur le son et son utilisation dans les jeux vid&eacute;o.
                        Nous avions environ 8h pour r&eacute;aliser un jeu compatible avec un public aveugle ou malvoyant, par &eacute;quipe de 2.<br /> <br />
                        InfiltraSon est un jeu en multijoueur local, qui se joue &agrave; 2. L&apos;un des joueurs est un voleur
                        s&apos;introduisant discr&egrave;tement dans un b&acirc;timent, tandis que l&apos;autre joueur d&eacute;fend la maison &agrave; l&apos;aide de robots t&eacute;l&eacute;guid&eacute;s.
                        Tous deux ne peuvent s&apos;appuyer que sur du son pour r&eacute;aliser leurs objectifs. Le jeu a &eacute;t&eacute; r&eacute;alis&eacute; sur Unity (C#).
                    </p>}
                    linkDrive="https://drive.google.com/file/d/1W2dPJiiCK2iEVycq3_beJQZGI7ZWICZU/view?usp=sharing"
                    linkGit="https://github.com/sanamiro/InfiltraSon"
                />
                <CardItem
                    src={MapARImg}
                    title="Orient'AR"
                    texte={<p>Atelier de d&eacute;couverte de la r&eacute;alit&eacute; virtuelle, avec comme objectif la r&eacute;alisation d&apos;une carte utilisant cette technologie.
                           Moi et mon co&eacute;quipier avons utilis&eacute; Vuforia sur Unity. <br /> <br />
                            Ayant longtemps pratiqu&eacute; la course d&apos;orientation, j&apos;ai propos&eacute; d&apos;utiliser une carte de ce sport et de cr&eacute;er une application
                            permettant d&apos;expliciter les codes de cartographie sp&eacute;cifiques utilis&eacute;s. Orient&apos;AR permet de montrer en 3D ce que
                            la carte en 2D repr&eacute;sente, et permet donc &agrave; de nouveaux venus dans ce sport de mieux comprendre et visualiser comment
                           fonctionne une carte de course d&apos;orientation.</p>}
                    linkDrive= "https://drive.google.com/file/d/1cvw1S3vtmL8n2_VchFeg8GxZOpTktcGp/view?usp=sharing"
                    linkGit="https://github.com/florian-las/MapAR"
                    linkYT="https://google.com"
                />
                <CardItem
                    src={MapARImg}
                    title="Joute"
                    texte={<p>
                        Projet personnel : Joute est un jeu de soci&eacute;t&eacute; inspir&eacute; par des titres comme Boss Monster ou Epic Spell Wars.
                        J&apos;ai cr&eacute;&eacute; l&apos;ensemble des r&egrave;gles et cartes du jeu. Une maquette est en cours de test afin d&apos;am&eacute;liorer certains
                        aspects du gameplay, et je souhaite proposer ce jeu &agrave; des &eacute;diteurs lorsque j&apos;en serais satisfait.
                        </p>}
                />
            </div>
        </div>
        )
}

export default Cards