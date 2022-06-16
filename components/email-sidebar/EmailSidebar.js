import { useState } from 'react'
import { motion } from 'framer-motion'
import { Box, IconButton, Grid, GridItem, Heading } from '@chakra-ui/react'
import { DisplayIcon, LayoutIcon, PaintIcon, UploadIcon } from '@/styles/theme'
import LayoutForm from './LayoutForm'
import DetailsForm from './DetailsForm'
import CustomizeForm from './CustomizeForm'
import UploadForm from './UploadForm'

  
const EmailSidebar = ({ }) => {

  const [layoutForm, setLayoutForm] = useState(true)
  const [detailsForm, setDetailsForm] = useState(false)
  const [customizeForm, setCustomizeForm] = useState(false)
  const [uploadForm, setUploadForm] = useState(false)

  const displayLayoutForm = () => {
    setLayoutForm(true)
    setDetailsForm(false)
    setCustomizeForm(false)
    setUploadForm(false)
  }
  const displayDetailsForm = () => {
    setDetailsForm(true)
    setLayoutForm(false)
    setCustomizeForm(false)
    setUploadForm(false)
  }
  const displayCustomizeForm = () => {
    setCustomizeForm(true)
    setLayoutForm(false)
    setDetailsForm(false)
    setUploadForm(false)
  }
  const displayUploadForm = () => {
    setUploadForm(true)
    setLayoutForm(false)
    setDetailsForm(false)
    setCustomizeForm(false)
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
    duration: 0.5
  }

  return (
    <>
      <Grid className="nav_grid">
        <GridItem className={layoutForm ? "nav_grid_item active" : "nav_grid_item"} bg="blue.700" _hover={{ bg: 'blue.800' }} onClick={displayLayoutForm}>
          <LayoutIcon w="30px" h="30px" fill="white" />
        </GridItem>
        <GridItem className={detailsForm ? "nav_grid_item active" : "nav_grid_item"} bg="blue.700" _hover={{ bg: 'blue.800' }} onClick={displayDetailsForm}>
          <DisplayIcon w="30px" h="30px" fill="white" />
        </GridItem>
        <GridItem className={customizeForm ? "nav_grid_item active" : "nav_grid_item"} bg="blue.700" _hover={{ bg: 'blue.800' }} onClick={displayCustomizeForm}>
          <PaintIcon w="30px" h="30px" fill="white" />
        </GridItem>
        <GridItem className={uploadForm ? "nav_grid_item active" : "nav_grid_item"} bg="blue.700" _hover={{ bg: 'blue.800' }} onClick={displayUploadForm}>
          <UploadIcon w="30px" h="30px" fill="white" />
        </GridItem>
      </Grid>
      
      <Box h="calc(100% - 80px)" p="30px" color="white" overflowY="auto">
        {layoutForm === true &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <LayoutForm />
          </motion.div>
        }
        {detailsForm === true &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <DetailsForm />
          </motion.div>
        }
        {customizeForm === true &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <CustomizeForm />
          </motion.div>
        }
        {uploadForm === true &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <UploadForm />
          </motion.div>
        }
      </Box>
    </>
  )

}

export default EmailSidebar