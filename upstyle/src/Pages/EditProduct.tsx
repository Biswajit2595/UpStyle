import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Center,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { EditMensProd } from '../Redux/productReducer/action';
import axios from 'axios';

const EditProduct = () => {
  const { singleMen } = useSelector((state:any) => ({
    singleMen: state.productReducer.singleMen,
  }));
  const isAdmin=useSelector((state:any)=> state.authReducer.isAdmin)
    const navigate=useNavigate()
  const dispatch:any=useDispatch()
  const [product, setProduct] = useState(singleMen)
  const { id }=useParams()
  const toast=useToast()
  console.log(isAdmin)
  const fetchdata=(id:any)=>{
    axios.get(`https://upstyle-fq0x.onrender.com/mens/${id}`)
    .then(res=>{
      setProduct(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    // if(!isAdmin){
    //   navigate("/login")
    // }
  
    fetchdata(id)
  },[dispatch,id])

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(EditMensProd(product,id)).then(()=>{
      toast({
          title: 'Product Updated.',
          description: "Product has been Updated.",
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
      navigate("/admin")
    })
  }

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const { name, value,type } = e.target;
    setProduct((prevProduct:any) => ({
      ...prevProduct,
      [name]: type === "number" ? +value : name === "Price" || name === "Rating" || name === "Stock" ? +value : value,
    }));
  }

  const { Brand, Category, Price, Rating, Stock, Title, image } = product;

  return (
    <Box px={[4, 8, 12]} py={8}>
      <Flex justifyContent="center">
        <Box bgColor="#789bac" borderRadius={10} boxShadow="lg" p={5} w={['95%', '80%', '50%']}>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>ID</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="Id" value={id}  />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>TITLE</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="Title" value={Title} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Image</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="image" value={image} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Brand</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="Brand" value={Brand} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Price</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="Price" value={Price} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Rating</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="Rating" value={Rating} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Stock</FormLabel>
              <Input type="text" bgColor={"#f2f2f3"} name="Stock" value={Stock} onChange={handleChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Category</FormLabel>
              <Select name="Category" bgColor={"#f2f2f3"} value={Category} onChange={handleChange}>
                <option value="Jeans">Jeans</option>
                <option value="Shirt">Shirt</option>
                <option value="Jacket">Jacket</option>
                <option value="Shorts">Shorts</option>
              </Select>
            </FormControl>
            <Center>
              <Button type="submit" variant="solid">
                EDIT PRODUCT
              </Button>
            </Center>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditProduct;
