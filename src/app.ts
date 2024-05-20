import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 29;

  res.send(a);
});

export default app;
