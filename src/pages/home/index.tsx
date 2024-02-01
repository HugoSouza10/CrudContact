import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { CardContact } from '../../components/CardContact';
import * as C from './style';
import { api } from '../../api';
import React, { useEffect, useState } from 'react';
import { ContactType } from '../../types';

export const Home = () => {

    const [contacts, setContacts] = useState<ContactType[]>([]);
    const [termoBusca, settermoBusca] = useState<String>(String);

    const captureWord = (word:string) => {
      settermoBusca(word)
    };

      // Função para filtrar os contatos por nome, email e id
      const contatosFiltrados = contacts.filter(contato => {
        return (
          contato.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
          contato.email.toLowerCase().includes(termoBusca.toLowerCase()) ||
          contato.id.toString() === termoBusca
        );
      });

    /*Listando dados */
    useEffect(() => {
        const fetchContacts = async () => {
          try {
            let {contatos} = await api.listar();
            setContacts (contatos);
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
                <h1>Phone Directory</h1>
                <p>jnsnsjdjnsjdnsjndjnsdjnsjndsd bfbhdbfdbfdb sjnssndn ksnknskd</p>
                <Search captureWord={captureWord}/>
                <C.ContainerCard>
                    {termoBusca
                    ? contatosFiltrados.map(contact => (
                        <CardContact
                          key={contact.id}
                          id={contact.id}
                          nome={contact.nome}
                          email={contact.email}
                          telefone={contact.telefone}
                          foto={contact.foto}
                        />
                      ))
                    : contacts.map(contact => (
                        <CardContact
                          key={contact.id}
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