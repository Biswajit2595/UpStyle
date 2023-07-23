import { Button, Flex, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [price,setPrice] = useState(0);
  const [data,setData] = useState([])

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://cutewallpaper.org/21/light-gray-wallpaper/Samsung-Galaxy-S9-Camera-Lens-Blue.jpg)"
    document.body.style.backgroundSize = "cover"

    
    getTotal();

  }, [])

  const getTotal = ()=>{

    let cartdata= localStorage.getItem("cart");
    let data;
    if(cartdata){
      data = JSON.parse(cartdata);
      setData(JSON.parse(cartdata));
    }else{
      data = []
    }

    let total =0;
    data?.map((item:any)=>(
      total+= item.Price*item.Quantity
    ))
    let totalprice = (total*0.08)+10+total;


    if(data.length>0){
      setPrice(totalprice)
    }else{
      setPrice(0)
    }
  }

  const OverlayOne = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropBlur='5px'
    />
  )

  const {isOpen,onOpen,onClose} = useDisclosure();
  const navigate = useNavigate()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    onOpen()
  }

  const handleClose = ()=>{
    localStorage.removeItem("cart");
    onClose();
    navigate("/")
  }

  

  const user = useSelector((store:any)=> store.authReducer.user);


  return (
    <>
    <Flex mt="10px" w="100%" mb="100px">
      <form onSubmit={handleSubmit} style={{width:"350px",margin:"auto",padding:"20px",borderRadius:"30px",}}>
        <Text fontSize="20px" letterSpacing="2px" fontWeight="bold" textAlign="center" color="#ff4800" fontFamily="stencil">PAYMENT STEPS</Text><br/>
        <FormControl>

          <Text fontWeight="bold">Total Price:- <span style={{color:"#ff4800"}}>${price}</span></Text>
          <Text fontWeight="bold">Total Items:- <span style={{color:"#ff4800"}}>{data.length}</span></Text><br/>
          <FormLabel fontWeight="bold">Enter Your Name</FormLabel>
          <InputGroup>
            <InputLeftElement>✏️</InputLeftElement>
            <Input _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" value={user.username} type='text' required/>
          </InputGroup><br/>

          <FormLabel fontWeight="bold">Enter Your Address</FormLabel>
          <InputGroup>
            <InputLeftElement>✏️</InputLeftElement>
            <Input _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" value={user.address} type='text' required/>
          </InputGroup><br/>

          <FormLabel fontWeight="bold">Enter Your Phone No.</FormLabel>
          <InputGroup>
            <InputLeftElement>✏️</InputLeftElement>
            <Input _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" value={user.phone} type='number' required/>
          </InputGroup><br/>
          <FormLabel fontWeight="bold">Enter Your Payment Details</FormLabel>
          <InputGroup>
            <InputLeftElement>✏️</InputLeftElement>
            <Input _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" type='text' placeholder="Enter Card Holder Name" required/>
          </InputGroup>

          <Flex w="100%" justifyContent="space-between" gap="10px" mt="5px" mb="5px">
            <Input border="1px solid black" background="white" placeholder="CVV" type="password" required/>
            <Input border="1px solid black" background="white" type="month" required/>
          </Flex>

          <InputGroup>
            <InputLeftElement>✏️</InputLeftElement>
            <Input _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" type='password' placeholder="Enter Card Number(16 Digit)" required/>
          </InputGroup><br/>
        
        
        </FormControl>
        <Button isDisabled={data.length===0} _hover={{bg:"#ff4800",border:"none"}} w="100%" bg="#ff4800" color="white" borderBottom="2px solid black" borderRight="2px solid black" type="submit">Confirm Order</Button>
      </form>
    </Flex>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <ModalCloseButton />
        <ModalBody>
          <Image margin="auto" w="50%" src='https://www.explore-liverpool.com/wp-content/uploads/2019/12/partypopper.gif' />
          <Text fontWeight="bold" textAlign="center" fontSize="20px">Order Placed Successfully</Text>
          <Text fontWeight="semibold" textAlign="center">Thanks for Shopping🙂</Text>
        </ModalBody>
        <ModalFooter>
          <Button _hover={{bg:"black"}} w="50%" m="auto" bg="#000" color="white" onClick={handleClose}>OK</Button>
        </ModalFooter>
      </ModalContent>
      </Modal>
      </>
  )
}

export default Checkout