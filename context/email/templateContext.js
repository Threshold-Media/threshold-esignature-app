import { createContext, useState } from "react";

const EmailContext = createContext({
  templateOneValue: false,
  fetchTemplateOneValue: function () { },
  templateTwoValue: false,
  fetchTemplateTwoValue: function () { },
  templateThreeValue: false,
  fetchTemplateThreeValue: function () { },
  templateFourValue: false,
  fetchTemplateFourValue: function () {},
})

export const EmailContextProvider = ({ children }) => {

  const [templateOne, setTemplateOne] = useState(false)
  const [templateTwo, setTemplateTwo] = useState(false)
  const [templateThree, setTemplateThree] = useState(false)
  const [templateFour, setTemplateFour] = useState(false)

  const handleTemplateOne = () => {
    setTemplateOne(true)
    setTemplateTwo(false)
    setTemplateThree(false)
    setTemplateFour(false)
  }
  const handleTemplateTwo = () => {
    setTemplateTwo(true)
    setTemplateOne(false)
    setTemplateThree(false)
    setTemplateFour(false)
  }
  const handleTemplateThree = () => {
    setTemplateThree(true)
    setTemplateOne(false)
    setTemplateTwo(false)
    setTemplateFour(false)
  }
  const handleTemplateFour = () => {
    setTemplateFour(true)
    setTemplateOne(false)
    setTemplateTwo(false)
    setTemplateThree(false)
  }

  const context = {
    templateOneValue: templateOne,
    fetchTemplateOneValue: handleTemplateOne,
    templateTwoValue: templateTwo,
    fetchTemplateTwoValue: handleTemplateTwo,
    templateThreeValue: templateThree,
    fetchTemplateThreeValue: handleTemplateThree,
    templateFourValue: templateFour,
    fetchTemplateFourValue: handleTemplateFour,
  }

  return (
    <EmailContext.Provider value={context}>
      {children}
    </EmailContext.Provider>
  )
}

export default EmailContext