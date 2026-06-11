const { MongoClient } = require("mongodb");
const fs = require("fs");

const url = "mongodb://localhost:27017";
const data = JSON.parse(fs.readFileSync("data.json"));

const client = new MongoClient(url);

client.connect().then(() => {
    const db = client.db("pqrs");
    const col = db.collection("transactions");

    col.insertMany(data).then(() => {
        console.log("Inserted Successfully");
        client.close();
    });
});