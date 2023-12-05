'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'


export default function Footer(){
    return (
          <Box bg={'#005EB0'} p={5} textAlign={'center'} maxW={''}>
            <Text>© 2023 <Text as={'span'} fontWeight={'bold'}>myLLc</Text></Text>
          </Box>

    )
}