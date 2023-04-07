import { EquipmentMessageDataSource } from '../datasources/EquipmentMessageDataSource';
import { EquipmentTagCount } from '../models/EquipmentTagCount';
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

  const getPoweredOnAndPowerOffEquipmentsCount = async (): Promise<EquipmentTagCount[] | undefined> => {
    try {
      const equipmentMessageDataSource = new EquipmentMessageDataSource();
      const response = await equipmentMessageDataSource.getPoweredOnAndPowerOff();
      return response;
    } catch (error: unknown) {
      console.error(error);
    }
  };
    
  return {
    getAllEquipments,
    getPoweredOnAndPowerOffEquipmentsCount,
  };
};
