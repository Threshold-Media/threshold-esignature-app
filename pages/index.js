import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth'
//import { sendPasswordReset } from '@/lib/auth'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { Button, Box, Text, Input, Link, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import logoImg from '../public/threshold-media-email-logo-sm.png'

export default function Home() {

  const { logInWithEmailAndPassword, user, loading, passwordError, sendPasswordReset, resetSent, setResetSent } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [resetEmail, setResetEmail] = useState('')
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const [password, setPassword] = useState('')
  const [vaildEmail, setVaildEmail] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) {
      router.push('/dashboard/email-signature-generator')
    }
  }, [user, loading])

  useEffect(() => {
    if (resetSent === true) {
      setResetEmailSent(true)
      setTimeout(() => {
        setResetEmailSent(false)
        setResetSent(false)
      }, 3000)
    } else {
      setResetEmailSent(false)
    }
  }, [resetSent])
  
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onFormSubmit = e => {
    e.preventDefault()
    if (emailRegex.test(email)) {
      logInWithEmailAndPassword(email, password)
      setVaildEmail(true)
    } else {
      setVaildEmail(false)
      setTimeout(() => {
        setVaildEmail(true)
      }, 2000)
    }

  }

  return (
    <>
      <Box w="100vw" h="100vh">
        <div className="colorize"></div>
        <div className="login">
          <div className="login__container">

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

            <form onSubmit={onFormSubmit}>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
              />
              {vaildEmail == false && <Text fontSize="sm" color="red">Please enter a vaild email address.</Text>}
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                mt="6px"
              />
              {passwordError !== null && <Text fontSize="sm" color="red">{passwordError}</Text>}
              <Button
                type="submit"
                colorScheme="blue"
                variant="solid-blue"
                mt="20px"
                w="100%"
              >
                Login
              </Button>
            </form>

            <Box mt="6px">
              <Link fontSize="14px" onClick={onOpen}>
                Forgot Password?
              </Link>
            </Box>

          </div>
        </div>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent p="40px">
          <DrawerCloseButton />
          <DrawerHeader>Forgot your password?</DrawerHeader>
          <DrawerBody>
            <VStack spacing={5} align='flex-start'>
              <Text fontSize="md" w="70%">Don't worry, enter your email address below and we will email you password reset link!</Text>
              <Input
                type="text"
                w="50%"
                variant="outline"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Enter email address"
              />
              {resetEmailSent === true ?
                <Button
                  leftIcon={<CheckIcon />}
                  colorScheme="green"
                  variant="solid"
                >
                  Reset email sent!
                </Button>
              : 
                <Button
                  colorScheme="blue"
                  variant="solid-blue"
                  onClick={() => sendPasswordReset(resetEmail)}
                  >
                    Send password reset email
                </Button>
              }
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
  
}