import { Message } from '../models/Message';
import { MessageRepository } from '../repositories/MessageRepository';

export class MessageService {
  private messageRepository: MessageRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
  }

  public async getAllMessages() {
    return await this.messageRepository.getAllMessages();
  }

  public async processMessage(message: Message) {
    return await this.messageRepository.saveMessage(message);
  }
}
