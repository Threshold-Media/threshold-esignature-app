const EmptyTemplateTwo = () => {
  const mainStyle = {
    borderCollapse: 'separate',
    color: '#000',
    fontFamily: 'Arial',
    fontSize: '14px',
    verticalAlign: '-webkit-baseline-middle',
    width: '320px'
  }

  return (
    <table cellPadding="0" cellSpacing="0" style={mainStyle}>
      <tbody>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0" style={mainStyle}>
              <tbody>
                <tr>
                  <td>
                    <h3 className="first_last-name font_props" style={{ margin: '0px', color: '#000', fontSize: '16px', fontWeight: 'bold' }}>
                      John Doe
                    </h3>
                    <p id="job_title" className="job_title font_props" style={{ margin: '0px', color: '#000', fontSize: '14px', lineHeight: '22px' }}>
                      Job Title
                    </p>
                    <p id="company_name" className="company_name font_props" style={{ margin: '0px', fontWeight: '500', color: '#000', fontSize: '14px', lineHeight: '22px' }}>
                      Company Name
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="15" style={{ border: '0px' }}></td>
        </tr>
        <tr>
          <td height="1" width="100%" style={{ width: '100%', height: '1px', borderTop: '0', borderLeft: '0', borderRight: '0', borderBottom: '1px solid', borderBottomColor: '#6D7FE2', display: 'block' }}></td>
        </tr>
        <tr>
          <td height="15" style={{ border: '0px' }}></td>
        </tr>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', textAlign: 'left', border: '0px' }}>
              <tbody>
                <tr height="24" style={{ verticalAlign: 'middle' }}>
                  <td width="24" style={{ verticalAlign: 'middle' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium' }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'bottom' }}>
                            <span width="11" style={{ display: 'block', backgroundColor: '#6D7FE2' }}>
                              <img
                                width="13"
                                style={{ display: 'block', backgroundColor: '#6D7FE2' }}
                                className="image-theme company_number_img"
                                src="https://threshmedia.com/wp-content/uploads/2021/12/phone-icon-2x.png"
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <a className="company_number" href="" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px', lineHeight: '20px' }}>
                      888-888-8888
                    </a>
                  </td>
                </tr>
                <tr height="24" style={{ verticalAlign: 'middle' }}>
                  <td width="24" style={{ verticalAlign: 'middle' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'bottom' }}>
                            <span width="11" style={{ display: 'block', backgroundColor: '#6D7FE2' }}>
                              <img
                                id="email_icon"
                                width="13"
                                style={{ display: 'block', backgroundColor: '#6D7FE2' }}
                                src="https://threshmedia.com/wp-content/uploads/2021/12/email-icon-2x.png"
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <a id="personal_email" href="" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px', lineHeight: '20px' }}>
                      email@email.com
                    </a>
                  </td>
                </tr>
                <tr height="24" style={{ verticalAlign: 'middle' }}>
                  <td width="24" style={{ verticalAlign: 'middle' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'bottom' }}>
                            <span width="11" style={{ display: 'block', backgroundColor: '#6D7FE2' }}>
                              <img
                                id="website_icon"
                                width="13"
                                style={{ display: 'block', backgroundColor: '#6D7FE2' }}
                                src="https://threshmedia.com/wp-content/uploads/2021/12/link-icon-2x.png"
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <a id="website_url" target="_blank" href="" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px', lineHeight: '20px' }}>
                      www.thresholdmedia.com
                    </a>
                  </td>
                </tr>
                <tr height="24" style={{ verticalAlign: 'middle' }}>
                  <td width="24" style={{ verticalAlign: 'middle' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: 'bottom' }}>
                            <span width="11" style={{ display: 'block', backgroundColor: '#6D7FE2' }}>
                              <img
                                id="website_icon"
                                width="13"
                                style={{ display: 'block', backgroundColor: '#6D7FE2' }}
                                src="https://threshmedia.com/wp-content/uploads/2021/12/address-icon-2x.png"
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ fontSize: '12px' }}>
                    <span id="website_url" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px', lineHeight: '20px' }}>
                      address, city, state, zip
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="15" style={{ border: '0px' }}></td>
        </tr>
        <tr>
          <td height="1" width="100%" style={{ width: '100%', height: '1px', borderTop: '0', borderLeft: '0', borderRight: '0', borderBottom: '1px solid', borderBottomColor: '#6D7FE2', display: 'block' }}></td>
        </tr>
        <tr>
          <td height="15" style={{ border: '0px' }}></td>
        </tr>
        <tr>
          <td style={{ border: '0px' }}>
            <table cellPadding="0" cellSpacing="0" width="100" style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top', border: '0px' }}>
                    <img
                      width="160"
                      style={{ maxWidth: '160px', display: 'block', padding: '0', height: 'auto' }}
                      className="company_logo"
                      src="https://threshmedia.com/wp-content/uploads/2021/11/company-logo.png"
                    />
                  </td>
                  <td style={{ verticalAlign: 'center', border: '0px', textAlign: 'right' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', border: '0px', marginLeft: 'auto' }}>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: 'center', border: '0px' }}>
                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', display: 'inline-block', border: '0px' }}>
                              <tbody>
                                <tr style={{ textAlign: 'center' }}>
                                  <td width="24">
                                  <a href="" target="_blank" style={{ display: 'inline-block', padding: '0px', backgroundColor: '#6D7FE2' }}>
                                    <img
                                      height="24"
                                      width="24"
                                      style={{ display: 'block', width: '24px' }}
                                      src="https://threshmedia.com/wp-content/uploads/2021/11/linkedin-icon-2x.png"
                                      alt="LinkedIn Icon"
                                    />
                                  </a>
                                </td>
                                <td width="5">
                                  <div></div>
                                </td>
                                <td width="24">
                                  <a href="" target="_blank" style={{ display: 'inline-block', padding: '0px', backgroundColor: '#6D7FE2' }}>
                                    <img
                                      height="24"
                                      width="24"
                                      style={{ display: 'block', width: '24px' }}
                                      src="https://threshmedia.com/wp-content/uploads/2021/11/facebook-icon-2x.png"
                                      alt="Facebook Icon"
                                    />
                                  </a>
                                </td>
                                <td width="5">
                                  <div></div>
                                </td>
                                <td width="24">
                                  <a href="" target="_blank" style={{ display: 'inline-block', padding: '0px', backgroundColor: '#6D7FE2' }}>
                                    <img
                                      height="24"
                                      width="24"
                                      style={{ display: 'block', width: '24px' }}
                                      src="https://threshmedia.com/wp-content/uploads/2021/11/instagram-icon-2x.png"
                                      alt="Instagram Icon"
                                    />
                                  </a>
                                </td>
                                <td width="5">
                                  <div></div>
                                </td>
                                <td width="24">
                                  <a href="" target="_blank" style={{ display: 'inline-block', padding: '0px', backgroundColor: '#6D7FE2' }}>
                                    <img
                                      height="24"
                                      width="24"
                                      style={{ display: 'block', width: '24px' }}
                                      src="https://threshmedia.com/wp-content/uploads/2021/11/twitter-icon-2x.png"
                                      alt="Twitter Icon"
                                    />
                                  </a>
                                </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="30"></td>
        </tr>
      </tbody>
    </table>
  )
}
  
export default EmptyTemplateTwo
  