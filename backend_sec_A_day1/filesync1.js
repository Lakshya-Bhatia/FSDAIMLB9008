const fs=require("node:fs");
function myReadFile(){
try{
    const data=fs.readFileSync("Dummy.txt","utf-8");
    if(data){
        console.log("file data", data);
    }
    else{
        throw err
    }
}
catch(err){
    console.log("file error", err.message);
}}

function myWriteFile(data){
    try{
    // const data = "Hello How are you?"
    fs.writeFileSync("Dummy.txt",data);

}
catch(err){
    console.log("file writing error", err.message);
}
}

module.exports={myReadFile,myWriteFile,username:"lakbhatia"}