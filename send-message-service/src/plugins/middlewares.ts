import { FastifyInstance } from "fastify";
import { RabbitMQProducerService } from "../services/RabbitMQProducerService";

export const addMiddlewares = async (fastify: FastifyInstance, mqService: RabbitMQProducerService) => {
    fastify.decorate('publishMessage', (payload) => {
        return mqService.publishMessage(payload)
    })
}
