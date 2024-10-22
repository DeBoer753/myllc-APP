// CLIENT
'use client'

// CHAKRA 
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
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

// REACT
import { useState } from 'react'

// FORMIK
import { Formik, Form } from 'formik';

// FORMSPREE
import { useForm } from '@formspree/react';

// COMPONENTS
import { validationSchema } from './validationSchema';
import { SuccessfulSubmit } from './successfulSubmit';

// CONTACT
export default function Contact() {
  
  const [state, handleSubmit] = useForm("xgejejor");

  if (state.succeeded) {
    return <SuccessfulSubmit />
  }
  
  return (
    <Container maxW={'100%'} id="contact"  backgroundImage={`url('/imgs/contact_banner.jpg')`} backgroundSize='cover' backgroundAttachment='fixed'>
      
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






              
              <Box bg={'rgba(82, 82, 82, 1)'} borderRadius="lg" p={8} w={{lg: '400px', sm: '400px', base: '340px'}} color={'white'} shadow="base">
                <Formik
                  initialValues={
                    {
                      firstName: "",
                      lastName: "",
                      email: "",
                      message: ""
                    }
                  }
                  validationSchema={validationSchema}
                  onSubmit={async (values, actions) => {
                    await handleSubmit(values);
                    actions.setSubmitting(false)
                  }}
                  validateOnChange
                >
                {({ errors, touched, values, handleChange, isSubmitting }) => 
                  <Form>
                    <VStack spacing={5}>

                      <FormControl isRequired isInvalid={errors.firstName && touched.firstName}> 
                        <FormLabel htmlFor="firstName">First Name</FormLabel> 
                        <InputGroup>
                          <Input type="text" id="firstName" name="firstName" value={values.firstName} onChange={handleChange} placeholder="First Name" w={'200%'}/>
                          <FormErrorMessage>
                            {errors.firstName}
                          </FormErrorMessage>
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired isInvalid={errors.lastName && touched.lastName}>
                        <FormLabel htmlFor="lastName"> Last Name</FormLabel>
                        <InputGroup>
                          <Input type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleChange} placeholder="Last Name" w={'200%'}/>
                        </InputGroup>
                        <FormErrorMessage>
                          {errors.lastName}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl isRequired isInvalid={errors.email && touched.email}>
                        <FormLabel>Email</FormLabel>
                        <InputGroup>
                          <Input type="email" id="email" name="email" value={values.email} onChange={handleChange} placeholder="Your Email" />
                        </InputGroup>
                        <FormErrorMessage>
                          {errors.email}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl isRequired isInvalid={errors.message && touched.message}>
                        <FormLabel>Message</FormLabel>
                        <Textarea name="message" placeholder="Your Message" rows={6} resize="none"/>
                        <FormErrorMessage>
                          {errors.message}
                        </FormErrorMessage>
                      </FormControl>

                      <Button colorScheme="blue" bg="rgba(42, 42, 42, 0.8)" color="white" _hover={{ bg: 'rgba(136, 136, 136, 0.8)' }} width="full" isLoading={isSubmitting} type='submit'>
                        Send Message
                      </Button>

                    </VStack>
                  </Form>
                }
                </Formik>
              </Box>








            </Stack>
          </VStack>
        </Box>

      </Flex>
    </Container>
  )
}