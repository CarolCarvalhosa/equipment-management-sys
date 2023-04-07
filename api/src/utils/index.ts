export const randomDate = (start, end) => {
  const diff = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const randomDays = Math.floor(Math.random() * diff);
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  const randomSeconds = Math.floor(Math.random() * 60);
  const date = new Date(start.getTime() + randomDays * (1000 * 60 * 60 * 24) + randomHours * (1000 * 60 * 60) + randomMinutes * (1000 * 60) + randomSeconds * 1000);
  return date;
};