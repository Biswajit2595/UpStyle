import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <Box maxW="600px" mx="auto" p="20px">
      <Helmet>
        <title>Contact | UPSTYLE</title>
      </Helmet>
      <Heading>Contact Upstyle</Heading>

      <Heading as="h2" fontSize="24px" mb="10px">
        Customer Support:
      </Heading>
      <Text as="p" fontSize="16px" mb="5px">
        Email: support@upstyle.com
      </Text>
      <Text as="p" fontSize="16px" mb="20px">
        Phone: +1 (800) 123-4567
      </Text>

      <Heading as="h2" fontSize="24px" mb="10px">
        Business Inquiries:
      </Heading>
      <Text as="p" fontSize="16px" mb="5px">
        Email: business@upstyle.com
      </Text>
      <Text as="p" fontSize="16px" mb="20px">
        Phone: +1 (888) 987-6543
      </Text>

      <Heading as="h2" fontSize="24px" mb="10px">
        Visit Our Store:
      </Heading>
      <Text as="p" fontSize="16px" mb="5px">
        Upstyle Fashion Store
      </Text>
      <Text as="p" fontSize="16px" mb="5px">
        123 Fashion Avenue,
      </Text>
      <Text as="p" fontSize="16px" mb="5px">
        Cityville, State - 12345,
      </Text>
      <Text as="p" fontSize="16px" mb="20px">
        Country
      </Text>

      <Heading as="h2" fontSize="24px" mb="10px">
        Store Hours:
      </Heading>
      <Text as="p" fontSize="16px" mb="5px">
        Monday to Friday: 9:00 AM - 7:00 PM
      </Text>
      <Text as="p" fontSize="16px" mb="5px">
        Saturday: 10:00 AM - 6:00 PM
      </Text>
      <Text as="p" fontSize="16px" mb="20px">
        Sunday: Closed
      </Text>

      <Text as="p" fontSize="16px">
        Feel free to drop us a message or give us a call, and we'll be delighted
        to assist you with anything you need. Whether you have questions about
        our products, need help with an order, or want to collaborate with us,
        we're always eager to hear from you.
      </Text>

      <Text as="p" fontSize="16px" mt="20px">
        Stay stylish with Upstyle!
      </Text>
    </Box>
  );
};

export default ContactPage;
