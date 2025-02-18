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
          <Box bg={'rgba(42, 42, 42, 0.8)'} p={5} textAlign={'center'} maxW={''}>
            <Text>© 2025 <Text as={'span'} fontWeight={'bold'}>Graybuck Media</Text></Text>
          </Box>
    )
}