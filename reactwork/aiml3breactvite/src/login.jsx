import React, { useState } from 'react'

function Login(rData){
    const [email,setEmail]=useState();
    const [pass,setPass]=useState()
return (
    <div><div style={{height:'30px',width:'130px'}}><h1 style={{color:'#edcc77',backgroundColor:'#bec6ed'}}>LOGIN</h1></div><br></br>
        <form>
     
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPass(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
    </div>
)
}
export default Login
