import React from 'react';
import { FlexboxSimulatorContainer, FlexboxSimulatorItem } from './styled';
import backgroundSimulator from './background-simulator.jpg';

const FlexboxSimulator = ({ itemsQuantity, values }) => {
  return (
    <FlexboxSimulatorContainer backgroundImg={backgroundSimulator} simulatorProps={values}>
      {Array.apply(null, { length: itemsQuantity }).map((e, index) => {
        return <FlexboxSimulatorItem key={index}>{index + 1}</FlexboxSimulatorItem>;
      })}
    </FlexboxSimulatorContainer>
  );
};

export default FlexboxSimulator;
