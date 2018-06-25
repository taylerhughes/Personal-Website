import React from 'react';
import './Hero.css';

const Hero = ({name}) => {
	return (
		<div className="text-box">
			<h1 className="introduction">{`Hello ${name},`} <span>my name is Tayler Hughes</span></h1>
			<h2 className="sub">I’m a front end developer, I sometimes design things and I’m always learning.</h2>
			<p>I’m a designer/developer with experience working on large projects. I have over 6 years experience in the web industry with 3 years in a studio environment and 3 years freelancing. I would like to move into a front end development focused role.</p>
		</div>
	)
}

export default Hero;