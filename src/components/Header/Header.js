import React from 'react';
import './Header.css';
import TinderLogo from '../../assets/TinderLogo.png';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';


function Header() {
	return (
		<div className="header">
			<IconButton>
				<PeopleIcon className="header__icon" fontSize="large" />
			</IconButton>
			<img 
				className="header__logo"
				src={TinderLogo}
				alt="tinder logo"
			/>
			<IconButton>
				<ForumIcon className="header__icon" fontSize="large"  />
			</IconButton>
		</div>
	);
}

export default Header;
