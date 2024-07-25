import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes
app.use('/api/v1', routes);

app.use(globalErrorHandler);

// //testing
// app.get('/', (req: Request, res: Response) => {
//   res.send('Working successfully');
// });

export default app;
