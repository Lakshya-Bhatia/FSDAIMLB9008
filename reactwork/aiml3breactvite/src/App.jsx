// import React from 'react'
// import Student from './Student';

// import StudentState from './StudentState';
// import Imagemanipulation from "./imagemanipulation"

// function App() {
//     const studentdata={}
//   return (
//     // <div style={{color:'Red'}}><h2>ABES Engineering College</h2>
//     // <div style={mystyle}>{a}</div>
//     <div style={{marginLeft:"300px"}}>
//       <Imagemanipulation/>
//       {/* <Student data={studentdata} /> */}
//       {/* <StudentState /> */}
//       {/* <div>
//           <Student name="Sahil Jaiswal" roll='2200321530143' college="Abes Engineeering College" branch="CSE-AIML" 
//            pic={<img src={logo} height={100} width={40}/>} 
//            />
//       </div> */}
//     </div>
  
//   )
// }

// export default App
import React, { useState } from 'react'
import Registration from './registration'
// import registration from './registration'

function App() {
  const [shareData , setShareData]=useState();
  return (

    <div>

      <Registration regData={setShareData} />
      
    </div>
  )
}
export default App