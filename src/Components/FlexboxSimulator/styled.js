import styled from 'styled-components';

export const FlexboxSimulatorContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  display: flex;
  justify-content: ${props => props.simulatorProps.justifyContent || 'flex-start' };
  align-items: ${props => props.simulatorProps.alignItems || 'flex-start' };
  flex-direction: ${props => props.simulatorProps.flexDirection || 'row' };
  flex-wrap: ${props => props.simulatorProps.flexWrap || 'wrap' };

`

export const FlexboxSimulatorItem = styled.div`
   width: 200px; 
   height: 200px;
   border: 2px solid white;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size:22px;
   font-weight: bolder;
`;
