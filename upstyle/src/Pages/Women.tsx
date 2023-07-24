import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  useBreakpointValue,
  Skeleton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { ProductType } from '../constants'
import { styled } from 'styled-components'
import {  getWomensuser } from '../Redux/productReducer/action'
import { Sidebar2 } from '../Components/Sidebar2'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { CART_CHANGE } from '../Redux/actionTypes';
import { Helmet } from "react-helmet";

const Women = () => {

  const [datalen,setDataLen] = useState<String[]>([]);

  useEffect(() => {
    document.body.style.background = "#F2F2F3"
    let datatit = localStorage.getItem("cartdata");
    let len =[]
    if(datatit){
    len = JSON.parse(datatit);
    setDataLen(len)
  }
  }, [])



  const toast = useToast();
  const imageSize = useBreakpointValue({
    base: "120px",
    sm: "150px",
    md: "200px",
    lg: "250px",
  });
  const titleSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "lg",
    lg: "xl",
  });
  let skel = new Array(8).fill(0);
  const btnSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const navigate = useNavigate()

  const dispatch: any = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, womens } = useSelector((store: any) => {
    return {
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
      womens: store.productReducer.womens,
    }
  });


  useEffect(() => {
    let paramObj = {
      params: {
        Brand: searchParams.getAll("Brand"),
        Category: searchParams.getAll("Category"),
        _sort: searchParams.get("order") && "Price",
        _order: searchParams.get("order"),
      },
    };
    dispatch(getWomensuser(paramObj));
  }, [searchParams]);


  //  console.log(womens)
  //=====================>
  const handleAddToCart = (product: ProductType) => {
    const existingCartItems = localStorage.getItem("cart");
    let cart = [];
    if (existingCartItems) {
      cart = JSON.parse(existingCartItems);
    }

    let datatit = localStorage.getItem("cartdata");
  let len =[]
  if(datatit){
    len = JSON.parse(datatit);
    setDataLen(len)
  }
  if(len.includes(product.Title)){

  }else{
    len.push(product.Title);
    localStorage.setItem("cartdata", JSON.stringify(len));
  }

    // Check if the product is already in the cart
    const isProductInCart = cart.some(
      (item: any) => item.Title === product.Title
    );

    if (isProductInCart) {
      navigate("/cart")
    } else {
      // Add the product to the cart
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast({
        title: "Product added to cart",
        status: "success",
        duration: 3000, // 3 seconds
        isClosable: true,
        position: "top",
      });
      dispatch({type:CART_CHANGE})
    }
  };

  //==================================>

  return (
    //===================================================================================>

    <Flex direction={{ base: "column", md: "row" }}>
      <Helmet>
        <title>Women Fashion | UPSTYLE</title>
      </Helmet>
      {/* Sidebar */}
      <Box flex={{ base: "1", md: "3" }}>
        <Sidebar2 />
      </Box>

      {/* Main Content */}
      <Box
        flex={{ base: "2", md: "7" }}
        borderWidth={{ base: "0", md: "1px" }}
        p={4}
      >
        {isLoading
          ? skel.map((el) => {
              return <Skeleton height="200px" mb="20px" />;
            })
          : womens.map(
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
                  display={{ md: "flex" }}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box flexShrink={0} mr={{ base: 0, md: 4 }}>
                    <Link to={`/singleproduct/women/${id}`}>
                      {" "}
                      <Image src={image} alt={Title} maxW="200px" />
                    </Link>
                  </Box>
                  <VStack mt={{ base: 4, md: 0 }} align="flex-start" flex="1">
                    <Link to={`/singleproduct/women/${id}`}>
                      <Heading as="h3" size={"lg"}>
                        {Title}
                      </Heading>
                      <Heading as="h1" size={"md"} color={"Highlight"}>
                        {Category}
                      </Heading>
                      <Heading fontSize={"lg"} color={"ThreeDHighlight"}>
                        {Brand}
                      </Heading>
                      <Box style={{ display: "flex", gap: "6px" }}>
                        <Text color={"black"}>Price: </Text>
                        <Text color={"#DE6737"}> ${Price}</Text>
                      </Box>
                      <Text>Rating: {Rating}</Text>
                    </Link>
                    <Flex justifyContent="flex-start" gap={2}>
                      {Size.map((el, ind) => (
                        <Button
                          key={ind}
                          backgroundColor={"gray.300"}
                          borderRadius={"50%"}
                          p={2}
                        >
                          {el}
                        </Button>
                      ))}
                    </Flex>
                    {/* <Text>Available Sizes: {Size.join(', ')}</Text> */}

                    <Button
                      background="#DE6737"
                      size="md"
                      color="white"
                      _hover={{bg:"#DE6737"}}
                      onClick={() =>
                        handleAddToCart({
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
                        })
                      }
                    >
                      {datalen.includes(Title) ? "Go to Cart" : "Add to Cart"}
                    </Button>
                  </VStack>
                </Box>
              )
            )}
      </Box>
    </Flex>
  );
};



export default Women;
