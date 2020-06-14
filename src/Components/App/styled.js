import styled from 'styled-components';

export const AppLayout = styled.div`
   display: grid;
   grid-template-rows: 70px 1fr 50px;
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
   grid-template-columns: 30% 70%;
`;

export const ActionLayout = styled.div`
   grid-column: 1 / 2;
   background-color: blue;
`;

export const SimulatorLayout = styled.div`
   grid-column-start: 2;
   background-color: red;
`;


export const FooterLayout = styled.div`
   grid-template-rows: 1fr;
`;
