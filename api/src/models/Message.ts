export type MessageTag = 'poweron' | 'poweroff' | 'timebased';

export type RabbitMQMessage = {
  IMEI: string; // identifier
  tag: MessageTag;
  value: string;
  timestamp: Date;
}

export type Message = {
  id: string;
  IMEI: string;
  tag: MessageTag;
  value: string;
  timestamp: Date;
}

export type MessageWithDiff = {
  id: string;
  IMEI: string;
  tag: MessageTag;
  value: string;
  timestamp: Date;
  timestamp_minutes_diff: number;
}

export type MessageTagCount = {
  tag: MessageTag;
  count: number;
}