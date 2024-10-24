'use client'

import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react'

export default function CallToActionWithAnnotation() {
  return (
    <Box id={'about'}>
      <Container maxW={'100%'} bg={'rgba(131, 131, 131, 0.8)'} textAlign={'center'}>
        <Stack as={Box} pt={'70px'} pb={'100px'}>
          <Heading
            pb={10}
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Evolving creatively, <br />
            <Text as={'span'} color={'rgba(35, 35, 35, 0.8)'}>
            protecting your vision
            </Text>
          </Heading>
          <Flex alignSelf={'center'}>
              <Text maxW={'4xl'} color={'white'} fontSize={'17'}>
              Graybuck Media founder,<Text as={'span'} fontStyle={'italic'} fontWeight={600} color={'rgba(9, 9, 9, 0.8)'}> Myles DeBoer</Text>, is dedicated to helping businesses grow and strengthen their brands. Just as a deer transforms with the seasons, Graybuck Media adapts to meet the ever-changing needs of businesses. Inspired by the resilience of a gray buck’s winter coat, we shield your brand from the 
              elements of a fast-paced digital world. At Graybuck, we provide tailored services in<Text as={'span'} fontStyle={'italic'} fontWeight={600} color={'rgba(9, 9, 9, 0.8)'}> web development</Text>, ensuring your online presence 
              is as strong as it is seamless. Our<Text as={'span'} fontStyle={'italic'} fontWeight={600} color={'rgba(9, 9, 9, 0.8)'}> photography & videography </Text>
              capture your story with clarity and emotion, while our <Text as={'span'} fontStyle={'italic'} fontWeight={600} color={'rgba(9, 9, 9, 0.8)'}>graphic & logo design</Text> services craft unique visuals that leave a lasting impact. Let us help your business thrive in any season and bring your 
              vision to life.
              </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}
