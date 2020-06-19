
import React, { Component } from 'react';
import { AppLayout, HeaderLayout, ContentLayout, FlexboxSimulatorLayout, FlexboxActionLayout, FooterLayout } from './styled';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FlexboxAction from '../FlexboxAction/FlexboxAction';
import FlexboxSimulator from '../FlexboxSimulator/FlexboxSimulator';
import ReactGA from 'react-ga';
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      'itemsQuantity': 3,
      'simulator': {
        'justifyContent': 'flex-start',
        'alignItems': 'stretch',
        'flexDirection': 'row',
        'flexWrap': 'nowrap',
        'alignContent': 'stretch'
      }
    };
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALITYCS_KEY);
    ReactGA.pageview(window.location.pathname);
  }

  updateStateActions = async (toUpdate)  => {
    await this.setState({'simulator': {
      ...toUpdate
    }});
    console.log('state app', this.state);
  }

  removeItem = () => {
    const itemsQuantity = this.state.itemsQuantity;
    if(itemsQuantity > 1){
      const newValue = itemsQuantity - 1;
      this.setState({itemsQuantity: newValue});
    }
  }

  addItem = () => {
    const itemsQuantity = this.state.itemsQuantity;
    if(itemsQuantity < 20){
      const newValue = itemsQuantity + 1;
      this.setState({itemsQuantity: newValue});
    }
  }

  render() {
    return (
      <AppLayout>
        <HeaderLayout>
          <Header/>
        </HeaderLayout>
        <ContentLayout>
          <FlexboxActionLayout>
            <FlexboxAction updateValues={this.updateStateActions} removeItem={this.removeItem} addItem={this.addItem}/>
          </FlexboxActionLayout>
          <FlexboxSimulatorLayout>
            <FlexboxSimulator values={this.state.simulator} itemsQuantity={this.state.itemsQuantity} />
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
