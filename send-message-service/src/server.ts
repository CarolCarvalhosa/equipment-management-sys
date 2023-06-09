import { app } from './app';

app.listen({ port: 5002 }).then(() => {
  const serverInfo = app.addresses()[0];

  if (serverInfo) {
    const port = serverInfo.port;
    console.log(`Listening at http://localhost:${port}!`);
  }
});
