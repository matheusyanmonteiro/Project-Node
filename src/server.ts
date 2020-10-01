import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hellow world' });
});

app.listen(3333, () => {
  console.log(' Server Started on Port 3333!');
});