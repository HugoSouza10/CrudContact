import React, { useState } from 'react';
import { api } from '../../../api';
import { ContactType } from '../../../types';

import * as C from './style';


export const Edit = ({id, nome, email, telefone}:ContactType) => {

  const [FormData, setFormData] = useState({
    id: id,
    nome: nome,
    email: email,
    telefone: telefone,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleUpdate = () => { 
    api.editar(FormData);
  }

  return (
    <C.FormContainer>
      <h2>Editar informação</h2>
      <form onSubmit={handleUpdate}>
        <C.Input
          type="text"
          placeholder="Nome"
          name="nome"
          value={FormData.nome}
          onChange={handleChange}
        />
        <C.Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={FormData.email}
        />
        <C.Input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={FormData.telefone}
          onChange={handleChange}
        />
        <C.Button type="submit">Enviar</C.Button>
      </form>
    </C.FormContainer>
  );
};

