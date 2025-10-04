import { useState, useEffect } from "react";

export default function YourBox() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const userId = localStorage.getItem("userId");

			if (!userId) {
				setLoading(false);
				return;
			}

			try {
				const response = await fetch(`http://localhost:3000/api/users/${userId}`);

				if (!response.ok) {
					throw new Error("Failed to fetch user");
				}

				const data = await response.json();
				setUser(data.user);
			} catch (error) {
				console.error("Error fetching user:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	if (loading) return <h1>Loading...</h1>;

	return <h1>Hi, {user.username || "Guest"}, here is your box</h1>;
}
