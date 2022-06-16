import { useContext } from 'react'
import DetailsContext from 'context/email/detailsContext'
import { Heading, Stack, Input, FormControl, FormLabel, Checkbox } from '@chakra-ui/react'

const DetailsForm = ({}) => {
  const ctx = useContext(DetailsContext)

  const handleContactIcons = () => {
    ctx.fetchContactIcons()
  }
  const handleSocialIcons = () => {
    ctx.fetchSocialIcons()
  }

  return (
    <>
      <Heading as="h2" size="md">
        Enter Your Details
      </Heading>

      <Stack spacing={8} pt="40px">
        <FormControl isRequired>
          <FormLabel htmlFor="name" mb="0">
            First & Last Name
          </FormLabel>
          <Input id="name" type="text" placeholder="John Doe" variant="flushed" value={ctx.nameValue} onChange={(e) => ctx.fetchName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="job-title" mb="0">
            Job Title
          </FormLabel>
          <Input id="job-title" type="text" placeholder="Director" variant="flushed" value={ctx.titleValue} onChange={(e) => ctx.fetchTitle(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="company-name" mb="0">
            Company Name
          </FormLabel>
          <Input id="company-name" type="text" placeholder="Threshold Media" variant="flushed" value={ctx.companyNameValue} onChange={(e) => ctx.fetchCompanyName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="office-number" mb="0">
            Office Phone number
          </FormLabel>
          <Input id="office-number" type="tel" placeholder="888-888-8888" variant="flushed" value={ctx.officeNumberValue} onChange={(e) => ctx.fetchOfficeNumber(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="website-url" mb="0">
            Website URL
          </FormLabel>
          <Input id="website-url" type="text" placeholder="www.thresholdmedia.com" variant="flushed" value={ctx.websiteValue} onChange={(e) => ctx.fetchWebsite(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email" mb="0">
            Email Address
          </FormLabel>
          <Input id="email" type="email" placeholder="hello@thresholdmedia.com" variant="flushed" value={ctx.emailValue} onChange={(e) => ctx.fetchEmail(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="company-address" mb="0">
            Company Address
          </FormLabel>
          <Input id="company-address" type="text" placeholder="address, city, state, zip" variant="flushed" value={ctx.addressValue} onChange={(e) => ctx.fetchAddress(e.target.value)} />
        </FormControl>

        <Checkbox onChange={() => handleContactIcons()}>Hide Contact Icons</Checkbox>
      </Stack>

      <Heading as="h2" size="md" mt="40px">
        Social Media
      </Heading>

      <Stack spacing={8} pt="30px">
        <FormControl>
          <FormLabel htmlFor="linkedin" mb="0">
            LinkedIn
          </FormLabel>
          <Input id="linkedin" type="text" placeholder="https://linkedin.com/" variant="flushed" value={ctx.linkedinValue} onChange={(e) => ctx.fetchLinkedin(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="facebook" mb="0">
            Facebook
          </FormLabel>
          <Input id="facebook" type="text" placeholder="https://facebook.com/" variant="flushed" value={ctx.facebookValue} onChange={(e) => ctx.fetchFacebook(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="instagram" mb="0">
            Instagram
          </FormLabel>
          <Input id="instagram" type="text" placeholder="https://instagram.com/" variant="flushed" value={ctx.instagramValue} onChange={(e) => ctx.fetchInstagram(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="twitter" mb="0">
            Twitter
          </FormLabel>
          <Input id="twitter" type="tel" placeholder="https://twitter.com/" variant="flushed" value={ctx.twitterValue} onChange={(e) => ctx.fetchTwitter(e.target.value)} />
        </FormControl>

        <Checkbox onChange={() => handleSocialIcons()}>Hide Soical Media Icons</Checkbox>
      </Stack>

      <Heading as="h2" size="md" mt="40px">
        Custom Field
      </Heading>

      <Stack spacing={8} p="30px 0">
        <FormControl>
          <FormLabel htmlFor="custom-field" mb="0">
            Custom Field
          </FormLabel>
          <Input id="custom-field" type="text" placeholder="Custom Field" variant="flushed" value={ctx.customFieldValue} onChange={(e) => ctx.fetchCustomField(e.target.value)} />
        </FormControl>
      </Stack>
    </>
  )
}

export default DetailsForm
