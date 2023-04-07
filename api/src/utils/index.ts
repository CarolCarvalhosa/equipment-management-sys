import moment from 'moment';

export const randomDate = (start, end) => {
  const diff = moment(end).diff(moment(start), 'days');
  const randomDays = Math.floor(Math.random() * diff);
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  const randomSeconds = Math.floor(Math.random() * 60);
  const date = moment(start).add(randomDays, 'days').add(randomHours, 'hours').add(randomMinutes, 'minutes').add(randomSeconds, 'seconds').toDate();
  return date;
};