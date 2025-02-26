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
  launchDate: string
  compatible: string
  href: string
  image: string
}

// CARD TEMPLATE
const Card = ({ heading, description, launchDate, compatible, href, image }: CardProps) => {

  return (
    <Flex h={{base: 630, md: "100%", lg: '100%'}} w={{base: '100%', md: '100%', lg: '100%'}} textAlign={{base: 'center', md: 'left'}} gap={{base: 0, md: 5, lg: 5}} border={'none'} bg={'rgba(68, 68, 68, 0.8)'} flexDirection={{base: 'column', md: 'row'}} maxW={{ base: '500px', md: '900px' }} borderWidth="1px" borderRadius="lg" overflow="hidden" justify={'center'} p={5}> 
        
        <Flex w={'100%'} h={300} align={'center'} justify={'center'} color={'white'}>
          <Image src={image} alt="Image Alt Text" w="" h="" objectFit="cover" />
        </Flex>

        <Flex flexDirection={'column'} w={'100%'} >
          <Box mt={2}>
            <Heading size="md" mb={3}>{heading}</Heading>
            <Text mb={2} fontSize={'sm'}> {description}</Text>
            <Text mb={2} fontSize={'sm'}><Text as={'span'} fontWeight={600}>Launch Date:</Text>  {launchDate}</Text>
            <Text mb={2} fontSize={'sm'}><Text as={'span'} fontWeight={600}>Compatible Devices:</Text> {compatible}</Text>
            <Button as="a" href={href} target="_blank"  bg={'rgba(17, 17, 17, 0.8)'} h={7} p={4} size={'sm'} ml={0}>View Site</Button>
          </Box>
        </Flex>

    </Flex>
  )
}

// PROJECTS
export default function Projects() {

  const linkArray = ['https://www.davidglassmusic.com/', 'https://graybuckmedia.com/']

  return (
    <Box id="projects" bg={'rgba(130, 130, 130, 0.8)'} p={7}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} mt={'43px'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Projects
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={'50px'} mb={'30px'} p={0} overflow={'hidden'}>
        <Flex flexWrap="wrap" gridGap={12} justify="center" >
          
          <Box as={motion.div} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'David Glass'}
              description={'We designed and developed a sleek, immersive website for David Glass, an award-winning Bay Area pianist and filmmaker, showcasing his music and acclaimed films. With numerous accolades for his storytelling and cinematic excellence, the site seamlessly blends artistry and functionality, offering high-quality visuals, an interactive media player, and a user-friendly layout.'}
              launchDate={'February 2025'}
              compatible={'desktop, tablet, and smartphone'}
              href={linkArray[0]}
              image={'/imgs/davidglass.png'}
            /> 
          </Box>

          <Box as={motion.div} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}} >
            <Card
              heading={'Graybuck Media'}
              description={'Our website showcases a comprehensive range of services, including web development, photography, videography, and graphic design, all aimed at helping brands stand out. Whether a business needs a professional website, high-quality visuals, or eye-catching marketing materials, the services offered are tailored to provide personalized support that aligns with each client’s unique goals.'}
              launchDate={'January 2025'}
              compatible={'desktop, tablet, and smartphone'}
              href={linkArray[1]}
              image={'/imgs/graybuckmedia.png'}
            />
          </Box>

        </Flex> 
      </Container> 
    </Box> 
  )
}