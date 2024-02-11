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
    },

    //ENDPOIN RELACIONADOS A LOGIN, AQUI VAMOS RETORNAR UM DADO FAKE POR ENQUANTO

    validateToken: async (token: string) => {
      return {
          contatos: { id: 3, nome: 'José', email: 'jose@gmail.com', telefone: '88992301470' }
      };
      /*
      const response = await api.post('/validate', { token });
      return response.data;
      */
    },

    signin: async (email: string, password: string) => {
      return {
          contatos: { id: 3, nome: 'José', email: 'jose@gmail.com', telefone: '88992301470' },
          token: '123456789'
      };

        /* Essa resposta precisa vir com um usuario e um token do backend!
        const response = await api.post('/signin', { email, password });
        return response.data;
        */
    },

    logout: async () => {
      return { status: true };
      //const response = await api.post('/logout');
     // return response.data;
    }
}
