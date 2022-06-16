import { useState } from 'react'
import NextImage from 'next/image'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ArrowBackIcon, CheckIcon, CopyIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, ListItem, OrderedList, useDisclosure, VStack } from '@chakra-ui/react'
import googleExampleImage from '../../public/gmail-example.jpg'
import outlookExampleImage from '../../public/outlook-example-2.jpg'
import { AppleIcon, GoogleIcon, OutlookIcon } from '@/styles/theme'
import Google from 'react-color/lib/components/google/Google'

const CreateSignatureSidebar = ({ handleClick }) => {

  const [isCopiedPlain, setIsCopiedPlain] = useState(false)
  const [isCopiedHTML, setIsCopiedHTML] = useState(false)
  const [drawerConent, setDrawerConent] = useState({ gmail: false, outlook: false, apple: false})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const editSignature = () => {
    handleClick(false)
  }

  const handleGmailClick = () => {
    setDrawerConent({gmail: true, outlook: false, apple: false})
    onOpen()
  }

  const handleOutlookClick = () => {
    setDrawerConent({gmail: false, outlook: true, apple: false})
    onOpen()
  }
  const handleAppleClick = () => {
    setDrawerConent({gmail: false, outlook: false, apple: true})
    onOpen()
  }

  function selectElementText(el){
    const range = document.createRange()
    range.selectNodeContents(el)
    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range) 
  }

  function copyToClipBoard() {
    const reference_element = document.getElementById("email-signature")
    selectElementText(reference_element)
    const success = document.execCommand('copy')

    if(success) {
      setIsCopiedPlain(true)
      setTimeout(() => {
        setIsCopiedPlain(false)
      }, 2500)
    } else {
      setIsCopiedPlain(false)
    }
  
    window.getSelection().removeAllRanges()
  }
  
  const copySignaturePlain = () => {
    copyToClipBoard()
  }

  const copyStringHTML = document.getElementById("email-signature").innerHTML

  const copySignatureHTML = () => {
    setIsCopiedHTML(true)
    setTimeout(() => {
      setIsCopiedHTML(false)
    }, 2500)
  }

  return (
    <>     
      <Box h="100%" p="60px 30px" overflowY="auto">
        <VStack spacing={2} align='stretch'>

          {isCopiedPlain ?
            <Button rightIcon={<CheckIcon />} size="lg" colorScheme="green" variant="solid">
              Copied!
            </Button>
            :
            <Button rightIcon={<CopyIcon />} size="lg" colorScheme="gray" variant="solid-gray" onClick={copySignaturePlain}>
              Copy Signature
            </Button>
          }

          <CopyToClipboard text={copyStringHTML} onCopy={copySignatureHTML}>
            {isCopiedHTML ?
              <Button rightIcon={<CheckIcon />} size="lg" colorScheme="green" variant="solid" >
                Copied!
              </Button>
              :
              <Button rightIcon={<CopyIcon />} size="lg" colorScheme="gray" variant="solid-gray">
                Copy Signature as HTML
              </Button>
            }
          </CopyToClipboard>
        </VStack>
        <VStack spacing={2} align='stretch' mt="30px">
          <Button rightIcon={<OutlookIcon w={6} h={6} />} size="lg" colorScheme="gray" variant="solid-gray" onClick={handleOutlookClick}>Adding to Outlook</Button>
          <Button rightIcon={<GoogleIcon w={6} h={6} />} size="lg" colorScheme="gray" variant="solid-gray" onClick={handleGmailClick}>Adding to Gmail</Button>
          <Button rightIcon={<AppleIcon w={6} h={6} />} size="lg" colorScheme="gray" variant="solid-gray" onClick={handleAppleClick}>Adding to Apple Mail</Button>
        </VStack>
        <Box mt="30px">
          <Button leftIcon={<ArrowBackIcon />} colorScheme="gray" variant="solid-gray" onClick={editSignature}>Back to Editor</Button>
        </Box>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent p="40px">
          <DrawerCloseButton />
          {drawerConent.gmail == true &&
            <>
              <DrawerHeader>How to add your email signature to Gmail?</DrawerHeader>
              <DrawerBody>
                <OrderedList spacing={3}>
                  <ListItem>Log in to your Gmail account, then click the cog in the top right corner.</ListItem>
                  <ListItem>Select Settings from the drop down menu.</ListItem>
                  <ListItem>Scroll down until you reach the email signature editor, then paste your new email signature there.</ListItem>
                  <ListItem>Scroll to the bottom of the page and click 'save changes'.</ListItem>
                  <Box pt="30px">
                    <NextImage
                      src={googleExampleImage}
                      width="900"
                      height="312"
                      alt="A screenshot of adding a email signature in Gmail"
                    />
                  </Box>
                </OrderedList>
              </DrawerBody>
            </>
          }
          {drawerConent.outlook == true &&
            <>
              <DrawerHeader>How do I add my new email signature to Outlook?</DrawerHeader>
              <DrawerBody>
                <Text>To create a signature in Outlook for Windows and Mac:</Text>
                <OrderedList spacing={3}>
                  <ListItem>Log in to your Outlook account and select the Home Tab &gt; New Email.</ListItem>
                  <ListItem>Click the Message tab.</ListItem>
                  <ListItem>In the Include group section, select Signature &gt; Signatures.</ListItem>
                  <ListItem>In the Choose Default Signature section, select the account you would like to associate with the signature from the email account dropdown.</ListItem>
                  <ListItem>In the Select Signature to Edit section, click the New button and name your signature.</ListItem>
                  <ListItem>In the Edit Signature section, paste in your HubSpot generated signature and select OK.</ListItem>
                  <Box pt="30px">
                    <NextImage
                      src={outlookExampleImage}
                      width="600"
                      height="427"
                      alt="A screenshot of adding a email signature in Outlook"
                    />
                  </Box>
                </OrderedList>
              </DrawerBody>
            </>
          }
          {drawerConent.apple == true &&
            <>
              <DrawerHeader>How do I add my new email signature to Apple Mail?</DrawerHeader>
              <DrawerBody>
                <OrderedList spacing={3}>
                  <ListItem>Open the Mail application and log in to your account.</ListItem>
                  <ListItem>Click Mail and then Preferences in the top left corner of your screen.</ListItem>
                  <ListItem>From the preferences pop-up, click the Signatures tab.</ListItem>
                  <ListItem>Click the + button at the bottom of the middle column.</ListItem>
                  <ListItem>Paste your new email signature into the right-hand column and make sure to uncheck the checkbox that states, "always match my default message font."</ListItem>
                  <ListItem>Close the pop-up window to save.</ListItem>
                </OrderedList>
              </DrawerBody>
            </>
          }
        </DrawerContent>
      </Drawer>
    </>
  )

}

export default CreateSignatureSidebar