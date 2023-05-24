
import * as C from './style';


export const CardContact = () => {
    return (
        <C.Container>
            <C.Avatar/>
            <table border={1}>
                <tr>
                    <td>Nome:</td>
                    <td>Hugo</td>
                </tr>
                <tr>
                    <td>Mobile:</td>
                    <td>Desenvolvedor mobile</td>
                </tr>
                <tr>
                    <td>E-mail:</td>
                    <td>hugodev41@gmail.com</td>
                </tr>
            </table>
            <C.ContainerAction>
                <C.ButtonAction bg = "#FFC107">
                  Ver
                </C.ButtonAction>
                <C.ButtonAction bg = "#0767c6">
                  Edit
                </C.ButtonAction>
                <C.ButtonAction bg = "#ff0057">
                  Delete
                </C.ButtonAction>
            </C.ContainerAction>
        </C.Container>
    )
}

