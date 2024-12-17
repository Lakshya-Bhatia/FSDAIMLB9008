import React from 'react'
import Child2 from './child2'
import Child3 from './child3'

function Child1({childdata1}) {
  return (
    <div> Child1
        name:{childdata1.name}
        
        <Child2  childdata2={childdata1}/>
        <Child3  childdata3={childdata1}/>
    </div>

  )
}

export default Child1