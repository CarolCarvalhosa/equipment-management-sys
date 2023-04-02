import { FastifyInstance } from 'fastify';
// import { ReceiverService } from '../services/ReceiverService'

// const receiverService = new ReceiverService()

export const receiverRoutes = async (app: FastifyInstance) => {
  app.get('/receive', async function (req, res) {
    try {
      // const response = await receiverService.getMessage()
      // res.send(response)
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  });
};
