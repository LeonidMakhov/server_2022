import { nanoid } from 'nanoid';
import { a, b } from '../info/info';

function apiNotFound(req, res) {
  res.json('API not found' + nanoid() + 'hi' + a + b);
}

export default function errorHandler(app) {
  app.use(apiNotFound);
}
