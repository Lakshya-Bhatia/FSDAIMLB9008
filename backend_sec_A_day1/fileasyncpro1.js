const fs= require("fs/promises");
async function myReadfile(){
    try{
        const res= await fs.readFile("Dummy.txt","utf-8")
        // res.then((data)=>{
        //     console.log("file data",data);
        // })
        // .catch((err)=>{
        //     throw err;
        // })
        console.log("file data:-",res)

    }
    catch(err){
        console.log("file error",err.message);
    }
}
// function myWriteFile(data){
//     try{
//     // const data = "Hello How are you?"
//     fs.writeFile("Dummy.txt",data);

// }
// catch(err){
//     console.log("file writing error", err.message);
// }
// }
const mywriteFile=async (data)=>{
    try{
            // const data = "Hello How are you?"
            await fs.writeFile("Dummy.txt",data);
            console.log("success")
            // res.then(()=>{
            //     console.log("writing successfully");
            // })
            // .catch((err)=>{
            //     throw err;
            // })
        
        }
        catch(err){
            console.log("file writing error", err.message);
}}
const data=("hey 130 feb")
myReadfile();
mywriteFile(data);
myReadfile();