import { ReceiverRepository } from '../repositories/ReceiverRepository'

export class ReceiverService {
  private receiverRepository

  constructor() {
    this.receiverRepository = new ReceiverRepository()
  }

  public getMessage(message: any) {
    console.log(message)
    // return this.receiverRepository.getMessage()
  }
}
