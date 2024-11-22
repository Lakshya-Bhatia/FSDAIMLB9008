import React, {useState}from 'react'

function StudentState() {
    //const [state, setState] = useState(initialState)
    const[count,setCount]=useState(20);
    function doincrement(){
        setCount(count+30);
    }
return (
    <div>StudentState
        <h2>Counter: (count)</h2>
        <div><button id ='btn' onClick={doincrement}> Increment</button></div>
    </div>
)
}

export default StudentState