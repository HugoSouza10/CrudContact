import styled from "styled-components";

export const Header = styled.header`
  font-family: 'Arial', 'Helvetica', sans-serif;
  background: linear-gradient(90deg, #2d2d2d 0%, #1a1a1a 100%);
  padding: 20px 0;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1024px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;


  .icon-brand {
    font-size: 40px;
    margin-right: 10px;
    color: #ffcc00; /* Amarelo escuro para ícone */
  }

  .title {
    font-size: 24px;
    color: #ffcc00; /* Amarelo escuro para título */
  }
`;
