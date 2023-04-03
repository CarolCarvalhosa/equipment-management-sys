import BaseAPI from '../api/BaseAPI';
import { GET_ALL_MESSAGES } from '../constants/appRoutes';
import { Message } from '../models/Message';

export class EquipmentMessageDataSource {
  async get() {
    return await new BaseAPI().fetch(GET_ALL_MESSAGES) as Message[];
  }
}
