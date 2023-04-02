import fastify from 'fastify';
import cors from '@fastify/cors';
import { receiverRoutes } from './routes/receiver.routes';
import { RabbitMQConsumerService } from './services/RabbitMQConsumerService';
// import middlewares from '@fastify/middie'

const mqService = new RabbitMQConsumerService();

mqService.connect();

const app = fastify();

app.register(cors, {
  origin: ['*'],
});

app.register(receiverRoutes);
// app.register(middlewares)

export { app };
