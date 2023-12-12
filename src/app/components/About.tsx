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
      <Container maxW={'100%'} bg={'#69C9FF'} textAlign={'center'}>
        <Stack as={Box} pt={'70px'} pb={'100px'}>
          <Heading
            pb={10}
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Simply put, <br />
            <Text as={'span'} color={'#005EB0'}>
            less is more
            </Text>
          </Heading>
          <Flex alignSelf={'center'}>
            <Text maxW={'4xl'} color={'white'} fontSize={'17'}>
            In the world of web development, the philosophy of &quot;Less is more&quot; holds particular 
            significance as it encapsulates the essence of elegant and user-centric design. 
            Embracing simplicity in web development is pivotal for fostering a seamless user experience. 
            By minimizing unnecessary complexities, superfluous elements, and convoluted features, Metatower founder,<Text as={'span'} fontStyle={'italic'} color={'rgb(0, 94, 176)'}> Myles DeBoer</Text>, can 
            create websites that not only load faster, but also resonate more effectively with users. 
            A clean and minimalist design not only enhances the aesthetic appeal, but also ensures that 
            visitors can navigate effortlessly. At Metatower Media, we bring these tactics and <Text as={'span'} fontStyle={'italic'} color={'rgb(0, 94, 176)'}> your vision to life</Text>.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}
