import React from "react";
// import Social from "../Social/Social";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer">
			<br />
			<small>
				Designed & Build by{" "}
				<a href="mailto:saikathossen3@gmail.com" style={{ color: "red" }}>
					Saikat Hossain
				</a>
			</small>{" "}
			<br />
			<small>
				{new Date().getFullYear()} &copy; copyright | Saikat
			</small> <br /> <br />
			<div>
				<h1 class="icon-style-footer">
					<div className="social-media">
						<a
							href="https://github.com/saikat100"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/saikat-in/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://medium.com/@saikat-hossain"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-medium"></i>
						</a>
						<a
							href="mailto:saikathossen3@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<i className="far fa-envelope"></i>
						</a>
						<a
							href="https://www.facebook.com/HashTagSaikat/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-facebook"></i>
						</a>
					</div>
				</h1>
			</div>
		</div>
	);
};

export default Footer;
