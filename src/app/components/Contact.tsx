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
  VStack,
  Container
} from '@chakra-ui/react'

// REACT
import React, {useEffect} from 'react';

// FORMIK
import { Formik, Form, useFormikContext } from 'formik';

// FORMSPREE
import { useForm } from '@formspree/react';

// COMPONENTS
import { validationSchema } from './validationSchema';
import { SuccessfulSubmit } from './successfulSubmit';

// CONTACT
export default function Contact() {
  const [state, handleSubmit] = useForm("mvgokoyz"); 

  if (state.succeeded) {
    return <SuccessfulSubmit />
  }
  
  return (
    < Container
      maxW="100%"
      id="contact"
      backgroundImage={`url('/imgs/contact_banner.png')`}
      sx={{
        backgroundAttachment: 'scroll', 
      
        '@media screen and (min-width: 390px)': {
          backgroundAttachment: 'scroll',
          backgroundSize: '200% auto', 

    
        },
        '@media screen and (min-width: 768px)': {
          backgroundAttachment: 'scroll', 

        },
        '@media screen and (min-width: 1024px)': {
          backgroundAttachment: 'fixed',
          backgroundSize: '100% auto', 
        },
      }}
    >    

      
      <Flex align="center" justify="center" flexDir={'column'} p={{ base: 16, lg: 16 }}>

      <Heading color={'white'} textAlign={'center'} mb={{lg: '50px', sm: '30px', base: '30px'}} fontSize={{ base: '4xl', md: '5xl',}}>
          Let&apos;s Chat
      </Heading>
          
        <Box pl={0} pb={{base: 10}}>
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

                      <FormControl  isInvalid={!!errors.firstName && touched.firstName}> 
                        <FormLabel htmlFor="firstName">First Name</FormLabel> 
                        <InputGroup>
                          <Input type="text" id="firstName" name="firstName" value={values.firstName} onChange={handleChange} placeholder="First Name" w={'200%'}/>
                          <FormErrorMessage>
                            {errors.firstName}
                          </FormErrorMessage>
                        </InputGroup>
                      </FormControl>

                      <FormControl  isInvalid={!!errors.lastName && touched.lastName}>
                        <FormLabel htmlFor="lastName"> Last Name</FormLabel>
                        <InputGroup>
                          <Input type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleChange} placeholder="Last Name" w={'200%'}/>
                        </InputGroup>
                        <FormErrorMessage>
                          {errors.lastName}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl  isInvalid={!!errors.email && touched.email}>
                        <FormLabel>Email</FormLabel>
                        <InputGroup>
                          <Input type="email" id="email" name="email" value={values.email} onChange={handleChange} placeholder="Your Email" />
                        </InputGroup>
                        <FormErrorMessage>
                          {errors.email}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl  isInvalid={!!errors.message && touched.message}>
                        <FormLabel>Message</FormLabel>
                        <Textarea name="message" placeholder="Your Message" rows={6} resize="none" value={values.message} onChange={handleChange}/>
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