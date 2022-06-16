import NextLink from 'next/link'
import NextImage from 'next/image'
import { Box, Heading, Button, Flex } from '@chakra-ui/react'
import logoImg from '../public/threshold-media-email-logo-sm.png'

export default function Custom404() {
  return (
    <Box w="100vw" h="100vh">
      <Flex w="100%" h="100%" flexDirection="column" justifyContent="center" alignItems="center" gap="40px">
        <NextLink href="/" passHref>
          <a className="login__logo">
            <NextImage
              src={logoImg}
              width="229"
              height="60"
              alt="Threshold Media - Digital Marketing Agency"
            />
          </a>
        </NextLink>
        <Heading as="h1">404 - Page Not Found</Heading>
        <NextLink href="/" passHref>
          <a>
            <Button colorScheme="blue">Take me back home!</Button>
          </a>
        </NextLink>
      </Flex>
    </Box>
  )
}