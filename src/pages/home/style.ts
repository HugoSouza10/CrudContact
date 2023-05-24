import styled from "styled-components";

export const Container = styled.div `
   font-family: Arial, Helvetica, sans-serif;
   margin: auto;
   max-width: 1024px;
   padding-top: 20px;
`;

export const ContainerNew = styled.div`
    display: flex;
    align-items: center;

    h1 {
        margin: 0;
        margin-right: 10px;
    }

    .btn-new {
        padding: 5px;
        background-color: green;
        border-radius: 3px;
    }

    .btn-icone {
       background-color: rebeccapurple;
       margin-right: 3px;
    }
`;

export const ContainerCard = styled.div `
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    margin-top: 20px;

`;