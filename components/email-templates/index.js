import { useContext } from 'react'
import EmailContext from 'context/email/templateContext'
import PreviewContainer from './PreviewContainer'
import TemplateOne from './TemplateOne'
import TemplateTwo from './TemplateTwo'
import TemplateThree from './TemplateThree'
import TemplateFour from './TemplateFour'

const EmailTemplates = () => {

  const emailCtx = useContext(EmailContext)

  return (
    <PreviewContainer>
      <div id="email-signature">
        {emailCtx.templateOneValue === true && <TemplateOne />}
        {emailCtx.templateTwoValue === true && <TemplateTwo />}
        {emailCtx.templateThreeValue === true && <TemplateThree />}
        {emailCtx.templateFourValue === true && <TemplateFour />}
      </div>
    </PreviewContainer>
  )

}

export default EmailTemplates