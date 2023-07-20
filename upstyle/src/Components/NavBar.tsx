import React,{useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {Flex,Text,Box, useDisclosure,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCreditCard, faHome, faInfoCircle, faSearch,faShoppingBag,faShoppingBasket, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import logo from "../Components/UPSTYLE_LOGO.png"
import { useSelector } from 'react-redux';
import { Menubar } from './Menubar';

const links = [
  {to: "/about", name:"ABOUT", id:1},
  {to: "/mens", name:"MEN", id:2},
  {to: "/womens", name:"WOMEN", id:3},
  {to: "/contact", name:"CONTACT", id:4}
];


const NavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector((store:any)=> store.authReducer.isAuth);
  const username = useSelector((store:any)=> store.authReducer.user.username);

  const search = <FontAwesomeIcon size="lg" icon={faSearch} />
  const basket = <FontAwesomeIcon fade size="lg" icon={faShoppingBasket} />
  const user = <FontAwesomeIcon size="xl" icon={faUserCircle} />
  const bars = <FontAwesomeIcon size='lg' icon={faBars} />
  const home = <FontAwesomeIcon size='sm' icon={faHome} />
  const baskets = <FontAwesomeIcon size='sm' icon={faShoppingBag} />
  const payment = <FontAwesomeIcon size='sm' icon={faCreditCard} />
  const order = <FontAwesomeIcon size='sm' icon={faShoppingCart} />
  const signin = <FontAwesomeIcon size='sm' icon={faSignInAlt} />
  const signout = <FontAwesomeIcon size='sm' icon={faSignOutAlt} />
  const info = <FontAwesomeIcon size='sm' icon={faInfoCircle} />

  const navigate = useNavigate()
  const cart = useSelector((store:any)=> store.productReducer.cart);
  const [isSticky, setIsSticky] = useState<boolean>(false);

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

  return (
    <div style={{marginBottom: isSticky? "90px": "0px"}}>
      <Flex w="100%" background="black" color="white" fontStyle="italic" h="35px" alignItems="center" justifyContent="center" >
        free shipping on u.s. orders over $50</Flex>

      <Flex id='navbar-menu' position={isSticky ? 'fixed' : 'static'} top="0" boxShadow={isSticky? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"}>

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
        <Text onClick={()=> navigate("/cart")}>{basket}<span style={{background:"black",color:"white",borderRadius:"50%",padding:"1px 4px"}}>{cart.length}</span></Text>
        <Menu>
          <MenuButton>
            {user}
          </MenuButton>
          <MenuList>
            <MenuGroup>
              {isAuth && <Text fontWeight="semibold" m="12px">Hi, <span style={{color:"blue"}}>{username}</span></Text>}
              <MenuItem><Text>{home} My Account</Text></MenuItem>
              <MenuItem><Text>{order} My Cart</Text></MenuItem>
              <MenuItem><Text>{baskets} My Orders</Text></MenuItem>
              <MenuItem><Text>{payment} Payments</Text></MenuItem>
              {isAuth? <MenuItem><Text>{signout} Logout</Text></MenuItem> : <MenuItem><Text>{signin} Login/SignUp</Text></MenuItem>}
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