import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Registration ({regData}) {
  const [email,setEmail]=useState();
  const [pass,setPass]=useState();
  const [name,setName]=useState();

  function getData(e){
    e.preventDefault();
    
    const data={name,pass,email}
    alert('hi:  '+email+"  name:  "+name+'  pass:  '+pass)
    regData(data);
    userData(data);
    
    console.log(data)
  }
  return (
    <div>
      
      <div style={{height:'30px',width:'230px',}}><h1 style={{color:'#edcc77',backgroundColor:'#bec6ed'}}><u>Registration</u></h1></div><br></br>
      <form>
      <div class="form-group">
    <label for="exampleInputmode">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="Text" class="form-control" id="exampleInputname"  placeholder="Enter Name" />
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPass(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={getData}>Submit</button>
</form>

    </div>
  )
}

export default Registration