import { FastifyInstance } from 'fastify';
import { RabbitMQProducerService } from '../services/RabbitMQProducerService';

export const addMiddlewares = async (fastify: FastifyInstance, mqService: RabbitMQProducerService) => {
  fastify.decorate('sendMessage', (payload) => {
    return mqService.sendMessage(payload);
  });
};
