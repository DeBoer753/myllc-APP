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
  Image,
  Heading
} from '@chakra-ui/react'


// ICONS AND NAV LINKS
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
        bg: useColorModeValue('gray.100', 'gray.100'),
        color: 'rgb(0, 94, 176)',
        transition: 'background-color 0.2s ease-in-out'
      }}
      href={`#${(typeof children === 'string' ? children : '').toLowerCase()}`}>
      {children}
    </Box>
  )
}

// NAVBAR
export default function Navbar() {
  // Scroll Effect 1: Navbar blur 
  const [scrolling, setScrolling] = useState(false);
  const handleScroll1 = () => {
    setScrolling(window.scrollY > 60);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);

  // Hamburger Icon: Open and Close 
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Scroll Effect 2: Image and Header fade in and out during scroll - - - - - - - - [[MAY NEED TO DELETE]]
  const [opacity, setOpacity] = useState(1);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll2 = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 62;
    
      const scrollingUp = scrollPosition < lastScrollPosition;
    
      setOpacity(scrollPosition < scrollThreshold ? 1 : 0);
    
      // Update header visibility based on scroll direction and position
      if (scrollingUp) {
        setHeadingVisible(scrollPosition > scrollThreshold);
      } else {
        setHeadingVisible(scrollPosition >= scrollThreshold);
      }
    
      setLastScrollPosition(scrollPosition);
    };
  
    window.addEventListener('scroll', handleScroll2);
  
    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  }, [lastScrollPosition]);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [[MAY NEED TO DELETE]]

  return (
    <>
      <Box backdropFilter={ scrolling ? 'blur(5px)' : 'blur(5px)'} bg={ scrolling ? 'rgb(0, 94, 176, 0.6)' : 'rgb(0, 94, 176)'} px={4} position={"sticky"} top={0} zIndex={1000} transition="background-color 0.3s ease-in-out" >
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

{/* Scroll Effect 2: Image and Header fade in and out during scroll - - - - - - - - [[MAY NEED TO DELETE]] */}

          <Flex>
            <Image 
            ml={'5px'} 
            w={'60px'} 
            src='/metaTowerLogo.png' 
            style={{ 
              opacity, transition: 'opacity 0.5s' 
            }} />

            <Heading
            position={"absolute"}
            left={2}
            ml={5}
            mt={2}
            fontWeight={'semibold'}
            fontStyle={'italic'}
            fontSize={'20px'}
            style={{
              opacity: headingVisible ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          >
            Metatower Media
            </Heading>
          </Flex>

{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [[MAY NEED TO DELETE]] */}

          {/* <Flex>
            <Image ml={'5px'} w={'60px'} src='/metaTowerLogo.png'/>
            <Heading ml={5} mt={2} fontWeight={'semibold'} fontStyle={'italic'} fontSize={'20px'}>Metatower</Heading>
          </Flex> */}
          
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