import BaseAPI from '../api/BaseAPI';
import { GET_EQUIPMENTS } from '../constants/appRoutes';
import { Message } from '../models/Message';

export class EquipmentMessageDataSource {
  async get(filter: string) {
    return await new BaseAPI().fetch(`${GET_EQUIPMENTS}?filter=${filter}`) as Message[];
  }
}
