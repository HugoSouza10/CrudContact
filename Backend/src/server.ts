import express, { Request, Response, ErrorRequestHandler } from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const server = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Substitua pelo seu domínio React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Se você estiver usando cookies ou cabeçalhos de autenticação
};

server.use(cors(corsOptions));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use(express.json()); // Adicione esta linha para lidar com solicitações JSON

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    console.error(err); // Use console.error para registrar erros
    res.json({ error: 'Ocorreu algum erro.' });
}
server.use(errorHandler);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
