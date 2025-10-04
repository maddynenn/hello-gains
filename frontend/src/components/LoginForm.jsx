import React, { useState } from "react";
import "../style/LoginForm.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Logging in with:", { email, password });
	
		try {
			const response = await fetch(`http://localhost:3000/api/users`);
			const data = await response.json(); // Parse JSON from response
			
			const user = data.users.find(u => u.email === email);
			const userid = user ? user.userid : null;
			
			if (userid) {
				localStorage.setItem("userId", userid);
				navigate("/onboarding");
			} else {
				alert("User not found");
			}
		} catch (error) {
			console.error("Error fetching users:", error);
			alert("Failed to login. Please try again.");
		}
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<h2 className="login-title">Welcome Back</h2>

				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
					required
				/>

				<div className="login-options">
					<label>
						<input type="checkbox" /> Remember me
					</label>
					<a href="#forgot" className="forgot-link">
						Forgot password?
					</a>
				</div>

				<button type="submit" className="login-button">
					Sign In
				</button>

				<p className="signup-text">
					Don’t have an account? <a href="#signup">Sign up</a>
				</p>
			</form>
		</div>
	);
}
