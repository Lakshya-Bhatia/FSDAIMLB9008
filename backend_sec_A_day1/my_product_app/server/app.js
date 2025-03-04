const express=require("express")
const fs=require("fs/promises")
const app=express();
const port=3003;
const users=[];
const m1=(req,res,next)=>{
    const age=req.query.age;

    if (!age){
        res.status(400).send("input your age")
    }
    else{
        if (age<18){
            res.status(401).send("user not Authorized")
        }
        else{
            next();
        }
    }
}



//app.use(m1); use of application level middleware
app.use(express.json())
app.get("/users",async(req,res)=>{
    try{
    const data=await fs.readFile("./users.json","utf-8")
    res.status(200).json(JSON.parse(data));
}
    catch(err){
        res.status(400).send("file not found")
    }
});

app.get("/user/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid);
    if (index==-1){
        res.status(400).json({status:"fail", message:"no user with such id"})
    }
    else{
        res.status(200).json({status:"success", message:"User Found", data:users[index]});
    }
});

app.post("/createuser",m1, async(req,res)=>{
    
    const {name , email}=req.body;
    const newid=Date.now()
    const newuser={
        id: newid,name,email
    }
    
    const data=await fs.readFile("./users.json","utf-8");
    users.push(JSON.parse(data));
    users.push(newuser);
    await fs.writeFile("./users.json",JSON.stringify(users))
    res.status(201).json({status:"success", message:" user created successfully", data: newuser})
});

app.patch("/edituser/:id",(req,res)=>{
    const uid=req.params.id;
    const {name,email}=req.body;
    
    if (!name || !email){
        res.status(400).json({status:"fail" , message:"no name or email provided(all field required)"})
    }

    else{
        const index=users.findIndex(ind=>ind.id=uid);
        if (index==-1){
            res.status(400).json({status:"fail", message:"no user with such id"})}
        else{

            users[index].name=name;
            users[index].email=email;
            res.status(200).json({status:"success",message:"user edited successfully"})
        }

    }
});

app.delete("/deleteuser/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id=uid);
    if (index==-1){
        res.status(400).json({status:"fail", message:"no user with such id"})}
    else{
        const deldata=users.splice(index,1);
        res.status(200).json({status:"sucsess", message:"user deleted successfully", deldata})
    }
});

app.listen(port,()=>{
    console.log("server  running on port 3003")
});