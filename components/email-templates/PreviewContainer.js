import { Box, Flex, Heading } from "@chakra-ui/react"

const PreviewContainer = ({ children }) => {
  
  return (
    <Flex as="section" w="900px" h="500px" flexDirection="column" bg="white"
      boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px">
      <Box w="100%" borderTopRadius="10px" bg="#404040" p="10px">
        <Heading as="p" size="sm" color="#fff">New Message</Heading>
      </Box>
      <Flex w="100%" h="100%" flexDirection="column">
        <Box w="100%" p="10px">
          <Heading as="p" size="sm" color="#404040" fontWeight="400" pb="4px" borderBottom="1px solid #ccc">To</Heading>
        </Box>
        <Box w="100%" p="10px">
          <Heading as="p" size="sm" color="#404040" fontWeight="400" pb="4px" borderBottom="1px solid #ccc">Subject</Heading>
        </Box>
        <Flex as="div" w="100%" h="100%" p="20px" alignItems="flex-end">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )

}

export default PreviewContainer