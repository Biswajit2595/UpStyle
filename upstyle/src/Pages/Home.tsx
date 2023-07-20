import { Button, Flex, Text } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faShirt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    document.body.style.background = "#F2F2F3"
  }, [])

  const navigate = useNavigate()

  const bag = <FontAwesomeIcon size="lg" icon={faShoppingBag} />
  const shirt = <FontAwesomeIcon size='lg' icon={faShirt} />
  const bulb = <FontAwesomeIcon size='lg' icon={faLightbulb} />



  return (
    <div>
    {/* // UpperBody part */}
    <Flex id="header-parent" w="95%" margin="auto" justifyContent="space-between" mt="30px">
      <div >
      <img style={{ borderRadius: "40px" }} width="100%" src="https://www.united18.com/cdn/shop/products/0M3A4976.jpg?crop=center&height=1200&v=1648723055&width=1200" alt="" />

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
    <Flex w="90%" m="auto" mt="80px">
      <Text fontWeight="semibold" fontSize="30px">
        SOPA makes clothes {shirt} to elevate everyday life through lighthearted escapism. While styles vary by season, <span style={{border:"1px solid black",borderRadius:"30px",padding:"3px 10px"}}>{bulb} all collections</span> are guided by the ineffable sense of freedom that comes with travel. 
      </Text>
    </Flex>

    

    </div>
  )
}

export default Home