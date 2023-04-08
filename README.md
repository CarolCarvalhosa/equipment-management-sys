# Equipment Management System - Getting Started

This project aims to create a web app that lists equipments based on messages received from them. It uses [RabbitMQ](https://www.rabbitmq.com/) to handle the message queue. Folders description:

 - api/ : The API consumer service that receives process and stores the messages on SQLite;
 - message-app/ : The ReactJS app that shows the list of equipment based on the filter and also generates a graph with poweron and poweroff equipment tags;
 - send-message-service/ : A producer service to test sending messages to the API;

## Running locally

First of all you need to start RabbitMQ service. See [RabbitDocs](https://www.rabbitmq.com/download.html) for more information:

```bash
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.11-management
```

Run migrations and start the API:

```bash
cd api
yarn # install all app dependencies
yarn run-m # run migrations
yarn start
```

Start the ReactJS Front-end:

```bash
cd message-app
yarn # install all app dependencies
yarn start
```

Open [http://localhost:5173](http://localhost:5173) to view the front-end in the browser.

## Sending messages to API

Start the send-message-service:

```bash
cd send-message-service
yarn # install all app dependencies
yarn start
```

Use postman to POST more messages. Sample request:

```json
{
  "IMEI": "1231231213",
  "tag": "poweron",
  "value": "1",
  "timestamp": "2023-04-07T16:34:18-03:00"
}
```
