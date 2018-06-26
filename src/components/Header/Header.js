import React from 'react';
import './Header.css';
import { Row, Col } from 'react-bootstrap';

const Header = (props) => {
	return(
		<div className="header">
      <Row>
        <Col xs={12} md={6} className="logo">Tayler Hughes</Col>
        <Col xs={12} md={6} className="job-title"><p>Front End Developer  /  UI/UX Designer</p></Col>
      </Row>
      {props.children}
		</div>
	)
}

export default Header;