import axios from 'axios';


type Props = {
  id: number
  nome: string
  email:string
  telefone: string
}

export const api =  {
    listar: async () => {
        try {
          const response = await axios.get('http://localhost:3001/contatos');
          return response.data;
        } catch (error) {
          console.log('Erro ao buscar contatos:', error);
        }
    },

    adicionar: async () => {
      try {
        const response = await axios.get('http://localhost:3001/contatos');
        return response.data;
      } catch (error) {
        console.log('Erro ao adicionar contatos:', error);
      }
    },

    delete: async (id:number) => {
        try {
            await axios.delete(`http://localhost:3001/contatos/${id}`);
          } catch (error) {
            console.log('Erro ao deletar contato:', error);
          }
    },

    editar: async (formData: Props) => {
      try {
          await axios.put(`http://localhost:3001/contatos/${formData.id}`,{
              nome: formData.nome,
              email: formData.email,
              telefone: formData.telefone
          });
        } catch (error) {
          console.log('Erro ao editar contato:', error);
        }

    }
}
