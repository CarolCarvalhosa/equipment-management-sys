import { FastifyInstance } from 'fastify';
import { MessageService } from '../services/MessageService';

const messageService = new MessageService();

export const messagesRoutes = async (app: FastifyInstance) => {
  app.get('/', async function (req, res) {
    try {
      const response = await messageService.getAllMessages();
      res.send(response);
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  });
};
