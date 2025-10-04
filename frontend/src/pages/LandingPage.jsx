import React from "react";
import "../style/LandingPage.css";
import { Link } from "react-router-dom";
import owenImg from "../assets/Owen.png";
import henryImg from "../assets/Henry.png";

const Testimonial = ({ name, role, rating, image, text }) => {
	return (
		<div className="testimonial-card">
			<div className="testimonial-header">
				<img src={image} alt={name} className="testimonial-avatar" />
				<div className="testimonial-info">
					<h3>{name}</h3>
					<p className="testimonial-role">{role}</p>
					<div className="testimonial-stars">
						{[...Array(5)].map((_, i) => (
							<span key={i} className={i < rating ? "star-filled" : "star-empty"}>
								★
							</span>
						))}
					</div>
				</div>
			</div>
			<p className="testimonial-text">{text}</p>
		</div>
	);
};

const LandingPage = () => {
	const testimonials = [
		{
			name: "Owen Sharpe",
			role: "Gym Go-er",
			rating: 5,
			image: owenImg,
			text: "I always struggled to hit my protein goals with my busy lifestyle, but Hello Gains assures I meet my goals and get huge.",
		},
		{
			name: "Henry Caldwell",
			role: "Gains merchant",
			rating: 5,
			image: henryImg,
			text: "I recommended this to all pledges going to Marino at 6am Wednesday mornings. GET HUGE!!",
		},
	];

	return (
		<div>
			<Link to="/faq">FAQ</Link>
			<div className="testimonials-container">
				{testimonials.map((t, i) => (
					<Testimonial key={i} {...t} />
				))}
			</div>
		</div>
	);
};

export default LandingPage;
