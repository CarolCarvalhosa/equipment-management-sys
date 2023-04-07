import { Knex } from 'knex';
import crypto from 'node:crypto';
import { getTagRandomOption, getTimestampRandomOption, getValueRandomOption } from '../helper';

export async function up(knex: Knex): Promise<void> {
  for (let i = 0; i < 100; i++) {
    await knex('messages')
      .insert({
        id: crypto.randomUUID(),
        IMEI: crypto.randomInt(1000000000, 5000000000),
        tag: getTagRandomOption(),
        value: 1,
        timestamp: getTimestampRandomOption()
      });
  }

  for (let i = 0; i < 100; i++) {
    await knex('messages')
      .insert({
        id: crypto.randomUUID(),
        IMEI: crypto.randomInt(6000000000, 9000000000),
        tag: 'timebased',
        value: getValueRandomOption(),
        timestamp: getTimestampRandomOption()
      });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex('messages').del();
}
