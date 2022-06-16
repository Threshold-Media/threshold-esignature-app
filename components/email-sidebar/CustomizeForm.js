import { useContext } from 'react'
import CustomizeContext from 'context/email/customizeContext'
import { Heading, Stack, Input, FormControl, FormLabel, Select, Popover, PopoverTrigger, PopoverContent, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react'
import { HexColorPicker } from 'react-colorful'

const ThemeColorPickerContainer = () => {
  const ctx = useContext(CustomizeContext)
  const themeColor = ctx.themeColorValue

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <button style={{ borderRadius: '999px', border: '2px #fff solid', backgroundColor: themeColor, width: '40px', height: '40px', margin: '0', padding: '0' }}></button>
      </PopoverTrigger>
      <PopoverContent minWidth="0" width="auto" bg="none" border="none" borderRadius="8px">
        <HexColorPicker color={themeColor} onChange={(value) => ctx.fetchThemeColor(value)} />
      </PopoverContent>
    </Popover>
  )
}

const FontColorPickerContainer = () => {
  const ctx = useContext(CustomizeContext)
  const fontColor = ctx.textColorValue

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <button style={{ borderRadius: '999px', border: '2px #fff solid', backgroundColor: fontColor, width: '40px', height: '40px', margin: '0', padding: '0' }}></button>
      </PopoverTrigger>
      <PopoverContent minWidth="0" width="auto" bg="none" border="none" borderRadius="8px">
        <HexColorPicker color={fontColor} onChange={(value) => ctx.fetchTextColor(value)} />
      </PopoverContent>
    </Popover>
  )
}

const IconColorPickerContainer = () => {
  const ctx = useContext(CustomizeContext)
  const iconColor = ctx.linkColorValue

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <button style={{ borderRadius: '999px', border: '2px #fff solid', backgroundColor: iconColor, width: '40px', height: '40px', margin: '0', padding: '0' }}></button>
      </PopoverTrigger>
      <PopoverContent minWidth="0" width="auto" bg="none" border="none" borderRadius="8px">
        <HexColorPicker color={iconColor} onChange={(value) => ctx.fetchLinkColor(value)} />
      </PopoverContent>
    </Popover>
  )
}

const CustomizeForm = () => {
  const ctx = useContext(CustomizeContext)
  const themeColor = ctx.themeColorValue
  const fontColor = ctx.textColorValue
  const iconColor = ctx.linkColorValue
  const fontSizeValue = ctx.fontSizeValue.value
  const fontSizeName = ctx.fontSizeValue.name

  return (
    <>
      <Heading as="h2" size="md">
        Customize Your Signature
      </Heading>

      <Stack spacing={8} p="40px 0">
        <FormControl>
          <FormLabel htmlFor="theme" mb="0">
            Select theme color
          </FormLabel>
          <Flex>
            <Input id="theme" flex="1" type="text" variant="flushed" placeholder={themeColor} value={themeColor} onChange={(e) => ctx.fetchThemeColor(e.target.value)} />
            <ThemeColorPickerContainer />
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="font-color" mb="0">
            Select font color
          </FormLabel>
          <Flex>
            <Input id="font-color" flex="1" type="text" variant="flushed" placeholder={fontColor} value={fontColor} onChange={(e) => ctx.fetchTextColor(e.target.value)} />
            <FontColorPickerContainer />
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="icon" mb="0">
            Select icon color
          </FormLabel>
          <Flex>
            <Input id="icon" flex="1" type="text" variant="flushed" placeholder={iconColor} value={iconColor} onChange={(e) => ctx.fetchLinkColor(e.target.value)} />
            <IconColorPickerContainer />
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="font" mb="0">
            Select Font
          </FormLabel>
          <Select id="font" variant="flushed" value={ctx.fontValue} onChange={(e) => ctx.fetchFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel mb="0">Select Font Size</FormLabel>
          <Slider defaultValue={2} value={fontSizeValue} min={1} max={3} step={1} mt="10px" onChange={(val) => ctx.fetchFontSize(val)}>
            <SliderTrack bg="white">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="white" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <p>{fontSizeName}</p>
        </FormControl>
      </Stack>
    </>
  )
}

export default CustomizeForm
