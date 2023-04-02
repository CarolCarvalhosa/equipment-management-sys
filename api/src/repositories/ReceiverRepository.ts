import { Message } from '../models/Message'

export class ReceiverRepository {
  public getMessage(): Message {
    return {
      tag: '',
      IMEI: '',
      value: '',
      timestamp: new Date(),
    }
  }
}
