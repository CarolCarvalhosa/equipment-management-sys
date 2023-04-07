import crypto from 'node:crypto';
import { randomDate } from '../utils';
import { knex } from './config';

export const getTagRandomOption = () => {
  const tagOptions = ['poweron', 'poweroff', 'timebased'];
  return tagOptions[crypto.randomInt(2)];
};

export const getTimestampRandomOption = () => {
  const timestampOptions = [knex.fn.now(), knex.raw(`select datetime('${randomDate(new Date('2020-01-01'), new Date('2023-04-04')).toISOString()}', 'localtime')`)];
  return timestampOptions[crypto.randomInt(1)]; 
};

export const getValueRandomOption = () => {
  const valueOptions = [`errorCode=MEMORY_FAILURE;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`, `errorCode=BAD_CONFIGURATION;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`];
  return valueOptions[crypto.randomInt(1)]; 
};
