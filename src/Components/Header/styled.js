import styled from 'styled-components';

export const HeaderContainer = styled.div`
   height: 100%;
   width: 100%;
   background-color: #0C090A;;
   color: white;
   display: flex;
   justify-content: space-between;
`

export const HeaderTitle = styled.div`
   font-size: 27px;
   padding: 18px 40px;
   @media (max-width: 768px) {
      font-size: 20px;
      padding: 12px 40px;
   }
`
export const HeaderLinkGithub = styled.a`
   font-size: 13px;
   margin-top: 29px;
   margin-right: 34px;
   cursor: pointer;
   color: white;
   text-decoration: none;
   @media (max-width: 768px) {
      margin-top: 19px;
      margin-right: 3px;
   }
`
