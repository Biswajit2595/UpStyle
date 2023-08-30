import { Button, Flex, Image, Img } from "@chakra-ui/react";
import React, { useEffect } from "react";
import error from "../Components/404.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

 function NotFound() {
  useEffect(() => {
    document.body.style.background = "#F7F7F7";
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>404 Error | UPSTYLE</title>
      </Helmet>
      <Flex w="100%" mt="60px" mb="20px" justifyContent="center">
        
        <Image
          justifyContent="center"
          w={{ base: "100%", sm: "90%", md: "80%", lg: "50%", xl: "50%" }}
          src={error}
          alt="not-foundpage"
        />
      </Flex>
      <Flex w="100%" mb="100px" justifyContent="center">
        <Button
          transition=".2s ease-in-out 0s"
          onClick={() => navigate("/")}
          background="#8B5E3B"
          color="white"
          cursor="pointer"
          _hover={{ background: "#91470e", transform: "scale(1.1)" }}
        >
          Go to HomePage
        </Button>
      </Flex>
    </div>
  );
}


export default NotFound;