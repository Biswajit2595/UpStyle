import React from 'react'
import { ProductType } from '../constants';
import ProdTable from '../Components/ProdTable';

const AdminList = (props: { name: string; data: ProductType[] }) => {
  const { name, data }=props
  return ( 
    <>
      <h1>{name} Product</h1>
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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.map(el=>
          <ProdTable key={el.id} {...el} />
        )
      }
        
    </tbody>
  </table>
  </>
  )
}

export default AdminList;