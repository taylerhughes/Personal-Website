import React from 'react';
import './Clients.css';
import sidekick from '../../img/sidekick.png';
import yuu from '../../img/yuu.png';
import {Row, Col} from 'react-bootstrap';

const Clients = () => {
	return (
		<Row>
			<Col xs={12} mdOffset={2} md={3} lgOffset={2} lg={3}>
				<div className="previous-client">
					<a href="http://sidekick.pro" target="_blank"><img src={sidekick} alt="Sidekick.pro Logo"/></a>
				</div>
				<p className="previous-client-roles">HTML5, CSS3, Javascript, Responsive</p>
				<p className="previous-client-desc">I was brought on to design and build the front end of a website for this startup in Canada.</p>
			</Col>
			<Col xs={12} md={3} mdOffset={2} lgOffset={2} lg={3}>
				<div className="previous-client">
					<a href="http://yuuworld.com" target="_blank"><img src={yuu} alt="YUUworld Logo"/></a>
				</div>
				<p className="previous-client-roles">HTML, CSS, Javascript, Lemonstand CMS, PHP</p>
				<p className="previous-client-desc">YUUworld was the largest project I have been involved in. Under my management the website because the first to not crash during the rapid influx of visitors from being on the BBC's Dragons Den. My role was to manage the design team, lead the front end development team and manage a third party back-end development team.</p>
			</Col>
		</Row>
	)
}

export default Clients;