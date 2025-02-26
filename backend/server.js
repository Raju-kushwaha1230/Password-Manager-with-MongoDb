const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors')

const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "pasSaveDb";

const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 3000;
console.log(process.env.MONGO_URI);
client.connect();


app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();

  res.json(findResult);
});


app.post("/", async (req, res) => {
    const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password)

   res.send({success:true,result:findResult})
});

app.delete("/", async (req, res) => {
    const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password)

   res.send({success:true,result:findResult})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
