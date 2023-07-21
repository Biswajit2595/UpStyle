// import React, { useEffect } from 'react'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { getProductMen } from '../api'
// import styled from "styled-components"
// import { ProductType } from '../constants'

const Men = () => {

  //-----------use dispatch in these way-------------------
  // const dispatch: AppDispatch = useDispatch();
  // dispatch(yourActionCreator()); // Dispatch your actions here
  //-----------use dispatch in these way-------------------
// const dispatch =useDispatch()

// const {isLoading,isError,mens}=useSelector((store:any)=>{
// return {
//   isLoading:store.productReducer.isLoading,
//   isError:store.productReducer.isError,
//   mens:store.productReducer.mens,
// }


// },shallowEqual)

// // useEffect(()=>{
// //   dispatch(getProductMen())
// // },[])


// console.log(mens)


  return (
    <></>
  //   <div  style={{border:"1 px solid black"}} >
  //   {mens.map(({ Brand, Category, Price, Quantity, Rating, Size, Stock, Title, id, image, imgbag }:ProductType)=>(
  //   <DIV className="product-card" key={id}>
  //     <div className="product-image">
  //       <img src={image} alt={Title} />
  //     </div>
  //     <div className="product-details">
  //       <h3>{Brand}</h3>
  //       <h4>{Category}</h4>
  //       <p>{Title}</p>
  //       <p>Price: ${Price}</p>
  //       <p>Rating: {Rating}</p>
  //       {/* <p>Available Sizes: {Size.join(', ')}</p> */}
  //       <p>Stock: {Stock}</p>
  //       <button>Add to Cart</button>
  //     </div>
  //   </DIV>
  //   ))}
  //  </div> 
  )
}




// const DIV =styled.div`

// //#ccc

// .product-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 16px;
//   margin: 16px;
//   width: 300px;
// }

// .product-image img {
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 10px;
// }

// .product-details h3 {
//   margin-top: 0;
// }

// .product-details h4 {
//   margin-top: 0;
//   color: #888;
// }

// .product-details p {
//   margin: 4px 0;
// }

// .product-details button {
//   padding: 8px 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
// }

// .product-details button:hover {
//   background-color: #0056b3;
// }

// `

export default Men




