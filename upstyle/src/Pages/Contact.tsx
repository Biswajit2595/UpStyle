import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ContactPage = () => {
  return (
    <Container>
      <Heading>Contact Upstyle</Heading>

      <SubHeading>Customer Support:</SubHeading>
      <Paragraph>Email: support@upstyle.com</Paragraph>
      <Paragraph>Phone: +1 (800) 123-4567</Paragraph>

      <SubHeading>Business Inquiries:</SubHeading>
      <Paragraph>Email: business@upstyle.com</Paragraph>
      <Paragraph>Phone: +1 (888) 987-6543</Paragraph>

      <SubHeading>Visit Our Store:</SubHeading>
      <Paragraph>Upstyle Fashion Store</Paragraph>
      <Paragraph>123 Fashion Avenue,</Paragraph>
      <Paragraph>Cityville, State - 12345,</Paragraph>
      <Paragraph>Country</Paragraph>

      <SubHeading>Store Hours:</SubHeading>
      <Paragraph>Monday to Friday: 9:00 AM - 7:00 PM</Paragraph>
      <Paragraph>Saturday: 10:00 AM - 6:00 PM</Paragraph>
      <Paragraph>Sunday: Closed</Paragraph>

      <Paragraph>
        Feel free to drop us a message or give us a call, and we'll be delighted
        to assist you with anything you need. Whether you have questions about
        our products, need help with an order, or want to collaborate with us,
        we're always eager to hear from you.
      </Paragraph>

      <Paragraph>Stay stylish with Upstyle!</Paragraph>
    </Container>
  );
};

export default ContactPage;
