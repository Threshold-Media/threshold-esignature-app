import { useContext } from 'react'
import DetailsContext from 'context/email/detailsContext'
import { Button, useToast } from '@chakra-ui/react'

const CreateSignatureButton = ({ handleClick }) => {
  const toast = useToast()
  const detailsCTX = useContext(DetailsContext)
  const firstName = detailsCTX.nameValue

  const handleOnClick = () => {
    if (firstName.length === 0) {
      handleClick(false)
      toast({
        title: 'Please fill out missing field:',
        description: 'First & Last Name',
        status: 'error',
        duration: 8000,
        isClosable: true,
      })
    } else {
      handleClick(true)
    }
  }

  return (
    <>
      <Button size="lg" colorScheme="blue" variant="solid-blue" onClick={handleOnClick}>Create Signature</Button>
    </>
  )
}

export default CreateSignatureButton