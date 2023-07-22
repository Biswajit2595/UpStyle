import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Tabs,
  TabPanel,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';

const EditProduct = () => {

  const { id }=useParams()
  console.log(id)

  const handleSubmit=()=>{

  }

  const handleChange=()=>{

  }

  const tabSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (    
    <Heading>{id} Men</Heading>       
  // <Box>
//     <Heading>{id}</Heading>
//       <Tabs m="auto" variant="enclosed"  size={tabSize}>
//   <TabPanel m="auto" w={['95%', '70%', '50%']}>
//   <Box
//     bgColor="#75909d"
//     p={6}
//     borderRadius="md"
//     mt={4}
//     as="form"
//     onSubmit={handleSubmit}
//   >
//     <FormControl>
//       <FormLabel>Title</FormLabel>
//       <Input
//         type="text"
//         name="Title"
//         bgColor={"#f2f2f3"}
//         // value={Title}
//         placeholder="Title"
//         onChange={handleChange}
//         required
//       />
//     </FormControl>
//     <FormControl>
//       <FormLabel>Image Link</FormLabel>
//       <Input
//         type="text"
//         name="image"
//         bgColor={"#f2f2f3"}
//         // value={image}
//         placeholder="Image link"
//         onChange={handleChange}
//         required
//       />
//     </FormControl>
//     <FormControl>
//       <FormLabel>Brand</FormLabel>
//       <Input
//         type="text"
//         name="Brand"
//         bgColor={"#f2f2f3"}
//         // value={Brand}
//         placeholder="Brand"
//         onChange={handleChange}
//         required
//       />
//     </FormControl>
//     <FormControl>
//       <FormLabel>Price</FormLabel>
//       <Input
//         type="number"
//         name="Price"
//         bgColor={"#f2f2f3"}
//         // value={Price}
//         placeholder="Price"
//         onChange={handleChange}
//         required
//       />
//     </FormControl>
//     <FormControl>
//       <FormLabel>Stock</FormLabel>
//       <Input
//         type="number"
//         name="Stock"
//         bgColor={"#f2f2f3"}
//         // value={Stock}
//         placeholder="Stock"
//         onChange={handleChange}
//         required
//       />
//     </FormControl>
//     <FormControl>
//       <FormLabel>Rating</FormLabel>
//       <Select
//         name="Rating"
//         // value={Rating}
//         bgColor={"#f2f2f3"}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Select Rating</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//       </Select>
//     </FormControl>
//     <FormControl>
//       <FormLabel>Category</FormLabel>
//       <Select
//         name="Category"
//         bgColor={"#f2f2f3"}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Select Category</option>
//         <option value="Jeans">Jeans</option>
//         <option value="Shirt">Shirt</option>
//         <option value="Jacket">Jacket</option>
//         <option value="Shorts">Shorts</option>
//         <option value="Lahanga">Lahanga</option>
//         <option value="Saree">Saree</option>
//         <option value="Skirts">Skirts</option>
//         <option value="Gowns">Gowns</option>
//       </Select>
//     </FormControl>
//     <Button type="submit" mt={4}>
//       Add Product
//     </Button>
//   </Box>
// </TabPanel>
// </Tabs>
// </Box>
  )
}

export default EditProduct