import styled from 'styled-components';

export const AppLayout = styled.div`
   display: grid;
   grid-template-rows: 70px minmax(200px , auto) 50px;
   grid-template-columns: 1fr;
   width: 100vw;
   height: 100vh;
`;

export const HeaderLayout = styled.div`
   grid-row: 1 / 2;
`;

export const ContentLayout = styled.div`
   display: grid;
   grid-template-rows: 1fr;
   grid-template-columns: 40% 60%;
   @media (max-width: 768px) {
      grid-template-columns: 50% 50%;
   }
   @media (max-width: 500) {
      grid-template-columns: 60% 40%;
   }

`;

export const FlexboxActionLayout = styled.div`
   grid-column: 1 / 2;
   overflow-y: scroll;

`;

export const FlexboxSimulatorLayout = styled.div`
   grid-column-start: 2;
   overflow: auto;
`;


export const FooterLayout = styled.div`
   grid-template-rows: 1fr;
`;
