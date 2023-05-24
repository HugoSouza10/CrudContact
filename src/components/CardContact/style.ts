import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: rebeccapurple;
    justify-content: space-around;
    padding: 10px;
    border-radius: 5px;

`;


export const Avatar = styled.div `
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-color: orangered;

`;

export const ContainerAction = styled.div`

`;

export const ButtonAction = styled.div <{ bg:string }>`
    background-color: ${props => props.bg};
    padding: 3px;
    border-radius: 3px;
    margin-bottom: 5px;
`;


