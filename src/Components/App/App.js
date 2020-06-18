import React, { Component } from 'react';
import { AppLayout, HeaderLayout, ContentLayout, FlexboxSimulatorLayout, FlexboxActionLayout, FooterLayout } from './styled';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FlexboxAction from '../FlexboxAction/FlexboxAction';
import FlexboxSimulator from '../FlexboxSimulator/FlexboxSimulator';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      'simulator': {
        'justifyContent': 'flex-start',
        'alignItems': 'stretch',
        'flexDirection': 'row',
        'flexWrap': 'nowrap',
        'alignContent': 'stretch'
      }
    };
  }

  updateStateActions = async (toUpdate)  => {
    await this.setState({'simulator': {
      ...toUpdate
    }});
    console.log('state app', this.state);
  }

  render() {
    return (
      <AppLayout>
        <HeaderLayout>
          <Header/>
        </HeaderLayout>
        <ContentLayout>
          <FlexboxActionLayout>
            <FlexboxAction updateValues={this.updateStateActions}/>
          </FlexboxActionLayout>
          <FlexboxSimulatorLayout>
            <FlexboxSimulator values={this.state.simulator}/>
          </FlexboxSimulatorLayout>
        </ContentLayout>
        <FooterLayout>
          <Footer/>
        </FooterLayout>
      </AppLayout>
    );
  }

}

export default App;
