
import React, { useEffect } from 'react'
import { Box, Flex, Image, VStack, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'

import { ProductType } from '../constants'
import { styled } from 'styled-components'
import {  getWomensuser } from '../Redux/productReducer/action'
import { Sidebar2 } from '../Components/Sidebar2'
import { useSearchParams } from 'react-router-dom'

const Women = () => {


  const imageSize = useBreakpointValue({ base: '120px', sm: '150px', md: '200px', lg: '250px' });
  const titleSize = useBreakpointValue({ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' });
  
  const btnSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });



   const dispatch:any =useDispatch()
   const [searchParams,setSearchParams]=useSearchParams()
  const {isLoading,isError,womens}=useSelector((store:any)=>{
  return {
    isLoading:store.productReducer.isLoading,
    isError:store.productReducer.isError,
    womens:store.productReducer.womens,
  }
  
  
  }
  )
  
  useEffect(()=>{
    let paramObj={
      params:{
        
        Brand:searchParams.getAll("Brand"),
         Category:searchParams.getAll("Category"),
        _sort:searchParams.get("order") && "Price",
        _order:searchParams.get("order")
      }
    };
    dispatch(getWomensuser(paramObj))
  },[searchParams])
  
  
   console.log(womens)



  return (
 


  //===================================================================================>


  <Flex direction={{ base: 'row', md: 'row' }}>
  <Box flex={{ base: '1', md: '3' }}>
    <Sidebar2 />
  </Box>

  <Box flex={{ base: '2', md: '7' }} borderWidth="1px" p={4}>
    {womens.map(({ Brand, Category, Price, Quantity, Rating, Size, Stock, Title, id, image, imgbag }: ProductType) => (
      <Box
        key={id}
        borderWidth="1px"
        borderRadius="md"
        p={4}
        mb={4}
        display={{ md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box flexShrink={0} mr={{ base: 0, md: 4 }}>
          <Image src={image} alt={Title} maxW={imageSize} />
        </Box>
        <VStack mt={{ base: 4, md: 0 }} align="flex-start">
          <Heading as="h3" size={"lg"}>
            {Title}
          </Heading>
          <Heading as="h1" size={"md"} color={"Highlight"}>{Category}</Heading>
          <Heading fontSize={"lg"} color={"ThreeDHighlight"} >{Brand}</Heading>
          <Box style={{display:"flex",gap:"6px"}}>
                <Text color={"black"}>Price: </Text> 
                 <Text color={"#DE6737"}> ${Price}</Text>
                </Box>
          <Text>Rating: {Rating}</Text>
          {/* <Text>Available Sizes: {Size.join(', ')}</Text> */}
         
          <Button background="#DE6737" size={btnSize}>
            Add to Cart
          </Button>
        </VStack>
      </Box>
    ))}
  </Box>
</Flex>
  )
}


const DIV =styled.div`



.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
  width: 300px;
}

.product-image img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-details h3 {
  margin-top: 0;
}

.product-details h4 {
  margin-top: 0;
  color: #888;
}

.product-details p {
  margin: 4px 0;
}

.product-details button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.product-details button:hover {
  background-color: #0056b3;
}

`

export default Women