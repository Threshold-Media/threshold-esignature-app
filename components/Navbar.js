import NextLink from 'next/link'
import NextImage from 'next/image'
import { useAuth } from '@/lib/auth'
import { Heading, Box, Button } from '@chakra-ui/react'
import logoImg from '../public/threshold-media-email-logo-sm.png'

import styles from '../styles/Header.module.scss'

const Navbar = () => {

  const { signout } = useAuth()
  
  return (
    <>
      <header className={styles.header}>
        <Box w="380px" h="100%" pl="20px">
          <NextLink href="/" passHref>
            <a className={styles.logo}>
              <NextImage
                src={logoImg}
                width="229"
                height="60"
                alt="Threshold Media - Digital Marketing Agency, email signature generator"
              />
            </a>
          </NextLink>
        </Box>

        <Box w="1px" h="40px" borderRight="1px solid #bbb"></Box>

        <Box h="100%" ml="20px" display="flex" alignItems="center">
          <Heading as="h1" size="md">Email Signature Generator</Heading>
        </Box>

        <Box ml="auto" mr="40px">
          <Button colorScheme="blue" variant="solid-blue" onClick={signout}>
            Log Out
          </Button>
        </Box>
        
      </header>
    </>
  )

}

export default Navbar