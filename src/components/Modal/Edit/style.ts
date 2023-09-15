import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

export const Button = styled.button`
  background-color: #0767c6;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;