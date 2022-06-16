import { useContext } from 'react'
import DetailsContext from 'context/email/detailsContext'
import CustomizeContext from 'context/email/customizeContext'
import UploadContext from 'context/email/uploadContext'
import { Button, Flex } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const ClearFieldsButton = ({ handleClick }) => {
  const detailsCTX = useContext(DetailsContext)
  const customizeCTX = useContext(CustomizeContext)
  const uploadCTX = useContext(UploadContext)

  const handleClearFields = () => {
    detailsCTX.clearDetailFields()
    customizeCTX.clearCustomizeFields()
    uploadCTX.clearLogoURL()
    handleClick(false)
  }

  return (
    <Flex position="absolute" bottom="20px" left="20px">
      <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="solid" onClick={() => handleClearFields()}>
        Clear all fields
      </Button>
    </Flex>
  )
}

export default ClearFieldsButton