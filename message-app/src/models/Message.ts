export type Message = {
    id: string;
    IMEI: string;
    tag: 'poweron' | 'poweroff' | 'timebased';
    value: string;
    timestamp: Date;
  }
  