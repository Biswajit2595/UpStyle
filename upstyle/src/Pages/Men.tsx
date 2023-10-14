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
  SkeletonCircle,
  Input,
  InputGroup,
  InputLeftElement,
  GridItem,
  Grid,
} from "@chakra-ui/react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { ProductType } from "../constants";
import { getMensuser } from "../Redux/productReducer/action";
import { Sidebar } from "../Components/Sidebar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CART_CHANGE } from "../Redux/actionTypes";
import { Helmet } from "react-helmet";
import { SearchIcon } from "@chakra-ui/icons";

const Men = () => {

  const [datalen, setDataLen] = useState<String[]>([]);

  useEffect(() => {
    document.body.style.background = "#F2F2F3";
    let datatit = localStorage.getItem("cartdata");
    let len = [];
    if (datatit) {
      len = JSON.parse(datatit);
      setDataLen(len);
    }
  }, [datalen]);

  const imageSize = useBreakpointValue({
    base: "120px",
    md: "150px",
    lg: "200px",
  });
  const titleSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const btnSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  let skel = new Array(8).fill(0);
  const navigate = useNavigate();
  const [filteredMens, setFilteredMens] = useState([]);
  const [searchVal, setSearchVal] = useState<any>("");

  const dispatch: any = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, mens } = useSelector((store: any) => {
    return {
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
      mens: store.productReducer.mens,
    };
  }, shallowEqual);
  // console.log(mens)
  //console.log(paramObj)

  useEffect(() => {
    const lowerSearchVal = searchVal.toLowerCase();
    const filteredProducts = mens.filter((product: any) => {
      return (
        product.Title.toLowerCase().includes(lowerSearchVal) ||
        product.Category.toLowerCase().includes(lowerSearchVal) ||
        product.Brand.toLowerCase().includes(lowerSearchVal)
      );
    });
    setFilteredMens(filteredProducts);
  }, [searchVal, mens]);
  // console.log(filteredMens)
  useEffect(() => {
    let paramObj = {
      params: {
        Brand: searchParams.getAll("Brand"),
        Category: searchParams.getAll("Category"),
        _sort: searchParams.get("order") && "Price",
        _order: searchParams.get("order"),
      },
    };
    // console.log(paramObj);
    dispatch(getMensuser(paramObj));
    document.body.style.background = "#F2F2F3";
  }, [searchParams]);

  //console.log(mens);

  //  ====================================================================>



  const toast = useToast();

  const handleAddToCart = (product: ProductType) => {
    const existingCartItems = localStorage.getItem("cart");
    let cart = [];
    if (existingCartItems) {
      cart = JSON.parse(existingCartItems);
    }

    let datatit = localStorage.getItem("cartdata");
    let len = [];
    if (datatit) {
      len = JSON.parse(datatit);
      setDataLen(len);
    }
    if (len.includes(product.Title)) {
    } else {
      len.push(product.Title);
      setDataLen(len);
      localStorage.setItem("cartdata", JSON.stringify(len));
    }

    // Check if the product is already in the cart
    const isProductInCart = cart.some(
      (item: any) => item.Title === product.Title
    );

    if (isProductInCart) {
      navigate("/cart");
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
      dispatch({ type: CART_CHANGE });
    }
  };

  return (
    //================================================================================>

    <Flex direction={{ base: "column", md: "row" }} gap="1" ml={10} mr={10} p={6}>
      <Helmet>
        <title>Men Fashion | UPSTYLE</title>
      </Helmet>
      {/* Sidebar */}
      <Box flex={{ base: "1", md: "3" }} >
      <InputGroup maxW="300px" mb="2" position={{base:"static",sm:"static",md:"static",lg:"sticky",xl:"sticky"}} top={"70px"} boxShadow={"sm"} style={{backgroundColor:"white",borderRadius:"40px" }}>
          <InputLeftElement >
            <SearchIcon />
          </InputLeftElement>
          <Input
          w={{base:"90%",sm:"90%",md:"300px",lg:"300px",xl:"300px"}}
            placeholder="Search for Items"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </InputGroup>
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        flex={{ base: "2", md: "7" }}
        borderWidth={{ base: "0", md: "1px" }}
        backgroundColor={{base:"transparent",sm:"white",md:"white",lg:"white",xl:"white"}}
        boxShadow="md"
        borderRadius="5px"
        mt="2"
        p={4}
      >
        {isLoading ? (
          skel.map((el) => {
            return <Skeleton height="200px" mb="20px" />;
          })
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            {filteredMens.map(
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
                <GridItem key={id}>
                  <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    mb={4}
                    display={{ md: "flex" }}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Box flexShrink={0} mr={{ base: 0, md: 4 }}>
                      <Link to={`/singleproduct/men/${id}`}>
                        <Image boxShadow="md" src={image} alt={Title} maxW="200px" />
                      </Link>
                    </Box>
                    <VStack mt={{ base: 4, md: 0 }} align="flex-start" flex="1">
                      <Link to={`/singleproduct/men/${id}`}>
                        <Heading as="h3" size="xl">
                          {Title}
                        </Heading>
                        <Heading as="h1" size="lg">
                          {Category}
                        </Heading>
                        <Text fontSize="lg">{Brand}</Text>
                        <Box style={{ display: "flex", gap: "6px" }}>
                          <Text color="black">Price: </Text>
                          <Text color="#DE6737"> ${Price}</Text>
                        </Box>
                        <Text>Rating: {Rating}</Text>
                      </Link>
                      {/* <Text>Available Sizes: {Size.join(', ')}</Text> */}
                      <Flex justifyContent="flex-start" gap={2}>
                        {Size.map((el, ind) => (
                          <Button
                            key={ind}
                            backgroundColor="gray.300"
                            borderRadius="50%"
                            p={2}
                          >
                            {el}
                          </Button>
                        ))}
                      </Flex>
                      <Button
                        background="#DE6737"
                        size="md"
                        color="white"
                        _hover={{ bg: "#DE6737" }}
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
                </GridItem>
              )
            )}
          </Grid>
        )}
      </Box>
    </Flex>
  );
};

export default Men;