const{Client}=require("pg")
const client = new Client({
    host: 'localhost',
    port: 5432,
    database:"myappdb",
    user: 'postgres',
    password: '1234'
});

client.connect()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('db error ', err.message);
})
client.query("select * from users",(err,res)=>{
    if (err){
        console.log('query error',err.message )
    }
    else{
        console.log("data",res.rows)
    }
})