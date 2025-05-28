import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import { router } from '../interfaces/http/route';

dotenv.config();

const port = process.env.PORT || 3002;

const server = express();
const PORT = 3001;

server.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));  

server.use(cors());
server.use(express.json());

server.use(router);

server.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});