import React, { useEffect, useState } from 'react'
import AdminList from './AdminList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AddMen, AddWomen, getMens, getWomens } from '../Redux/productReducer/action';
import { AddProductType } from '../constants';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useBreakpointValue,
  Skeleton,
  useToast,
  InputGroup,
  InputLeftElement,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const initstate:AddProductType={
Brand:"",
Category:"",
Price:"",
Quantity:1,
Rating:"",
Size:['S', 'M', 'XL', 'XXL'],
Stock:"",
Title:"",
imgbag:[
  "https://assets.ajio.com/medias/sys_master/root/20211210/KfRE/61b355fcf997ddf8f14bb8a9/-78Wx98H-469063063-yellow-MODEL4.jpg",
  "https://assets.ajio.com/medias/sys_master/root/20211210/W85Q/61b34fd6aeb269011007a261/-78Wx98H-469063063-yellow-MODEL3.jpg",
  "https://assets.ajio.com/medias/sys_master/root/20211210/FB52/61b35a46f997ddf8f14bd242/-78Wx98H-469063063-yellow-MODEL2.jpg"
  ],
  image:"",


}
// import React, { useState, useEffect } from 'react';
// import { authReducer } from '../Redux/authReducer/authReducer';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('addProduct');
  const [product,setProd]=useState(initstate)
  const isAdmin=useSelector((state:any)=>state.authReducer.isAdmin)
  const { isLoading, isError, womens,mens } = useSelector((state:any) => ({
    isLoading: state.productReducer.isLoading,
    isError: state.productReducer.isError,
    womens: state.productReducer.womens,
    mens: state.productReducer.mens
  }),shallowEqual);
  const dispatch:any=useDispatch()
  const [gender,setGender]=useState("Men");
  const navigate=useNavigate()
  const toast=useToast()

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://cdn.wallpapersafari.com/21/61/zkNgu4.jpg)"
    document.body.style.backgroundSize = "cover";
  }, [])

  useEffect(()=>{
    // if(!isAdmin){
    //   navigate("/login")
    // }


    dispatch(getMens())
    dispatch(getWomens())
  },[dispatch])

  const handleGender=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setGender(e.target.value)
  }

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    e.preventDefault();
    const { name, value } = e.target;
    const updatedProduct = { ...product };
    switch (name) {
      case 'Title':
        updatedProduct.Title = value;
        break;
      case 'image':
        updatedProduct.image = value;
        break;
      case 'Brand':
        updatedProduct.Brand = value;
        break;
      case 'Price':
        updatedProduct.Price = Number(value);
        break;
      case 'Stock':
        updatedProduct.Stock = Number(value);
        break;
      case 'Rating':
        updatedProduct.Rating = Number(value);
        break;
      case 'Category':
        updatedProduct.Category = value;
        break;
      default:
        break;
    }
  
    setProd(updatedProduct);
  }

  // console.log(product)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(gender)
    if(gender==="Men")
    {
      dispatch(AddMen(product))
      .then(()=>{
        toast({
          title: 'Product Added.',
          description: "New Product has been Added.",
          status: 'success',
          duration: 9000,
          isClosable: true,
  })
  dispatch(getMens())
    
      })
    }else{
      dispatch(AddWomen(product)).then(()=>{
        toast({
          title: 'Product Added.',
          description: "New Product has been Added.",
          status: 'success',
          duration: 9000,
          isClosable: true,
  })
  dispatch(getWomens())
      })
    }

    setProd(initstate)
    setGender("Men")
  }
  // Using Chakra UI's responsive styles based on breakpoints
  const tabSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });


  const { Brand, Category, Title, Price, Rating, Stock, image } = product;


  return (
    <Box >
      <Helmet>
        <title>Admin | UPSTYLE</title>
      </Helmet>
      <Tabs m="auto" variant="enclosed"  size={tabSize}>
        <TabList m="auto"  >
          <Tab border="2px solid black" onClick={() => setActiveTab('addProduct')}>Add Product</Tab>
          <Tab border="2px solid black" onClick={() => setActiveTab('adminList')}>Product List</Tab>
        </TabList>

        <TabPanels >

          <TabPanel m="auto" w={['95%', '70%', '50%']}>
            <Box onSubmit={handleSubmit} m="auto" bgColor="#000000" borderRadius={10} boxShadow="lg" p={5}  w={{base:"290px",sm:"350px",md:"400px",lg:"500px",xl:"500px"}} as="form"  >
              <Heading m="auto" color="#f2f2f3">Add Product</Heading>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Title</FormLabel>
                <InputGroup>
                <InputLeftElement>✏️</InputLeftElement>
                <Input
                  type="text"
                  name="Title"
                  bgColor={"#ffffff"}
                  value={Title}
                  placeholder="Title"
                  onChange={handleChange}
                  required
                />
                </InputGroup>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Image Link</FormLabel>
                <InputGroup>
                <InputLeftElement>✏️</InputLeftElement>
                <Input
                  type="text"
                  name="image"
                  bgColor={"#ffffff"}
                  value={image}
                  placeholder="Image link"
                  onChange={handleChange}
                  required
                />
                </InputGroup>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Brand</FormLabel>
                <InputGroup>
                <InputLeftElement>✏️</InputLeftElement>
                <Input
                  type="text"
                  name="Brand"
                  bgColor={"#ffffff"}
                  value={Brand}
                  placeholder="Brand"
                  onChange={handleChange}
                  required
                />
                </InputGroup>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Price</FormLabel>
                <InputGroup>
                <InputLeftElement>✏️</InputLeftElement>
                <Input
                  type="number"
                  name="Price"
                  bgColor={"#ffffff"}
                  value={Price}
                  placeholder="Price"
                  onChange={handleChange}
                  required
                />
                </InputGroup>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Stock</FormLabel>
                <InputGroup>
                <InputLeftElement>✏️</InputLeftElement>
                <Input
                  type="number"
                  name="Stock"
                  bgColor={"#ffffff"}
                  value={Stock}
                  placeholder="Stock"
                  onChange={handleChange}
                  required
                />
                </InputGroup>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Rating</FormLabel>
                <Select
                  name="Rating"
                  value={Rating}
                  bgColor={"#ffffff"}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Gender</FormLabel>
                <Select name="gender" value={gender} bgColor={"#ffffff"} onChange={handleGender}>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </Select>
              </FormControl>
              <br/>
              <FormControl>
                <FormLabel color="#f2f2f3" fontWeight={'bold'}>Category</FormLabel>
                <Select
                  name="Category"
                  bgColor={"#ffffff"}
                  value={Category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Shirt">Shirt</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Lahanga">Lahanga</option>
                  <option value="Saree">Saree</option>
                  <option value="Skirts">Skirts</option>
                  <option value="Gowns">Gowns</option>
                </Select>
              </FormControl>
              <br/>
              <Button type="submit" w="100%" _hover={{color:"white" ,bg:"#ff8800"}} color="white" bg="#f56b33" mt={4}>
                Add Product
              </Button>
            </Box>
          </TabPanel>
          <TabPanel >
            <AdminList name="Mens" data={mens} />
            <AdminList name="Womens" data={womens} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Admin;
