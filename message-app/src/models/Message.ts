export type MessageTag = 'poweron' | 'poweroff' | 'timebased';

export type Message = {
    id: string;
    IMEI: string;
    tag: MessageTag;
    value: string;
    timestamp: Date;
}
