// CLIENT
'use client'

// CHAKRA
import {
  Box,
  Container
} from '@chakra-ui/react'

// HERO
export default function Hero() {

  return (
    <Box id="home">
      <Container maxW={'100%'} backgroundImage={`url('/imgs/graybuck_banner.jpg')`} backgroundSize="cover" backgroundPosition="center" height="430px" >
      </Container>
    </Box >
  )
}
