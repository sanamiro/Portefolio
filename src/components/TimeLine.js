import React from 'react';
import TimeLineItem from './TimeLineItem';
import './TimeLine.css';

import TimeLineImg from "../images/TimeLineImg.png";

function TimeLine() {
    return (
        <div id="sectionParcours" className='timeline'>
            <h1> Mon Parcours </h1>

            <div className='timeline-container'>
                <div className='timeline-image-container'>
                    <img className='timeline-image'
                        src={TimeLineImg}
                        alt = "TimeLineIMG"
                    />
                </div>
                <div className='timeline-items-container'>
                    <TimeLineItem
                        titre="Mus&eacute;e D&eacute;partement D'Arles Antique"
                        date="Octobre 2020 / Avril 2021"
                        txt="Service civique en immersion avec le service M&eacute;diation du
                             mus&eacute;e. Mise en place d'espaces de d&eacute;tentes et cr&eacute;ation de
                             contenu pour les visiteurs."
                    />
                    <TimeLineItem
                        titre="7 Shapes"
                        date="D&eacute;cembre 2017 / Septembre 2020"
                        txt="Cr&eacute;ation et d&eacute;veloppement de contenu, et gestion de projet
                             pour un Serious Game sur le Lean Management.
                             (C# - Unity)"
                    />
                    <TimeLineItem
                        titre="Humans"
                        date="Juillet 2017 / Novembre 2017"
                        txt="D&eacute;veloppement de fonctionnalit&eacute;s pour une application
                             destin&eacute;e aux femmes enceintes.
                             (React Native)"
                    />
                    <TimeLineItem
                        titre="Enjmin - &Eacute;cole d'ing&eacute;nieur"
                        date="Septembre 2017 / Septembre 2020"
                        txt="Formation d'Ing&eacute;nieur en alternance, avec une sp&eacute;cialisation 
                            dans les sciences et technologies des m&eacute;dias num&eacute;riques. 
                            J'ai aussi &eacute;t&eacute; membre du BDE en 2019-2020."
                    />
                    <TimeLineItem
                        titre="Lyc&eacute;e la Martini&egrave;re Montplaisir - Classe Pr&eacute;paratoire aux Grandes &Eacute;coles"
                        date="Septembre 2015 / Juin 2017"
                        txt="Pr&eacute;paration aux concours des &eacute;coles d'ing&eacute;nieurs, 
                            en section Maths - Physique. L'option informatique
                            m'a permis de d&eacute;couvrir Python, OCaml, ainsi que SQLite."
                    />
                    <TimeLineItem
                        titre="Lyc&eacute;e Lacassagne - Baccalaur&eacute;at Scientifique"
                        date="2015"
                        txt="Baccalaur&eacute;at Scientifique (mention bien) avec sp&eacute; Maths, 
                             section Europ&eacute;enne Anglais ainsi qu'une option en Arts Plastique."
                    />
                </div>
            </div>
        </div>
        )
}


export default TimeLine