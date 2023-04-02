import { FastifyInstance } from 'fastify';

export const senderRoutes = async (app: FastifyInstance) => {
  app.post('/send', async function (req, res) {
    try {
      const message = {
        IMEI: '1231231213',
        tag: 'poweron',
        value: 1,
        timestamp: new Date()
      };

      await (app as any).sendMessage(message);
      res.send(true);
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  });
};
