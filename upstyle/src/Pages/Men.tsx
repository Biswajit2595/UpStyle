import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

import { shallowEqual, useDispatch, useSelector } from "react-redux";


import { ProductType } from "../constants";
import { getMensuser } from "../Redux/productReducer/action";
import { Sidebar } from "../Components/Sidebar";
import { useSearchParams } from "react-router-dom";

const Men = () => {

  const imageSize = useBreakpointValue({ base: '120px', md: '150px', lg: '200px' });
  const titleSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const btnSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });


  const dispatch: any = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, mens } = useSelector((store: any) => {
    return {
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
      mens: store.productReducer.mens,
    };
  }, shallowEqual);

  //console.log(paramObj)

  useEffect(() => {
    let paramObj = {
      params: {
        Brand: searchParams.getAll("Brand"),
        Category: searchParams.getAll("Category"),
        _sort: searchParams.get("order") && "Price",
        _order: searchParams.get("order"),
      },
    };
    console.log(paramObj);
    dispatch(getMensuser(paramObj));
  }, [searchParams]);

  console.log(mens);

  return (
   


    //================================================================================>


    <Flex direction={{ base: 'row', md: 'row' }}>
      <Box flex={{ base: '1', md: '3' }}>
        <Sidebar />
      </Box>

      <Box flex={{ base: '2', md: '7' }} borderWidth="1px" p={4}>
        {mens.map(
          ({
            Brand,
            Category,
            Price,
            Quantity,
            Rating,
            Size,
            Stock,
            Title,
            id,
            image,
            imgbag,
          }: ProductType) => (
            <Box
              key={id}
              borderWidth="1px"
              borderRadius="md"
              p={4}
              mb={4}
              display={{ md: 'flex' }}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Box flexShrink={0} mr={{ md: 4 }}>
                <Image src={image} alt={Title} maxW={imageSize} />
              </Box>
              <VStack mt={{ base: 4, md: 0 }} align="flex-start">
                <Heading as="h3" size={"xl"}>
                  {Title}
                </Heading>
                <Heading as="h1" size={"lg"}>{Category}</Heading>
                <Text fontSize={"lg"} >{Brand}</Text>
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
          )
        )}
      </Box>
    </Flex>
  
  );
};



export default Men;
