import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/global-error-handling';

const app: Application = express();

//parsers
app.use(express.json());
app.use(
  cors({
    origin: 'https://computer-store-client-hcki.vercel.app',
    // origin: 'http://localhost:5173',
    credentials: true,
  })
);

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  res.send('App is running okay');
};

app.get('/', test);

app.use(globalErrorHandler);

export default app;
