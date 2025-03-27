import React, { useEffect, useState } from 'react'

const Viewsusers = () => {

    const[users,setUsers]=useState([]);

    const fetchuser=async()=>{
        const resdata=await fetch("http://localhost:3003/users",{method:"GET"});
        const usersjson=await resdata.json();
        setUsers(usersjson);
    }
    useEffect(() => {
        fetchuser();
    }, [])
let count=0;
    return (
        <><div>list of Users</div>
        <table>
        <thead>
            <tr>
                <th>sr.no</th>
                <th>id</th>
                <th>Name</th>
                <th>email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user=>(
                    <tr>
                        <td>{++count}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button>edit</button>
                        <button>Delete</button></td>
                    </tr>
                ))
            }
        </tbody>
        </table></>
        
    )
}

export default Viewsusers