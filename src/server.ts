import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './errors/errorMiddelware';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes);
app.use(errorMiddleware);
app.listen(3005, () => console.log('Running on Port: 3005'));
