import { createContext, useState } from 'react'

const UploadContext = createContext({
  logoURLValue: '',
  fetchLogoURL: function (value) {},
  clearLogoURL: function () {},
})

export const UploadContextProvider = ({ children }) => {
  const [logoURL, setLogoURL] = useState('')

  const handleSetLogoURL = (value) => {
    setLogoURL(value)
  }

  const handleClearFields = () => {
    setLogoURL('')
  }

  const context = {
    logoURLValue: logoURL,
    fetchLogoURL: handleSetLogoURL,
    clearLogoURL: handleClearFields,
  }

  return <UploadContext.Provider value={context}>{children}</UploadContext.Provider>
}

export default UploadContext
