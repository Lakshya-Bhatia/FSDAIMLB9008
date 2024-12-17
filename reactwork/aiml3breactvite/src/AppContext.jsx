

import React, { createContext } from 'react';  
import Child1context from './context/Child1context';
import Child2context from './context/Child2context';


const StudentContext = createContext();  

export default function AppContext() {  
    const studentData = {  
        name: "Lakshya",  
        branch: "AIML",  
        section: "b",  
        college: "ABES EC"  
    };  

    return (  
        <div>  
            
            <StudentContext.Provider value={studentData}>  
                <Child1context /> 
                <Child2context /> 
            </StudentContext.Provider>  
        </div>  
    );  
}  

export { StudentContext };








