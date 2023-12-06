// CHAKRA PLUGS
'use client'


// REACT
import React, { useState, useEffect } from 'react';

// COMPONENTS
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'


// ICONS
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = ['Home', 'About', 'Services', 'Projects', 'Contact']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700')
      }}
      href={`#${children.toLowerCase()}`}>
      {children}
    </Box>
  )
}
export default function Simple() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box style={{ backdropFilter: scrolling ? 'blur(5px)' : 'rgb(5, 94, 176)' }} bg={ scrolling ? 'rgb(0, 94, 176, 0.6)' : 'rgb(0, 94, 176)'} px={4} position={"sticky"} top={0} zIndex={1000} transition="background-color 0.3s ease-in-out" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} direction={'row-reverse'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Box>Metatower</Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Flex as={'nav'} justifyContent={'center'}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  )
}