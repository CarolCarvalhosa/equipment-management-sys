import { knex } from '../database/config';
import { Message } from '../models/Message';
import crypto from 'node:crypto';

export class MessageRepository {
  /**
   * Get all messages from database.
   * @returns all messages
   */
  public async getAllMessages() {
    return await knex('messages').select('*');
  }

  /**
   * Get latest messages from active equipments.
   * @description Latest equipment message from the last 30 minutes.
   * @returns latest active equipments messages
   */
  public async getLatestMessagesFromLast30Minutes() {
    return await knex('messages')
      .select('*')
      .groupBy('IMEI')
      .having(knex.raw('max(\'timestamp\')'), '>=', knex.raw('datetime(\'now\', \'-30 minutes\', \'localtime\')'));
  }

  /**
   * Get latest message from idle equipments.
   * @description Latest equipment message triggered more than 30 minutes ago with timestamp diff in minutes.
   * @returns latest idle equipments messages
   */
  public async getLatestMessagesTriggeredLongerThan30MinutesAgoWithMinutesDiff() {
    return await knex('messages')
      .select(`*, ${knex.raw('round((julianday(datetime(\'now\', \'localtime\')) - julianday(timestamp)) * (24 * 60)) as timestamp_minutes_diff')}`)
      .groupBy('IMEI')
      .having(knex.raw('max(\'timestamp\')'), '<', knex.raw('datetime(\'now\', \'-30 minutes\', \'localtime\')'));
  }

  /**
   * Get latest poweron messages from equipments.
   * @description Latest equipment message with poweron tag.
   * @returns poweron messages
   */
  public async getLatestMessagesWithPowerOnTag() {
    return await knex('messages')
      .select(`id, IMEI, tag, value, ${knex.raw('max(timestamp)')}`)
      .where('tag', 'poweron')
      .groupBy('IMEI');
  }

  /**
   * Get latest poweroff messages from equipments.
   * @description Latest equipment message with poweroff tag.
   * @returns poweroff messages
   */
  public async getLatestMessagesWithPowerOffTag() {
    return await knex('messages')
      .select(`id, IMEI, tag, value, ${knex.raw('max(timestamp)')}`)
      .where('tag', 'poweroff')
      .groupBy('IMEI');
  }

  /**
   * Save message on database.
   * @param message input message
   * @returns ok, nok
   */
  public async saveMessage(message: Message) {
    const newMessage = {
      id: crypto.randomUUID(),
      ...message
    };
    return await knex('messages').insert(newMessage);
  }
}
