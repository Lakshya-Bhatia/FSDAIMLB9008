const express=require("express");
const port = 3001;
const app=express();
const products=[{
    id: 2007 ,
    title:"Laptop",
    price: 45000,
    quantity:10,

},
{
    id:1001,
    title:"PHONE",
    price: 6999,
    quantity:6,
}]
app.use(express.json())
app.get("/products",(req,res)=>{
    res.status(200);
    res.json(products);
})
app.post("/products",(req,res)=>{
    const {id,title,price,quantity}=req.body;
    const  newpro={
        id:id,
        title:title,
        price:price,
        quantity:quantity, 
    }
    products.push(newpro);
    res.status(201).json({status:"sucess",message:"product created",newpro}) 
})

 
app.listen(port,(err)=>{
    try {
        if (err) throw err;
        else
        console.log(`server is running on port ${port}`);
        
    } catch (err) {
        console.log("server error",err.message);
    }
})