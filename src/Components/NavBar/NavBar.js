import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
			<nav className="mainNav">
				<div className="navLogo">
					<a href="/">
						<span>P</span>layer
						<span> D</span>raft
					</a>
				</div>
				<div className="menuLink">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/playerList">Player</a>
						</li>
						<li>
							<a href="/login" className="login">Login</a>
						</li>
					</ul>
				</div>
			</nav>
		);
};

export default NavBar;