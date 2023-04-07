import moment from 'moment';
import crypto from 'node:crypto';
import { randomDate } from '../utils';
import { knex } from './config';

export const getTagRandomOption = () => {
  const tagOptions = ['poweron', 'poweroff', 'timebased'];
  return tagOptions[crypto.randomInt(3)];
};

export const getTimestampRandomOption = () => {
  //console.log(randomDate(new Date('2020-01-01'), new Date('2023-04-04')).toISOString());
  const timestampOptions = [knex.fn.now(), moment(randomDate(moment('2020-01-01'), moment('2023-04-04'))).format('YYYY-MM-DD h:mm:ss')];
  return timestampOptions[crypto.randomInt(2)];
};

export const getValueRandomOption = () => {
  const valueOptions = [`errorCode=MEMORY_FAILURE;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`, `errorCode=BAD_CONFIGURATION;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`];
  return valueOptions[crypto.randomInt(2)]; 
};
