import React, { useContext } from 'react'
import { StudentContext } from '../AppContext';

const Child1context = () => {
  const child1data = useContext(StudentContext);
  return (
    <div>
      <h1>hello {child1data.name}</h1>
    </div>
  )
}

export default Child1context