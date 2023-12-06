'use client'

import {
  Box, 
  Button, 
  Container, 
  Flex, 
  Heading, 
  Stack, 
  Text, 
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { ReactElement } from 'react'

interface CardProps {
  heading: string
  description: string
  toolsUsed: string
  compatible: string
  href: string
  image: string
}

const Card = ({ heading, description, toolsUsed, compatible, href, image }: CardProps) => {

  return (
    <Flex textAlign={{base: 'center', md: 'left'}} gap={5} border={'none'} bg={'#54C2FF'} boxShadow={"0 10px 30px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.00)"} flexDirection={{base: 'column', md: 'row'}} maxW={{ base: '500px', md: '900px' }} w={'full'} borderWidth="1px" borderRadius="lg" overflow="hidden" justify={'center'} p={5}> 
        
        <Flex w={'100%'} h={300} align={'center'} justify={'center'} color={'white'}>
          <Image src={image} alt="Image Alt Text" w="" h="" objectFit="cover" />
        </Flex>

        <Flex flexDirection={'column'} w={'100%'} >
          <Box mt={2}>
            <Heading size="md" mb={3}>{heading}</Heading>
            <Text mb={2} fontSize={'sm'}> {description}</Text>
            <Text mb={2} fontSize={'sm'}> {toolsUsed}</Text>
            <Text mb={2} fontSize={'sm'}> {compatible}</Text>
            <Button as="a" href={href} target="_blank"  bg={'#005EB0'} h={7} p={4} size={'sm'} ml={0}>Learn more</Button>
          </Box>
        </Flex>

    </Flex>
  )
}

export default function gridListWith() {

  const linkArray = ['https://github.com/DeBoer753/bug-tracker-PROJECT#readme', 'https://sheltr.netlify.app/', 'https://www.deboer753-weatherbox.com/']

  return (
    <Box id="projects" bg={'#69C9FF'} p={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} mt={7} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Projects
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={'50px'} mb={'30px'} >
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          <Box as={motion.div} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Bugsly'}
              description={'A group bug tracking project that gives users an opportunity to list issues while collaborating with teammates to tackle problems firsthand. Users can input issue priority, the status of the issue, and assign certain issues to those with certain development strengths. Bugsly is simple, useful, and easy to use all in one.'}
              toolsUsed={'Tools Used: HTML, CSS, JavaScript, React.js, and Photoshop'}
              compatible={'Compatible Devices: desktop, tablet, and smartphone'}
              href={linkArray[0]}
              image={'bugsly.1cb9b38b25b7f1b8eace.png'}
            />
          </Box>

          <Box as={motion.div} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Sheltr'}
              description={'A group project that extends a helping hand by providing a platform of collected data from multiple API sources of local shelters integrated with google maps. The three given cities are some of the most affected cities in the U.S to experience homelessness. Sheltr was created using HTML, CSS, JavaScript, and open source API’s.'}
              toolsUsed={'Tools Used: HTML, CSS, and JavaScript'}
              compatible={'Compatible Devices: desktop and tablet'}
              href={linkArray[1]}
              image={'sheltr.c3945c4c5105551fddf8.png'}
            />
          </Box>

          <Box  as={motion.div} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Weather Box'}
              description={'Weather Box is an interactive weather application where users can input a name of a city which then displays the city\'s forecast. The theme is based around unpacking a box with weather related contents inside. Upon each city inputted, and depending on the daily and weekly forecast given, images will appear that represent activities of what is suited best for the selected forecast.'}
              toolsUsed={'Tools Used: HTML, CSS, JavaScript, React.js, Redux, and Photoshop'}
              compatible={'Compatible Devices: desktop and tablet'}
              href={linkArray[2]}
              image={'weatherBox.34ac67c4fdac042c6ad3.png'}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}