'use client'

import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Image,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Links = ['Home', 'About', 'Services', 'Projects', 'Contact'];

export default function Navbar({ homeRef, aboutRef, servicesRef, projectsRef, contactRef }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Scroll-to-section function for smooth scrolling
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll-related states for logo and heading fade effects
  const [scrolling, setScrolling] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  // Effect for the logo and Metatower Media text fade-in/out
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 80; // Adjust this threshold if needed

      // Fade effect based on scroll position and direction
      setOpacity(scrollPosition < scrollThreshold ? 1 : 0);
      setHeadingVisible(scrollPosition > scrollThreshold);

      setScrolling(scrollPosition > 60);
      setLastScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  // Mapping links to their respective refs
  const linkToRefMap = {
    Home: homeRef,
    About: aboutRef,
    Services: servicesRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  return (
    <>
      <Box
        backdropFilter={scrolling ? 'blur(5px)' : 'blur(0)'}
        bg={scrolling ? 'rgba(0, 94, 176, 0.8)' : 'rgba(0, 94, 176, 1)'}
        px={4}
        position={"sticky"}
        top={0}
        zIndex={1000}
        transition="background-color 0.3s ease-in-out"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Align logo and text to the left side */}
          <Flex alignItems={'center'}>
            <Image
              src='/imgs/metatower_logo.png'
              alt="Logo"
              ml={'5px'} 
              w={'60px'} 
              style={{
                opacity: opacity,
                transition: 'opacity 0.5s',
              }}
            />
            <Heading
              ml={-16}
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

          <Flex flex={1} justifyContent="flex-end">
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>

          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Box
                  as="a"
                  key={link}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.100', 'gray.700'),
                  }}
                  onClick={() => scrollToSection(linkToRefMap[link as keyof typeof linkToRefMap])}
                >
                  {link}
                </Box>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Flex as={'nav'} justifyContent={'center'}>
              {Links.map((link) => (
                <Box
                  as="a"
                  key={link}
                  px={2}
                  py={1}
                  rounded={'md'}
                  onClick={() => {
                    scrollToSection(linkToRefMap[link as keyof typeof linkToRefMap]);
                    onClose();  // Close mobile menu on link click
                  }}
                >
                  {link}
                </Box>
              ))}
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
