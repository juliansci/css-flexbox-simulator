import React, { Component } from 'react';
import { HeaderContainer, HeaderTitle } from './styled';

class Header extends Component {
  render() {
    return (<HeaderContainer>
       <HeaderTitle>
          CSS Flexbox Simulator
       </HeaderTitle>
    </HeaderContainer>);
  }
}

export default Header;
