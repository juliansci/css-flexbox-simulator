import React, { Component } from 'react';
import { FooterContainer, FooterText, FooterSocial, SocialItem } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
  render() {
    return (<FooterContainer>
       <FooterText>
          Julián Scialabba
       </FooterText>
       <FooterSocial>
         <SocialItem href="http://twitter.com/juliansci">
          <FontAwesomeIcon icon={faTwitter}/>
         </SocialItem>
         <SocialItem href="https://www.linkedin.com/in/julianscialabba/">
          <FontAwesomeIcon icon={faLinkedin} />
         </SocialItem>
         <SocialItem href="http://github.com/juliansci">
          <FontAwesomeIcon icon={faGithub} />
         </SocialItem>
       </FooterSocial>
    </FooterContainer>);
  }
}

export default Footer;
