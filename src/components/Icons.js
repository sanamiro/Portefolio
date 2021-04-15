import React from 'react';
import IconItem from './IconItem';
import './Icons.css';

import PythIcon from "../images/python.png";

function Icons() {
	return (
		<div className='icons'>
			<h1> Mon Profil </h1>
			<div className='icons-container'>
				<div className='icons_wrapper'>
					<ul className='icons-items'>
						<IconItem
							src={PythIcon}
							txt="Cr&eacute;atif"
						/>
						<IconItem
							src={PythIcon}
							txt="Autonome"
						/>
						<IconItem
							src={PythIcon}
							txt="Dynamique"
						/>
					</ul>
				</div>
				<div className = 'icons_wrapper'>
					<ul className='icons-items'>
						<IconItem
							src={PythIcon}
							txt="Unity"
						/>
						<IconItem
							src={PythIcon}
							txt="Gestion de Projet"
						/>
						<IconItem
							src={PythIcon}
							txt="Game Design"
						/>
						<IconItem
							src={PythIcon}
							txt="Sciences Dures"
						/>
						<IconItem
							src={PythIcon}
							txt="Python"
						/>
					</ul>
				</div>
			</div>
		</div>
		)
}

export default Icons