import React, { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<nav className="mainNav">
			<div className="navLogo">
				<a href="/">
					<span>P</span>layer
					<span>D</span>raft
				</a>
			</div>
			<div className={click ? "menuLink mobileMenuLink" : "menuLink"}>
				<ul>
					<li>
						<a className="nav-links" href="/">
							Home
						</a>
					</li>
					<li>
						<a className="nav-links" href="/playerList">
							Player
						</a>
					</li>
					<li>
						<a className="nav-links login" href="/login">
							Login
						</a>
					</li>
				</ul>
			</div>
			<div className="hamburgerMenu" onClick={handleClick}>
				<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
		</nav>
	);
};

export default NavBar;
