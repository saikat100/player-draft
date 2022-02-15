import React from 'react';
import { Row, Col } from "react-bootstrap";
import PlayerData from '../../PlayerData/mainFake.json';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import "./Home.css";

const Home = () => {
    return (
			<section className="d-flex">
				<Row className="p-5">
					<h3 className="text-center">All Players</h3>
					{PlayerData.map((player) => (
						<SinglePlayer key={player.id} player={player} />
					))}
				</Row>
				<Col className="p-5 added-section">
					<h3 className="text-center">
						Added<span className="added-player-span">Players</span>
					</h3>
					<p>No. of players added: 5</p>
					<p>
						<img
							className="added-player-img m-1"
							src="https://i.ibb.co/ydN84p2/Shakib.png"
							alt="added-player-img"
						/>
						Sakib Al Hasan : $ 5000
					</p>
				</Col>
			</section>
		);
};

export default Home;