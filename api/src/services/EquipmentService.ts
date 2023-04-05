import { GetMessagesFilter } from '../models/filters/GetMessagesFilter';
import { MessageRepository } from '../repositories/MessageRepository';

export class EquipmentService {
  private messageRepository: MessageRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
  }

  /**
   * Get equipment messages.
   * @param filter all, active or idle
   * @returns messages filtered
   */
  public async getEquipmentMessages(filter: GetMessagesFilter) {
    console.log(filter);
    if (filter === 'active')
      return await this.messageRepository.getLatestMessagesFromLast30Minutes();
    else if (filter == 'idle')
      return await this.messageRepository.getLatestMessagesTriggeredLongerThan30MinutesAgoWithMinutesDiff();
    else
      return await this.messageRepository.getAllMessages();
  }
}
