
const http=require("http")
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=="/home" && req.method=="GET"){
        res.write("<h1>my home page</h1>");
    }
    else if(url==="/about" && req.method=="POST"){
        res.write("<h2>about page</h2>");
    }
    else{
        res.write("<h1>error page</h1>");
    }
res.end();
});


server.listen(3001,()=>{
    console.log("Server is Running on Port: 3001");
    
})