import { FastifyInstance } from 'fastify'
import { SenderService } from '../services/SenderService'

const senderService = new SenderService()

export const senderRoutes = async (app: FastifyInstance) => {
  app.post('/send', async function (req, res) {
    try {
      const message = {
        content: 'test-message'
      }
      // await senderService.sendMessage()
      //console.log(req)
      //console.log(await (app as any).publishMessage)
      await (app as any).publishMessage(message); 
      res.send(message)
    } catch (error: any) {
      return res.status(400).send({ error: error.message })
    }
  })
}
