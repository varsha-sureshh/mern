const { MongoClient } = require("mongodb");
const fs = require("fs");

(async () => {
  const c = new MongoClient("mongodb://localhost:27017");
  await c.connect();

  const col = c.db("user_managed").collection("transactions");

  await col.drop().catch(() => {});
  console.log("Collection transactions dropped successfully (if it existed).");

  let r = await col.insertMany(JSON.parse(fs.readFileSync("transactions.json")));
  console.log(`Inserted ${r.insertedCount} records into transactions.`);

  for (let d of JSON.parse(fs.readFileSync("transactions_upsert.json")))
    await col.updateOne({ _id: d._id }, { $set: d }, { upsert: true });

  console.log("Upserted records from transactions_upsert.json.");

  await c.close();
})();