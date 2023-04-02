export type Message = {
  IMEI: string; // identifier
  tag: 'poweron' | 'poweroff' | 'timebased';
  value: string;
  timestamp: Date;
}
