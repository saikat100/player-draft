import React from 'react';
import { Col } from "react-bootstrap";
import './SinglePlayer.css';

const SinglePlayer = ({ player: { name, picture, country, icon, salary }}) => {
	return (
		<Col md={4} className="p-2">
			<div className="player-card">
				<div className="player-content">
					<div>
						<img src={picture} alt={picture} className="img-fluid player-img" />
					</div>
					<div className="p-4">
						<h5 className="text-dark">
							{name} <img className="player-icon" src={icon} alt="icon" />
						</h5>
						<p className="text-dark">{country}</p>
					</div>
					<div className="p-1 d-inline-flex">
						<h5 className="text-dark">Salary: $ {salary}</h5>
						{/* <a href="#">Button</a> */}
					</div>
				</div>
			</div>
		</Col>
	);
};

export default SinglePlayer;