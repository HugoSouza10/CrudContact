import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { CardContact } from '../../components/CardContact';
import { Add } from '../../components/Modal/Add';
import * as C from './style';
import { api } from '../../api';
import React, { useEffect, useState } from 'react';
import { ContactType } from '../../types';


export const Home = () => {
    //const {data} = useContactContext();
    const [contacts, setContacts] = useState<ContactType[]>([]);
  

    /*Listando dados */
    useEffect(() => {
        const fetchContacts = async () => {
          try {
            setContacts ( await api.listar());
          } catch (error) {
            console.log('Erro ao buscar contatos:', error);
          }
        };
    
        fetchContacts();
      }, []);

    return (
        <>
            <Header/>
            <C.Container>
                <C.ContainerNew>
                    <h1>Phone Directory</h1>
                    <div  className='btn-new'><span className='btn-icone'>➕</span>New</div>
                </C.ContainerNew>
                <p>jnsnsjdjnsjdnsjndjnsdjnsjndsd bfbhdbfdbfdb sjnssndn ksnknskd</p>
                <Search/>
                <C.ContainerCard>
                    {contacts.map(contact => (
                        <CardContact
                        id={contact.id}
                        nome={contact.nome}
                        email={contact.email}
                        telefone={contact.telefone}
                        foto={contact.foto}
                    />
                ))}
            </C.ContainerCard>
            </C.Container>
            
        </>
        
       
    )
}