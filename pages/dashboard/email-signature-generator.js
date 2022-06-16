import { useState } from 'react'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { EmailContextProvider } from 'context/email/templateContext'
import { DetailsContextProvider } from 'context/email/detailsContext'
import { CustomizeContextProvider } from 'context/email/customizeContext'
import { UploadContextProvider } from 'context/email/uploadContext'
import EmailSidebar from '@/components/email-sidebar/EmailSidebar'
import EmailTemplates from '@/components/email-templates'
import CreateSignatureButton from '@/components/email-sidebar/CreateSignatureButton'
import ClearFieldsButton from '@/components/email-sidebar/ClearFieldsButton'
import { Button, Box, Grid, GridItem, Flex } from '@chakra-ui/react'
import CreateSignatureSidebar from '@/components/email-sidebar/CreateSignatureSidebar'


export default function EmailSignaturePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (!loading && !user) {
    router.push('/')
  }

  const [createSig, setCreateSig] = useState(false)

  const handleCreateSignature = (value) => {
    setCreateSig(value)
  }

  const handleEditSignature = (value) => {
    setCreateSig(value)
  }

  const handleClearFields = (value) => {
    setCreateSig(value)
  }
  
  const variants = {
    initial: {
      opacity: 0,
      x: '-100%'
    },
    animate: {
      opacity: 1,
      x: '0'
    }
  }

  const transition = {
    ease: 'easeInOut',
    duration: .5
  }

  return (
    <EmailContextProvider>
      <DetailsContextProvider>
        <CustomizeContextProvider>
          <UploadContextProvider>
            <Layout>
              <Box as="main" w="100%" h="calc(100vh - 81px)">
                <Grid h="100%" templateColumns="380px auto">
                  <GridItem as="aside" bg="blue.800" borderRight="1px solid #BBB" overflow="hidden">
                    {createSig === true ?
                        <motion.div
                          initial="initial"
                          animate="animate"
                          transition={transition}
                          variants={variants}
                      >
                        <CreateSignatureSidebar handleClick={(value) => handleEditSignature(value)} />
                      </motion.div>
                    :
                      <EmailSidebar />
                    }
                  </GridItem>

                  <GridItem as="section">
                    <Box w="100%" h="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="40px">
                      <EmailTemplates />
                      <CreateSignatureButton handleClick={(value) => handleCreateSignature(value)} />
                    </Box>
                    <ClearFieldsButton handleClick={(value) => handleClearFields(value)} />
                  </GridItem>
                </Grid>
              </Box>
            </Layout>
          </UploadContextProvider>
        </CustomizeContextProvider>
      </DetailsContextProvider>
    </EmailContextProvider>
  )
}
