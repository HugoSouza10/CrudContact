import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #f7f5f5;
    justify-content: space-around;
    box-shadow: 13px 12px 5px -7px rgba(0,0,0,0.27);
    padding: 10px;
    border-radius: 5px;

    table {
            border-collapse: collapse;
            width: auto;
            margin: 20px auto;
        }

        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ccc;
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        tr:first-child {
            color: #fff;
            background-color: #2d2d2d;
        }

        tr:hover {
            background-color: #2d2d2d;
            color: #fff;
        }

`;

export const Avatar = styled.div`
    border-radius: 100%;
    width: 100px;
    height: 100px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const ContainerAction = styled.div`

`;

export const ButtonAction = styled.div <{ bg:string }>`
    background-color: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:12px;
    padding: 10px 26px;
    color: #fff;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
`;




