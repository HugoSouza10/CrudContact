
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import * as C from './style';

export const Header = () => {

   const auth = useContext(AuthContext);

   const handleLogout = async () => {
      await auth.signout();
      window.location.href = window.location.href;
   }


    return (
        <C.Header>
          <C.Container>
              <C.Brand>
                  <span className='icon-brand'>☎️</span><h1 className='title'>Lista de contatos</h1>
              </C.Brand>
              <div className='ContainerLogin'>
                <span className='userLogin'>Olá, {/*{auth.user?.name}*/} Hugo Souza</span>
                {auth.user && <button className="buttonLogout" onClick={handleLogout}>Sair</button>}
              </div>
          </C.Container>
        </C.Header>
      
    )
}