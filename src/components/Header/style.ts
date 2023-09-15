import styled from "styled-components";

export const Header = styled.header`
   font-family: Arial, Helvetica, sans-serif;
   background-color: #e7e7e7;
   padding: 20px 0;
   color: #000;
   
`;

export const Container = styled.div `
   margin: auto;
   max-width: 1024px;
`;

export const Brand = styled.div `
      display: flex;
      align-items: center;

      .icon-brand {
         font-size: 40px;
         margin-right: 10px;
      }

      .title {
         font-size: 20px;
      }
`;