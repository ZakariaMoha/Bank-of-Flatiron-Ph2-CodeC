import React from "react";

function Transaction({ id, date, description, category, amount} ) {  // onDelete

  // function handleDelete(id) {
  //   fetch("http://localhost:8001/transactions/${id}", {
  //     //removing from server
  //     method: "DELETE",
  //     headers: { "Content-Type" : "applications/json"
  //     }
  //   })
  //   .then(res => {
  //     return res.json()
  //   }) 
  //   .then(data => console.log(data))
  //   //removing from state
  //   onDelete(id)
  // }
  return (
    <tr key={id} >
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {/* <td><button onDelete={handleDelete}>X</button></td> */}
    </tr>
  );
}

export default Transaction;