
import { ContactType } from '../../../types';


export const Ver = ({id, nome, email, telefone}:ContactType) => {
    return (
        <div className="info">
            <img width={300} height={300} src="https://source.unsplash.com/random" alt="" />
            <div>Identificação: {id}</div>
            <div>Nome: {nome}</div>
            <div>Email: {email}</div>
            <div>Telefone: {telefone}</div>
        </div>
    )
}