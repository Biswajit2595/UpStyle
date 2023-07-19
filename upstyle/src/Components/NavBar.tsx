import React,{useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {Flex,Text} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import logo from "../Components/UPSTYLE_LOGO.png"

const links = [
  {to: "/about", name:"ABOUT", id:1},
  {to: "/mens", name:"MEN", id:2},
  {to: "/womens", name:"WOMEN", id:3}
];


const NavBar = () => {

  const search = <FontAwesomeIcon size="lg" icon={faSearch} />
  const basket = <FontAwesomeIcon fade size="lg" icon={faShoppingBasket} />
  const user = <FontAwesomeIcon size="lg" icon={faUserCircle} />

  const navigate = useNavigate()
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
    <div style={{marginBottom:"20px"}}>
      <Flex w="100%" background="black" color="white" fontStyle="italic" h="35px" alignItems="center" justifyContent="center" >
        free shipping on u.s. orders over $50</Flex>

      <Flex id='navbar-menu' position={isSticky ? 'fixed' : 'static'} top="0" boxShadow={isSticky? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"}>

      <img onClick={()=> navigate("/")} style={{cursor:"pointer"}} src={logo} alt="logo" width="130px" sizes="fixed" />

      <Flex alignItems="center" gap="30px" cursor="pointer">
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
        <Text>CONTACT</Text>
      </Flex>
      <Flex alignItems="center" gap="20px" cursor="pointer">
        <Text>{search}</Text>
        <Text>{basket}<span style={{background:"black",color:"white",borderRadius:"50%",padding:"1px 4px"}}>0</span></Text>
        <Text>{user}</Text>
      </Flex>
    </Flex>
    </div>
  )
}

export default NavBar