import axios from 'axios';

type Props = {
  id?: number
  nome: string
  email:string
  telefone: string
}

export const api =  {
    listar: async () => {
        try {
          const response = await axios.get('http://localhost:4000/contatos');
          return response.data;
        } catch (error) {
          console.log('Erro ao buscar contatos:', error);
        }
    },

    adicionar: async (data:Props) => {
      const response = await axios.post('http://localhost:4000/contatos', {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
      },);

      return response.data;
    },

    delete: async (id:number) => {
        try {
            await axios.delete(`http://localhost:4000/contatos/${id}`);
          } catch (error) {
            console.log('Erro ao deletar contato:', error);
          }
    },

    editar: async (formData: Props) => {
      try {
          await axios.put(`http://localhost:4000/contatos/${formData.id}`,{
              nome: formData.nome,
              email: formData.email,
              telefone: formData.telefone
          });
        } catch (error) {
          console.log('Erro ao editar contato:', error);
        }
    }
}
