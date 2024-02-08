import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px;
    height: 300px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    margin: auto;
    background-color: #16195C;
    box-shadow: 5px -2px 19px 2px rgb(0 0 66);
`;


export const HeaderModal  = styled.header`
        border-bottom: 1px solid #25CD89;
        padding: 10px;
        h2 {
            font-size: 15px;
            text-align: center;
            margin: 0;
        }

`;


/*estilização modal */

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export  const ModalContent = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  .btnClose {
    background-color: #2d2d2d;
    padding:10px;
    color:#fff;
  }
`;