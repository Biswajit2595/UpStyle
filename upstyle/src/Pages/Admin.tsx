import React, { useState } from 'react'
import styled from 'styled-components'
import AdminList from './AdminList'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('addProduct');



  const handleSubmit=()=>{

  }

  const handleChange=()=>{

  }



  return (
  <DIV>
          <Tabs>
        <TabButton
          onClick={() => setActiveTab('addProduct')}
        >
          Add Product
        </TabButton>
        <TabButton
          // active={activeTab === 'adminList'}
          onClick={() => setActiveTab('adminList')}
        >
          Admin List
        </TabButton>
      </Tabs>
      {activeTab === 'addProduct' && (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required/>
      <input type="text" name="image" placeholder="Image link"  onChange={handleChange} required/>
      <input type="text" name="brand" placeholder="Brand"  onChange={handleChange} required/>
      <input type="number" name="price" placeholder="Price"  onChange={handleChange} required/>
      <input type="number" name="stock" placeholder="Stock"  onChange={handleChange} required/>
      <select name="Rating"  onChange={handleChange} required>
        <option value="">Selet Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>
      <select name="category"  onChange={handleChange} required>
        <option value="">Selet Category</option>
        <option value="Jeans">Jeans</option>
        <option value="Shirt">Shirt</option>
        <option value="Jacket">Jacket</option>
        <option value="Shorts">Shorts</option>
        <option value="Lahanga">Lahanga</option>
        <option value="Saree">Saree</option>
        <option value="Skirts">Skirts</option>
        <option value="Gowns">Gowns</option>
      </select>
      <button type="submit" >Add Product</button>
    </form>
     )}
     {activeTab === 'adminList' && <AdminList />}
  </DIV>
)
}

export default Admin

const DIV=styled.div`
width: 400px;
margin-top: 100px;
margin: auto;
/* border: 1px solid grey; */
padding: 10px 30px;
border-radius: 5px;
background-color: #cddee6;

form{
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
input,select{
  height: 40px;
  width: 100%;
  font-size: larger;
  border-radius: 5px;
}
button{
  margin: auto;
  width: 50%;
  height: 35px;
  cursor: pointer;
}
`

const Tabs = styled.div`
  display: flex;
  gap: 20px;
`;

const TabButton = styled.button`

`;