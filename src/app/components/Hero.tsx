'use client'

import Head from 'next/head'
import {
  Box,
  Container
} from '@chakra-ui/react'


export default function CallToActionWithAnnotation() {

  return (
    <Box id="home">
      <Container maxW={'100%'} backgroundImage={`url('/imgs/metatower_banner.jpg')`} backgroundSize="cover" backgroundPosition="center" height="430px" >
      </Container>
    </Box >
  )
}
