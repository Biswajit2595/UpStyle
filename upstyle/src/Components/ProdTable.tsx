

import React from 'react';
import { Tr, Td, Link, Button, useBreakpointValue, useToast } from '@chakra-ui/react';
import { Link as Editlink } from 'react-router-dom'
import { ProductType } from '../constants';
import { deleteMen, deleteWomen } from '../Redux/productReducer/action';
import { useDispatch } from 'react-redux';

interface ProdTypeProp extends ProductType{
  name:string
}

const ProdTable = ( {id, Brand, Category, Price, Quantity, Rating, Size, Stock, Title, image, imgbag,name }: ProdTypeProp ) => {
  const isMobile = useBreakpointValue({ base: true, md: false, lg: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  const dispatch:any=useDispatch()
  const toast=useToast()

  const handleDelete=()=>{
    if(name==="Mens")
    {
      dispatch(deleteMen(id)).then(()=>{
        toast({
          title: 'Product Deleted.',
          description: "Product has been Deleted.",
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
      })
    }
    else{
      dispatch(deleteWomen(id)).then(()=>{
        toast({
          title: 'Product Deleted.',
          description: "Product has been Deleted.",
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
      })
    }
  }
  return (
    <Tr>
      <Td>{id}</Td>
      {isMobile && (
        <>
          <Td>{Title}</Td>
          <Td>{Price}</Td>
          <Td>
          {
              name==="Mens" &&
              <Link
              as={Editlink}
              to={`/edit/${id}`}
            >
              <Button>Edit</Button>
            </Link>
            }
            {
              name==="Womens" &&
              <Link
              as={Editlink}
              to={`/edit/${id}/women`}
            >
              <Button>Edit</Button>
            </Link>
            }
          
          </Td>
          <Td>
            <Button onClick={handleDelete}>Delete</Button>
          </Td>
        </>
      )}
      {isTablet && (
        <>
          <Td>{Title}</Td>
          <Td>{Brand}</Td>
          <Td>{Category}</Td>
          <Td>{Price}</Td>
          <Td>{Rating}</Td>
          <Td>{Stock}</Td>
          <Td>
          {
              name==="Mens" &&
              <Link
              as={Editlink}
              to={`/edit/${id}`}
            >
              <Button>Edit</Button>
            </Link>
            }
            {
              name==="Womens" &&
              <Link
              as={Editlink}
              to={`/edit/${id}/women`}
            >
              <Button>Edit</Button>
            </Link>
            }
          
          </Td>
          <Td>
            <Button onClick={handleDelete}>Delete</Button>
          </Td>
        </>
      )}
      {isDesktop && (
        <>
          <Td>{Title}</Td>
          <Td>{Brand}</Td>
          <Td>{Category}</Td>
          <Td>{Price}</Td>
          <Td>{Rating}</Td>
          <Td>{Stock}</Td>
          <Td>
          {
              name==="Mens" &&
              <Link
              as={Editlink}
              to={`/edit/${id}`}
            >
              <Button>Edit</Button>
            </Link>
            }
            {
              name==="Womens" &&
              <Link
              as={Editlink}
              to={`/edit/${id}/women`}
            >
              <Button>Edit</Button>
            </Link>
            }
          
          </Td>
          <Td>
            <Button onClick={handleDelete}>Delete</Button>
          </Td>
        </>
      )}
    </Tr>

  );
};

export default ProdTable;
