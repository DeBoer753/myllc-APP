// CLIENT
'use client'

// CHAKRA
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

// FOOTER
export default function Footer(){
  
    return (
          <Box bg={'rgb(0, 94, 176)'} p={5} textAlign={'center'} maxW={''}>
            <Text>© 2023 <Text as={'span'} fontWeight={'bold'}>Metatower Media LLC</Text></Text>
          </Box>
    )
}