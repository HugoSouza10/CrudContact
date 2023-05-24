import * as C from './style';

type Props = {
    isOpen: boolean
}

export const Modal = ({isOpen}:Props) => {
    return(
        <C.Container>
            <C.HeaderModal>
                 <h2>Obrigado por se cadastrar, confira seus dados</h2>
            </C.HeaderModal>
            <C.ModalBody>
                Info.....
            </C.ModalBody>
        </C.Container>
    )
}