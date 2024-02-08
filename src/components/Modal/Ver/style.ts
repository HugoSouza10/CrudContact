import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2d2d2d;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  color: #fff;

  img {
    width: 100%;
    height:auto;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  div {
    margin-bottom: 15px;
    text-align: center;
  }

  div:first-child {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  div:nth-child(n + 2) {
    font-size: 18px;
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
    width: 100%;
  }

  div:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
