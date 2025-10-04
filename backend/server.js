const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;
app.use(express.json());
const pool = new Pool({
	user: "hsalce",
	host: "localhost",
	database: "HelloGains", // Replace with actual database name
	password: "Hsalce2005", // Replace with actual password
	port: 5432,
});
app.get("/", (req, res) => {
	res.send("hello world");
});
app.get("/api/users", async (req, res) => {
	try {
		const result = await pool.query(
			"SELECT userid, username, email, age, sex, height, weight, goalid FROM users"
		);
		res.status(200).send({ users: result.rows });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "database error" });
	}
});
app.get("/api/users/:id", async (req, res) => {
	try {
		const userId = req.params.id;
		const result = await pool.query(
			"SELECT userid, username, email, age, sex, height, weight, goalid FROM users WHERE userid = $1",
			[userId]
		);
		if (result.rows.length > 0) {
			res.status(200).send({ user: result.rows[0] });
		} else {
			res.status(404).send({ message: "user not found" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "database error" });
	}
});
app.post("/api/users", async (req, res) => {
	try {
		const { username, password, email, age, sex, height, weight, goalid } = req.body;
		if (!username || !password || !email) {
			return res.status(400).send({ message: "username, password, and email required" });
		}
		const result = await pool.query(
			"INSERT INTO users (userid, username, password, email, age, sex, height, weight, goalid) VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, $6, $7, $8) RETURNING userid, username, email, age, sex, height, weight, goalid",
			[username, password, email, age, sex, height, weight, goalid]
		);
		res.status(201).send({
			newUser: result.rows[0],
			message: "successfully added new user",
		});
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "database error" });
	}
});
app.get("/api/users/emails", async (req, res) => {
	try {
		const result = await pool.query("SELECT email FROM users");
		res.status(200).send({ emails: result.rows });
	} catch (error) {
		console.error("Database error fetching emails:", error);
		res.status(500).send({ message: "database error" });
	}
});
app.listen(port, () => {
	console.log(`Express app listening at http://localhost:${port}`);
});
