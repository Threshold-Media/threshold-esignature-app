import Head from 'next/head'
import { useRouter } from 'next/router'
import { AuthProvider } from '@/lib/auth'
import ErrorPage from "next/error"
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { motion } from 'framer-motion'

import '@/styles/globals.scss'

const App = ({ Component, pageProps, router }) => {

  //const router = useRouter()

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    }
  }

  const transition = {
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <>
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Threshold Media - Email Signature Generator</title>
          <meta name="description" content="" />
        </Head>

        <ChakraProvider resetCSS theme={theme}>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <Component {...pageProps} />
          </motion.div>
        </ChakraProvider>
      </AuthProvider>
    </>
  )
  
}

export default App