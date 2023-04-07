import { FastifyInstance } from 'fastify';

export const senderRoutes = async (app: FastifyInstance) => {
  app.post('/send', async function (req, res) {
    try {
      await (app as any).sendMessage(req.body);
      res.send(true);
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  });
};
