import React, { Component } from 'react';
import { HeaderContainer, HeaderTitle, HeaderLinkGithub } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Header extends Component {
  render() {
    return (<HeaderContainer>
       <HeaderTitle>
          CSS Flexbox Simulator 
       </HeaderTitle>
       <HeaderLinkGithub href="https://github.com/juliansci/css-flexbox-simulator" target="_blank"> 
         View on Github <FontAwesomeIcon icon={faGithub} />
        </HeaderLinkGithub>
    </HeaderContainer>);
  }
}

export default Header;
