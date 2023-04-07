import moment from 'moment';
import crypto from 'node:crypto';
import { randomDate } from '../utils';

export const getTagRandomOption = () => {
  const tagOptions = ['poweron', 'poweroff', 'timebased'];
  return tagOptions[crypto.randomInt(3)];
};

export const getTimestampRandomOption = () => {
  const timestampOptions = [moment().format(), moment(randomDate(moment('2020-01-01'), moment('2023-04-04'))).format()];
  return timestampOptions[crypto.randomInt(2)];
};

export const getValueRandomOption = () => {
  const valueOptions = [`errorCode=MEMORY_FAILURE;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`, `errorCode=BAD_CONFIGURATION;timeSinceLastPowerOnMinutes=${crypto.randomInt(10000, 99999)}`];
  return valueOptions[crypto.randomInt(2)]; 
};
