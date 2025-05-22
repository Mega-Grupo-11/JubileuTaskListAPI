import express from 'express';
import dotenv from 'dotenv';
import { router } from '../interfaces/http/route';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 3002;

const server = express();
const PORT = port;

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});
