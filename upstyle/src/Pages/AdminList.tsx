import React from 'react'
import { ProductType } from '../constants';
import ProdTable from '../Components/ProdTable';
import { Table, Thead, Tbody, Tr, Th, Heading } from '@chakra-ui/react';

const AdminList = (props: { name: string; data: ProductType[] }) => {
  const { name, data }=props
  return (
    <>
      <Heading size="xl" textAlign="center" mt="4">
        {name} Product
      </Heading>
      <Table variant="striped" colorScheme="orange" mt="4">
        <Thead>
          <Tr>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>ID</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Title</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Brand</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Category</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Price</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Rating</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Stock</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Edit</Th>
            <Th display={{ base: 'none', md: 'table-cell', lg: 'table-cell' }}>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((el) => (
            <ProdTable key={el.id} {...el} name={name} />
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default AdminList;