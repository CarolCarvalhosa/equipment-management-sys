import { FastifyInstance } from 'fastify';
import { GetMessagesFilter } from '../models/filters/GetMessagesFilter';
import { GetMessagesQueryParams } from '../models/params/GetMessagesQueryParams';
import { EquipmentService } from '../services/EquipmentService';

const equipmentService = new EquipmentService();

export const equipmentRoutes = async (app: FastifyInstance) => {
  app.get('/', async function (req, res) {
    try {
      const params = req.query as GetMessagesQueryParams;
      const response = await equipmentService.getEquipments(params.filter as GetMessagesFilter);
      res.send(response);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  });

  app.get('/poweron', async function (req, res) {
    try {
      const response = await equipmentService.getPoweredOnEquipments();
      res.send(response);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  });

  app.get('/poweroff', async function (req, res) {
    try {
      const response = await equipmentService.getPoweredOffEquipments();
      res.send(response);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  });
};
