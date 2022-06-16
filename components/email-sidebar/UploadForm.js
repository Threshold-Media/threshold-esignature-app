import { useState } from "react"
import { storage } from '@/lib/firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { useContext } from 'react'
import { Heading, FormControl, Stack, FormLabel, Alert, AlertIcon, Input, Flex, Button } from '@chakra-ui/react'
import UploadContext from 'context/email/uploadContext'


const UploadForm = ({ }) => {
  const ctx = useContext(UploadContext)
  const logoURL = ctx.logoURLValue
  
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]

    if (!file) return

    const storageRef = ref(storage, `uploads/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgresspercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          ctx.fetchLogoURL(downloadURL)
        })
      }
    )
  }

  return (
    <>
      <Heading as="h2" size="md">
        Upload Your Signature Images
      </Heading>

      <Stack spacing={8} p="40px 0">
        <FormControl>
          <FormLabel htmlFor="url" mb="0">
            Company logo URL
          </FormLabel>
          <Input id="url" flex="1" type="text" variant="flushed" placeholder="https://example.com/image.jpg" value={logoURL} onChange={(e) => ctx.fetchLogoURL(e.target.value)} />
        </FormControl>

        <Flex flexDirection="column">
          <Stack spacing={6}>
            <Alert status="warning" color="#000">
              If you do not have a URL for your logo, go to your company website, find the logo and 'right-click' on the image.
              Select 'Copy image address', then go back to the 'Company logo URL' field and 'right-click' on it and select 'paste'.
              The 'Company logo URL' field should now be popualted with the copied image URL.
            </Alert>

            {/* <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="theme">Upload your Logo</FormLabel>
                <Input id="url" flex="1" type="file" variant="flushed" />
              </FormControl>
              <Button type="submit" size="sm" colorScheme="gray" variant="solid" mt="2">Upload Image</Button>
            </form> */}
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}

export default UploadForm
