import React, { Component } from 'react';
import { FlexboxSimulatorContainer, FlexboxSimulatorItem } from './styled';
import backgroundSimulator from './background-simulator.png';

class FlexboxSimulator extends Component {

  render() {
    console.log('props simulator: ', this.props.values);
    return (<FlexboxSimulatorContainer backgroundImg={backgroundSimulator} simulatorProps={this.props.values}>
          <FlexboxSimulatorItem>1</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>2</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>3</FlexboxSimulatorItem>
    </FlexboxSimulatorContainer>);
  }
}

export default FlexboxSimulator;
