import { knex } from '../database/config';
import { Message } from '../models/Message';
import crypto from 'node:crypto';

export class MessageRepository {
  public async getAllMessages() {
    const transaction = await knex('messages').select('*');
    console.log(transaction);
    return transaction;
  }

  public async saveMessage(message: Message) {
    const newMessage = {
      id: crypto.randomUUID(),
      ...message
    };
    const transaction = await knex('messages').insert(newMessage);
    console.log(transaction);
  }
}
