import React from 'react';
import './Clients.css';
import sidekick from '../../img/sidekick.png';
import yuu from '../../img/yuu.png';

const Clients = () => {
	return (
		<div className="grid-x">
			<div className="cell small-6 medium-6 large-3 large-offset-2">
				<div className="previous-client">
					<img src={sidekick} alt="Sidekick.pro Logo"/>
				</div>
				<p className="previous-client-roles">HTML5, CSS3, Javascript, Responsive</p>
				<p className="previous-client-desc">I was brought on to design and build the front end of a website for this startup in Canada.</p>
			</div>
			<div className="cell small-6 medium-6 large-3 large-offset-2">
				<div className="previous-client">
					<img src={yuu} alt="YUUworld Logo"/>
				</div>
				<p className="previous-client-roles">HTML, CSS, Javascript, Lemonstand CMS, PHP</p>
				<p className="previous-client-desc">YUUworld was the largest project I have been involved in. Under my management the website because the first to not crash during the rapid influx of visitors from being on the BBC's Dragons Den. My role was to manage the design team, lead the front end development team and manage a third party back-end development team.</p>
			</div>
		</div>
	)
}

export default Clients;