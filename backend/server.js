const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
];

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/api/users", (req, res) => {
	res.status(200).send({ users: users });
});

app.get("/api/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);

	let user;
	for (u in users) {
		if (users[u].id === userId) {
			user = users[u];
		}
	}

	if (user) {
		res.status(200).send({ user: user });
	} else {
		res.status(404).send({ message: "user with that id not found" });
	}
});

app.post("/api/users", (req, res) => {
	const newUser = req.body;
	if (!newUser) {
		res.status(400).send({ message: "need to post a user" });
	}

	users.push(newUser);
	newUser.id = users.length + 1;
	res.status(201).send({ newUser: newUser, message: "successfully added new user" });
});

app.listen(port, () => {
	console.log(`Express app listening at http://localhost:${port}`);
});
