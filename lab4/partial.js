const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
client.connect().then(() => {
    const db = client.db("pqrs");
    const col = db.collection("transactions");
    col.find({
        name: { $regex: "Ali", $options: "i" }
    }).toArray().then((data) => {
        console.log(data);
        client.close();
    });
});