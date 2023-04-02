import fastify from 'fastify';
import cors from '@fastify/cors';
import { messagesRoutes } from './routes/messages.routes';
import { RabbitMQConsumerService } from './services/RabbitMQConsumerService';

const mqService = new RabbitMQConsumerService();

mqService.connect();

const app = fastify();

app.register(cors, {
  origin: ['*'],
});

app.register(messagesRoutes, { prefix: '/messages' });

export { app };
