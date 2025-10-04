import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

export default function NavBar() {
	return (
		<nav className="navbar">
			<div className="nav-container">
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
					<li>
						<Link to="/your-box">Your Box</Link>
					</li>
					<li>
						<Link to="/login" className="login-btn">
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
