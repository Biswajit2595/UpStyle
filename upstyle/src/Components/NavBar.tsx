import React,{useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {Flex,Text,Box, useDisclosure,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, useToast} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faBars, faCreditCard, faHome, faInfoCircle, faSearch,faShoppingBag,faShoppingBasket, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../Components/UPSTYLE_LOGO.png"
import { useDispatch, useSelector } from 'react-redux';
import { Menubar } from './Menubar';
import { USER_LOGOUT } from '../Redux/actionTypes';

const links = [
  {to: "/about", name:"ABOUT", id:1},
  {to: "/mens", name:"MEN", id:2},
  {to: "/womens", name:"WOMEN", id:3},
  {to: "/contact", name:"CONTACT", id:4}
];


const NavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector((store:any)=> store.authReducer.isAuth);
  const isAdmin = useSelector((store:any)=> store.authReducer.isAdmin);
  const username = useSelector((store:any)=> store.authReducer.user.username);

  const search = <FontAwesomeIcon size="lg" icon={faSearch} />
  const basket = <FontAwesomeIcon fade size="lg" icon={faShoppingBasket} />
  const user = <FontAwesomeIcon beatFade size="xl" icon={faUserCircle} />
  const bars = <FontAwesomeIcon size='lg' icon={faBars} />
  const home = <FontAwesomeIcon size='sm' icon={faHome} />
  const baskets = <FontAwesomeIcon size='sm' icon={faShoppingBag} />
  const payment = <FontAwesomeIcon size='sm' icon={faCreditCard} />
  const order = <FontAwesomeIcon size='sm' icon={faShoppingCart} />
  const signin = <FontAwesomeIcon size='sm' icon={faSignInAlt} />
  const signout = <FontAwesomeIcon size='sm' icon={faSignOutAlt} />
  const info = <FontAwesomeIcon size='sm' icon={faInfoCircle} />

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()
  const cart = useSelector((store:any)=> store.productReducer.cart);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const cartlength = useSelector((store:any)=> store.productReducer.cartlength);

  const [data,setData] = useState([]);

  useEffect(()=>{
    let cartdata= localStorage.getItem("cart");
    
    if(cartdata){
      setData(JSON.parse(cartdata));
    }else{
      setData([])
    }
  },[cartlength])



  useEffect(() => {
    const handleScroll = () => {
      const firstFlexHeight = 35;
      setIsSticky(window.pageYOffset >= firstFlexHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = ()=>{
    dispatch({type: USER_LOGOUT})
    toast({
      title: "Logout Successfull",
      status: "success",
      position: "top",
      isClosable: true,
    })
  }

  return (
    <div style={{marginBottom: isSticky? "90px": "0px"}}>
      <Flex w="100%" background="black" color="white" fontStyle="italic" h="35px" alignItems="center" justifyContent="center" >
        free shipping on u.s. orders over $50</Flex>

      <Flex zIndex="999999" id='navbar-menu' position={isSticky ? 'fixed' : 'static'} top="0" boxShadow={isSticky? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"}>

      <img onClick={()=> navigate("/")} style={{cursor:"pointer"}} src={logo} alt="logo" width="130px" sizes="fixed" />

      <Flex alignItems="center" gap="30px" cursor="pointer" display={{base:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}}>
        {
          links.map((item)=>(
            <NavLink key={item.id} to={item.to} style={({isActive})=>{
              return {
                  color: "black",
                  fontWeight: isActive? "bold":"500",textDecoration: "none",
              }
            }}>{item.name}</NavLink>
          ))
        }
        <Text>SHOP</Text>
      </Flex>

      <Flex alignItems="center" gap="20px" cursor="pointer" display={{base:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}}>
        <Text>{search}</Text>
        <Text onClick={()=> navigate("/cart")}>{basket}{isAuth && <span style={{background:"black",color:"white",borderRadius:"50%",padding:"1px 4px"}}>{data.length}</span>}</Text>
        <Menu>
          <MenuButton color={isAuth || isAdmin ? "blue" : "black"}>
            {user}
          </MenuButton>
          <MenuList>
            <MenuGroup>
              {isAuth && <Text fontWeight="semibold" m="12px">Hi, <span style={{color:"blue"}}>{username}</span></Text>}
              {isAdmin && <Text fontWeight="semibold" m="12px" color="blue">Welcome Admin🙂</Text>}
              {isAdmin===false && <MenuItem><Text>{home} My Account</Text></MenuItem>}
              {isAdmin && <MenuItem onClick={()=> navigate("/admin")}><Text>{home} MANAGE DATA</Text></MenuItem>}
              <MenuItem onClick={()=> navigate("/cart")}><Text>{order} My Cart</Text></MenuItem>
              <MenuItem><Text>{baskets} My Orders</Text></MenuItem>
              <MenuItem onClick={()=> navigate("/payment")}><Text>{payment} Payments</Text></MenuItem>
              {isAuth || isAdmin ? <MenuItem onClick={handleLogout}><Text>{signout} Logout</Text></MenuItem> : <MenuItem onClick={()=> navigate("/login")}><Text>{signin} Login/SignUp</Text></MenuItem>}
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem><Text>{info} Docs</Text></MenuItem>
              <MenuItem><Text>{info} FAQ</Text></MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>

      <Box onClick={()=> onOpen()} display={{base:"block",sm:"block",md:"none",lg:"none",xl:"none"}}>{bars}</Box>
    </Flex>

    <Menubar isOpen={isOpen} onClose={onClose} />
    
    </div>
  )
}

export default NavBar