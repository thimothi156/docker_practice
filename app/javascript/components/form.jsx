// import React, { useState } from "react"
// export default function Form() {
//   const [inputValue, setInputValue] = useState("")
//   const [nameList, setNameList] = useState([])
//     const movetoNextLine = (e) => { e.preventDefault()
//         if (!inputValue.trim()) return
//         setNameList([...nameList, inputValue])
//         setInputValue("")
//     }
//     const deleteNameList = (index) => {
//         const newNameList = [...nameList]
//         newNameList.splice(index, 1)
//         setNameList(newNameList)
//     }

//   return (
//     <div>
//       <h1>Form Component Thimothi</h1>
//       <form onSubmit={movetoNextLine}>
//         {nameList.map((name, index) => (
//             <>
//              <label key = {index} htmlFor="name">{(index+1) + ". " + name}</label>
//               {name.length > 0 && (
//                <>
//                  <button>Edit</button>
//                  <button onClick={() => deleteNameList(index)}>Delete</button>
//                 </>)}
//              <br />
//             </>
//         ))}
//         <input type="text" id="name" name="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }