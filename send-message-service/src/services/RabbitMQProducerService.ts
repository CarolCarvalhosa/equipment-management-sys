import amqp from 'amqplib';
import { Logger } from '../utils/logger';

const MQ_URL = 'amqp://localhost';
const EXCHANGE = 'orders';
const QUEUE = 'order.process';
const PREFETCH_COUNT = 2;

/**
 * Handles RabbitMQ configuration and startup
 */
export class RabbitMQProducerService {
  private channel: amqp.Channel;

  /**
   * Connect to RabbitMQ as a producer
   */
  public async connect() {
    try {
      const mqConnection = await amqp.connect(MQ_URL);
      this.channel = await mqConnection.createChannel();
      
      await this.channel.assertQueue(QUEUE, {
        durable: false,
      });
      
      await this.channel.assertExchange(EXCHANGE, 'direct', {
        durable: false
      });

      Logger.info(`AMQP - connection established at ${MQ_URL}`);
    }
    catch (ex) {
      Logger.error(`AMQP - ${ex}`);
      process.exit();
    }
  }

  /**
   * Send message to queue
   * @param {Object} message
   */
  public sendMessage = (message) => {
    this.channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(message)));
    Logger.info(`AMQP - Equipment with IMEI ${message.IMEI} sended`);
  };
}
