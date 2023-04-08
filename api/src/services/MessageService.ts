import { RabbitMQMessage } from '../models/Message';
import { MessageRepository } from '../repositories/MessageRepository';

export class MessageService {
  private messageRepository: MessageRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
  }

  /**
   * Process and save message on database.
   * @param message input message.
   * @returns true or false.
   */
  public async processMessage(message: RabbitMQMessage) {
    return await this.messageRepository.saveMessage(message);
  }
}
