import React from 'react';
import { Container, Row } from "react-bootstrap";
import PlayerData from '../../PlayerData/mainFake.json';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const Home = () => {
    return (
			<section className="news-container pt-5" id="blog">
				<Container className="py-5">
					<h3 className="text-center text-lobster">
						All<span> Players</span>
					</h3>
					<Row className="mt-5">
						{PlayerData.map((player) => (
							<SinglePlayer key={player.id} player={player} />
						))}
					</Row>
				</Container>
			</section>
		);
};

export default Home;