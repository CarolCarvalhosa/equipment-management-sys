import { MessageRepository } from '../repositories/MessageRepository';

export class MessageService {
  private messageRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
  }

  public processMessage(message: any) {
    console.log(message);
    return this.messageRepository.saveMessage(message);
  }
}
