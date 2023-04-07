import BaseAPI from '../api/BaseAPI';
import { GET_EQUIPMENTS_API_ROUTE, GET_POWERON_EQUIPMENTS_API_ROUTE, GET_POWEROFF_EQUIPMENTS_API_ROUTE } from '../constants/appRoutes';
import { MessagesFilter } from '../models/filters/MessagesFilter';
import { Message } from '../models/Message';

export class EquipmentMessageDataSource {
  async get(filter: MessagesFilter) {
    return await new BaseAPI().fetch(`${GET_EQUIPMENTS_API_ROUTE}?filter=${filter}`) as Message[];
  }

  async getPoweredOn() {
    return await new BaseAPI().fetch(GET_POWERON_EQUIPMENTS_API_ROUTE) as Message[];
  }

  async getPoweredOff() {
    return await new BaseAPI().fetch(GET_POWEROFF_EQUIPMENTS_API_ROUTE) as Message[];
  }
}
