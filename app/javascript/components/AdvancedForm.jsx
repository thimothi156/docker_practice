import React, { useState } from "react"
export default function AdvancedForm() {
    const[name, setName] = useState("")
    const[age, setAge] = useState(0)
    const[email, setEmail] = useState("")
    const[userlist, setUserList] = useState([])
    const storeValues = ()=>{
        if(!name.trim() || !age || !email.trim()) return
        setUserList([...userlist, {"name":name, "age":parseInt(age), "email":email}])
        setName("")
        setAge(0)
        setEmail("")
    }
    const removeUser = (index) => {
    const newUserList = [...userlist]
    newUserList.splice(index, 1)
    setUserList(newUserList)
   }
    return (
        <div>
            <h1>List of students</h1>
            <table width="100%" cellPadding="10px" cellSpacing="0px" border="1px solid black"
            style={{borderCollapse: "collapse",marginBottom: "20px",textAlign: "center"}}>
            <thead style={{backgroundColor: "black", color: "white"}}>
             <tr>
            <th>sr.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
            </tr>
        </thead>
<tbody>
        {userlist.map((user, index) => {
        return (
            <tr key={index} style={{ backgroundColor:index % 2 === 0 ? "red" : "blue" }}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>{removeUser(index)}}>Delete</button>
                </td>
            </tr>
        );
 })}
    </tbody>
</table>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <div style={{display: "flex", width:"300px", justifyContent: "space-between"}}>
             <label htmlFor="name">Name:</label>
             <input type="text" id="name" name="name" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
            <div style={{display: "flex", width:"300px", justifyContent: "space-between"}}>
             <label htmlFor="age">Age:</label>
             <input type="number" id="age" name="age" placeholder="enter your age" value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div style={{display: "flex", width:"300px", justifyContent: "space-between"}}>
             <label htmlFor="email">Email:</label>
             <input type="email" id="email" name="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            </div>
             <button type="submit" style={{marginLeft: "100px",marginTop: "20px",padding: "5px",borderRadius:"5px"}} onClick={storeValues}>Submit</button>
        </div>
    )

}

function Table({userlist}) {
    const removeUser = (index) => {
        const newUserList = [...userlist]
        newUserList.splice(index, 1)
        setUserList(newUserList)
    }
    return (
        <table width="100%" cellPadding="10px" cellSpacing="0px" border="1px solid black"
         style={{borderCollapse: "collapse",marginBottom: "20px",textAlign: "center"}}>
            <thead style={{backgroundColor: "black", color: "white"}}>
                <tr>
                    <th>sr.no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userlist.map((user, index) => {
                return (
                    <tr key={index} style={{ backgroundColor:index % 2 === 0 ? "red" : "blue" }}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={()=>{removeUser(index)}}>Delete</button>
                        </td>
                    </tr>
                );
         })}
            </tbody>
        </table>
    )
}
