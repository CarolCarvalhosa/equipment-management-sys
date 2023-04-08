import { knex } from '../database/config';
import { Message, MessageTagCount, MessageWithDiff, RabbitMQMessage } from '../models/Message';
import crypto from 'node:crypto';

export class MessageRepository {
  /**
   * Get all messages from database.
   * @returns all messages.
   */
  public async getAllMessages(): Promise<Message[]> {
    return await knex('messages')
      .select('*');
  }

  /**
   * Get latest messages from active equipments.
   * @description Latest message from each equipment from the last 30 minutes.
   * 
   * SQL Generated: select * from messages group by IMEI having max(datetime(timestamp, 'localtime')) >= datetime('now', '-30 minutes', 'localtime');
   * @returns active equipments.
   */
  public async getLatestMessagesFromLast30Minutes(): Promise<Message[]> {
    return await knex('messages')
      .select('*')
      .groupBy('IMEI')
      .havingRaw('max(datetime(timestamp, \'localtime\')) >= datetime(\'now\', \'-30 minutes\', \'localtime\')');
  }

  /**
   * Get latest messages from idle equipments.
   * @description Latest message from each equipment triggered more than 30 minutes ago with timestamp diff in minutes.
   * 
   * SQL Generated: select *, round((julianday(datetime('now', 'localtime')) - julianday(datetime(timestamp, 'localtime'))) * (24 * 60)) as timestamp_minutes_diff from messages group by IMEI having max(datetime(timestamp, 'localtime')) < datetime('now', '-30 minutes', 'localtime');
   * @returns idle equipments.
   */
  public async getLatestMessagesTriggeredLongerThan30MinutesAgoWithMinutesDiff(): Promise<MessageWithDiff[]> {
    return await knex('messages')
      .select('*')
      .select(knex.raw('round((julianday(datetime(\'now\', \'localtime\')) - julianday(datetime(timestamp, \'localtime\'))) * (24 * 60)) as timestamp_minutes_diff'))
      .groupBy('IMEI')
      .havingRaw('max(datetime(timestamp, \'localtime\')) < datetime(\'now\', \'-30 minutes\', \'localtime\')');
  }

  /**
   * Get count of poweron and poweroff latest messages from equipments.
   * @description Count of poweron and poweroff latest messages.
   * 
   * SQL Generated: select tag, count(tag) as count from (select IMEI, tag, max(datetime(timestamp, 'localtime')) as timestamp from messages where tag != 'timebased' group by IMEI) as subQuery group by tag;
   * @returns poweron and poweroff messages count.
   */
  public async getLatestMessagesWithPowerOnAndPowerOffTag(): Promise<MessageTagCount[]> {
    const subQuery = knex('messages')
      .select('IMEI', 'tag', knex.raw('max(datetime(timestamp, \'localtime\')) as timestamp'))
      .whereNot('tag', 'timebased')
      .groupBy('IMEI', 'tag')
      .as('subQuery');

    return await knex(subQuery)
      .select('tag', knex.raw('count(tag) as count'))
      .groupBy('tag');
  }

  /**
   * Save message on database.
   * @param message input message.
   * @returns true, false.
   */
  public async saveMessage(message: RabbitMQMessage): Promise<boolean> {
    const newMessage = {
      id: crypto.randomUUID(),
      ...message
    };

    return await knex('messages').insert(newMessage);
  }
}
