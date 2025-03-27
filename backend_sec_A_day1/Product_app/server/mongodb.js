const {MongoClient}= require("mongodb")
const Mongo_url="mongodb+srv://Lakshya_bhatia:Pagal123@cluster0.u0bycfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client=new MongoClient(Mongo_url);
MongoClient.connect(Mongo_url)
.then(client=>{
    console.log("Mongodb connected")
})
.catch((err) => {
    console.log("Db",err);
})


