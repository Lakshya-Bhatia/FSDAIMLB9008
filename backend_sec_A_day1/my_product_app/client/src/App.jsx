import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Viewsusers from './pages/viewsusers'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<h1>home page</h1>}></Route>
        <Route path ="/viewuser" element ={<Viewsusers></Viewsusers>}></Route>
        <Route path ="/edituser" element ={<h1>user list editing</h1>}></Route>
        <Route path ="*" element ={<h1>404 error</h1>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App