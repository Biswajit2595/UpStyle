import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Input,
    Button,Text, useToast
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { faCreditCard, faHome, faInfoCircle, faShirt, faShoppingBag, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../Components/UPSTYLE_LOGO.png"
import { useNavigate } from 'react-router-dom';
import { USER_LOGOUT } from '../Redux/actionTypes';
import { useEffect, useState } from 'react';

  interface props{
    isOpen: boolean;
    onClose: ()=> void;
  }

export function Menubar({ isOpen, onClose }:props) {

  const isAuth = useSelector((store:any)=> store.authReducer.isAuth);
  const isAdmin = useSelector((store:any)=> store.authReducer.isAdmin);
  const username = useSelector((store:any)=> store.authReducer.user.username);
  const cartlength = useSelector((store:any)=> store.productReducer.cartlength);
  const navigate = useNavigate()
  const toast = useToast();
  const dispatch:any = useDispatch()
  const [data,setData] = useState([]);

  useEffect(()=>{
    let cartdata= localStorage.getItem("cart");
    
    if(cartdata){
      setData(JSON.parse(cartdata));
    }else{
      setData([])
    }
  },[cartlength])

  const handleLogout = ()=>{
    dispatch({type: USER_LOGOUT})
    toast({
      title: "Logout Successfull",
      status: "success",
      position: "top",
      isClosable: true,
    })
    onClose()
  }

  const home = <FontAwesomeIcon size='sm' icon={faHome} />
  const baskets = <FontAwesomeIcon size='sm' icon={faShoppingBag} />
  const payment = <FontAwesomeIcon size='sm' icon={faCreditCard} />
  const order = <FontAwesomeIcon size='sm' icon={faShoppingCart} />
  const signin = <FontAwesomeIcon size='sm' icon={faSignInAlt} />
  const signout = <FontAwesomeIcon size='sm' icon={faSignOutAlt} />
  const info = <FontAwesomeIcon size='sm' icon={faInfoCircle} />
  const shirt = <FontAwesomeIcon size='lg' icon={faShirt} />
    

    return (
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><img onClick={()=> {onClose(); navigate("/")}} width="45%" src={logo} alt='logo' /></DrawerHeader>

          <DrawerBody>
            {isAuth && <Text fontWeight="bold" m="12px">Hi, <span style={{color:"blue"}}>{username}</span></Text>}
            {isAdmin && <Text fontWeight="bold" m="12px" color="blue">Welcome Admin🙂</Text>}
            {isAdmin===false && <Button w="100%" mb="3px" variant="" justifyContent="flex-start" leftIcon={home}>My Account</Button>}
            {isAdmin && <Button onClick={()=>{onClose(); navigate("/admin")}} w="100%" mb="3px" variant="" justifyContent="flex-start" leftIcon={home}>MANAGE DATA</Button>}<br/>
            <Button onClick={()=> {onClose(); navigate("/cart")}} w="100%" mb="3px" variant="" justifyContent="flex-start" leftIcon={order}>My Cart {isAuth && <span style={{background:"black",color:"white",border:"1px solid black",borderRadius:"50%",padding:"2px 8px"}}>{data.length}</span>}</Button><br/>
            <Button w="100%" mb="3px" variant="" justifyContent="flex-start" leftIcon={baskets}>My Orders</Button><br/>
            <Button onClick={()=> {onClose(); navigate("/payment");}} w="100%" mb="3px" variant="" justifyContent="flex-start" leftIcon={payment}>My Payment</Button><br/>
            <Accordion allowMultiple border="none">
              <AccordionItem border="none">
                <h2>
                  <AccordionButton border="none">
                    <Button w="100%" mb="3px" variant="" justifyContent="flex-start">
                      FASHIONS
                    </Button>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} border="none">
                <Button onClick={()=> {onClose(); navigate("/mens")}} w="100%" mb="3px" variant="" borderRadius="0px" borderBottom="1px solid grey" justifyContent="flex-start" leftIcon={shirt}>MENS</Button><br/>
                <Button onClick={()=> {onClose(); navigate("/womens")}} w="100%" mb="3px" variant="" borderRadius="0px" borderBottom="1px solid grey" justifyContent="flex-start" leftIcon={shirt}>WOMENS</Button>
                </AccordionPanel>
              </AccordionItem>
              </Accordion>
            <Accordion allowMultiple border="none">
              <AccordionItem border="none">
                <h2>
                  <AccordionButton border="none">
                    <Button w="100%" mb="3px" variant="" justifyContent="flex-start">
                      Help
                    </Button>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} border="none">
                <Button w="100%" mb="3px" variant="" borderRadius="0px" borderBottom="1px solid grey" justifyContent="flex-start" leftIcon={info}>FAQ</Button><br/>
                <Button w="100%" mb="3px" variant="" borderRadius="0px" borderBottom="1px solid grey" justifyContent="flex-start" leftIcon={info}>DOCS</Button><br/>
                </AccordionPanel>
              </AccordionItem>
              </Accordion>
              <Button onClick={()=> {onClose(); navigate("/about")}} w="100%" mb="3px" variant="" justifyContent="flex-start" leftIcon={info}>ABOUT US</Button><br/>
          </DrawerBody>

          <DrawerFooter>
          {isAuth || isAdmin ? <Button onClick={handleLogout} w="100%" variant="solid" colorScheme='red' justifyContent="flex-start" leftIcon={signout}>Logout</Button>: <Button onClick={()=> navigate("/login")} w="100%" variant="solid" colorScheme='blue' justifyContent="flex-start" leftIcon={signin}>SignUp/Login</Button>}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
}
