import { EquipmentMessageDataSource } from '../datasources/EquipmentMessageDataSource';
import { Message } from '../models/Message';

export const useEquipments = () => {
  const getAllEquipmentMessages = async (): Promise<Message[] | undefined> => {
    try {
      const equipmentMessageDataSource = new EquipmentMessageDataSource();
      const response = await equipmentMessageDataSource.get();
      return response;
    } catch (error: unknown) {
      console.error(error);
    }
  };
    
  return {
    getAllEquipmentMessages
  };
};
