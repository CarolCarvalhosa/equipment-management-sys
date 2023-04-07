import { knex } from '../database/config';
import { Message } from '../models/Message';
import crypto from 'node:crypto';

export class MessageRepository {
  /**
   * Get all messages from database.
   * @returns all messages
   */
  public async getAllMessages() {
    return await knex('messages')
      .select('*');
  }

  /**
   * Get latest messages from active equipments.
   * @description Latest equipment message from the last 30 minutes.
   * 
   * SQL Generated: select * from messages group by IMEI having max(timestamp) >= datetime('now', '-30 minutes', 'localtime');
   * @returns latest active equipments messages
   */
  public async getLatestMessagesFromLast30Minutes() {
    return await knex('messages')
      .select('*')
      .groupBy('IMEI')
      .havingRaw('max(timestamp) >= datetime(\'now\', \'-30 minutes\', \'localtime\')');
  }

  /**
   * Get latest message from idle equipments.
   * @description Latest equipment message triggered more than 30 minutes ago with timestamp diff in minutes.
   * 
   * SQL Generated: select *, round((julianday(datetime('now', 'localtime')) - julianday(timestamp)) * (24 * 60)) as timestamp_minutes_diff from messages group by IMEI having max(timestamp) < datetime('now', '-30 minutes', 'localtime');
   * @returns latest idle equipments messages
   */
  public async getLatestMessagesTriggeredLongerThan30MinutesAgoWithMinutesDiff() {
    return await knex('messages')
      .select('*')
      .select(knex.raw('round((julianday(datetime(\'now\', \'localtime\')) - julianday(timestamp)) * (24 * 60)) as timestamp_minutes_diff'))
      .groupBy('IMEI')
      .havingRaw('max(timestamp) < datetime(\'now\', \'-30 minutes\', \'localtime\')');
  }

  /**
   * Get count active and inactive latest messages from equipments.
   * @description Count of poweron and poweroff latest messages.
   * 
   * SQL Generated: select tag, count(tag) as count from (select IMEI, tag, max(timestamp) as timestamp from messages where tag != 'timebased' group by IMEI) as subQuery group by tag;
   * @returns poweron and poweroff messages count
   */
  public async getLatestMessagesWithPowerOnAndPowerOffTag() {
    const subQuery = knex('messages')
      .select('IMEI', 'tag', knex.raw('max(timestamp) as timestamp'))
      .whereNot('tag', 'timebased')
      .groupBy('IMEI', 'tag')
      .as('subQuery');

    return await knex(subQuery)
      .select('tag', knex.raw('count(tag) as count'))
      .groupBy('tag');
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
