import * as express from 'express';

const app = express();

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.get('*', (req, res) => {
  res.send('hello world');
});

const port = process.env.SERVER_PORT || 3001;
const server = app.listen(port, () => {
  server.keepAliveTimeout = 0;
  console.log(`Server listening on ${port}`);
});
