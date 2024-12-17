import React from 'react'
import Child1 from './componentsprops/child1'

function Appprops() {
    const studentdata={
        name:'lakshya',
        branch:'aiml',
        section:'B',
        college:'abes'
    }

  return (
    <div>
        <Child1  childdata1={studentdata}/>
    appprops</div>
  )
}

export default Appprops