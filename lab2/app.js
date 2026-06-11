const { MongoClient } = require("mongodb");

(async()=>{
let c=new MongoClient ("mongodb://localhost:27017");
await c.connect ();

let col=c.db("user_managed").collection("transactions");

await col.drop().catch(()=>{});
console. log("Collection 'transactions' dropped successfully (if it existed).");

let r=await col. insertMany ([
{_id:1, Name: "Somu", Payment: {Total: 600}, Transaction: {price: 450} },
{_id: 2, Name: "John", Payment: {Total : 500}, Transaction: {price: 350} },
{_id: 3, Name: "Alice", Payment : {Total: 300}, Transaction: {price: 400} },
{_id: 4, Name:"Bob", Payment: {Total: 200}, Transaction: {price: 600} },
{_id:5, Name: "Somu", Payment: {Total: 1000}, Transaction: {price: 550} }
]);

console.log(`Inserted ${r.insertedCount} records into 'transactions'.`);

console.log("Records where Name is Somu:");
console.log(await col.find({Name:"Somu"}) . toArray () ) ;

console.log("Records where Payment.Total is 600:");
console.log(await col.find({"Payment.Total": 600}).toArray());

console. log("Records where Transaction.price is between 300 and 500:");
console.log(await col.find({
"Transaction.price": {$gte: 300, $lte: 500}
}) .toArray ()) ;

let t=await col.aggregate ([
{$group: {_id:null, total: {$sum: "$Payment.Total"}}}
]).toArray () ;

console.log("Total payment amount:", t[0].total) ;

await c.close () ;
})();