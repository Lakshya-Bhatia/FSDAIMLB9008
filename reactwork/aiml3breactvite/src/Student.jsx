import React from 'react'
import './StudentStyle.css'
// function Student(props) {
function Student({data}) {
    return  (
        <div style={{marginLeft:"100px"}} className='icard'>
            {/* {
                JSON.stringify(data)
            } */}
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>{data.college}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><img src={data.pic} height={100} width={100} alt='study pic'/></td>
                    </tr>
                    <tr>
                        <td>Roll: </td>
                        <td>{data.roll}</td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Branch: </td>
                        <td>{data.branch}</td>
                    </tr>
                    <tr>
                        <td>Section: </td>
                        <td>{data.section}</td>
                    </tr>
                </tbody>
            </table>
          {/* { <h2>Hi, {props.name}
                <br></br>
                Your branch is: {props.branch}
            </h2> }   */}
        </div>
    )
}

// Student.defaultProps={
//     college: "AKG Engineering College"
// }
export default Student