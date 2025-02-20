const http=require("http");
const port=3003;
const data=[{
    id:1,name:"laks",email:"las100@gamail.com"
}];

const server=http.createServer((req,res)=>{
    
    const url=req.url;
    if (url=="/user" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(data))}

        // res.write(data);
    else if (url=="/user" && req.method=="POST"){
            let body='';
            req.on("data",(chunk)=>{
                body+=chunk
            })
            req.on("end", ()=>{
                const pareddata  =JSON.parse(body);
                const {name,email}=pareddata;
                const newid=data.length>0?(data[data.length-1].id+1):1001;
                const new_user={
                    id: newid,name:name,email:email
                };
                data.push(new_user);
                
            })
            res.writeHead(201,{"Content-Type":"application/json"});
            res.write(JSON.stringify({status:"Success",message:"User Created Successfully"}));
    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"});
    res.write(JSON.stringify({status:"Fail",message:"page not found"}));
}


res.end();
});


server.listen(port,(err)=>{
    try {
        if (err){
            throw err;
        }

        console.log(`server is running on port ${port}`)
    }
    
    catch (err) {
        console.log("server error",err.message)
    }
})