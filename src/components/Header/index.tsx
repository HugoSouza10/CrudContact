import * as C from './style';

export const Header = () => {
    return (
        <C.Header>
          <C.Container>
              <C.Brand>
                  <span className='icon-brand'>☎️</span><h1 className='title'>Lista de contatos</h1>
              </C.Brand>
             
          </C.Container>
        </C.Header>
      
    )
}