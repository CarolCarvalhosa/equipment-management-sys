import fastify from 'fastify';
import cors from '@fastify/cors';
import { equipmentRoutes } from './routes/equipment.routes';
import { RabbitMQConsumerService } from './services/RabbitMQConsumerService';

const mqService = new RabbitMQConsumerService();

mqService.connect();

const app = fastify();

app.register(cors, {
  origin: ['*'],
});

app.register(equipmentRoutes, { prefix: '/equipment' });

export { app };
