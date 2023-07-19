import { Button, Flex, Text } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    document.body.style.background = "#F2F2F3"
  }, [])

  const navigate = useNavigate()

  const bag = <FontAwesomeIcon size="lg" icon={faShoppingBag} />


  return (
    <Flex w="95%" margin="auto" justifyContent="space-between">
      <div style={{ width: "48%", position: "relative" }}>
      <img style={{ borderRadius: "40px" }} width="100%" src="https://www.united18.com/cdn/shop/products/0M3A4976.jpg?crop=center&height=1200&v=1648723055&width=1200" alt="" />

      {/* Button Container */}
      <div style={{ position: "absolute",bottom:"5%",left:"2%", width:"95%", display: "flex",justifyContent:"space-between" }}>
        <Button onClick={()=> navigate("/mens")} rightIcon={bag} p="15px 80px" border="2px solid black" cursor="pointer" background="black" color="white" borderRadius="30px">Men's Shop</Button>
        <Button onClick={()=> navigate("/womens")} rightIcon={bag} p="15px 80px" border="2px solid white" cursor="pointer" background="transparent" color="white" borderRadius="30px">Women's Shop</Button>
      </div>
    </div>
      <div style={{width:"48%"}}>
        <div style={{marginBottom:"22px",background:"#d4d3cf", width:"100%", height:"63%",fontSize:"50px",fontFamily:"segoe ui black", lineHeight:"55px",borderRadius:"40px", padding:"30px 30px"}}>
          REAL DESIGNS<br/>
          BY REAL ARTISTS<br/>
          FOR REAL PEOPLE

          <Text style={{fontSize:"20px",fontFamily:"auto",lineHeight:"22px",marginTop:"110px"}}>We're challenging conventional retails, putting an end to
          dead stock, unconventional waste and more fantastic.</Text>
        </div>

        <Flex w="100%" justifyContent="space-between" gap="10px" className='head-img'>
          <div style={{width:"48%"}}><img  width="100%" src="https://img.freepik.com/free-photo/medium-shot-man-desert-with-trucker-hat_23-2149410203.jpg" alt="" /></div>
          <div style={{width:"48%"}}><img width="100%" src="https://img.freepik.com/free-photo/medium-shot-smiley-man-desert-with-trucker-hat_23-2149410204.jpg" alt="" /></div>

        </Flex>
        
      </div>
    </Flex>
  )
}

export default Home