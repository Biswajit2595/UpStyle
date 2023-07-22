import { Button, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://www.bizeta.net/wp-content/uploads/2021/09/noleggio-abiti-fashion.jpg)"
  }, [])

  const isAuth = useSelector((store:any)=> store.authReducer.isAuth);
  const isAdmin = useSelector((store:any)=> store.authReducer.isAdmin);
  const isError = useSelector((store:any)=> store.authReducer.isError)
  const isLoading = useSelector((store:any)=> store.authReducer.isLoading)
  const user = useSelector((store:any)=> store.authReducer.user);

  const navigate = useNavigate();

  if(isAuth || isAdmin){
    return <Navigate to='/' />
  }


  return (
    <Flex mb="120px" mt="130px">

      <form style={{width:"350px",margin:"auto",background:"transparent",backdropFilter:"blur(22px)", padding:"30px",borderRadius:"30px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <FormControl isRequired>
        <FormLabel fontWeight="bold">Enter Your Email</FormLabel>
        <InputGroup>
          <InputLeftElement>✉️</InputLeftElement>
          <Input _hover={{background:"#f0f0f0"}} border={isError? "1px solid red":"1px solid black"} background="white" type='email' placeholder='user@user.com' required/>
        </InputGroup><br/>


        <FormLabel fontWeight="bold">Enter Your Password</FormLabel>
        <InputGroup>
          <InputLeftElement>👁️</InputLeftElement>
          <Input _hover={{background:"#f0f0f0"}} border={isError? "1px solid red":"1px solid black"} background="white" type='password' placeholder='Enter Password' required/>
        </InputGroup>
      </FormControl>

      <Flex w="100%" justifyContent="space-between" mt="5px">
        <Text fontWeight="bold"><input style={{accentColor:"#ff4800"}} type='checkbox' /> Remember Me</Text>
        <Text fontWeight="semibold" color="blue">Forgot Password</Text>
      </Flex><br/>

      {isLoading ?<Button w="100%" disabled background="#ff4800" isLoading _hover={{background:"#ff4800"}} ></Button>  : <Button fontWeight="bold" color="white" background="#F56B33" _hover={{background:"#ff4800"}} w="100%" type='submit'>LOGIN</Button>}
      <Text textAlign="center" color="white" mt="20px">New User? <span onClick={()=> navigate("/signup")} style={{fontWeight:"bold",color:"#ff4800",cursor:"pointer"}}>Create Account</span></Text>
      </form>

    </Flex>
  )
}

export default Login