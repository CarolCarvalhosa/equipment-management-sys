import { GetMessagesFilter } from '../models/filters/GetMessagesFilter';
import { MessageRepository } from '../repositories/MessageRepository';

export class EquipmentService {
  private messageRepository: MessageRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
  }

  /**
   * Get equipments from messages.
   * @param filter all, active or not_reporting.
   * @returns messages filtered.
   */
  public async getEquipments(filter: GetMessagesFilter) {
    if (filter === 'active')
      return await this.messageRepository.getLatestMessagesFromLast30Minutes();
    else if (filter == 'not_reporting')
      return await this.messageRepository.getLatestMessagesTriggeredLongerThan30MinutesAgoWithMinutesDiff();
    else
      return await this.messageRepository.getAllMessages();
  }

  /**
   * Get equipment with status poweron and poweroff.
   * @returns total count of messages from equipments with poweron and poweroff tags.
   */
  public async getPoweredOnAndPowerOffEquipmentsCount() {
    return await this.messageRepository.getLatestMessagesWithPowerOnAndPowerOffTag();
  }
}
