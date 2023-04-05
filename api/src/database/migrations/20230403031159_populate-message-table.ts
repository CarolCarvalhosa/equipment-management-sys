import { Knex } from 'knex';
import crypto from 'node:crypto';

export async function up(knex: Knex): Promise<void> {
  const tagOptions = ['poweron', 'poweroff', 'timebased'];
  const timestampOptions = [knex.fn.now(), knex.raw('SELECT DATE(\'now\',\'-1 day\')')];
  const valueOptions = [`errorCode=MEMORY_FAILURE;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`, `errorCode=BAD_CONFIGURATION;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`];
  for (let i = 0; i < 100; i++) {
    await knex('messages').insert({
      id: crypto.randomUUID(),
      IMEI: crypto.randomInt(1000000000, 5000000000),
      tag: tagOptions[crypto.randomInt(2)],
      value: 1,
      timestamp: timestampOptions[crypto.randomInt(1)]
    });
  }

  for (let i = 0; i < 100; i++) {
    await knex('messages').insert({
      id: crypto.randomUUID(),
      IMEI: crypto.randomInt(6000000000, 9000000000),
      tag: tagOptions[2],
      value: valueOptions[crypto.randomInt(1)],
      timestamp: timestampOptions[crypto.randomInt(1)]
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex('messages').del();
}
