const express= require("express")
const app =express()
const port =3000;
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello world ")
    
});

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mernbookstrore:0000Raman@cluster0.ltnn1rh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
 const bookCollection=client.db("BookInventory").collection("books");
    app.post("/upload-book",async(req,res)=>{
      const data =req.body;
      const result =await bookCollection.insertOne(data)
      res.send(result);

    })
    //give all books 
    // app.get("/all-books",async (req,res)=>{
    //   const books = await bookCollection.find();
    //   const result = await books.toArray()
    //   res.send(result)
    // })
    //update a book using pathc or update 
    app.patch('/book/:id',async(req,res)=>{
         const id = req.params.id;
        
         const updatebookData=req.body;
         const filter={_id:new ObjectId(id)};
         const options ={upsert:true};
         const updateDoc={
          $set:{
            ...updatebookData
          }
         }
         const result=await bookCollection.updateOne(filter,updateDoc,options)
         res.send(result)
    });

    //delete a book data 
    app.delete('/book/:id',async(req,res)=>{
      const id = req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bookCollection.deleteOne(filter)
         
     res.send(result)
    }) 
    //find book by the id 
    app.get('/book/:id',async(req,res)=>{
      const id =req.params.id;
      const filter={_id:new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result)

    })
  
    //find by filter data by search query 
    app.get("/all-books",async(req,res)=>{
      let query={}
      if(req.query?.category){
        query={category:req.query.category}
      }
      const result=await bookCollection.find(query).toArray();
    
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`server is listeing on the ${port}`)
})