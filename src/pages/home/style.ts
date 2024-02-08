import styled from "styled-components";

export const Container = styled.div`
   font-family: Arial, Helvetica, sans-serif;
   margin: auto;
   max-width: 1024px;
   padding-top: 20px;
   padding: 10px;
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
        background-color: #0767c6;
        color: #fff;
        border-radius: 3px;
    }

    .btn-icone {
        margin-right: 3px;
    }
`;

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;  // Switch to a single column layout for screens smaller than 768px
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;  // Further adjust for smaller screens, if needed
        gap: 10px;  // Adjust gap for smaller screens
    }

    max-width: 100%;  // Set a maximum width for the table
    overflow-x: auto;  // Add horizontal scroll for small screens
`;
