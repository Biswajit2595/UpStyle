import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CartTotal = ({ cart,cartItems }:any) => {
//   Calculate the total price by multiplying the price with the quantity for each item
  const totalPrice = cartItems.reduce((total:any, item:any) => total + item.Price * item.Quantity, 0);

  const shippingCost = 10; // Example shipping cost
  const taxRate = 0.08; // Example tax rate (8%)

  // Calculate tax amount
  const taxAmount = totalPrice * taxRate;

  // Calculate the final total including tax and shipping
  const finalTotal = totalPrice + shippingCost + taxAmount;

  return (
    <Box >
        <Heading size="md" mb="2">
        Cart Total
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
        Subtotal: ${totalPrice.toFixed(2)}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
        Shipping: ${ totalPrice>0 ? shippingCost.toFixed(2):0}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
        Tax (8%): ${taxAmount.toFixed(2)}
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="red">
        Final Total: ${ totalPrice>0 ? finalTotal.toFixed(2):0}
        </Text>
        <Link to={"/payment"}>
        <Button isDisabled={cart.length===0} w="100%" _hover={{color:"white" ,bg:"#ff4800"}} color="white" bg="#f56b33" mt={4}>Proceed To Checkout</Button>
        </Link>
    </Box>
    );
};

export default CartTotal;
