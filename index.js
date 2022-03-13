const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hospital:WsnxCrS9HYh1cqFv@cluster0.5ryo5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {
  try {
    await client.connect();
    const database = client.db("hospital");
    const usersCollection = database.collection("users");
    // create a document to insert
    const doc = {
      name: "Choyon Das",
      email: "choyondas08@gmail.com",
    }
    // const result = await usersCollection.insertOne(doc);
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


app.get('/users',)

app.get('/', (req, res)=>{
  res.send('ynu university')
});
app.listen(port, ()=>{
  console.log(`listening from port ${port}`)
})