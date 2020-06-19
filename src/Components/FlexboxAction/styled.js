import styled from 'styled-components';

export const FlexboxActionContainer = styled.div`  
   height: 100%;
   width: 100%;
   padding: 10px 20px;
   box-sizing: border-box;
   @media (max-width: 768px) {
      padding: 5px 5px;
   }
`

export const FlexboxActionSection = styled.div`  
   margin-top: 20px;
   position:relative;
`

export const FlexboxActionHeader = styled.div`
   display:flex;
   flex-wrap: wrap;
`

export const FlexboxActionSectionTitle = styled.div` 
   font-size: 20px;
   font-weight: 700;
   flex-grow: 1;
`
export const FlexboxActionButton = styled.div` 
   font-size: 16px;
   padding: 10px;
   text-align: center;
   color: white;
   cursor: pointer;
   width: 20px;
`

export const FlexboxActionButtonAdd = styled(FlexboxActionButton)`
   background-color: green;
`

export const FlexboxActionButtonRemove = styled(FlexboxActionButton)`
   background-color: red;
   margin-right: 10px;
`

export const FlexboxActionSectionItemsContainer = styled.div`
`

export const FlexboxActionSectionItem = styled.div`  
   margin: 7px 0px;
`

export const FlexboxActionSectionItemTitle = styled.div`
   font-weigth: 700;

`

export const FlexboxActionSectionItemOptions = styled.div`  
   margin-top: 10px;
`

