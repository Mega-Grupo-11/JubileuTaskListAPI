import express from 'express';
import dotenv from 'dotenv';
import { router } from '../interfaces/http/route';

dotenv.config();

const server = express();
const PORT = 5050;

server.use(express.json());
server.use(router);

server.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});
