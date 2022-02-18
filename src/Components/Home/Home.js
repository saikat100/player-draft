import React, {useState} from 'react';
import { Row, Col } from "react-bootstrap";
import PlayerData from '../../PlayerData/mainFake.json';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import Card from './Card/Card';
import "./Home.css";

const Home = () => {
	const [addedPlayer, setAddedPlayer] = useState([])
	const handleAddedPlayer = (player) => {
		const newAddedPlayer = [...addedPlayer, player];
		setAddedPlayer(newAddedPlayer);
	 }
    return (
			<section className="d-flex">
				<Row className="p-5">
					<h4 className="text-center all-player-heading">All Players</h4>
					{PlayerData.map((player) => (
						<SinglePlayer
							key={player.id}
							player={player}
							handleAddedPlayer={handleAddedPlayer}
						/>
					))}
				</Row>
				<Col className="added-section">
					<h4 className="text-center text-danger added-player-heading">
						Added<span className="added-player-span">Players</span>
					</h4>
					<Card key={addedPlayer.id} addedPlayer={addedPlayer}></Card>
				</Col>
			</section>
		);
};

export default Home;