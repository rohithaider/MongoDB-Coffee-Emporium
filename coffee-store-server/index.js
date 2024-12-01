const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

//!middleware

app.use(cors());
app.use(express.json());

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nihur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffees  = client.db("coffeeCollection").collection("coffee");
    //!sending data from the API using GET method

    app.get('/coffee',async(req,res)=>{
      const cursor = coffees.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    // !getting data from the add coffee form and adding to mongoDB
    app.post('/coffee',async(req,res)=>{
        const newCoffee = req.body;
        
        const result  = await coffees.insertOne(newCoffee);
        res.send(result)
    })

    //!Delete

    app.delete('/coffee/:id',async(req,res)=>{
      const id  = req.params.id;
      const query  = {_id:new ObjectId(id)}
      const result  = await coffees.deleteOne(query)
      res.send(result)

    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error){
    // Ensures that the client will close when you finish/error
    console.error("Failed to connect to MongoDB",error)
  }
}
run().catch(console.dir);

//!setting up the server root

app.get("/", (req, res) => {
  res.send("Coffee server is running");
});

app.listen(port, () => {
  console.log(`Coffee server is running at server:${port}`);
});
