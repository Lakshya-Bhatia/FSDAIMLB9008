console.log("hello fetch")

function fetchData(){
const response=fetch("https://dummyjson.com/recipes")
response.then(data=>{
    console.log(data);
    data.json().then((res)=>{
        let text=`${res.recipes[12].id}`;
        document.getElementById("hello").innerHTML=text
        document.getElementById("hello1").innerHTML=res.recipes[12].name
        document.getElementById("hello2").innerHTML=res.recipes[12].ingredients
        console.log(res.recipes[12].name)
        console.log(res.recipes[11].name)
    })
}).catch(error=>console.log(error))
.finally(()=>console.log("hi, finally closed all the resources"))
}
