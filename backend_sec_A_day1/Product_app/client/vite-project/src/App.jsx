import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App