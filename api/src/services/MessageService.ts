import { Message } from '../models/Message';
import { MessageRepository } from '../repositories/MessageRepository';

export class MessageService {
  private messageRepository: MessageRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
  }

  /**
   * Process and save message on database.
   * @param message input message
   * @returns ok, nok
   */
  public async processMessage(message: Message) {
    return await this.messageRepository.saveMessage(message);
  }
}
