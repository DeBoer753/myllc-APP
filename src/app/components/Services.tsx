'use client'

import {
  Box,
  Divider,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { motion } from 'framer-motion';

import { ReactElement } from 'react'

import {
  FcMultipleCameras,
  FcBullish,
  FcCollect,
  FcMultipleDevices,
  FcReadingEbook,
  FcPicture,
  FcApprove,
  FcTemplate
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
      
      <Box
        as={motion.div} whileHover={{ scale: 1.03, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} transition={{ duration: '0.3' }}
        maxW={{ base: 'full', md: '275px' }}
        bg={'#005EB0'}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        textAlign={'center'}
        p={5}>
        <Stack align={'center'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            // bg={useColorModeValue('#69C9FF', '#69C9FF')}
            >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md" mb={4}>{heading}</Heading>
            <Divider />
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
  )
}

export default function gridListWith() {
  return (
    <Box id="services" pb={20} bg={'#54C2FF'}>

        <Heading textAlign={'center'} pt={'70px'} pb={'10px'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Services
        </Heading>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card 
            heading={'Sleek User Interfaces'}
            icon={<Icon as={FcTemplate} w={10} h={10} />}
            description={'Elevate user engagement with our expertise in creating sleek and intuitive user interfaces. We design interfaces that not only captivate users visually but also ensure seamless and enjoyable interactions.'}
            href={'#'}
          />
          <Card
            heading={'Responsive Web Design'}
            icon={<Icon as={FcMultipleDevices} w={10} h={10} />}
            description={'Embrace the future of web browsing with our responsive design solutions. Our websites adapt seamlessly to various devices, ensuring a consistent and user-friendly experience across desktops, tablets, and smartphones.'}
            href={'#'}
          />
          <Card
            heading={'Interactive User Experience'}
            icon={<Icon as={FcReadingEbook} w={10} h={10} />}
            description={'Transform your digital presence with interactive user experiences. We specialize in incorporating dynamic elements and animations that engage visitors and leave a lasting impression on your audience.'}
            href={'#'}
          />
          <Card
            heading={'Optimized Performance'}
            icon={<Icon as={FcBullish} w={10} h={10} />}
            description={'Maximize your websites performance with our front-end optimization services. We prioritize fast loading times, efficient code, and a smooth user experience, ensuring your site performs at its best.'}
            href={'#'}
          />
          <Card
            heading={'Accessible Design'}
            icon={<Icon as={FcApprove} w={10} h={10} />}
            description={'Make your website inclusive to all users with our accessible design solutions. We focus on creating web experiences that are user-friendly for everyone, including those with disabilities, to ensure a broad and diverse audience.'}
            href={'#'}
          />
          <Card
            heading={'Cross-Browser Compatibility'}
            icon={<Icon as={FcCollect} w={10} h={10} />}
            description={'Ensure your website reaches its audience consistently across different browsers. We specialize in crafting front-end solutions that maintain compatibility and functionality, providing a seamless experience for users, regardless of their chosen browser.'}
            href={'#'}
          />
          <Card
            heading={'Photography & Video'}
            icon={<Icon as={FcMultipleCameras} w={10} h={10} />}
            description={'Our photography services go beyond capturing images; we specialize in crafting visual narratives that resonate with your brand identity. From striking product showcases to captivating interior/exteriors of your establishment, our lens and Adobe Cloud photo and Da Vinci Resolve studio skills brings your story to life.'}
            href={'#'}
          />
          <Card
            heading={'Graphic & Logo Work'}
            icon={<Icon as={FcPicture} w={10} h={10} />}
            description={'From conceptualizing unique brand elements to refining visual identities, our design process is a fusion of creativity and precision. Elevate your brand aesthetics with our expertise, and let us redefine the visual language of your business through the artistry of Adobe Photoshop'}
            href={'#'}
          />
        </Flex>
      </Container>

    </Box>
  )
}