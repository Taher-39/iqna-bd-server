import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
// import { DBConnect } from './server';
// import config from './app/config/index';
// const port = config.PORT || 8080;
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

// database connect
// DBConnect();

//routing
app.use('/api/v1/students', StudentRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('App Running.');
});

// app.listen(port, () => {
//   console.log(`App listen at http://localhost:${port}`);
// });
export default app;
