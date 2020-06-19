import React, { Component } from 'react';
import { FlexboxSimulatorContainer, FlexboxSimulatorItem } from './styled';
import backgroundSimulator from './background-simulator.jpg';

class FlexboxSimulator extends Component {

  render() {
    const {itemsQuantity, values} = this.props;
    return (<FlexboxSimulatorContainer backgroundImg={backgroundSimulator} simulatorProps={values}>
          {Array.apply(null, { length: itemsQuantity }).map((e, index) => {
            return (<FlexboxSimulatorItem key={index}>
              {index + 1}
            </FlexboxSimulatorItem>);
          })}
    </FlexboxSimulatorContainer>);
  }
}

export default FlexboxSimulator;
