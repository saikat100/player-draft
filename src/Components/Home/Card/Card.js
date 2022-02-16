import React from "react";
import "./Card.css";
const Card = (props) => {
    console.log(props);
    const {addedPlayer} = props;
    let totalSalary = 0;
    for (const player of addedPlayer) {
			totalSalary = totalSalary + player.salary;
		}

	return (
		<div>
			<p>No. of players added: {props.addedPlayer.length}</p>
			<p>Total Salary: {totalSalary}</p>
			<p>Added Player List:</p>
			<p>
				{addedPlayer
					.filter((player) => player)
					.map((filteredPlayer) => (
						<li>
							<img
								className="added-player-img m-1"
								src={filteredPlayer.picture}
								alt="added-player-img"
							/>
							{filteredPlayer.name}
						</li>
					))}
			</p>
		</div>
	);
};

export default Card;