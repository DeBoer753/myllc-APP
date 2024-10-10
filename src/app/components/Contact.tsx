'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
  useClipboard,
  useColorModeValue,
  VStack,
  Container
} from '@chakra-ui/react'


export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('example@example.com')

  return (
    <Container maxW={'100%'} id="contact"  backgroundImage={`url('/contact_bg.jpg')`} backgroundSize='cover' backgroundAttachment='fixed'>
      <Flex align="center" justify="center" flexDir={'column'} p={{ base: 16, lg: 16 }}>

      <Heading textAlign={'center'} mb={{lg: '50px', sm: '30px', base: '30px'}} fontSize={{ base: '4xl', md: '5xl',}}>
          Let&apos;s Chat
      </Heading>

      <Text maxW={'2xl'} textAlign={'center'} mb={10} p={2} fontSize={15} fontWeight={'bold'}>
          We invite you to embark on a journey of digital transformation by securing a tailor-made website for your business. Our dedicated team is eager to collaborate with you, crafting a digital experience that seamlessly aligns with your brand identity. Act now and be among our first three clients to enjoy exclusive savings, unlocking a world of possibilities at an unprecedented value. Don&apos;t miss out on this limited-time opportunity to elevate your online presence while making the most of our special discounts. Reach out today, and let&apos;s turn your web dreams into a reality! 
      </Text>

        <Box pb={{base: 10}}>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>

            <Stack spacing={{ base: 4, md: 4, lg: 0 }}>
              <Box bg={useColorModeValue('white', 'gray.700')} borderRadius="lg" p={8} w={{lg: '400px', sm: '400px', base: '340px'}} color={useColorModeValue('gray.700', 'whiteAlpha.900')} shadow="base">
                <VStack spacing={5}>

                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      <Input type="text" name="name" placeholder="Your Name" w={'200%'}/>
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>

                      <Input type="email" name="email" placeholder="Your Email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea name="message" placeholder="Your Message" rows={6} resize="none"/>
                  </FormControl>

                  <Button colorScheme="blue" bg="blue.400" color="white" _hover={{ bg: 'blue.500' }} width="full">
                    Send Message
                  </Button>

                </VStack>
              </Box>
            </Stack>
            
          </VStack>
        </Box>

      </Flex>
    </Container>
  )
}