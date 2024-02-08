import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #555;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  button {
    padding: 10px 15px;
    background: #2d2d2d; /* Cor escura para combinar com o tema dark */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1a1a1a; /* Cor mais escura ao passar o mouse */
    }
  }
`;
