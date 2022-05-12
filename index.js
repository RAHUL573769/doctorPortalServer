// 1KV6mdtKkCNybI7N

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://portal:x1bvjGOWLDi1Hy40@cluster0.oza9o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Listening to Port");
});
