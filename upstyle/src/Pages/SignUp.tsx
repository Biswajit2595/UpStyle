import { Button, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select, Text, useToast } from '@chakra-ui/react'
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { signuptype } from '../constants'
import { USER_FAIL, USER_LOADING, USER_SIGNUP_SUCCESS } from '../Redux/actionTypes'
import axios from 'axios'
import { makingPost } from '../Redux/authReducer/action'

let initialState = {
  username:"",
  email:"",
  password:"",
  address: "",
  phone:"",
  state:"",
  buy:[],
  cart:[]
}

const SignUp = () => {

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://en.idei.club/uploads/posts/2023-06/1686873401_en-idei-club-p-mall-hall-dizain-krasivo-4.jpg)"
  }, [])

  const dispatch:any = useDispatch()

  const isAuth = useSelector((store:any)=> store.authReducer.isAuth);
  const isAdmin = useSelector((store:any)=> store.authReducer.isAdmin);
  const isLoading = useSelector((store:any)=> store.authReducer.isLoading)

  const navigate = useNavigate();
  const toast = useToast()

  const [formdata,setFormdata] = useState(initialState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    dispatch(makingPost(formdata)).then((res:any)=>{
      dispatch({type:USER_SIGNUP_SUCCESS});
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        position: "bottom-right",
        isClosable: true,
      });
      setFormdata(initialState)

      setTimeout(() => {
        navigate("/login")
      }, 3000);


  }).catch((error:any)=>{
      dispatch({type: USER_FAIL})
      toast({
        title: "Something Error, Please try again!",
        status: "error",
        duration: 2000,
        position: "bottom-left",
        isClosable: true,
      });
  })

    
    
  }

  

  if(isAuth){
    return <Navigate to='/' />
  }


  return (
    <Flex mb="120px" mt="90px">

      <form onSubmit={handleSubmit} style={{width:"400px",margin:"auto",background:"transparent",backdropFilter:"blur(22px)", padding:"30px",borderRadius:"30px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <FormControl isRequired>
      <FormLabel color="#ff4800" fontWeight="bold">Enter Full Name</FormLabel>
        <InputGroup>
          <InputLeftElement>👤</InputLeftElement>
          <Input value={formdata.username} onChange={(e)=> setFormdata({...formdata,username:e.target.value})} _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" type='text' placeholder='Enter Your Name' required/>
        </InputGroup><br/>


        <FormLabel color="#ff4800" fontWeight="bold">Enter Active Email</FormLabel>
        <InputGroup>
          <InputLeftElement>✉️</InputLeftElement>
          <Input value={formdata.email} onChange={(e)=> setFormdata({...formdata,email:e.target.value})} _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" type='email' placeholder='user@user.com' required/>
        </InputGroup><br/>


        <FormLabel color="#ff4800" fontWeight="bold">Enter Password</FormLabel>
        <InputGroup>
          <InputLeftElement>👁️</InputLeftElement>
          <Input value={formdata.password} onChange={(e)=> setFormdata({...formdata,password:e.target.value})} _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" type='password' placeholder='Enter Password' required/>
        </InputGroup><br/>

        <FormLabel color="#ff4800" fontWeight="bold">Enter Your Full Address</FormLabel>
        <InputGroup>
          <InputLeftElement>🏠</InputLeftElement>
          <Input value={formdata.address} onChange={(e)=> setFormdata({...formdata,address:e.target.value})} _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" type='text' placeholder='Enter Full Address' required/>
        </InputGroup><br/>

        <FormLabel color="#ff4800" fontWeight="bold">Enter Your Phone No.</FormLabel>
        <InputGroup>
          <InputLeftElement>📞</InputLeftElement>
          <Input value={formdata.phone} onChange={(e)=> setFormdata({...formdata,phone:e.target.value})} _hover={{background:"#f0f0f0"}} border="1px solid black" background="white" maxLength={6} type='number' placeholder='Enter Your Phone No.' required/>
        </InputGroup><br/>

        <FormLabel color="#ff4800" fontWeight="bold">Select State Name</FormLabel>
        <InputGroup>
          <Select background="white" value={formdata.state} onChange={(e)=> setFormdata({...formdata,state:e.target.value})} required>
            <option value="">--Select Your State--</option>
            <option value="Bihar">Bihar</option>
            <option value="Kerla">Kerla</option>
            <option value="Assam">Assam</option>
          </Select>
        </InputGroup><br/>
        </FormControl>

      {isLoading ?<Button w="100%" disabled background="#ff4800" isLoading _hover={{background:"#ff4800"}} ></Button>  : <Button fontWeight="bold" color="white" background="#F56B33" _hover={{background:"#ff4800"}} w="100%" type='submit'>Create Account</Button>}
      <Text textAlign="center" color="white" mt="20px">Already Registered? <span onClick={()=> navigate("/login")} style={{fontWeight:"bold",color:"#ff4800",cursor:"pointer"}}>Go to Login</span></Text>
      </form>

    </Flex>
  )
}

export default SignUp