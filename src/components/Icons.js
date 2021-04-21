import React from 'react';
import {Section} from 'react-scroll-section';
import IconItem from './IconItem';
import './Icons.css';

import PythIcon from "../images/python-brands.svg";
import UnityIcon from "../images/unity-brands.svg";
import BoltIcon from "../images/bolt-solid.svg";
import BatteryIcon from "../images/battery.svg";
import LightBulbIcon from "../images/lightbulb-regular.svg";
import MathIcon from "../images/math.svg";
import ProjectIcon from "../images/project.svg";
import DiceIcon from "../images/dice-solid.svg";

function Icons() {
	return (
		<Section id="sectionProfil" className='icons'>
			<h1> Mon Profil </h1>
			<div className='icons-container'>
				<div className='icons-line-wrapper'>
						<IconItem
							src={LightBulbIcon}
							txt="Cr&eacute;atif"
						/>
						<IconItem
							src={BatteryIcon}
							txt="Autonome"
						/>
						<IconItem
							src={BoltIcon}
							txt="Dynamique"
						/>
				</div>
				<div className= 'icons-line-wrapper'>
						<IconItem
							src={UnityIcon}
							txt="Unity"
						/>
						<IconItem
							src={ProjectIcon}
							txt="Gestion de Projet"
						/>
						<IconItem
							src={DiceIcon}
							txt="Game Design"
						/>
						<IconItem
							src={MathIcon}
							txt="Sciences Dures"
						/>
						<IconItem
							src={PythIcon}
							txt="Python"
						/>
				</div>
			</div>
		</Section>
		)
}

export default Icons