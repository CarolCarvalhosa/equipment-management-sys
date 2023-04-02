import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { senderRoutes } from './routes/sender.routes';
import { RabbitMQProducerService } from './services/RabbitMQProducerService';
import { addMiddlewares } from './plugins/middlewares';

const mqService = new RabbitMQProducerService();
mqService.connect();

const app = fastify();

addMiddlewares(app, mqService);

app.register(cors, {
  origin: ['*'],
});

app.register(senderRoutes);

export { app };
