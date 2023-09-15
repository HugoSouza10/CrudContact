import { google } from 'googleapis';

// Configure as suas credenciais
const API_KEY = 'AIzaSyDxN3wToZ63TNYzK301MgufuCLt_YQAMGw';

// Crie um cliente para acessar a API de Contatos do Google
const client = google.people({
  version: 'v1',
  auth: API_KEY,
});

// Função para obter os contatos
export async function getContacts() {
  try {
    const response = await client.people.connections.list({
      resourceName: 'people/me',
      pageSize: 10, // Defina o número de contatos que deseja obter
      personFields: 'names,emailAddresses,phoneNumbers', // Campos dos contatos que você deseja retornar
    });

    const contacts = response.data.connections;
    return contacts;
  } catch (error) {
    console.error('Erro ao obter contatos:', error);
    throw error;
  }
}
