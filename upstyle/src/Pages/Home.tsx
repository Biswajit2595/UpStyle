import { Button, Flex, Text,Heading,Box ,SimpleGrid,Skeleton,Card,Stack,CardBody,Image} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPlayCircle, faShirt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import tshirt from "../Components/shirt-png.jpg"
import girlpic from "../Components/girl-pic.avif"
import tailor from "../Components/tailor.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/productReducer/action';
import { ProductType } from '../constants';

const Home = () => {

  const dispatch:any = useDispatch();
  const product = useSelector((store:any)=> store.productReducer.product)
  const isLoading= useSelector((store:any)=> store.productReducer.isLoading);
  let skel = new Array(6).fill(0);

  useEffect(() => {
    document.body.style.background = "#F2F2F3"
    dispatch(getProduct())
  }, [])

  const navigate = useNavigate()

  const bag = <FontAwesomeIcon size="lg" icon={faShoppingBag} />
  const shirt = <FontAwesomeIcon size='lg' icon={faShirt} />
  const bulb = <FontAwesomeIcon size='lg' icon={faLightbulb} />
  const player = <FontAwesomeIcon beatFade size='2xl' icon={faPlayCircle} />
  



  return (
    <div>
    {/* // UpperBody part */}
    <Flex id="header-parent" w="95%" margin="auto" justifyContent="space-between" mt="30px">
      <div >
      <img style={{ borderRadius: "40px" }} width="100%" src={tshirt} alt="shirt-brand-png" />

      {/* Button Container */}
      <div style={{ position: "absolute",bottom:"10%",left:"2%", width:"95%", display: "flex",justifyContent:"space-between" }}>
        <Button onClick={()=> navigate("/mens")} _hover={{background:"black"}} rightIcon={bag} p="15px 70px" border="2px solid black" cursor="pointer" background="black" color="white" borderRadius="30px">Men's Shop</Button>
        <Button onClick={()=> navigate("/womens")} _hover={{background:"none"}} rightIcon={bag} p="15px 70px" border="2px solid white" cursor="pointer" background="transparent" color="white" borderRadius="30px">Women's Shop</Button>
      </div>
    </div>
      <div >
        <div className='header-text' style={{marginBottom:"22px",background:"#d4d3cf", width:"100%", height:"63%",fontSize:"50px",fontFamily:"segoe ui black", lineHeight:"55px",borderRadius:"40px", padding:"30px 30px"}}>
          REAL DESIGNS<br/>
          BY REAL ARTISTS<br/>
          FOR REAL PEOPLE

          <Text style={{fontSize:"20px",fontFamily:"auto",lineHeight:"22px",marginTop:"110px"}}>We're challenging conventional retails, putting an end to
          dead stock, unconventional waste and more fantastic.</Text>
        </div>

        <Flex w="100%" justifyContent="space-between" gap="10px" className='head-img'>
          <div className='head-image1'><img width="100%" src="https://img.freepik.com/free-photo/medium-shot-man-desert-with-trucker-hat_23-2149410203.jpg" alt="" /></div>
          <div className='head-image2'><img width="100%" src="https://img.freepik.com/free-photo/medium-shot-smiley-man-desert-with-trucker-hat_23-2149410204.jpg" alt="" /></div>
          {/* <div className='head-image3'><img width="100%" src="https://m.media-amazon.com/images/I/31AwKqvrXbL.jpg" alt="" /></div> */}
        </Flex>
        
      </div>
    </Flex>

    {/* // Text and Products showing */}
    <Flex w="90%" m="auto" mt="60px">
      <Text fontWeight="semibold" fontSize={{base:"20px",sm:"23px",md:"26px",lg:"30px",xl:"30px"}}>
        SOPA makes clothes {shirt} to elevate everyday life through escapism. While styles vary by season, <span style={{border:"1px solid black",borderRadius:"30px",padding:"3px 10px"}}>{bulb} all collections</span> are guided by the ineffable sense of freedom that comes with travel. 
      </Text>
    </Flex>

    {/* Product data showing place */}

    <Flex w="90%" m="auto" mt="60px" textAlign="left" letterSpacing="-2px">
      <Heading fontFamily="segoe ui black">SHOP BY ESSENTIALS</Heading>
    </Flex>

    <SimpleGrid className='box-product' columns={{base:1,sm:2,md:3,lg:4,xl:5}} w="90%" m="auto" mt="30px" gap="5px" textAlign="center" fontFamily="impact" fontSize="20px" letterSpacing="1px">
      <Box padding="10px 10px" borderRadius="30px" border="1px solid black">ALL<span style={{fontSize:"10px"}}>27</span></Box>
      <Box padding="10px 10px" borderRadius="30px" border="1px solid black" background="black" color="white">STYLISH COLLECTION<span style={{fontSize:"10px"}}>57</span></Box>
      <Box padding="10px 10px" borderRadius="30px" border="1px solid black">MEN COLLECTION<span style={{fontSize:"10px"}}>72</span></Box>
      <Box padding="10px 10px" borderRadius="30px" border="1px solid black">WOMEN COLLECTION<span style={{fontSize:"10px"}}>112</span></Box>
      <Box padding="10px 10px" borderRadius="30px" border="1px solid black">FLASH SALE<span style={{fontSize:"10px"}}>89</span></Box>
    </SimpleGrid>

    <SimpleGrid columns={{base:1,sm:2,md:2,lg:3,xl:3}} w="90%" m="auto" mt="30px" gap="20px">
      {
        isLoading ? skel.map((item)=>(
          <Skeleton height="300px" borderRadius="50px" />
        )) : 
        product.map((item:ProductType)=>(
          <Card p="0px" bg="transparent" key={item.id} borderRadius='40px 40px 20px 20px' >
            <CardBody p="0" borderRadius='40px 40px 20px 20px' pb="10px" overflow="hidden">
              <Image className='product-img' transition="0.3s"
                src={item.image}
                alt={item.Title}
                borderRadius='40px'
              />
              <Stack mt='6' spacing='3'>
                <Flex w="95%" m="auto" justifyContent="space-between">
                  <Text fontWeight="bold">{item.Title}</Text>
                  <Text fontWeight="semibold">{item.Brand}</Text>
                </Flex>
                <Text fontWeight="bold" color="#DE6737" ml="10px"><span style={{textDecoration:"line-through",color:"grey"}}>${item.Price*1.5}</span> ${item.Price}</Text>
              </Stack>
            </CardBody>
            
          </Card>
        ))
      }

    </SimpleGrid>

    {/* video above part */}

    <Flex w={{base:"100%",sm:"90%",md:"90%",lg:"90%",xl:"90%"}} m="auto" mt="60px" justifyContent="space-between" direction={{base:"column",sm:"column",md:"column",lg:"row",xl:"row"}}>
      <Flex display="block" w={{base:"100%",sm:"100%",md:"100%",lg:"63%",xl:"63%"}} background="#f56b33" borderRadius="30px">
        <div style={{width:"90%",margin:"auto", fontFamily:"segoe ui black",lineHeight:"60px", fontSize:"50px",marginTop:"30px",marginBottom:"90px"}}>
          WE'RE CHANGING<br/>
          THE WAY THINGS<br/>
          GET MADE
        </div>
        
        <hr style={{border:"0.031rem solid black",marginBottom:"50px"}}/>

        <Flex w="90%" justifyContent="space-between" m="auto" mb="20px">
          <div style={{width:"47%"}}>
            <Text fontWeight="bold" mb="20px"><span style={{background:"black",color:"white",borderRadius:"50%",padding:"10px"}}>{bulb}</span> MISSION</Text>
            <Text fontWeight="semibold" lineHeight="20px">We're on a mission to empower creative independence in a commercial and incredible.</Text>
          </div>
          <div style={{width:"47%"}}>
            <Text fontWeight="bold" mb="20px"><span style={{background:"black",color:"white",borderRadius:"50%",padding:"10px"}}>{shirt}</span> SUSTAINBILITY</Text>
            <Text fontWeight="semibold" lineHeight="20px">We're challenging conventional retail, putting an end to dead stock, unconventional waste and more funtastic.</Text>
          </div>
        </Flex>
      </Flex>

      <Flex display={{base:"none",sm:"none",md:"none",lg:"block",xl:"block"}} style={{width:"34%",borderRadius:"30px"}}>
        <img style={{borderRadius:"30px"}} width="100%" src={girlpic} alt="logo-shirt" />
      </Flex>

    </Flex>

    {/* video part body */}

    <Flex w="100%" display="block" mt="60px" mb="80px">
      <div style={{width:"90%",margin:"auto", fontFamily:"segoe ui black",marginBottom:"20px",letterSpacing:"-1px"}}>
        <Text fontSize={{base:"30px",sm:"38px",md:"45px",lg:"47px",xl:"47px"}}>WANT TO DESIGN YOUR OWN? CALM, WE CAN DO IT!</Text>
      </div>
      <div style={{width:"90%", margin: "auto", position: "relative"}}>
        <img style={{width: "100%",borderRadius: "30px"}} src={tailor} alt="tailor-img" />

        
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",color:"white",fontSize:"30px"}}>
          
          {player}
        </div>
      </div>

    </Flex>

    </div>
  )
}

export default Home
