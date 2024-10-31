import React from 'react';
import {
  Box,
  Image,
  Text,
  Container,
  Heading,
  Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const SuccessfulSubmit: React.FC = () => {
  return (
    <Container 
  maxW="100%"
  id="contact"
  backgroundImage={`url('/imgs/contact_banner.png')`}
  sx={{
    backgroundAttachment: 'scroll', 
  
    '@media screen and (min-width: 390px)': {
      backgroundAttachment: 'scroll',
      backgroundSize: '200% auto', 

 
    },
    '@media screen and (min-width: 768px)': {
      backgroundAttachment: 'scroll', 

    },
    '@media screen and (min-width: 1024px)': {
      backgroundAttachment: 'fixed',
      backgroundSize: '100% auto', 
    },
  }}
> 
    <Flex  align="center" justify="center" flexDir={'column'} p={{ base: 16, lg: 16 }}>
      <Box as={motion.div} initial={{ opacity: 0, x: '-200px' }} whileInView={{ opacity: 1, x: '0px', transition: { duration: 1 } }} bg={'rgba(82, 82, 82, 1)'} borderRadius="lg" p={8} w={{lg: '400px', sm: '400px', base: '340px'}} color={'white'} shadow="base">
        <Text textAlign={'center'} fontSize={80} fontFamily={'cursive'}>Thanks!</Text>
        <Image 
          src={'/imgs/message_sent.png'}  // Image URL
          alt="Description of image"           // Alt text for accessibility
          boxSize="200px"                      // Set the size of the image
          objectFit="cover"                    // Controls how the image should fit
          borderRadius="md"  
          w={'100%'}                  // Optional: Adds rounded corners
        />
        <Text pt={7} textAlign={'center'} fontSize={18} fontStyle={'italic'}>Message sent! We will get back to you soon.</Text>
      </Box>
    </Flex>
</Container>

  )
}