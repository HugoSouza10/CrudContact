import React, { useState } from 'react';
import { api } from '../../../api';
import * as C from './style';
import { ContactType } from '../../../types';


export const Add = () => {
  const [formData, setFormData] = useState<ContactType>(Object);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    // Atualize o estado do formData com os novos valores
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdd =  () => {
    api.adicionar(formData);
  }

  return (
    <C.FormContainer>
      <h2>Adicionar usuário</h2>
      <form onSubmit={handleAdd}>
        <C.Input
          type="text"
          placeholder="Nome"
          name="nome"
          onChange={handleChange}
          value={formData.nome}
        />
        <C.Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <C.Input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          onChange={handleChange}
          value={formData.telefone}
        />
        <C.Button type="submit">Adicionar</C.Button>
      </form>
    </C.FormContainer>
  );
};

