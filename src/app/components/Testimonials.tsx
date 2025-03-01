// CLIENT
'use client'

// CHAKRA
import { Avatar, Box, Stack, Text, useColorModeValue, Heading, Divider } from '@chakra-ui/react'

// FRAMER
import { motion } from 'framer-motion';

// TESTIMONIALS
export default function Testimonials() {
  return (
    <Stack  
      bg={'rgba(42, 42, 42, 0.8)'}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Heading pt={5} fontSize={{ base: '2xl', sm: '4xl' }}>Testimonials</Heading>

      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'} fontStyle={'italic'} fontWeight={'thin'}  as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
      <Text as={'span'} fontWeight={600}>"</Text>Best experience ever - I can’t say enough great things about Graybuck Media! From the very first moment I was 
      introduced to Myles I was taken by his friendly approach and impressed with his knowledge in both web design and the internet. 
      Myles created a fantastic website for me. As a musician I had certain expectations with how I wanted to present myself.  
      Myles conveyed a confidence in how he thought the site should look with regards to my background. 
      When he finally presented my website I was thrilled! I feel proud to have this website represent me and he made the entire experience fun! 
      Communication was excellent during the entire process. I highly recommend Graybuck Media for your next website project<Text as={'span'} fontWeight={600}>"</Text>
      </Text>
      <Box textAlign={'center'}>
        <Text fontWeight={600}>David Glass</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Client
        </Text>
        <Divider mt={10} w={200}/>
      </Box>

      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'} fontStyle={'italic'} fontWeight={'thin'}  as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
      <Text as={'span'} fontWeight={600}>"</Text>There never seemed to be a question in his mind whether Myles would continue this pursuit. 
      We then spent many zoom calls over the course of the past year or so breaking down coding challenges, 
      creating game plans for success, and providing exposure in to the life of a developer. Each step of the way, 
      Myles had a great attitude and the unwavering drive of someone destined to be successful.<Text as={'span'} fontWeight={600}>"</Text> 
      </Text>
      <Box textAlign={'center'}>
        <Text fontWeight={600}>Ryan McCabe</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Software Engineer & Mentor
        </Text>
        <Divider mt={10} w={200}/>
      </Box>

      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'} fontStyle={'italic'} fontWeight={'thin'} as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
      <Text as={'span'} fontWeight={600}>"</Text>Myles is great at asking the right questions and digging deep into the topics he is working on. 
      He is great on a team, quick to assist where he can, while also working diligently to achieve team 
      goals and share knowledge when he can. He is persistent and would be a great addition to any team.<Text as={'span'} fontWeight={600}>"</Text>
      </Text>
      <Box textAlign={'center'}>
        <Text fontWeight={600}>Lachlan Heywood</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Software Engineer & Mentor
        </Text>
        <Divider mt={10} w={200}/>
      </Box>

    </Stack>
  )
}