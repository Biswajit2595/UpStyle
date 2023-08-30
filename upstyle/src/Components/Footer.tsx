import { Flex, Input, InputGroup, InputRightElement, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../Components/UPSTYLE_LOGO.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const send = <FontAwesomeIcon size='sm' icon={faPaperPlane} />
  const navigate = useNavigate()

  return <>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1400 280" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 64.80133185349611,200.4821309655938 129.60266370699222,200.96426193118756 176,218 C 222.39733629300778,235.03573806881244 250.39067702552722,268.62508324084354 306,272 C 361.6093229744728,275.37491675915646 444.8346281908989,248.53540510543843 505,243 C 565.1653718091011,237.46459489456157 602.2708102108768,253.2332963374029 643,253 C 683.7291897891232,252.7667036625971 728.0821309655939,236.53140954495007 785,209 C 841.9178690344061,181.46859045504993 911.4006659267479,142.6410654827969 967,157 C 1022.5993340732521,171.3589345172031 1064.315205327414,238.90432852386238 1111,235 C 1157.684794672586,231.09567147613762 1209.3385127635959,155.74162042175362 1265,138 C 1320.6614872364041,120.25837957824639 1380.3307436182022,160.1291897891232 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#000" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

<Flex display="block" w="100%" background="black" pt="40px" pb="40px">

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
  </>
}

export default Footer