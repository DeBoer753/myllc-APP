// CLIENT
'use client'

// CHAKRA
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

// FRAMER MOTION
import { motion } from 'framer-motion';

// INTERFACE
interface CardProps {
  heading: string
  description: string
  toolsUsed: string
  compatible: string
  href: string
  image: string
}

// CARD TEMPLATE
const Card = ({ heading, description, toolsUsed, compatible, href, image }: CardProps) => {

  return (
    <Flex h={{base: 630, md: "100%", lg: '100%'}} w={{base: '100%', md: '100%', lg: '100%'}} textAlign={{base: 'center', md: 'left'}} gap={{base: 0, md: 5, lg: 5}} border={'none'} bg={'rgba(68, 68, 68, 0.8)'} flexDirection={{base: 'column', md: 'row'}} maxW={{ base: '500px', md: '900px' }} borderWidth="1px" borderRadius="lg" overflow="hidden" justify={'center'} p={5}> 
        
        <Flex w={'100%'} h={300} align={'center'} justify={'center'} color={'white'}>
          <Image src={image} alt="Image Alt Text" w="" h="" objectFit="cover" />
        </Flex>

        <Flex flexDirection={'column'} w={'100%'} >
          <Box mt={2}>
            <Heading size="md" mb={3}>{heading}</Heading>
            <Text mb={2} fontSize={'sm'}> {description}</Text>
            <Text mb={2} fontSize={'sm'}> {toolsUsed}</Text>
            <Text mb={2} fontSize={'sm'}> {compatible}</Text>
            <Button as="a" href={href} target="_blank"  bg={'rgba(17, 17, 17, 0.8)'} h={7} p={4} size={'sm'} ml={0}>Learn more</Button>
          </Box>
        </Flex>

    </Flex>
  )
}

// PROJECTS
export default function Projects() {

  const linkArray = ['https://github.com/DeBoer753/bug-tracker-PROJECT#readme', 'https://sheltr.netlify.app/', 'https://www.deboer753-weatherbox.com/', 'https://graybuckmedia.com/']

  return (
    <Box id="projects" bg={'rgba(130, 130, 130, 0.8)'} p={7}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} mt={'43px'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Projects
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={'50px'} mb={'30px'} p={0} overflow={'hidden'}>
        <Flex flexWrap="wrap" gridGap={12} justify="center" >
          
        <Box as={motion.div} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Graybuck Media'}
              description={'My website showcases a comprehensive range of services, including web development, photography, videography, and graphic design, all designed to help your brand stand out. Whether you are looking to build a professional website, capture high-quality visuals, or design eye-catching marketing materials, I’m here to provide personalized support that aligns with your unique business goals.'}
              toolsUsed={'Tools Used: Next.js, Typescript, Chakra UI, Framer Motion, and Photoshop'}
              compatible={'Compatible Devices: desktop, tablet, mobile'}
              href={linkArray[3]}
              image={'/imgs/graybuckmedia.png'}
            />
          </Box>
          
          <Box as={motion.div} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Bugsly'}
              description={'A group bug tracking project that gives users an opportunity to list issues while collaborating with teammates to tackle problems firsthand. Users can input issue priority, the status of the issue, and assign certain issues to those with certain development strengths. Bugsly is simple, useful, and easy to use all in one.'}
              toolsUsed={'Tools Used: HTML, CSS, JavaScript, React.js, and Photoshop'}
              compatible={'Compatible Devices: desktop, tablet, and smartphone'}
              href={linkArray[0]}
              image={'/imgs/bugsly.png'}
            /> 
          </Box>

          <Box as={motion.div} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Sheltr'}
              description={'A group project that extends a helping hand by providing a platform of collected data from multiple API sources of local shelters integrated with google maps. The three given cities are some of the most affected cities in the U.S to experience homelessness. Sheltr was created using HTML, CSS, JavaScript, and open source API’s.'}
              toolsUsed={'Tools Used: HTML, CSS, and JavaScript'}
              compatible={'Compatible Devices: desktop and tablet'}
              href={linkArray[1]}
              image={'/imgs/sheltr.png'}
            />
          </Box>

          <Box as={motion.div} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Weather Box'}
              description={'Weather Box is an interactive weather application where users can input a name of a city which then displays the city\'s forecast. The theme is based around unpacking a box with weather related contents inside. Upon each city inputted, and depending on the daily and weekly forecast given, images will appear that represent activities of what is suited best for the selected forecast.'}
              toolsUsed={'Tools Used: HTML, CSS, JavaScript, React.js, Redux, and Photoshop'}
              compatible={'Compatible Devices: desktop and tablet'}
              href={linkArray[2]} 
              image={'/imgs/weatherbox.png'}
            />
          </Box> 
        </Flex> 
      </Container> 
    </Box> 
  )
}