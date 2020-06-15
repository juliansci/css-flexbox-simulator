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
          <FlexboxSimulatorItem>4</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>5</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>6</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>7</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>8</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>9</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>10</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>11</FlexboxSimulatorItem>
          <FlexboxSimulatorItem>12</FlexboxSimulatorItem>
    </FlexboxSimulatorContainer>);
  }
}

export default FlexboxSimulator;
