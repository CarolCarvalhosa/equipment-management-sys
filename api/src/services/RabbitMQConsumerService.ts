import amqp from 'amqplib';
import { MessageService } from './MessageService';
import { Logger } from '../utils/logger';
import { EXCHANGE, MQ_URL, PREFETCH_COUNT, QUEUE } from '../constants/appConstants';

/**
 * Handles RabbitMQ configuration and startup
 */
export class RabbitMQConsumerService {
  private channel: amqp.Channel;
  private messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  /**
   * Connect to RabbitMQ as a consumer
   */
  public async connect() {
    try {
      const mqConnection = await amqp.connect(MQ_URL);

      this.channel = await mqConnection.createChannel();

      await this.channel.assertExchange(EXCHANGE, 'direct', {
        durable: false,
      });

      // Ensure that the queue exists or create one if it doesn't
      await this.channel.assertQueue(QUEUE, { durable: false });

      // Only process <PREFETCH_COUNT> orders at a time
      this.channel.prefetch(PREFETCH_COUNT);
      Logger.info(
        `AMQP - connection established at ${MQ_URL} with prefetch count ${PREFETCH_COUNT} and delivery time ${new Date()}ms`,
      );

      this.channel.consume(QUEUE, (message) => {
        console.log(message);
        if (message) {
          this.messageService.processMessage(
            JSON.parse(message.content.toString()),
          );
          Logger.info(` [x] Received ${message.content.toString()}`);
        }
      });
    } catch (ex) {
      Logger.error(`AMQP - ${ex}`);
      process.exit();
    }
  }
}
