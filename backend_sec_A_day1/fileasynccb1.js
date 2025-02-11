const fs=require('fs')
function myReadfile(){
    try{
        fs.readFile('Dummy.txt',"utf-8",(err,data)=>{
            if(err){
                throw err;
            }
            console.log("file data",data);
        });

    }
    catch(err){
        console.log("file Reading error", err.message)
    }
}
function mywriteFile(data){
    try{
        fs.writeFile("Dummy.txt",data,(err)=>{
            if(err){
                throw err
            }
            console.log("successfull")
        })

    }
    catch(err){
        console.log("file error", err.message)
    }
}
myReadfile()
const data="hay hello";
mywriteFile(data)
myReadfile()