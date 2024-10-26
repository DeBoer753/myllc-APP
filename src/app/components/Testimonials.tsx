// CLIENT
'use client'

// CHAKRA
import { Avatar, Box, Stack, Text, useColorModeValue, Heading, Divider } from '@chakra-ui/react'

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
      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'} fontStyle={'italic'} fontWeight={'thin'}>
      There never seemed to be a question in his mind whether Myles would continue this pursuit. 
      We then spent many zoom calls over the course of the past year or so breaking down coding challenges, 
      creating game plans for success, and providing exposure in to the life of a developer. Each step of the way, 
      Myles had a great attitude and the unwavering drive of someone destined to be successful. 
      </Text>
      <Box textAlign={'center'}>
        <Text fontWeight={600}>Ryan McCabe</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Software Engineer 
        </Text>
        <Divider mt={10} w={200}/>
      </Box>

      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'} fontStyle={'italic'} fontWeight={'thin'}>
      Myles is great at asking the right questions and digging deep into the topics he is working on. 
      He is great on a team, quick to assist where he can, while also working diligently to achieve team 
      goals and share knowledge when he can. He is persistent and would be a great addition to any team.
      </Text>
      <Box textAlign={'center'}>
        <Text fontWeight={600}>Lachlan Heywood</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Software Engineer 
        </Text>
        <Divider mt={10} w={200}/>
      </Box>

      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'} fontStyle={'italic'} fontWeight={'thin'}>
      Myles is a smart, creative and driven individual. He is very inquisitive and loves problem solving.
       As a colleague and mentor I have seen Myles continually advance his skills in digital learning combining 
       with creating projects implementing the core foundations of web development in HTML5, CSS, and JavaScript.
        Myles is a team player and a great asset to any team!
      </Text>
      <Box textAlign={'center'}>
        <Text fontWeight={600}>Donte Burney</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Software Engineer
        </Text>
      </Box>
    </Stack>
  )
}