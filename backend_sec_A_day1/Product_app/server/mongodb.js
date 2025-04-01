const {MongoClient}= require("mongodb")
const Mongo_url="mongodb+srv://Lakshya_bhatia:Pagal123@cluster0.u0bycfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const db_name="Lak_Database"
const db_connect=async () => {
    const client = new MongoClient(Mongo_url)
    try{

        await client.connect(Mongo_url)
        console.log("DB connected succefully")
        const db=client.db(db_name)
        const usercol=db.collection("Users")
        const res = await usercol.find().toArray();
        console.log("Data :", res)
    }
    catch(err){
        console.log("error didn't connect",err.message)
    }
    
}
db_connect();