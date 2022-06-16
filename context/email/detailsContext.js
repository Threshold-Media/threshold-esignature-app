import { createContext, useState } from 'react'

const DetailsContext = createContext({
  nameValue: '',
  fetchName: function (value) {},
  titleValue: '',
  fetchTitle: function (value) {},
  companyNameValue: '',
  fetchComapnyName: function (value) {},
  officeNumberValue: '',
  fetchOfficeNumber: function (value) {},
  websiteValue: '',
  fetchWebsite: function (value) {},
  emailValue: '',
  fetchEmail: function (value) {},
  addressValue: '',
  fetchAddress: function (value) {},
  contactIconsValue: true,
  fetchContactIcons: function () {},
  socialIconsValue: true,
  fetchSocialIcons: function () {},
  linkedinValue: '',
  fetchLinkedin: function (value) {},
  facebookValue: '',
  fetchFacebook: function (value) {},
  instagramValue: '',
  fetchInstagram: function (value) {},
  twitterValue: '',
  fetchTwitter: function (value) {},
  customFieldValue: '',
  fetchCustomField: function (value) {},
  clearDetailFields: function () {},
})

export const DetailsContextProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [officeNumber, setOfficeNumber] = useState('')
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contactIcons, setContactIcons] = useState(true)
  const [socialIcons, setSocialIcons] = useState(true)
  const [linkedin, setLinkedin] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [customField, setCustomField] = useState('')

  const handleSetName = (value) => {
    setName(value)
  }
  const handleSetTitle = (value) => {
    setTitle(value)
  }
  const handleSetCompanyName = (value) => {
    setCompanyName(value)
  }
  const handleSetOfficeNumber = (value) => {
    setOfficeNumber(value)
  }
  const handleSetWebsite = (value) => {
    setWebsite(value)
  }
  const handleSetEmail = (value) => {
    setEmail(value)
  }
  const handleSetAddress = (value) => {
    setAddress(value)
  }
  const handleSetLinkedin = (value) => {
    setLinkedin(value)
  }
  const handleSetFacebook = (value) => {
    setFacebook(value)
  }
  const handleSetInstagram = (value) => {
    setInstagram(value)
  }
  const handleSetTwitter = (value) => {
    setTwitter(value)
  }
  const handleSetCustomField = (value) => {
    setCustomField(value)
  }

  const handleContactIcons = () => {
    setContactIcons(!contactIcons)
  }
  const handleSocialIcons = () => {
    setSocialIcons(!socialIcons)
  }
  const handleClearFields = () => {
    setName('')
    setTitle('')
    setCompanyName('')
    setOfficeNumber('')
    setWebsite('')
    setEmail('')
    setAddress('')
    setLinkedin('')
    setFacebook('')
    setInstagram('')
    setTwitter('')
    setCustomField('')
    setContactIcons(true)
    setSocialIcons(true)
  }

  const context = {
    nameValue: name,
    fetchName: handleSetName,
    titleValue: title,
    fetchTitle: handleSetTitle,
    companyNameValue: companyName,
    fetchCompanyName: handleSetCompanyName,
    officeNumberValue: officeNumber,
    fetchOfficeNumber: handleSetOfficeNumber,
    websiteValue: website,
    fetchWebsite: handleSetWebsite,
    emailValue: email,
    fetchEmail: handleSetEmail,
    addressValue: address,
    fetchAddress: handleSetAddress,
    contactIconsValue: contactIcons,
    fetchContactIcons: handleContactIcons,
    socialIconsValue: socialIcons,
    fetchSocialIcons: handleSocialIcons,
    linkedinValue: linkedin,
    fetchLinkedin: handleSetLinkedin,
    facebookValue: facebook,
    fetchFacebook: handleSetFacebook,
    instagramValue: instagram,
    fetchInstagram: handleSetInstagram,
    twitterValue: twitter,
    fetchTwitter: handleSetTwitter,
    customFieldValue: customField,
    fetchCustomField: handleSetCustomField,
    clearDetailFields: handleClearFields,
  }

  return <DetailsContext.Provider value={context}>{children}</DetailsContext.Provider>
}

export default DetailsContext
