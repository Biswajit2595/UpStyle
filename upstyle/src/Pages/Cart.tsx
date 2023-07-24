import React, { useEffect, useState } from 'react';
import { ProductType } from '../constants';
import { Box, Button, Image, Text, VStack, Flex, Stack, Spacer, Heading } from '@chakra-ui/react';
import CartTotal from '../Components/CartTotal';
import { useDispatch } from 'react-redux';
import { CART_CHANGE } from '../Redux/actionTypes';
import { Helmet } from 'react-helmet';

const Cart = () => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const dispatch:any = useDispatch()

  useEffect(() => {
    const LSdata = JSON.parse(localStorage.getItem('cart') as string);
    // console.log(LSdata);
    setCart(LSdata || []); // Handle the case where LSdata is null or undefined
  }, []);


  const updateQuantity = (index: number, newQuantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].Quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index: number,title:string) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    dispatch({type:CART_CHANGE})

    let datatit = localStorage.getItem("cartdata");
    let len =[]
    if(datatit){
      len = JSON.parse(datatit);
    }

    let newlen = len.filter((item:any)=> item!== title);
    localStorage.setItem("cartdata", JSON.stringify(newlen));

  };

  return ( <Stack m="auto" w="80%" direction={['column', 'row']} spacing="24px" mt="70px" mb="120px">
    <Helmet>
        <title>Cart | UPSTYLE</title>
      </Helmet>

  <Box flex="1"> {/* Use flex="1" to take available space */}
    { cart.length >0 ? cart.map((el, index) => (
      <Box
        key={index}
        borderWidth="1px"
        borderRadius="md"
        p={4}
        mb={4}
        display={{ md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box flexShrink={0} mr={{ base: 0, md: 4 }}>
          <Image src={el.image} alt={el.Title} maxW="250px" />
        </Box>
        <VStack mt={{ base: 4, md: 0 }} align="flex-start" flex="1"> {/* Use flex="1" to take available space */}
          <Text mt="2" fontSize="2xl" fontWeight="bold">
            {el.Title}
          </Text>
          <Text mt="1" fontSize="lg" color="blue.500">
            {el.Brand}
          </Text>
          <Text mt="1" fontSize="md" fontWeight="bold">
            ${el.Price}
          </Text>
          <Flex w="50%" justifyContent="flex-start" gap={2}>
            {el.Size.map((size, ind) => (
              <Button
                key={ind}
                backgroundColor="gray.300"
                textAlign="center"
                borderRadius="50%"
                w="40px"
                p={2}
                _hover={{ bg: '#f56b33' }}
                onClick={() => {
                  const newQuantity = el.Quantity + 1;
                  updateQuantity(index, newQuantity);
                }}
              >
                {size}
              </Button>
            ))}
          </Flex>
          <Box display="flex" alignItems="center">
            <Text fontSize="2xl" fontWeight="bold" >Quantity:</Text>
            <Button
              bg="#f56b33" size="md"
              borderRadius="10px"
              height="35px"
              marginLeft="3px" 
              marginRight="3px" 
              fontWeight={"extrabold"}
              isDisabled={el.Quantity === 1}
              onClick={() => {
                const newQuantity = Math.max(1, el.Quantity - 1);
                updateQuantity(index, newQuantity);
              }}
            >
              -
            </Button>
            <Text mx="0.5rem">{el.Quantity}</Text>
            <Button
              bg="#f56b33"
              marginLeft="3px" 
              marginRight="3px" 
              borderRadius="10px"
              fontWeight={"extrabold"}
              height="35px"
              onClick={() => {
                const newQuantity = el.Quantity + 1;
                updateQuantity(index, newQuantity);
              }}
            >
              +
            </Button>
          </Box>
          <Button
            colorScheme="red"
            onClick={() => {
              removeFromCart(index,el.Title);
            }}
          >
            Remove
          </Button>
        </VStack>
      </Box>
    )):(
      <Box >
        <Box marginTop="200px" margin="auto" height={"100%"} >
        <Image margin="auto" width="70%" src='https://cdn-icons-png.flaticon.com/512/2037/2037021.png'/>
        <Text fontWeight="bold" color="#3762CC" fontFamily="stencil" textAlign="center" fontSize="20px" >Your Cart is Empty</Text>
        </Box>
      </Box>
    )}
  </Box>
  {/* Cart Total */}
  <Spacer />
  <Box flex="1" minW="250px"> {/* Add min-width to prevent collapsing */}
    <CartTotal cart={cart} cartItems={cart} />
  </Box>
</Stack>
);
};

export default Cart;
