import amqp from 'amqplib'
import { ReceiverService } from './ReceiverService'

const MQ_URL = 'amqp://localhost'
const EXCHANGE = 'orders'
const PREFETCH_COUNT = 1000
const QUEUE = 'order.process'

/**
 * Handles RabbitMQ configuration and startup
 */
export class RabbitMQConsumerService {
  private channel: amqp.Channel
  private receiverService: ReceiverService

  constructor() {
    this.receiverService = new ReceiverService()
  }

  /**
   * Connect to RabbitMQ as a consumer
   */
  public async connect() {
    try {
      const mqConnection = await amqp.connect(MQ_URL)

      this.channel = await mqConnection.createChannel()

      // await this.channel.assertExchange(EXCHANGE, 'fanout', {
      //   durable: false,
      // })

      // Ensure that the queue exists or create one if it doesn't
      await this.channel.assertQueue(QUEUE, { durable: false })
      // await this.channel.bindQueue(QUEUE, EXCHANGE, '')

      // Only process <PREFETCH_COUNT> orders at a time
      this.channel.prefetch(PREFETCH_COUNT)
      // logger.info(
      //   `AMQP - connection established at ${MQ_URL} with prefetch count ${PREFETCH_COUNT} and delivery time ${ORDER_DELIVERY_TIME}ms`,
      // )

      this.channel.consume(QUEUE, (order) => {
        console.log(order)
        if (order) {
          console.log(' [x] Received %s', order.content.toString())
        }
      })

      // this.channel.consume(QUEUE, (order) => {
      //   console.log(order)
      //   if (order) {
      //     // const message = JSON.parse(order?.content.toString())
      //     // this.receiverService.getMessage(message)
      //   }
      //   // processOrder(order, this.channel)
      // })
    } catch (ex) {
      // logger.log('fatal', `AMQP - ${ex}`)
      process.exit()
    }
  }
}
