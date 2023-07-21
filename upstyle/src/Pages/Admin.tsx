import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminList from './AdminList'
import { useDispatch, useSelector } from 'react-redux';
import { getMens, getWomens } from '../Redux/productReducer/action';
import { ProductType } from '../constants';


const Admin = () => {
  const [activeTab, setActiveTab] = useState('addProduct');
  const { isLoading, isError, womens,mens } = useSelector((state:any) => ({
    isLoading: state.productReducer.isLoading,
    isError: state.productReducer.isError,
    womens: state.productReducer.womens,
    mens: state.productReducer.mens
  }));
  const dispatch:any=useDispatch()
  const [gender,setGender]=useState("Men");

  const handleGender=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setGender(e.target.value)
  }

  const handleSubmit=()=>{

  }

  const handleChange=()=>{

  }


useEffect(()=>{
  dispatch(getMens())
  dispatch(getWomens())
},[])


  return (
    <>
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
      <DIV>
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


      <select name="gender" onChange={handleGender} required>
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
      </DIV>
)}
    {activeTab === 'adminList' &&
    <>
    <AdminList name={"Mens"} data={mens}/>
    <AdminList name={"Womens"} data={womens} />
    </>
    }
  </>
)
}

export default Admin;

const DIV=styled.div`
box-sizing: border-box;
width: 400px;
margin-top: 100px;
margin: auto;
/* border: 1px solid red; */
padding: 10px 30px;
border-radius: 5px;
background-color: #7ea2b3;

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
  background-color: #000;
  color:
#f2f2f3 ;
  display: flex;
  padding: 10px;
  gap: 20px;
`;

const TabButton = styled.button`
  margin: auto;
`;