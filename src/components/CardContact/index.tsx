
import * as C from './style';
import { ContactType } from '../../types';
import { api } from '../../api';
import { useState } from 'react';
import React from 'react';
import Modal from '../Modal';
import {Ver} from '../Modal/Ver';
import {Edit} from '../Modal/Edit';
import {Add} from '../Modal/Add';


export const CardContact = ({ id, nome, email, telefone }:ContactType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentType, setContentType] = React.useState<'edit' | 'ver' | 'add'>();


  const handleOpenModal = (type: 'edit' | 'ver' | 'add') => {
    setContentType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


    const handleDelete = () => {
       api.delete(id);
       alert('Opa, deletando usuário'+id);
    }

    return (
        <C.Container>
            <C.Avatar>
                <img src="https://source.unsplash.com/random" alt="" />
            </C.Avatar>
            <table border={0}>
                <tr>
                    <td>Nome:</td>
                    <td>{nome}</td>
                </tr>
                <tr>
                    <td>Mobile:</td>
                    <td>{telefone}</td>
                </tr>
                <tr>
                    <td>E-mail:</td>
                    <td>{email}</td>
                </tr>
            </table>
            <C.ContainerAction>
                <C.ButtonAction onClick={() => handleOpenModal("ver")} bg = "#FFC107">
                  Ver
                </C.ButtonAction>
                <C.ButtonAction onClick={() => handleOpenModal("edit")} bg = "#0767c6">
                  Edit
                </C.ButtonAction>
                <C.ButtonAction onClick={handleDelete} bg = "#ff0057">
                  Delete
                </C.ButtonAction>
                <C.ButtonAction onClick={()=>handleOpenModal("add")} bg = "#FFC107">
                  Add
                </C.ButtonAction>
            </C.ContainerAction>

            {/* Este é um comentário em JSX 
            {contentType === 'edit' ? (
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
               <Edit id={id} nome={nome} email={email} telefone={telefone}/>
              </Modal>
          
            ) : (
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Ver conteúdo</h2>
                <Ver id={id} nome={nome} email={email} telefone={telefone}/>
              </Modal>
            )}

            */}

          {contentType === 'edit' ? (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <Edit id={id} nome={nome} email={email} telefone={telefone}/>
            </Modal>
          ) : contentType === 'ver' ? (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2>Ver conteúdo</h2>
              <Ver id={id} nome={nome} email={email} telefone={telefone}/>
            </Modal>
          ) : contentType === 'add' ? (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <Add></Add>
            </Modal>
          ) : null}
        </C.Container>
    )
}

