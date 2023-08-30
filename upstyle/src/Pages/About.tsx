import React, { useEffect } from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import manikant from "../Components/devloper_manikant.png"
import biswa from "../Components/devloper_biswajit.png"
import rohit from "../Components/devloper_rohit.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const github = <FontAwesomeIcon size="xl" icon={faGithub} />
  const linkedin = <FontAwesomeIcon size="xl" icon={faLinkedin} />
  const link = <FontAwesomeIcon size="lg" icon={faExternalLink} />

  useEffect(() => {
    document.body.style.background = "#F2F2F3"
  }, [])

  return (
    <Box m="auto" w="90%" mt="30px">
      <Heading fontSize="30px" textAlign="center" fontFamily="stencil" mb="20px">ABOUT DEVELOPERS</Heading>
    <SimpleGrid m="auto" w="100%" columns={{base:1,sm:1,md:2,lg:2,xl:3}} gap="15px" color="white">
      <Helmet>
        <title>About | UPSTYLE</title>
      </Helmet>

      <div className="whole-wrap">
  <div className="profile-wrap">
    <div className="profile-head">
      <span className="profile-back">
        <svg width="18" height="18" viewBox="0 0 24 24">
</svg>
      </span>
      <span className="profile-right-icons">
        <span className="profile-heart-icon">
          <svg style={{width:"18px",height:"18px"}} viewBox="0 0 24 24">
    <path fill="#fff" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
        </span>
      </span>
    </div>
    
    <div className="profile-img-wrap">
      <img src={manikant} alt="manikant" />
    </div>
    
    <div className="profile-text-block">
      <div className="profile-primary-head">
        <Text fontWeight="bold">Manikant kumar</Text>
        <Text fontWeight="semibold">Full Stack Web Developer</Text>
      </div>
      <Flex w="70%" m="auto" mt="5px" mb="10px" justifyContent="space-between" fontSize="20px" textDecoration="none" color="white">
        <a href="https://github.com/Manikantkr-1004" target="_blank">{github}</a>
        <a href="https://www.linkedin.com/in/manikantofficial2023/" target="_blank">{linkedin}</a>
        <a href="https://manikantkr-1004.github.io/" target="_blank">{link}</a>
      </Flex>
      <div className="profile-hire-block">
        <a href="https://manikantkr-1004.github.io/" className="hire-btn" target="_blank">Hire Me</a>
      </div>
    </div>
    <Text mt="5px" textAlign="center" fontWeight="bold" color="#e256af">Area of Responsibilities</Text>
    <Flex w="80%" m="auto" mt="5px">
      <Text textAlign="center" p="3px 0px" border="2px solid #e256af" borderRadius="10px">Home Page, Login Page, SignUp Page, Payment Page</Text>
    </Flex>

    
  </div>
    </div>

    <div className="whole-wrap">
  <div className="profile-wrap">
    <div className="profile-head">
      <span className="profile-back">
        <svg width="18" height="18" viewBox="0 0 24 24">
</svg>
      </span>
      <span className="profile-right-icons">
        <span className="profile-heart-icon">
          <svg style={{width:"18px",height:"18px"}} viewBox="0 0 24 24">
    <path fill="#fff" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
        </span>
      </span>
    </div>
    
    <div className="profile-img-wrap">
      <img src={biswa} alt="biswa" />
    </div>
    
    <div className="profile-text-block">
      <div className="profile-primary-head">
        <Text fontWeight="bold">Biswajit Roy</Text>
        <Text fontWeight="semibold">Full Stack Web Developer</Text>
      </div>
      <Flex w="70%" m="auto" mt="5px" mb="10px" justifyContent="space-between" fontSize="20px" textDecoration="none" color="white">
        <a href="https://github.com/Biswajit2595" target="_blank">{github}</a>
        <a href="https://www.linkedin.com/in/biswajitroy95/" target="_blank">{linkedin}</a>
        <a href="https://biswajit2595.github.io/" target="_blank">{link}</a>
      </Flex>
      <div className="profile-hire-block">
        <a href="https://biswajit2595.github.io/" className="hire-btn" target="_blank">Hire Me</a>
      </div>
    </div>
    <Text mt="5px" textAlign="center" fontWeight="bold" color="#e256af">Area of Responsibilities</Text>
    <Flex w="80%" m="auto" mt="5px">
      <Text textAlign="center" p="3px 0px" border="2px solid #e256af" borderRadius="10px">All Functionality of Admin Page, Cart Page</Text>
    </Flex>

    
  </div>
    </div>

    <div className="whole-wrap">
  <div className="profile-wrap">
    <div className="profile-head">
      <span className="profile-back">
        <svg width="18" height="18" viewBox="0 0 24 24">
</svg>
      </span>
      <span className="profile-right-icons">
        <span className="profile-heart-icon">
          <svg style={{width:"18px",height:"18px"}} viewBox="0 0 24 24">
    <path fill="#fff" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
        </span>
      </span>
    </div>
    
    <div className="profile-img-wrap">
      <img src={rohit} alt="rohit" />
    </div>
    
    <div className="profile-text-block">
      <div className="profile-primary-head">
        <Text fontWeight="bold">Rohit Nayal</Text>
        <Text fontWeight="semibold">Full Stack Web Developer</Text>
      </div>
      <Flex w="70%" m="auto" mt="5px" mb="10px" justifyContent="space-between" fontSize="20px" textDecoration="none" color="white">
        <a href="https://github.com/rohitnayal12" target="_blank">{github}</a>
        <a href="https://www.linkedin.com/in/rohit-nayal-7810871ab" target="_blank">{linkedin}</a>
        <a href="https://rohitnayal12.github.io/" target="_blank">{link}</a>
      </Flex>
      <div className="profile-hire-block">
        <a href="https://rohitnayal12.github.io/" className="hire-btn" target="_blank">Hire Me</a>
      </div>
    </div>
    <Text mt="5px" textAlign="center" fontWeight="bold" color="#e256af">Area of Responsibilities</Text>
    <Flex w="80%" m="auto" mt="5px">
      <Text textAlign="center" p="3px 0px" border="2px solid #e256af" borderRadius="10px">Men Page, SingleMen Page, Women Page, SingleWomen Page</Text>
    </Flex>

    
  </div>
    </div>
      
    </SimpleGrid>

    <Box m="auto" w="96%" mt="40px" textAlign="justify">
    <Heading textAlign="center" as="h2" size="lg" mt="20px" fontFamily="algerian">
        About Us
      </Heading>
      <Text mt="10px">
        At Upstyle, we're passionate about fashion and committed to helping you elevate your style game. As a cutting-edge React app built with TypeScript, our website offers an intuitive and seamless shopping experience, making it easier than ever to discover the latest trends and express your individuality.
      </Text><br/>

      <Heading textAlign="center" as="h2" size="lg" mt="20px" fontFamily="algerian">
        Discover the Latest Trends
      </Heading>
      <Text mt="10px">
        Step into the world of fashion with our meticulously curated collection. From chic casual wear to elegant evening attire, we have an extensive range of styles to suit every taste and occasion. Our team of fashion experts keeps a keen eye on the industry to bring you the most up-to-date and trendy pieces, ensuring you stay ahead of the curve.
      </Text><br/>

      <Heading textAlign="center" as="h2" size="lg" mt="20px" fontFamily="algerian">
        Quality and Sustainability
      </Heading>
      <Text mt="10px">
        At Upstyle, we believe that looking good shouldn't come at the expense of the planet. That's why we prioritize sustainable and eco-friendly fashion options. Our commitment to quality extends beyond aesthetics; we carefully select high-quality fabrics and materials to ensure your clothing not only looks 
        <br/>




      <Heading textAlign="center" as="h2" size="lg" mt="20px" fontFamily="algerian" marginTop="30px">
        Join the Upstyle Community
      </Heading>
      <Text mt="10px">
        Become part of the Upstyle community today and embark on a journey of self-expression and fashion-forward discoveries. With our user-friendly React app backed by TypeScript, shopping for the latest trends has never been easier.
      </Text>

      <Text mt="20px">
        Thank you for choosing Upstyle as your go-to fashion destination. We can't wait to see you rock the latest looks with confidence and style!
      </Text>

      <Text>Happy shopping!</Text>

      <Text mt="20px">Upstyle,</Text>fantastic but also stands the test of time.
      </Text>
    </Box>
    </Box>
  );
};

export default About;