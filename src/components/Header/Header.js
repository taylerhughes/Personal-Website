import React from 'react';
import './Header.css';

const Header = (props) => {
	return(
		<header className="header">
			<div className="top-bar">
				<div className="logo">Tayler Hughes</div>
				<div className="job-title">Front End Developer  /  UI/UX Designer</div>
			</div>
			{props.children}
		</header>
	)
}

export default Header;