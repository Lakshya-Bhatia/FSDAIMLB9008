// console.log("hello Js")
// const a=12;
// if(a>10){
//     let b=23;
//     a=40;
//     console.log("a="+a);
// }

// function fun(a,b,c=9){
//     console.log("heeee");
//     return a+b+c
// }
// let data=fun(12,5);
// console.log(data);
// function ccompiler(){
//     return "C compiler"
// }
// function JavaCompiler(){
//     return "java compiler"
// }
// function selectlanguage(clbk){
//     return "you have selected:"+ clbk()
// }

// const result=selectlanguage(ccompiler)
// console.log(result)

// function selectlanguage(language){
//     let data
//     if(language=='c'){
//     function ccompiler(){
//         return "C compiler"
//     }
//     data=ccompiler(); 
// }

//     if (language=='java'){

//     function JavaCompiler(){
//         return "java compiler"
//     }
//     data=JavaCompiler();
// }
//     return data
// }

// const result=selectlanguage('c')
// console.log(result)

console.dir(document)
 const div=document.getElementsByClassName("parent")
 div[0].innerHTML="<h2 style=color:red> hello Dom</h2>"
 const h1=document.createElement("h1")
 h1.innerText="this is dom"
 h1.style.backgroundColor="cyan"
 console.log(h1)
 div[0].appendChild(h1)
 const image=document.createElement("img")
 image.src ='./download.jpeg'
 image.setAttribute("height","200")
 console.log(img)
 div[0].appendChild(img)
