import Surreal from "surrealdb.js";

const db = new Surreal("http://127.0.0.1:8000/rpc");

async function main() {
	try {
		// Signin as a namespace, database, or root user
		await db.signin({
			user: "root",
			pass: "root",
		});

		// Select a specific namespace / database
		await db.use("test", "test");

		// Create a new person with a random id
		const created = await db.create("person", {
			title: "Founder & CEO",
			name: {
				first: "Tobie",
				last: "Morgan Hitchcock",
			},
			marketing: true,
			identifier: Math.random().toString(36).substr(2, 10),
		});

		// Update a person record with a specific id
		// const updated = await db.change("person:jaime", {
		// 	marketing: true,
		// });
		// 		console.log("UPDATED: ", updated);

		// Select all people records
		const people = await db.select("person");

		// Perform a custom advanced query
		const groups = await db.query(
			"SELECT marketing, count() FROM type::table($tb) GROUP BY marketing",
			{
				tb: "person",
			},
		);
		console.log("CREATED: ", created);
		console.log("PEOPLE: ", people);
		console.log("GROUPS: ", groups);
	} catch (e) {
		console.error("ERROR", e);
	}
}

main();
