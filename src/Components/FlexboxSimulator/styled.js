import styled from 'styled-components';

export const FlexboxSimulatorContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  display: flex;
  justify-content: ${props => props.simulatorProps.justifyContent};
  align-items: ${props => props.simulatorProps.alignItems};
  flex-direction: ${props => props.simulatorProps.flexDirection};
  flex-wrap: ${props => props.simulatorProps.flexWrap};
  align-content: ${props => props.simulatorProps.alignContent};


`

export const FlexboxSimulatorItem = styled.div`
   width: 200px; 
   height: 200px;
   border: 2px solid white;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size:40px;
   font-weight: bolder;
`;
