import { createContext, useState } from 'react'

const CustomizeContext = createContext({
  themeColorValue: '#6D7FE2',
  fetchThemeColor: function (value) {},
  textColorValue: '#000',
  fetchTextColor: function (value) {},
  linkColorValue: '#6D7FE2',
  fetchLinkColor: function (value) {},
  fontValue: 'Arial',
  fetchFont: function (value) {},
  fontSizeValue: '2',
  fetchFontSize: function (value) {},
  clearCustomizeFields: function () {},
})

export const CustomizeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('#6D7FE2')
  const [textColor, setTextColor] = useState('#000')
  const [linkColor, setLinkColor] = useState('#6D7FE2')
  const [font, setFont] = useState('Arial')
  const [fontSize, setFontSize] = useState({ heading: '18px', subhead: '16px', lineheight: '22px', name: 'Medium' })

  const handleSetThemeColor = (value) => {
    setThemeColor(value)
  }
  const handleSetTextColor = (value) => {
    setTextColor(value)
  }
  const handleSetLinkColor = (value) => {
    setLinkColor(value)
  }
  const handleSetFont = (value) => {
    setFont(value)
  }
  const handleSetFontSize = (value) => {
    if (value === 1) {
      setFontSize({ heading: '16px', subhead: '12px', lineheight: '20px', name: 'Small', value: 1 })
    } else if (value === 2) {
      setFontSize({ heading: '18px', subhead: '14px', lineheight: '22px', name: 'Medium', value: 2 })
    } else if (value === 3) {
      setFontSize({ heading: '20px', subhead: '16px', lineheight: '24px', name: 'Large', value: 3 })
    } else {
      setFontSize({ heading: '18px', subhead: '16px', lineheight: '22px', name: 'Medium', value: 2 })
    }
  }

  const handleClearFields = () => {
    setThemeColor('#6D7FE2')
    setTextColor('#000')
    setLinkColor('#6D7FE2')
    setFont('Arial')
    setFontSize({ heading: '18px', subhead: '16px', lineheight: '22px', name: 'Medium' })
  }

  const context = {
    themeColorValue: themeColor,
    fetchThemeColor: handleSetThemeColor,
    textColorValue: textColor,
    fetchTextColor: handleSetTextColor,
    linkColorValue: linkColor,
    fetchLinkColor: handleSetLinkColor,
    fontValue: font,
    fetchFont: handleSetFont,
    fontSizeValue: fontSize,
    fetchFontSize: handleSetFontSize,
    clearCustomizeFields: handleClearFields,
  }

  return <CustomizeContext.Provider value={context}>{children}</CustomizeContext.Provider>
}

export default CustomizeContext
