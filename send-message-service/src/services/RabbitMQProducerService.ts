import amqp from 'amqplib'

const MQ_URL = 'amqp://localhost'
const EXCHANGE = 'orders'
const QUEUE = 'order.process'
const PREFETCH_COUNT = 2

/**
 * Handles RabbitMQ configuration and startup
 */
export class RabbitMQProducerService {
  private channel: amqp.Channel

  /**
   * Connect to RabbitMQ as a producer
   */
  public async connect() {
    try {
      const mqConnection = await amqp.connect(MQ_URL);
      this.channel = await mqConnection.createChannel();

      await this.channel.assertQueue(QUEUE, {
        durable: false,
      })
      
      // await this.channel.assertExchange(EXCHANGE, 'fanout', {
      //     durable: false
      // });

      // logger.info(`AMQP - connection established at ${MQ_URL}`)
      
  }
  catch (ex) {
      // logger.log('fatal',`AMQP - ${ex}`);
      process.exit();
  }
  }

  /**
 * Publish message to queue
 * @param {Object} message
 */
public publishMessage = (message) => {
  const msg = 'Hello world'
  console.log(msg)
  this.channel.sendToQueue(QUEUE, Buffer.from(msg));
  //logger.info(`AMQP - order ${order._id} placed`);
}

/**
 * A middleware for injecting queue services into the request object.
 * @param {Object} req - request object.
 * @param {Object} res - response object.
 * @param {Function} next - next() function.
 */
public injectExchangeService = (req, res, next) => {
  // inject publishMessage in request object
  req.publishMessage = this.publishMessage;
  next();
}
}
