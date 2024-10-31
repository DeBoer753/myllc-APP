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

// FUNCTION: Autofill Watcher
// function AutofillWatcher() {
//   const { values, setFieldTouched, validateForm } = useFormikContext();

//   useEffect(() => {
//     Object.keys(values).forEach((field) => {
//       if (values[field]) {
//         setFieldTouched(field, true, false);
//       }
//     });
//     validateForm();
//   }, [values, setFieldTouched, validateForm]);

//   return null;
// }

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

      <Text ml={-10} mr={-10} maxW={'3xl'} textAlign={'center'} mb={10} fontSize={15} fontWeight={'bold'} color={'white'}>
      We invite you to embark on a journey of digital transformation with a custom-designed website tailored to your business needs. Our experienced team is ready to collaborate with you, creating a digital presence that perfectly reflects your brand identity. As a special offer, the first three clients will receive exclusive savings, providing exceptional value while enhancing your online presence. Don’t miss this limited-time opportunity to elevate your brand with a professional, high-quality website. Contact us today, and let’s bring your vision to life. 
      </Text>
          
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
                  // validationSchema={validationSchema}
                  // onSubmit={async (values, actions) => {
                  //   await handleSubmit(values);
                  //   actions.setSubmitting(false);
                  // }}
                  // validateOnChange
                  // validateOnBlur
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