import styled from "styled-components";


export const Container = styled.div `
        padding: 40px 20px;
        
        p {
            font-size: 13px;
            color: #B8B8D4;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        label {
            font-size: 13px;
            display: flex;
            flex-direction: column;


            input {
                box-sizing: border-box;
                outline: none;
                padding: 20px 10px;
                border: 2px solid #25CD89;
                border-radius: 10px;
                margin-top: 7px;
                background-color: transparent;
                color: #fff;
            }

        }

        a {
            text-decoration: none;
            color: #B8B8D4;
            padding: 40px 20px;
        }

        button {
            background-color: #25CD89;
            padding: 20px 40px;
            margin-top: 30px;
            color: #fff;
            cursor: pointer;
            border-radius: 30px;
            border: none;
        }

        hr {
            border: none;
            height: 1px;
            background-color: #16195C;
            margin: 30px 0;
        }

`;