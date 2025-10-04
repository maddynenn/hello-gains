import { useState, useEffect } from "react";
import "../style/YourBox.css";
import shoe from "../assets/Owen.png";
import chocolateShake from "../assets/chocolate.jpeg";
import nuttyDrink from "../assets/nuts.jpg";
import sodas from "../assets/sodas.webp";
import strawberryShake from "../assets/strawberry.jpeg";
import cow from "../assets/cow.webp";
import ob from "../assets/offbrand.jpeg";
import iv from "../assets/iv.jpg";

export default function YourBox() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const baseProducts = [
		{
		  name: "Owen Sharpe",
		  protein: 150000,
		  calories: 30000,
		  image: shoe,
		},
		{
		  name: "Chocolate Box",
		  protein: 750,
		  calories: 80,
		  image: chocolateShake,
		},
		{
		  name: "Nutmeg Box",
		  protein: 870,
		  calories: 105,
		  image: nuttyDrink,
		},
		{
		  name: "Carbonation Vacation",
		  protein: 50,
		  calories: 28,
		  image: sodas,
		},
		{
		  name: "Strawberry Blast",
		  protein: 1030,
		  calories: 62,
		  image: strawberryShake,
		},
		{
			name: "Raw Cow",
			protein: 500000,
			calories: 85000,
			image: cow,
		},
		{
			name: "Protein Chips",
			protein: 150,
			calories: 2,
			image: ob,
		},
		{
			name: "IV Dining Hall Swipe",
			protein: 670,
			calories: 22,
			image: iv,
		}
	  ];

	  const shuffleWithSeed = (array, seed) => {
		return [...array].sort((a, b) => {
		  const hash = (str) => {
			let h = seed;
			for (let i = 0; i < str.length; i++) {
			  h = Math.imul(31, h) + str.charCodeAt(i) | 0;
			}
			return h;
		  };
		  return hash(JSON.stringify(a)) - hash(JSON.stringify(b));
		});
	  };
	  
	  const products = shuffleWithSeed(baseProducts, user.userid || 1).slice(0, 5);

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

	return (
		<div className="product-page">
			<h1 className="page-title">Hi, {user.username || "Guest"}, here is your box</h1>

			<div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <img src={p.image} alt={p.name} className="product-img" />
            <h2 className="product-name">{p.name}</h2>
            <p>Calories</p>
            <p className="product-protein">{p.protein}</p>
            <p>Protein</p>
            <p className="product-protein">{p.calories}g</p>
          </div>
        ))}
      </div>
		</div>
	);
}