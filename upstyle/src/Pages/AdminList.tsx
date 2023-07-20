import React from 'react'
import { Link } from 'react-router-dom'

const AdminList = () => {



  return ( 
    <>
      <h1>{} Product</h1>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Brand</th>
        <th>Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Stock</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        <tr >
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>
            <Link to={`/edit/`}>
            <button>Edit</button>
            </Link>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
    </tbody>
  </table>
  </>
  )
}

export default AdminList;