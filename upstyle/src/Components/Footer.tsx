import { Flex, Input, InputGroup, InputRightElement, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Components/UPSTYLE_LOGO.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const send = <FontAwesomeIcon size='sm' icon={faPaperPlane} />
  const navigate = useNavigate()

  return (
    <Flex display="block" w="100%" mt="40px" background="black" pt="40px" pb="40px">

      <SimpleGrid w="90%" m="auto" color="white" columns={{base:2,sm:3,md:4,lg:5,xl:5}} gap="30px" alignItems={{base:"center",sm:"center",md:"none",lg:"none",xl:"none"}}>

        <div>
          <img onClick={()=> navigate("/")} style={{filter:"invert(100%)",cursor:"pointer"}} width="80%" src={logo} alt="logo" /><br/><br/><br/>
          <Text>REAL DESIGNS BY REAL ARTISTS FOR REAL PEOPLE</Text>
        </div>

        <div className='footer-div'>
          <Text fontWeight="bold">PRODUCT</Text><br/>
          <Text onClick={()=> navigate("/mens")} fontWeight="semibold" color="grey">Mens</Text>
          <Text onClick={()=> navigate("/womens")} fontWeight="semibold" color="grey">Womens</Text>
          <Text fontWeight="semibold" color="grey">Dresses</Text>
          <Text fontWeight="semibold" color="grey">Outwear</Text>
          <Text fontWeight="semibold" color="grey">Bottoms</Text>
        </div>

        <div className='footer-div'>
          <Text fontWeight="bold">BUYING</Text><br/>
          <Text fontWeight="semibold" color="grey">Shop</Text>
          <Text fontWeight="semibold" color="grey">Terms of use</Text>
          <Text fontWeight="semibold" color="grey">Privacy</Text>
          <Text fontWeight="semibold" color="grey">How it works</Text>
          <Text fontWeight="semibold" color="grey">Customer Service</Text>
        </div>

        <div className='footer-div'>
          <Text fontWeight="bold">SOCIAL</Text><br/>
          <Text fontWeight="semibold" color="grey">Instagram</Text>
          <Text fontWeight="semibold" color="grey">Facebook</Text>
          <Text fontWeight="semibold" color="grey">Twitter</Text>
          <Text onClick={()=> navigate("/about")} fontWeight="semibold" color="grey">About US</Text>
          <Text fontWeight="semibold" color="grey">Contact</Text>
        </div>

        <div className='footer-div'>
          <Text fontWeight="bold">JOIN OUT COMMUNITY</Text><br/>
          <InputGroup>
            <InputRightElement background="#f56b33" borderRadius="50%" color="black">{send}</InputRightElement>
            <Input border="1px solid grey" placeholder="EMAIL ADDRESS" borderRadius="20px" />
          </InputGroup>
        </div>

      </SimpleGrid>

    </Flex>
  )
}

export default Footer