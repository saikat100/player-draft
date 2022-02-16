import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import './SinglePlayer.css';

const SinglePlayer = (props) => {
	const [disable, setDisable] = useState(false);
	const { name, picture, country, icon, salary } = props.player;
	return (
		<Col md="auto" className="player-card m-2 p-2">
			<img className="player-img" src={picture} alt="" />
			<h5 className="text-center">
				{name}
				<img className="player-icon" src={icon} alt="" />
			</h5>
			<p className="text-center">country: {country}</p>
			<div className="d-flex">
				<h6 className="salary">Salary: $ {salary}</h6>
				<Button
					variant="danger"
					disabled={disable}
					onClick={() =>
						props.handleAddedPlayer(props.player) & setDisable(true)
					}
				>
					<i className="fa fa-plus solid fa-user-plus"></i> Add Player
				</Button>
			</div>
		</Col>
	);
};

export default SinglePlayer;