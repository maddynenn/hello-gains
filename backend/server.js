const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { Pool } = require("pg");

app.use(cors());
app.use(express.json());

const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
];

const pool = new Pool({
	user: "hsalce",
	host: "localhost",
	database: "hello-gains.sql",
	password: "Hsalce2005",
	port: 3000,
});

app.get("/api/users", async (req, res) => {
	const result = await pool.query(
		"SELECT userid, username, email, age, sex, height, weight, goalid FROM users"
	);
	res.status(200).send({ users: result.rows });
});
app.get("/api/users/:id", async (req, res) => {
	const userId = req.params.id; // string, not parseInt
	const result = await pool.query(
		"SELECT userid, username, email, age, sex, height, weight, goalid FROM users WHERE userid = $1",
		[userId]
	);
	if (result.rows.length > 0) {
		res.status(200).send({ user: result.rows[0] });
	} else {
		res.status(404).send({ message: "user not found" });
	}
});
app.post("/api/users", async (req, res) => {
	const { username, password, email, age, sex, height, weight, goalid } = req.body;
	if (!username || !password || !email) {
		return res.status(400).send({ message: "username, password, email required" });
	}
	const result = await pool.query(
		"INSERT INTO users (userid, username, password, email, age, sex, height, weight, goalid) VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, $6, $7, $8) RETURNING userid, username, email",
		[username, password, email, age, sex, height, weight, goalid]
	);
	res.status(201).send({ newUser: result.rows[0] });
});

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
