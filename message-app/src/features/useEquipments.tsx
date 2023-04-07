import { EquipmentMessageDataSource } from '../datasources/EquipmentMessageDataSource';
import { MessagesFilter } from '../models/filters/MessagesFilter';
import { Message } from '../models/Message';

export const useEquipments = () => {
  const getAllEquipments = async (filter: MessagesFilter): Promise<Message[] | undefined> => {
    try {
      const equipmentMessageDataSource = new EquipmentMessageDataSource();
      const response = await equipmentMessageDataSource.get(filter);
      return response;
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const getAllPoweredOnEquipments = async (): Promise<Message[] | undefined> => {
    try {
      const equipmentMessageDataSource = new EquipmentMessageDataSource();
      const response = await equipmentMessageDataSource.getPoweredOn();
      return response;
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const getAllPoweredOffEquipments = async (): Promise<Message[] | undefined> => {
    try {
      const equipmentMessageDataSource = new EquipmentMessageDataSource();
      const response = await equipmentMessageDataSource.getPoweredOff();
      return response;
    } catch (error: unknown) {
      console.error(error);
    }
  };
    
  return {
    getAllEquipments,
    getAllPoweredOnEquipments,
    getAllPoweredOffEquipments
  };
};
